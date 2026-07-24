/**
 * generate-lqip.mjs
 *
 * Pre-genera Low Quality Image Placeholders (LQIP) para todas las imágenes
 * de public/images/portfolio/ y blog/ en un solo archivo JSON.
 *
 * Cada LQIP es un base64 ~6 KB de un thumbnail 16x12 con la paleta dominante
 * de la foto, listo para usarse como `placeholder` en LazyImage.
 *
 * Por que el sitio no hace esto en runtime:
 *   - Generar un canvas 16x12 + toDataURL por cada imagen en navegador
 *     satura el thread principal y bloquea TBT.
 *   - Persistirlos en JSON evita "flash of unstyled content" sin LCP cost.
 *
 * Uso:
 *   node scripts/generate-lqip.mjs
 *
 * Output:
 *   public/lqip.json   (mapa { 'portfolio/foo.webp' => 'data:image/jpeg;...' })
 *
 * Integración futura:
 *   - LazyImage puede leer este JSON en /import.meta.glob('/lqip.json')
 *     y pasarlo al render sin código adicional.
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOTS = [
  path.join(__dirname, '..', 'public', 'images', 'portfolio'),
  path.join(__dirname, '..', 'public', 'images', 'blog'),
  path.join(__dirname, '..', 'public', 'images', 'behind-scenes'),
];

const OUT_FILE = path.join(__dirname, '..', 'public', 'lqip.json');
const THUMB_WIDTH = 16;
const THUMB_HEIGHT = 12;
const JPEG_QUALITY = 35;

async function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (/\.tmp$/i.test(entry.name)) continue;
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      yield full;
    }
  }
}

async function lqipFor(filePath) {
  const buf = await sharp(filePath)
    .resize({ width: THUMB_WIDTH, height: THUMB_HEIGHT, fit: 'inside' })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

async function main() {
  const out = {};
  let count = 0;
  let savedBytes = 0;

  for (const root of ROOTS) {
    for await (const filePath of walk(root)) {
      try {
        const dataUri = await lqipFor(filePath);
        const rel = path.relative(path.join(__dirname, '..', 'public'), filePath).replace(/\\/g, '/');
        out['/' + rel] = dataUri;
        count += 1;
        savedBytes += dataUri.length;
      } catch (err) {
        console.warn(`  ! ${filePath}: ${err.message}`);
      }
    }
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(out), 'utf-8');
  console.log(`\nLQIP generado para ${count} imágenes (${(savedBytes / 1024).toFixed(0)} KB total).`);
  console.log(`  -> ${path.relative(process.cwd(), OUT_FILE)}`);
}

main().catch((err) => {
  console.error('generate-lqip failed:', err);
  process.exit(1);
});
