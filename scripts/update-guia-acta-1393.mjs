/**
 * Sincroniza la guía 1393 (corrección de acta) tras matizar el costo:
 *  - actualiza el cuerpo ES/EN en el grupo correspondiente
 *  - actualiza excerptEs/excerptEn en blogPosts.ts
 *
 * Idempotente: si el contenido ya coincide, no escribe.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { part1 } from './guias-nacionales-2026-part1.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const ID = '1393';

const article = part1.find(a => a.id === ID);
if (!article) {
  console.error('No se encontró la guía', ID);
  process.exit(1);
}
if (article.contentEs.includes('\uFFFD') || article.contentEn.includes('\uFFFD')) {
  console.error('El contenido contiene U+FFFD');
  process.exit(1);
}

const groupIndex = Number(ID) % 39;
const groupFile = path.join(ROOT, 'src', 'data', 'blogContent', `group-${String(groupIndex).padStart(2, '0')}.ts`);
const groupSrc = fs.readFileSync(groupFile, 'utf8');
const entryRe = new RegExp(`  "${ID}": \\{\\n    "es": [^\\n]*,\\n    "en": [^\\n]*\\n  \\},`);
if (!entryRe.test(groupSrc)) {
  console.error('No se encontró la entrada', ID, 'en', path.basename(groupFile));
  process.exit(1);
}
const block = `  "${ID}": {\n    "es": ${JSON.stringify(article.contentEs)},\n    "en": ${JSON.stringify(article.contentEn)}\n  },`;
const nextGroup = groupSrc.replace(entryRe, block);

const postsFile = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
const postsSrc = fs.readFileSync(postsFile, 'utf8');
const start = postsSrc.indexOf(`    id: "${ID}",`);
const end = postsSrc.indexOf('\n  }', start);
if (start === -1 || end === -1) {
  console.error('No se encontró el objeto', ID, 'en blogPosts.ts');
  process.exit(1);
}
let obj = postsSrc.slice(start, end);
const before = obj;
obj = obj.replace(/^    excerptEs: .*$/m, `    excerptEs: ${JSON.stringify(article.excerptEs)},`);
obj = obj.replace(/^    excerptEn: .*$/m, `    excerptEn: ${JSON.stringify(article.excerptEn)},`);
if (obj === before) {
  console.error('No se pudieron reemplazar los excerpts');
  process.exit(1);
}
const nextPosts = postsSrc.slice(0, start) + obj + postsSrc.slice(end);

if (nextGroup === groupSrc && nextPosts === postsSrc) {
  console.log('Sin cambios: la guía ya estaba sincronizada.');
  process.exit(0);
}

fs.writeFileSync(groupFile, nextGroup, 'utf8');
fs.writeFileSync(postsFile, nextPosts, 'utf8');
console.log(`OK: guía ${ID} actualizada en ${path.basename(groupFile)} y blogPosts.ts`);
