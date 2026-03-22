/**
 * Validate a map project directory.
 * Usage: tsx scripts/validate-map.ts maps/brc
 * Exits 0 on success, 1 on failure.
 */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import {
  MinimalMapYamlSchema,
  MinimalLayerYamlSchema,
  isValidGeoJSON,
} from '@kahal/shared';

const mapDir = resolve(process.argv[2]);
if (!mapDir) {
  console.error('Usage: tsx scripts/validate-map.ts <map-dir>');
  process.exit(1);
}

const errors: string[] = [];

function fail(msg: string) {
  errors.push(msg);
  console.error(`::error::${msg}`);
}

async function main() {
  // 1. Check map.yaml exists
  const mapYamlPath = join(mapDir, 'map.yaml');
  if (!existsSync(mapYamlPath)) {
    fail(`map.yaml not found in ${mapDir}`);
    return;
  }

  // 2. Parse and validate map.yaml
  const rawYaml = yamlLoad(await readFile(mapYamlPath, 'utf-8')) as Record<string, unknown>;
  const mapResult = MinimalMapYamlSchema.safeParse(rawYaml);
  if (!mapResult.success) {
    for (const issue of mapResult.error.issues) {
      fail(`map.yaml: ${issue.path.join('.')}: ${issue.message}`);
    }
    return;
  }

  const mapYaml = mapResult.data;
  console.log(`✓ map.yaml valid (slug: ${mapYaml.slug}, ${mapYaml.layers.length} layers)`);

  // 3. Validate each referenced layer
  for (const layerSlug of mapYaml.layers) {
    const layerYamlPath = join(mapDir, 'layers', `${layerSlug}.yaml`);
    const layerGeoPath = join(mapDir, 'layers', `${layerSlug}.geojson`);

    if (!existsSync(layerYamlPath)) {
      fail(`Layer YAML not found: layers/${layerSlug}.yaml`);
      continue;
    }
    if (!existsSync(layerGeoPath)) {
      fail(`Layer GeoJSON not found: layers/${layerSlug}.geojson`);
      continue;
    }

    // Validate layer YAML
    const layerRaw = yamlLoad(await readFile(layerYamlPath, 'utf-8'));
    const layerResult = MinimalLayerYamlSchema.safeParse(layerRaw);
    if (!layerResult.success) {
      for (const issue of layerResult.error.issues) {
        fail(`layers/${layerSlug}.yaml: ${issue.path.join('.')}: ${issue.message}`);
      }
      continue;
    }

    // Validate GeoJSON
    const geoContent = await readFile(layerGeoPath, 'utf-8');
    let geoData: unknown;
    try {
      geoData = JSON.parse(geoContent);
    } catch {
      fail(`layers/${layerSlug}.geojson: invalid JSON`);
      continue;
    }

    if (!isValidGeoJSON(geoData)) {
      fail(`layers/${layerSlug}.geojson: not valid GeoJSON`);
      continue;
    }

    const fc = geoData as { features?: unknown[] };
    const featureCount = fc.features?.length ?? 0;
    console.log(`✓ layer "${layerSlug}" valid (${featureCount} features)`);
  }
}

await main();

if (errors.length > 0) {
  console.error(`\n${errors.length} validation error(s)`);
  process.exit(1);
} else {
  console.log('\nAll validations passed');
}
