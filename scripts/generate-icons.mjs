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
  // Read the source file
  const sourceData = await fs.readFile(svgPath);
  
  // Check if the file is actually a PNG (starts with PNG signature)
  const isPng = sourceData[0] === 0x89 && sourceData[1] === 0x50 && sourceData[2] === 0x4E && sourceData[3] === 0x47;
  
  if (isPng) {
    // If source is already a PNG, just copy it
    await fs.copyFile(svgPath, pngPath);
    // eslint-disable-next-line no-console
    console.log(`✅ Copied ${path.relative(projectRoot, svgPath)} to ${path.relative(projectRoot, pngPath)} (source is PNG)`);
  } else {
    // If source is SVG, convert it
    const svg = sourceData.toString('utf8');
    
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: SIZE },
      background: 'rgba(0,0,0,0)',
    });

    const rendered = resvg.render();
    const png = rendered.asPng();

    await fs.writeFile(pngPath, png);

    // eslint-disable-next-line no-console
    console.log(`✅ Generated ${path.relative(projectRoot, pngPath)} (${SIZE}x${SIZE})`);
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to generate icons:', err);
  process.exitCode = 1;
});

