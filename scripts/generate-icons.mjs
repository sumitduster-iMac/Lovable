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

// macOS icon sizes needed for .icns generation
const MACOS_ICON_SIZES = [
  { size: 16, name: 'icon_16x16.png' },
  { size: 32, name: 'icon_16x16@2x.png' },
  { size: 32, name: 'icon_32x32.png' },
  { size: 64, name: 'icon_32x32@2x.png' },
  { size: 128, name: 'icon_128x128.png' },
  { size: 256, name: 'icon_128x128@2x.png' },
  { size: 256, name: 'icon_256x256.png' },
  { size: 512, name: 'icon_256x256@2x.png' },
  { size: 512, name: 'icon_512x512.png' },
  { size: 1024, name: 'icon_512x512@2x.png' },
];

const MAIN_SIZE = 1024;

async function generatePng(svg, size) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
    background: 'rgba(0,0,0,0)',
  });

  const rendered = resvg.render();
  return rendered.asPng();
}

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
    
    // Generate main icon (1024x1024)
    const mainPng = await generatePng(svg, MAIN_SIZE);
    await fs.writeFile(pngPath, mainPng);
    // eslint-disable-next-line no-console
    console.log(`✅ Generated ${path.relative(projectRoot, pngPath)} (${MAIN_SIZE}x${MAIN_SIZE})`);

    // Create icons directory for macOS iconset
    const iconsDir = path.join(assetsDir, 'icons');
    try {
      await fs.mkdir(iconsDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    // Generate all macOS icon sizes
    for (const { size, name } of MACOS_ICON_SIZES) {
      const iconPng = await generatePng(svg, size);
      const iconPath = path.join(iconsDir, name);
      await fs.writeFile(iconPath, iconPng);
    }
    
    // eslint-disable-next-line no-console
    console.log(`✅ Generated ${MACOS_ICON_SIZES.length} macOS icon sizes in assets/icons/`);
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to generate icons:', err);
  process.exitCode = 1;
});
