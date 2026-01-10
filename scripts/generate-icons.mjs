import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(projectRoot, 'assets');

const svgPath = path.join(assetsDir, 'icon.svg');
const pngPath = path.join(assetsDir, 'icon.png');

const SIZE = 1024;

async function main() {
  const svg = await fs.readFile(svgPath, 'utf8');

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: SIZE },
    background: '#000000',
  });

  const rendered = resvg.render();
  const png = rendered.asPng();

  await fs.writeFile(pngPath, png);

  // eslint-disable-next-line no-console
  console.log(`✅ Generated ${path.relative(projectRoot, pngPath)} (${SIZE}x${SIZE})`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to generate icons:', err);
  process.exitCode = 1;
});

