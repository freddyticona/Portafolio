/**
 * Inserta 20 artículos (10-11 de noviembre de 2026) en:
 *  - src/data/blogPosts.ts (metadatos, antes del cierre del array)
 *  - src/data/blogContent/group-XX.ts (cuerpo ES/EN, grupo = id % 39)
 *
 * Lote: 10 noticias (1420-1429) + 10 artículos de blog MCP (1430-1439).
 * Idempotente y con validación estructural previa.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { noticias } from './noticias-2026-11-10.mjs';
import { blogPart1 } from './blog-mcp-2026-11-part1.mjs';
import { blogPart2 } from './blog-mcp-2026-11-part2.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const POSTS_PATH = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
const GROUP_DIR = path.join(ROOT, 'src', 'data', 'blogContent');
const GROUP_COUNT = 39;

const news = noticias.map(a => ({ ...a, contentType: 'news' }));
const blog = [...blogPart1, ...blogPart2].map(a => ({ ...a, contentType: 'blog' }));
const articles = [...news, ...blog];

function fail(message) {
  console.error('ERROR:', message);
  process.exit(1);
}

if (news.length !== 10) fail(`se esperaban 10 noticias, hay ${news.length}`);
if (blog.length !== 10) fail(`se esperaban 10 artículos de blog, hay ${blog.length}`);

const ids = new Set();
const slugs = new Set();

function checkCommon(a) {
  if (!/^14[23]\d$/.test(a.id)) fail(`ID fuera de rango: ${a.id}`);
  if (ids.has(a.id)) fail(`ID duplicado en el lote: ${a.id}`);
  if (slugs.has(a.slug)) fail(`slug duplicado en el lote: ${a.slug}`);
  ids.add(a.id);
  slugs.add(a.slug);

  for (const key of [
    'titleEs', 'titleEn', 'excerptEs', 'excerptEn', 'date', 'publishedAt',
    'imageUrl', 'imageCaption', 'categoryEs', 'categoryEn', 'readTimeEs', 'readTimeEn',
  ]) {
    if (!a[key]) fail(`${a.id}: falta ${key}`);
  }
  if (!/^2026-11-1[01]$/.test(a.date)) fail(`${a.id}: fecha fuera del rango 10-11 de noviembre (${a.date})`);
  if (!a.publishedAt.startsWith(a.date)) fail(`${a.id}: publishedAt no coincide con date`);

  for (const [lang, content] of [['ES', a.contentEs], ['EN', a.contentEn]]) {
    if (!content) fail(`${a.id}: falta content${lang}`);
    if (content.includes('\uFFFD')) fail(`${a.id}: content${lang} contiene U+FFFD`);
    if ((content.match(/<h1[ >]/g) || []).length !== 1) fail(`${a.id}: content${lang} debe tener exactamente un <h1>`);
    if (!content.includes('class="report-figure"')) fail(`${a.id}: content${lang} sin report-figure`);
    if (!content.includes('class="expert-quote"')) fail(`${a.id}: content${lang} sin expert-quote`);
    if ((content.match(/class="report-chapter"/g) || []).length < 3) {
      fail(`${a.id}: content${lang} con menos de 3 capítulos`);
    }
  }
}

for (const a of articles) {
  if (a.imageUrl.includes('\uFFFD')) fail(`${a.id}: imageUrl inválida`);
  if (!fs.existsSync(path.join(ROOT, 'public', a.imageUrl))) fail(`${a.id}: no existe la imagen ${a.imageUrl}`);
  checkCommon(a);
}

for (const a of news) {
  for (const key of ['source', 'sourceUrl', 'region', 'location']) {
    if (!a[key]) fail(`${a.id}: noticia sin ${key}`);
  }
  if (a.contentType !== 'news') fail(`${a.id}: contentType inválido`);
}

for (const a of blog) {
  if (a.source || a.sourceUrl) fail(`${a.id}: el blog no debe tener source/sourceUrl`);
  if (a.contentType !== 'blog') fail(`${a.id}: contentType inválido`);
  if (!a.contentEs.includes('class="stat-grid"')) fail(`${a.id}: blog sin stat-grid`);
  if (!a.contentEn.includes('class="stat-grid"')) fail(`${a.id}: blog sin stat-grid (EN)`);
  if (!a.contentEs.includes('class="doc-card"')) fail(`${a.id}: blog sin doc-card`);
  if (!a.contentEn.includes('class="doc-card"')) fail(`${a.id}: blog sin doc-card (EN)`);
  if ((a.contentEs.match(/class="report-chapter"/g) || []).length < 4) fail(`${a.id}: blog con menos de 4 capítulos (ES)`);
  if ((a.contentEn.match(/class="report-chapter"/g) || []).length < 4) fail(`${a.id}: blog con menos de 4 capítulos (EN)`);
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
    ['contentType', a.contentType],
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
    ['location', a.location || 'La Paz, Bolivia'],
    ['region', a.region || 'Bolivia'],
  ];
  if (a.contentType === 'news') fields.push(['source', a.source], ['sourceUrl', a.sourceUrl]);
  return `  {\n${fields.map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`).join(',\n')}\n  }`;
}

const groupPlans = [];
for (const a of articles) {
  const groupIndex = Number(a.id) % GROUP_COUNT;
  const file = path.join(GROUP_DIR, `group-${String(groupIndex).padStart(2, '0')}.ts`);
  if (!fs.existsSync(file)) fail(`no existe ${file}`);
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes(`"${a.id}":`)) fail(`el ID ${a.id} ya existe en ${path.basename(file)}`);
  const openRe = /(export const blogContentGroup: Record<string, BlogContentEntry> = \{)(\r?\n)/;
  const m = src.match(openRe);
  if (!m) fail(`no se encontró la apertura del grupo en ${path.basename(file)}`);
  const eol = m[2];
  const block = `  "${a.id}": {\n    "es": ${JSON.stringify(a.contentEs)},\n    "en": ${JSON.stringify(a.contentEn)}\n  },${eol}`;
  // Se usa una función como reemplazo para que los "$" del contenido
  // (por ejemplo "$375,000") no se interpreten como grupos de captura.
  const next = src.replace(openRe, (_match, opener) => `${opener}${eol}${block}`);
  groupPlans.push({ file, next });
}

if (pendingPosts.length === 0) {
  console.log('Nada que insertar: los 20 artículos ya están presentes.');
  process.exit(0);
}

const endIdx = postsSrc.lastIndexOf('];');
if (endIdx === -1) fail('no se encontró el cierre "];" de blogPosts.ts');
let head = postsSrc.slice(0, endIdx).replace(/\s+$/, '');
if (head.endsWith(',')) head = head.slice(0, -1);
const tail = postsSrc.slice(endIdx);
const newPosts = `${head},\n${pendingPosts.map(metaLiteral).join(',\n')}\n${tail}`;

const checkBlock = newPosts.slice(newPosts.indexOf('export const blogPosts'));
if ((checkBlock.match(/^\s*id:\s*"/gm) || []).length !== existingIds.length + pendingPosts.length) {
  fail('el conteo de IDs tras la inserción no coincide');
}

for (const plan of groupPlans) {
  fs.writeFileSync(plan.file, plan.next, 'utf8');
}
fs.writeFileSync(POSTS_PATH, newPosts, 'utf8');

console.log(`OK: ${pendingPosts.length} metadatos insertados y ${groupPlans.length} cuerpos distribuidos.`);
for (const a of articles) {
  console.log(`  ${a.id} [${a.contentType}] -> group-${String(Number(a.id) % GROUP_COUNT).padStart(2, '0')} :: /${a.contentType === 'blog' ? 'blog' : 'noticias'}/${a.slug}`);
}
