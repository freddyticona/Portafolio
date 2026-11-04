/**
 * split-content.mjs
 *
 * Fase 2 de rendimiento: separa el CONTENIDO de los artículos (contentEs /
 * contentEn, ~4 MB) de sus METADATOS (título, extracto, fecha, imagen...).
 *
 *   - src/data/blogPosts.ts   → metadatos (lo que consumen las listas)
 *   - src/data/blogContent.ts → contenido completo por id (solo detalle)
 *
 * Uso: node scripts/split-content.mjs [--dry-run]
 *
 * Es idempotente: si blogPosts.ts ya no tiene contentEs/contentEn, no hace nada.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const POSTS_PATH = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
const CONTENT_PATH = path.join(ROOT, 'src', 'data', 'blogContent.ts');
const TMP_DIR = path.join(ROOT, '.tmp-split');
const dryRun = process.argv.includes('--dry-run');

async function loadPosts() {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const outFile = path.join(TMP_DIR, 'posts.mjs');
  await build({
    entryPoints: [POSTS_PATH],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: outFile,
    logLevel: 'silent',
  });
  const mod = await import(pathToFileURL(outFile).href);
  return mod.blogPosts;
}

function countContent(posts) {
  return posts.filter((p) => typeof p.contentEs === 'string' || typeof p.contentEn === 'string').length;
}

const posts = await loadPosts();
console.log(`Artículos leídos: ${posts.length}`);

const withContent = countContent(posts);
if (withContent === 0) {
  console.log('blogPosts.ts ya está separado. Nada que hacer.');
  process.exit(0);
}

// Validaciones
const ids = new Set();
const dupes = [];
for (const p of posts) {
  if (ids.has(p.id)) dupes.push(p.id);
  ids.add(p.id);
}
if (dupes.length) {
  throw new Error(`IDs duplicados: ${dupes.slice(0, 10).join(', ')}`);
}

const withoutBoth = posts.filter((p) => !p.contentEs || !p.contentEn);
if (withoutBoth.length) {
  console.warn(`⚠ ${withoutBoth.length} artículos sin contentEs o contentEn completos.`);
}

const content = {};
const meta = posts.map((p) => {
  const { contentEs, contentEn, ...rest } = p;
  content[p.id] = { es: contentEs ?? '', en: contentEn ?? '' };
  return rest;
});

/**
 * JSON.stringify entrecomilla las claves; para el archivo de metadatos las
 * dejamos como identificadores (`id:` en vez de `"id":`) porque así lo espera
 * el parser de scripts/extract-articles.js y es más legible.
 */
function serializeMeta(value) {
  return JSON.stringify(value, null, 2).replace(/^(\s*)"([A-Za-z_$][\w$]*)":/gm, '$1$2:');
}

const metaSource = `/**
 * blogPosts.ts — Metadatos editoriales (${meta.length} artículos, ES/EN).
 *
 * Solo lo necesario para listar: título, extracto, fecha, imagen, categoría…
 * El contenido completo vive en blogContent.ts y se carga bajo demanda al
 * abrir un artículo (ver src/data/loader.ts).
 *
 * Los scripts de build (RSS, sitemap, páginas) leen este archivo.
 */

import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = ${serializeMeta(meta)};
`;

const contentSource = `/**
 * blogContent.ts — Cuerpo completo de los artículos (${meta.length} entradas, ES/EN).
 *
 * Archivo generado por scripts/split-content.mjs. No editarlo a mano: se
 * regenera a partir de blogPosts.ts. Se importa dinámicamente sólo en la
 * página de detalle para que /blog, /noticias y /guias no lo descarguen.
 */

export type BlogContentEntry = { es: string; en: string };

export const blogContent: Record<string, BlogContentEntry> = ${JSON.stringify(content, null, 2)};
`;

const metaBytes = Buffer.byteLength(metaSource, 'utf8');
const contentBytes = Buffer.byteLength(contentSource, 'utf8');
console.log(`Metadatos: ${(metaBytes / 1024).toFixed(1)} KB`);
console.log(`Contenido: ${(contentBytes / 1024).toFixed(1)} KB`);
console.log(`Con contenido: ${withContent} / ${posts.length}`);

if (dryRun) {
  console.log('Dry run: no se escribió nada.');
} else {
  fs.writeFileSync(POSTS_PATH, metaSource, 'utf8');
  fs.writeFileSync(CONTENT_PATH, contentSource, 'utf8');
  fs.rmSync(TMP_DIR, { recursive: true, force: true });
  console.log('✅ Escritos src/data/blogPosts.ts y src/data/blogContent.ts');
}
