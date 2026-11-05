/**
 * Inserta las 10 guías nacionales 2026 (IDs 1390–1399) en:
 *  - src/data/blogPosts.ts (metadatos, antes del cierre del array)
 *  - src/data/blogContent/group-25.ts … group-34.ts (cuerpo ES/EN)
 *
 * Idempotente: si ya existen todos los slugs/IDs, no escribe nada.
 * Valida estructura, codificación y componentes canónicos antes de tocar archivos.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { part1 } from './guias-nacionales-2026-part1.mjs';
import { part2 } from './guias-nacionales-2026-part2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const POSTS_PATH = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
const GROUP_DIR = path.join(ROOT, 'src', 'data', 'blogContent');
const GROUP_COUNT = 39;

const articles = [...part1, ...part2];

function fail(message) {
  console.error('ERROR:', message);
  process.exit(1);
}

if (articles.length !== 10) fail(`se esperaban 10 artículos, hay ${articles.length}`);

const ids = new Set();
const slugs = new Set();
for (const a of articles) {
  if (!/^139\d$/.test(a.id)) fail(`ID fuera de rango: ${a.id}`);
  if (ids.has(a.id)) fail(`ID duplicado en el lote: ${a.id}`);
  if (slugs.has(a.slug)) fail(`slug duplicado en el lote: ${a.slug}`);
  ids.add(a.id);
  slugs.add(a.slug);

  for (const key of ['titleEs', 'titleEn', 'excerptEs', 'excerptEn', 'date', 'imageUrl', 'imageCaption', 'categoryEs', 'categoryEn']) {
    if (!a[key]) fail(`${a.id}: falta ${key}`);
  }
  if (a.categoryEs !== 'Guías y Trámites') fail(`${a.id}: categoría incorrecta`);
  if (a.date !== a.publishedAt.slice(0, 10)) fail(`${a.id}: date y publishedAt no coinciden`);
  if (a.date < '2026-09-01' || a.date > '2026-11-05') fail(`${a.id}: fecha fuera de la ventana sep–nov 2026`);
  if (!fs.existsSync(path.join(ROOT, 'public', a.imageUrl))) fail(`${a.id}: no existe la imagen ${a.imageUrl}`);

  for (const [lang, content] of [['ES', a.contentEs], ['EN', a.contentEn]]) {
    if (!content) fail(`${a.id}: falta content${lang}`);
    if (content.includes('\uFFFD')) fail(`${a.id}: content${lang} contiene U+FFFD`);
    if ((content.match(/<h1[ >]/g) || []).length !== 1) fail(`${a.id}: content${lang} debe tener exactamente un <h1>`);
    if (!content.includes('class="report-figure"')) fail(`${a.id}: content${lang} sin report-figure`);
    if (!content.includes('class="stat-grid"')) fail(`${a.id}: content${lang} sin stat-grid`);
    if (!content.includes('class="expert-quote"')) fail(`${a.id}: content${lang} sin expert-quote`);
    if (!content.includes('class="doc-card"')) fail(`${a.id}: content${lang} sin doc-card`);
    if (!content.includes('class="spec-table"')) fail(`${a.id}: content${lang} sin spec-table`);
    if ((content.match(/class="report-chapter"/g) || []).length < 4) fail(`${a.id}: content${lang} con menos de 4 capítulos`);
    if (!content.includes('class="expert-quote-text"') || !content.includes('class="expert-quote-author"')) {
      fail(`${a.id}: expert-quote incompleto`);
    }
  }
}

const postsSrc = fs.readFileSync(POSTS_PATH, 'utf8');
const postsBlock = postsSrc.slice(postsSrc.indexOf('export const blogPosts'));

const existingSlugs = [...postsBlock.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map(m => m[1]);
const existingIds = [...postsBlock.matchAll(/^\s*id:\s*"(\d+)"/gm)].map(m => m[1]);
const existingSlugSet = new Set(existingSlugs);
const existingIdSet = new Set(existingIds);

const alreadyInPosts = articles.filter(a => existingSlugSet.has(a.slug) || existingIdSet.has(a.id));
const pendingPosts = articles.filter(a => !existingSlugSet.has(a.slug) && !existingIdSet.has(a.id));

if (alreadyInPosts.length > 0 && pendingPosts.length > 0) {
  fail(`estado parcial: ${alreadyInPosts.map(a => a.id).join(', ')} ya existen; revisa antes de reinsertar`);
}

function metaLiteral(a) {
  const fields = [
    ['id', a.id],
    ['contentType', 'analysis'],
    ['slug', a.slug],
    ['publishedAt', a.publishedAt],
    ['titleEs', a.titleEs],
    ['titleEn', a.titleEn],
    ['excerptEs', a.excerptEs],
    ['excerptEn', a.excerptEn],
    ['date', a.date],
    ['readTimeEs', a.readTimeEs],
    ['readTimeEn', a.readTimeEn],
    ['imageUrl', a.imageUrl],
    ['imageCaption', a.imageCaption],
    ['categoryEs', a.categoryEs],
    ['categoryEn', a.categoryEn],
    ['enableComments', true],
    ['featured', false],
    ['breaking', false],
    ['views', 1],
  ];
  return `  {\n${fields.map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`).join(',\n')}\n  }`;
}

const groupPlans = [];
for (const a of articles) {
  const groupIndex = Number(a.id) % GROUP_COUNT;
  const file = path.join(GROUP_DIR, `group-${String(groupIndex).padStart(2, '0')}.ts`);
  if (!fs.existsSync(file)) fail(`no existe ${file}`);
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes(`"${a.id}":`)) {
    fail(`el ID ${a.id} ya existe en ${path.basename(file)}`);
  }
  if (src.includes('\uFFFD')) fail(`${path.basename(file)} ya contiene U+FFFD; corrige antes de continuar`);
  const openRe = /(export const blogContentGroup: Record<string, BlogContentEntry> = \{)(\r?\n)/;
  const m = src.match(openRe);
  if (!m) fail(`no se encontró la apertura del grupo en ${path.basename(file)}`);
  const eol = m[2];
  const block = `  "${a.id}": {\n    "es": ${JSON.stringify(a.contentEs)},\n    "en": ${JSON.stringify(a.contentEn)}\n  },${eol}`;
  const next = src.replace(openRe, `$1${eol}${block}`);
  groupPlans.push({ file, next });
}

if (pendingPosts.length === 0) {
  console.log('Nada que insertar: las 10 guías ya están presentes.');
  process.exit(0);
}

// Insertar metadatos antes del cierre final del array.
const endIdx = postsSrc.lastIndexOf('];');
if (endIdx === -1) fail('no se encontró el cierre "];" de blogPosts.ts');
let head = postsSrc.slice(0, endIdx).replace(/\s+$/, '');
if (head.endsWith(',')) head = head.slice(0, -1);
const tail = postsSrc.slice(endIdx);
const newPosts = `${head},\n${pendingPosts.map(metaLiteral).join(',\n')}\n${tail}`;

// Validación rápida de sintaxis/conteo del bloque resultante.
const checkBlock = newPosts.slice(newPosts.indexOf('export const blogPosts'));
if ((checkBlock.match(/^\s*id:\s*"/gm) || []).length !== existingIds.length + pendingPosts.length) {
  fail('el conteo de IDs tras la inserción no coincide');
}
if (newPosts.includes('\uFFFD')) fail('el resultado contiene U+FFFD');

for (const plan of groupPlans) {
  fs.writeFileSync(plan.file, plan.next, 'utf8');
}
fs.writeFileSync(POSTS_PATH, newPosts, 'utf8');

console.log(`OK: ${pendingPosts.length} metadatos insertados y ${groupPlans.length} cuerpos distribuidos.`);
for (const a of articles) {
  console.log(`  ${a.id} -> group-${String(Number(a.id) % GROUP_COUNT).padStart(2, '0')} :: /guias/${a.slug}`);
}
