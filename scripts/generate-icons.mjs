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

// macOS Big Sur style rounded rectangle (squircle) mask
// The radius is approximately 22.37% of the icon size for Big Sur style
function createBigSurMask(size) {
  const radius = Math.round(size * 0.2237);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <clipPath id="bigSurClip">
          <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/>
        </clipPath>
      </defs>
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#F7F4ED"/>
      <g clip-path="url(#bigSurClip)">
        {{CONTENT}}
      </g>
    </svg>
  `;
}

// Wrap original SVG content in Big Sur rounded mask
function wrapWithBigSurMask(originalSvg, size) {
  // Extract the inner content from the original SVG (everything between <svg> tags)
  const contentMatch = originalSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!contentMatch) {
    throw new Error('Could not parse SVG content');
  }
  
  const innerContent = contentMatch[1];
  
  // Get original viewBox dimensions
  const viewBoxMatch = originalSvg.match(/viewBox=["']([^"']+)["']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 600 600';
  const [, , vbWidth, vbHeight] = viewBox.split(/\s+/).map(Number);
  
  const radius = Math.round(size * 0.2237);
  
  // Create new SVG with Big Sur mask and scaled content
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <clipPath id="bigSurClip">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/>
    </clipPath>
  </defs>
  <!-- Background with rounded corners -->
  <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#F7F4ED"/>
  <!-- Clipped content -->
  <g clip-path="url(#bigSurClip)">
    <g transform="scale(${size / vbWidth}, ${size / vbHeight})">
      ${innerContent}
    </g>
  </g>
</svg>`;
}

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
    // If source is SVG, convert it with Big Sur rounded corners
    const originalSvg = sourceData.toString('utf8');
    
    // Create icons directory for macOS iconset
    const iconsDir = path.join(assetsDir, 'icons');
    try {
      await fs.mkdir(iconsDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    // Generate main icon (1024x1024) with Big Sur mask
    const mainSvg = wrapWithBigSurMask(originalSvg, MAIN_SIZE);
    const mainPng = await generatePng(mainSvg, MAIN_SIZE);
    await fs.writeFile(pngPath, mainPng);
    // eslint-disable-next-line no-console
    console.log(`✅ Generated ${path.relative(projectRoot, pngPath)} (${MAIN_SIZE}x${MAIN_SIZE}) with Big Sur rounded corners`);

    // Generate all macOS icon sizes with Big Sur mask
    for (const { size, name } of MACOS_ICON_SIZES) {
      const maskedSvg = wrapWithBigSurMask(originalSvg, size);
      const iconPng = await generatePng(maskedSvg, size);
      const iconPath = path.join(iconsDir, name);
      await fs.writeFile(iconPath, iconPng);
    }
    
    // eslint-disable-next-line no-console
    console.log(`✅ Generated ${MACOS_ICON_SIZES.length} macOS Big Sur style icons in assets/icons/`);
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to generate icons:', err);
  process.exitCode = 1;
});
