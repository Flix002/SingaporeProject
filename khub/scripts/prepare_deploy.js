#!/usr/bin/env node
import { cp, rm, mkdir } from 'fs/promises';
import path from 'path';

async function main() {
  const root = path.resolve();
  const dist = path.join(root, 'dist');
  const dest = path.join(root, 'server', 'public');

  try {
    // remove existing public folder
    await rm(dest, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }

  await mkdir(dest, { recursive: true });

  // copy dist -> server/public
  await cp(dist, dest, { recursive: true });
  console.log('Copied', dist, 'to', dest);
}

main().catch(err => { console.error(err); process.exit(1); });
