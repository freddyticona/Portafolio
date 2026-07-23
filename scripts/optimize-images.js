/**
 * optimize-images.js
 *
 * Escanea public/images/portfolio/ y public/images/blog/
 * Comprime JPEG/PNG/WebP y genera versiones .webp si no existen.
 *
 * Uso: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS = ['public/images/portfolio', 'public/images/blog', 'public/images/behind-scenes'];
const QUALITY_JPEG = 82;
const QUALITY_WEBP = 80;
const MAX_WIDTH = 1920;

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const fileSizeBefore = fs.statSync(filePath).size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // Optimizar original (sobreescribir)
    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: QUALITY_JPEG, mozjpeg: true }).toFile(filePath + '.tmp');
      fs.renameSync(filePath + '.tmp', filePath);
    } else if (ext === '.png') {
      await pipeline.png({ compressionLevel: 9, palette: true }).toFile(filePath + '.tmp');
      fs.renameSync(filePath + '.tmp', filePath);
    }

    const fileSizeAfter = fs.statSync(filePath).size;
    const saved = ((fileSizeBefore - fileSizeAfter) / fileSizeBefore * 100).toFixed(1);

    // Generar .webp si no existe
    const webpPath = filePath.replace(/\.[^.]+$/, '.webp');
    if (!fs.existsSync(webpPath)) {
      await pipeline
        .webp({ quality: QUALITY_WEBP })
        .toFile(webpPath);
      const webpSize = fs.statSync(webpPath).size;
      console.log(`  ✅ ${path.basename(filePath)} → ${path.basename(webpPath)} (${(webpSize / 1024).toFixed(0)} KB)`);
    }

    console.log(`  ✓ ${path.basename(filePath)} — ${(fileSizeBefore / 1024).toFixed(0)} KB → ${(fileSizeAfter / 1024).toFixed(0)} KB (${saved}%)`);
  } catch (err) {
    console.error(`  ✗ Error en ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else {
      await optimizeFile(fullPath);
    }
  }
}

console.log('🖼️  Optimizando imágenes...\n');

for (const dir of DIRS) {
  if (fs.existsSync(dir)) {
    console.log(`📁 ${dir}`);
    await walkDir(dir);
  }
}

console.log('\n✅ Optimización completa.');
