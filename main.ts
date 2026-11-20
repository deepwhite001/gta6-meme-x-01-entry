// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry is the X post itself: the meme picture and the post's text are
// what the judge reads. This program's only job is to hand the gate the
// post's address — it copies POST.json from the repository to /output.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`no POST.json in ${botDir} — the post's address is missing`);
  process.exit(1);
}

// The gate refuses a POST.json that is not a JSON object with a url string,
// so check the shape here and fail loudly instead of copying a bad file.
let post;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch {
  console.error(`POST.json in ${botDir} is not valid JSON`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`POST.json copied to ${target}`);
