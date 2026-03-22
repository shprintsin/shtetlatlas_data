/**
 * Validate a data project directory.
 * Usage: tsx scripts/validate-data.ts data/lithuania
 * Exits 0 on success, 1 on failure.
 */

import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { MinimalDataYamlSchema } from '@kahal/shared';

const dataDir = resolve(process.argv[2]);
if (!dataDir) {
  console.error('Usage: tsx scripts/validate-data.ts <data-dir>');
  process.exit(1);
}

const errors: string[] = [];

function fail(msg: string) {
  errors.push(msg);
  console.error(`::error::${msg}`);
}

async function main() {
  // 1. Check data.yaml exists
  const dataYamlPath = join(dataDir, 'data.yaml');
  if (!existsSync(dataYamlPath)) {
    fail(`data.yaml not found in ${dataDir}`);
    return;
  }

  // 2. Parse and validate data.yaml
  const rawYaml = yamlLoad(await readFile(dataYamlPath, 'utf-8')) as Record<string, unknown>;
  const dataResult = MinimalDataYamlSchema.safeParse(rawYaml);
  if (!dataResult.success) {
    for (const issue of dataResult.error.issues) {
      fail(`data.yaml: ${issue.path.join('.')}: ${issue.message}`);
    }
    return;
  }

  const dataYaml = dataResult.data;
  console.log(`✓ data.yaml valid (slug: ${dataYaml.slug}, ${dataYaml.resources.length} resources)`);

  // 3. Validate each referenced resource file exists and is non-empty
  for (const resource of dataYaml.resources) {
    const filePath = join(dataDir, resource.file);

    if (!existsSync(filePath)) {
      fail(`Resource file not found: ${resource.file}`);
      continue;
    }

    const fileStat = await stat(filePath);
    if (fileStat.size === 0) {
      fail(`Resource file is empty: ${resource.file}`);
      continue;
    }

    const name = resource.name ?? resource.file;
    console.log(`✓ resource "${name}" exists (${fileStat.size} bytes)`);
  }
}

await main();

if (errors.length > 0) {
  console.error(`\n${errors.length} validation error(s)`);
  process.exit(1);
} else {
  console.log('\nAll validations passed');
}
