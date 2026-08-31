/**
 * generate-image-dimensions.mjs
 *
 * Genera un mapa estático `src/lib/imageDimensions.ts` con las dimensiones
 * reales (width/height) de cada imagen referenciada por los artículos, para
 * poder emitir width/height en el ImageObject del schema NewsArticle.
 *
 * Se ejecuta antes del build y produce un módulo TS inmutable.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { extractArticles } from './extract-articles.js';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Imágenes referenciadas por los artículos (imageUrl) — rutas tipo '/images/blog/...'
const articles = extractArticles();
const imagePaths = [...new Set(articles.map((a) => a.imageUrl).filter(Boolean))];

const map = {};

for (const rel of imagePaths) {
  // 'rel' es como '/images/blog/foo.jpg'
  const abs = path.join(PUBLIC_DIR, rel.replace(/^\//, ''));
  if (!fs.existsSync(abs)) continue;
  try {
    const meta = await sharp(abs).metadata();
    if (meta.width && meta.height) {
      map[rel] = { width: meta.width, height: meta.height };
    }
  } catch (e) {
    // ignorar archivos que sharp no pueda leer
  }
}

const serialized = JSON.stringify(map, null, 2);

const ts = `// Generado automáticamente por scripts/generate-image-dimensions.mjs
// NO editar a mano. Dimensiones reales de las imágenes de los artículos.
export const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = ${serialized};
`;

const outPath = path.join(__dirname, '..', 'src', 'lib', 'imageDimensions.ts');
fs.writeFileSync(outPath, ts, 'utf-8');
console.log(`✅ imageDimensions.ts generado: ${Object.keys(map).length} imágenes mapeadas`);

// También emitir un JSON para que los scripts de build (generate-pages.js)
// puedan leer las dimensiones sin importar módulos TS.
const jsonPath = path.join(__dirname, 'image-dimensions.json');
fs.writeFileSync(jsonPath, serialized, 'utf-8');
console.log(`✅ image-dimensions.json generado: ${Object.keys(map).length} imágenes`);