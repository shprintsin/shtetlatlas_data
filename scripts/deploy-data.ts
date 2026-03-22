/**
 * Deploy a data project to the production API.
 * Usage: tsx scripts/deploy-data.ts data/lithuania
 *
 * Environment:
 *   MAPSTUDIO_API_KEY  — Bearer token for the deploy API
 *   MAPSTUDIO_API_URL  — Base URL (e.g., https://kahal.example.com)
 */

import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, join, basename, extname } from 'node:path';
import { execSync } from 'node:child_process';
import { load as yamlLoad } from 'js-yaml';
import { MinimalDataYamlSchema, extractI18nFields } from '@kahal/shared';

// ── Config ──────────────────────────────────────────────────
const dataDir = resolve(process.argv[2]);
const apiKey = process.env.MAPSTUDIO_API_KEY;
const apiUrl = process.env.MAPSTUDIO_API_URL;

if (!dataDir || !apiKey || !apiUrl) {
  console.error('Usage: MAPSTUDIO_API_KEY=... MAPSTUDIO_API_URL=... tsx scripts/deploy-data.ts <data-dir>');
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

function guessMimeType(filePath: string): string {
  const ext = extname(filePath).toLowerCase().replace('.', '');
  const mimeMap: Record<string, string> = {
    csv: 'text/csv',
    json: 'application/json',
    geojson: 'application/geo+json',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel',
    tsv: 'text/tab-separated-values',
    txt: 'text/plain',
    pdf: 'application/pdf',
    zip: 'application/zip',
  };
  return mimeMap[ext] ?? 'application/octet-stream';
}

function guessFormat(filePath: string): string {
  const ext = extname(filePath).toLowerCase().replace('.', '');
  const formatMap: Record<string, string> = {
    csv: 'CSV',
    json: 'JSON',
    geojson: 'GEOJSON',
    xlsx: 'XLSX',
    xls: 'XLS',
    tsv: 'TSV',
    txt: 'TXT',
    pdf: 'PDF',
    zip: 'ZIP',
  };
  return formatMap[ext] ?? 'UNKNOWN';
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  console.log(`Deploying: ${dataDir}`);

  // 1. Read & validate data.yaml
  const rawYaml = yamlLoad(await readFile(join(dataDir, 'data.yaml'), 'utf-8')) as Record<string, unknown>;
  const dataYaml = MinimalDataYamlSchema.parse(rawYaml);
  const datasetSlug = dataYaml.slug;
  const gitSha = getGitSha();

  console.log(`  Dataset: ${datasetSlug} (${dataYaml.resources.length} resources)`);

  // 2. Upload each resource file
  const uploadedResources = [];

  for (const resource of dataYaml.resources) {
    const filePath = join(dataDir, resource.file);
    const buffer = await readFile(filePath);
    const fileStat = await stat(filePath);
    const fileName = basename(resource.file);

    const formData = new FormData();
    formData.append('file', new Blob([new Uint8Array(buffer)], { type: guessMimeType(filePath) }), fileName);
    formData.append('slug', datasetSlug);

    const res = await fetch(`${apiUrl}/api/cli/deploy/data/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
      body: formData,
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(`Upload failed for ${resource.file} (${res.status}): ${errData.message ?? errData.error ?? res.statusText}`);
    }

    const uploadResult = await res.json();
    const resourceSlug = fileName.replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();

    uploadedResources.push({
      name: resource.name ?? fileName,
      slug: `${datasetSlug}--${resourceSlug}`,
      url: uploadResult.url,
      filename: uploadResult.filename ?? fileName,
      mimeType: uploadResult.mimeType ?? guessMimeType(filePath),
      format: resource.format ?? uploadResult.format ?? guessFormat(filePath),
      sizeBytes: uploadResult.sizeBytes ?? fileStat.size,
      isMainFile: resource.isMainFile ?? false,
    });

    console.log(`  ✓ Uploaded "${resource.file}"`);
  }

  // 3. Read i18n markdown files
  const titleI18n = extractI18nFields(rawYaml, 'title');
  const descriptionFromYaml = extractI18nFields(rawYaml, 'description');
  const descriptionFromFiles = await readI18nMarkdownFiles(dataDir, 'description');
  const codebookFromFiles = await readI18nMarkdownFiles(dataDir, 'codebook');
  const sourcesFromFiles = await readI18nMarkdownFiles(dataDir, 'sources');
  const descriptionI18n = { ...descriptionFromYaml, ...descriptionFromFiles };
  const codebookTextI18n = Object.keys(codebookFromFiles).length > 0 ? codebookFromFiles : undefined;
  const sourcesI18n = Object.keys(sourcesFromFiles).length > 0 ? sourcesFromFiles : undefined;

  // 4. Upload thumbnail if present
  let thumbnailId: string | undefined;
  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const thumbPath = join(dataDir, `thumbnail.${ext}`);
    if (existsSync(thumbPath)) {
      thumbnailId = await uploadThumbnail(datasetSlug, thumbPath);
      if (thumbnailId) console.log('  ✓ Thumbnail uploaded');
      break;
    }
  }

  // 5. Deploy dataset
  const dataPayload = {
    slug: datasetSlug,
    title: titleI18n.he || dataYaml.title,
    description: descriptionI18n.he || (dataYaml.description ?? ''),
    status: 'draft',
    maturity: dataYaml.maturity,
    version: dataYaml.version,
    license: dataYaml.license,
    citationText: dataYaml.citationText,
    minYear: dataYaml.minYear,
    maxYear: dataYaml.maxYear,
    isVisible: true,
    categorySlug: dataYaml.category,
    regionSlugs: dataYaml.regions,
    titleI18n,
    descriptionI18n,
    codebookTextI18n,
    sourcesI18n,
    thumbnailId,
    resources: uploadedResources,
    gitSha,
    cliVersion: 'ci-1.0.0',
  };

  const result = await post('/api/cli/deploy/data', dataPayload);
  console.log(`  ✓ Dataset "${datasetSlug}" ${result.data.action}`);
  console.log(`\nDeploy complete (${datasetSlug})`);
}

main().catch((err) => {
  console.error(`Deploy failed: ${err.message}`);
  process.exit(1);
});
