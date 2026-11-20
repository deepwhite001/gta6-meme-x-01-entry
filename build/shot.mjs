// Render build/meme.html at 1024x1024 with headless Chrome and save meme.png
// at the repository root. Run from anywhere: node build/shot.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun/shot-tools/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const htmlPath = join(here, 'meme.html');
const outPath = join(root, 'meme.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--force-device-scale-factor=1'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024 });
  await page.goto('file://' + htmlPath, { waitUntil: 'load' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: outPath });
  console.log('wrote', outPath);
} finally {
  await browser.close();
}
