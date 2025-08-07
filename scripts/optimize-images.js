// Automated image optimization script for Orcia Studio Site
// Converts images in src/assets and public/ to WebP and optimizes originals
// Usage: node scripts/optimize-images.js


import { existsSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_DIRS = [
  join(__dirname, '../src/assets'),
  join(__dirname, '../public'),
];
const exts = ['.jpg', '.jpeg', '.png'];

async function processImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!exts.includes(ext)) return;
  const webpPath = filePath.replace(ext, '.webp');
  if (!existsSync(webpPath)) {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log('Converted to WebP:', webpPath);
  }
  // Optimize original (lossless for PNG, lossy for JPEG)
  if (ext === '.png') {
    await sharp(filePath)
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer()
      .then(data => writeFileSync(filePath, data));
    console.log('Optimized PNG:', filePath);
  } else if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(filePath)
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer()
      .then(data => writeFileSync(filePath, data));
    console.log('Optimized JPEG:', filePath);
  }
}

function walkDir(dir, cb) {
  readdirSync(dir).forEach(f => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walkDir(p, cb);
    else cb(p);
  });
}

(async () => {
  for (const dir of IMAGE_DIRS) {
    if (!existsSync(dir)) continue;
    walkDir(dir, processImage);
  }
})();
