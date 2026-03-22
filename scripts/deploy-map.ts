/**
 * Deploy a map project to the production API.
 * Usage: tsx scripts/deploy-map.ts maps/brc
 *
 * Environment:
 *   MAPSTUDIO_API_KEY  — Bearer token for the deploy API
 *   MAPSTUDIO_API_URL  — Base URL (e.g., https://kahal.example.com)
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { execSync } from 'node:child_process';
import { load as yamlLoad } from 'js-yaml';
import {
  MinimalMapYamlSchema,
  MinimalLayerYamlSchema,
  resolveLayerConfig,
  resolveMapConfig,
  resolveMetadata,
  extractI18nFields,
} from '@kahal/shared';
import type { FeatureCollection } from 'geojson';

// ── Config ──────────────────────────────────────────────────
const mapDir = resolve(process.argv[2]);
const apiKey = process.env.MAPSTUDIO_API_KEY;
const apiUrl = process.env.MAPSTUDIO_API_URL;

if (!mapDir || !apiKey || !apiUrl) {
  console.error('Usage: MAPSTUDIO_API_KEY=... MAPSTUDIO_API_URL=... tsx scripts/deploy-map.ts <map-dir>');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${apiKey}`,
};

// ── Helpers ─────────────────────────────────────────────────

async function post(endpoint: string, body: unknown): Promise<{ ok: boolean; status: number; data: any }> {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`API error (${res.status}): ${data.message ?? data.error ?? res.statusText}`);
  }
  return { ok: true, status: res.status, data };
}

async function uploadThumbnail(slug: string, filePath: string): Promise<string | undefined> {
  const buffer = await readFile(filePath);
  const ext = filePath.split('.').pop() ?? 'png';
  const mimeTypes: Record<string, string> = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };

  const formData = new FormData();
  formData.append('file', new Blob([new Uint8Array(buffer)], { type: mimeTypes[ext] ?? 'image/png' }), `thumbnail.${ext}`);
  formData.append('slug', slug);

  const res = await fetch(`${apiUrl}/api/cli/deploy/thumbnail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: formData,
  });
  if (!res.ok) {
    console.warn(`  Thumbnail upload failed (${res.status})`);
    return undefined;
  }
  const data = await res.json();
  return data.mediaId;
}

function mapLayerType(type: string): string {
  const mapping: Record<string, string> = {
    point: 'POINTS', polygon: 'POLYGONS', points: 'POINTS',
    polygons: 'POLYGONS', polylines: 'POLYLINES',
  };
  return mapping[type] ?? 'POINTS';
}

function getGitSha(): string | undefined {
  try {
    return execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
  } catch {
    return undefined;
  }
}

async function readI18nMarkdownFiles(dir: string, baseName: string): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  let files: string[];
  try { files = await readdir(dir); } catch { return result; }
  const pattern = new RegExp(`^${baseName}_([a-z]{2,3})\\.md$`);
  for (const file of files) {
    const match = file.match(pattern);
    if (match) {
      result[match[1]] = await readFile(resolve(dir, file), 'utf-8');
    }
  }
  return result;
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  console.log(`Deploying: ${mapDir}`);

  // 1. Read & validate map.yaml
  const rawYaml = yamlLoad(await readFile(join(mapDir, 'map.yaml'), 'utf-8')) as Record<string, unknown>;
  const mapYaml = MinimalMapYamlSchema.parse(rawYaml);
  const slug = mapYaml.slug;
  const layerSlugs = mapYaml.layers;
  const defaultPalette = mapYaml.defaults?.palette ?? 'Vintage';
  const gitSha = getGitSha();

  console.log(`  Map: ${slug} (${layerSlugs.length} layers)`);

  // 2. Deploy each layer
  const resolvedLayers = [];
  const layerGeoJsons: Record<string, FeatureCollection> = {};

  for (const layerSlug of layerSlugs) {
    const geoJsonContent = await readFile(join(mapDir, 'layers', `${layerSlug}.geojson`), 'utf-8');
    const geoJsonData: FeatureCollection = JSON.parse(geoJsonContent);
    layerGeoJsons[layerSlug] = geoJsonData;

    const minimalLayer = MinimalLayerYamlSchema.parse(
      yamlLoad(await readFile(join(mapDir, 'layers', `${layerSlug}.yaml`), 'utf-8')),
    );
    const resolved = resolveLayerConfig(layerSlug, minimalLayer, geoJsonData, defaultPalette);
    resolvedLayers.push(resolved);

    // Read optional data CSV
    let dataCsvContent: string | undefined;
    const csvPath = join(mapDir, 'layers', `${layerSlug}_data.csv`);
    if (existsSync(csvPath)) {
      dataCsvContent = await readFile(csvPath, 'utf-8');
    }

    const layerPayload = {
      slug: layerSlug,
      name: layerSlug,
      description: minimalLayer.description ?? '',
      type: mapLayerType(resolved.type),
      status: 'draft',
      geoJsonData,
      style: resolved.style,
      dataCsvContent,
    };

    const result = await post('/api/cli/deploy/layer', layerPayload);
    console.log(`  ✓ Layer "${layerSlug}" ${result.data.action}`);
  }

  // 3. i18n: extract from YAML + markdown files
  const titleI18n = extractI18nFields(rawYaml, 'title');
  const descriptionFromYaml = extractI18nFields(rawYaml, 'description');
  const descriptionFromFiles = await readI18nMarkdownFiles(mapDir, 'description');
  const codebookFromFiles = await readI18nMarkdownFiles(mapDir, 'codebook');
  const descriptionI18n = { ...descriptionFromYaml, ...descriptionFromFiles };
  const codebookTextI18n = Object.keys(codebookFromFiles).length > 0 ? codebookFromFiles : undefined;

  // 4. Upload thumbnail if present
  let thumbnailId: string | undefined;
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const thumbPath = join(mapDir, `thumbnail.${ext}`);
    if (existsSync(thumbPath)) {
      thumbnailId = await uploadThumbnail(slug, thumbPath);
      if (thumbnailId) console.log('  ✓ Thumbnail uploaded');
      break;
    }
  }

  // 5. Deploy map
  const compiledConfig = resolveMapConfig(mapYaml, resolvedLayers, layerGeoJsons);
  const metadata = resolveMetadata(mapYaml, rawYaml);

  const mapPayload = {
    slug,
    title: titleI18n.he || mapYaml.title,
    description: descriptionI18n.he || (mapYaml.description ?? ''),
    status: 'draft',
    config: compiledConfig,
    metadata,
    layerSlugs,
    gitSha,
    cliVersion: 'ci-1.0.0',
    titleI18n,
    descriptionI18n,
    codebookTextI18n,
    thumbnailId,
  };

  const mapResult = await post('/api/cli/deploy/map', mapPayload);
  console.log(`  ✓ Map "${slug}" ${mapResult.data.action}`);
  console.log(`\nDeploy complete (${slug})`);
}

main().catch((err) => {
  console.error(`Deploy failed: ${err.message}`);
  process.exit(1);
});
