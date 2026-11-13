/**
 * Repara los 20 bloques insertados en src/data/blogContent/group-XX.ts.
 *
 * Causa del problema: el script de inserción usaba String.replace con una
 * cadena de reemplazo; cualquier "$2" dentro del contenido se interpretó como
 * el grupo de captura 2 (el salto de línea). Este script reemplaza el bloque
 * completo usando una función como reemplazo (sin interpretación de "$").
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { noticias } from './noticias-2026-11-05.mjs';
import { blogPart1 } from './blog-2026-11-05-part1.mjs';
import { blogPart2 } from './blog-2026-11-05-part2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const GROUP_DIR = path.join(ROOT, 'src', 'data', 'blogContent');
const GROUP_COUNT = 39;

const articles = [...noticias, ...blogPart1, ...blogPart2];

function fail(message) {
  console.error('ERROR:', message);
  process.exit(1);
}

let repaired = 0;

for (const a of articles) {
  const groupIndex = Number(a.id) % GROUP_COUNT;
  const file = path.join(GROUP_DIR, `group-${String(groupIndex).padStart(2, '0')}.ts`);
  if (!fs.existsSync(file)) fail(`no existe ${file}`);

  const src = fs.readFileSync(file, 'utf8');
  const opener = `\n  "${a.id}": {\n`;
  const startIdx = src.indexOf(opener);
  if (startIdx === -1) fail(`${path.basename(file)}: no se encontró el bloque ${a.id}`);

  const closeIdx = src.indexOf('\n  },', startIdx + opener.length);
  if (closeIdx === -1) fail(`${path.basename(file)}: no se encontró el cierre del bloque ${a.id}`);

  const endIdx = closeIdx + '\n  },'.length;
  const block = `\n  "${a.id}": {\n    "es": ${JSON.stringify(a.contentEs)},\n    "en": ${JSON.stringify(a.contentEn)}\n  },`;

  const next = src.slice(0, startIdx) + block + src.slice(endIdx);
  if (next === src) {
    console.log(`= ${a.id} ya correcto en ${path.basename(file)}`);
  } else {
    fs.writeFileSync(file, next, 'utf8');
    console.log(`OK ${a.id} reparado en ${path.basename(file)}`);
    repaired += 1;
  }
}

console.log(`Reparados: ${repaired}`);
