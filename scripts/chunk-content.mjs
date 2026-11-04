/**
 * chunk-content.mjs
 *
 * Trocea src/data/blogContent.ts (un único objeto de ~3,6 MB con los 624
 * artículos) en grupos pequeños de ~16 artículos. Así, al abrir un artículo
 * solo se descarga su grupo (~90 KB) en vez de todo el archivo.
 *
 * El reparto es determinista: grupo = Number(id) % GROUPS, de modo que el
 * runtime no necesita un índice id → grupo.
 *
 * Uso: node scripts/chunk-content.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONTENT_PATH = path.join(ROOT, 'src', 'data', 'blogContent.ts');
const OUT_DIR = path.join(ROOT, 'src', 'data', 'blogContent');
const TMP_DIR = path.join(ROOT, '.tmp-split');
const GROUPS = 39;

if (!fs.existsSync(CONTENT_PATH)) {
  console.log('No existe src/data/blogContent.ts; nada que trocear.');
  process.exit(0);
}

const source = fs.readFileSync(CONTENT_PATH, 'utf8');
if (!/export const blogContent:\s*Record/.test(source)) {
  console.log('blogContent.ts ya está troceado. Nada que hacer.');
  process.exit(0);
}

fs.mkdirSync(TMP_DIR, { recursive: true });
const bundled = path.join(TMP_DIR, 'content.mjs');
await build({
  entryPoints: [CONTENT_PATH],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: bundled,
  logLevel: 'silent',
});
const { blogContent } = await import(pathToFileURL(bundled).href);

const ids = Object.keys(blogContent);
const nonNumeric = ids.filter((id) => !/^\d+$/.test(id));
if (nonNumeric.length) {
  throw new Error(`Hay ids no numéricos, el reparto por módulo no aplica: ${nonNumeric.slice(0, 5).join(', ')}`);
}

const groups = Array.from({ length: GROUPS }, () => ({}));
for (const id of ids) {
  const entry = blogContent[id];
  groups[Number(id) % GROUPS][id] = { es: entry.es ?? '', en: entry.en ?? '' };
}

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const rows = [];
let totalBytes = 0;
groups.forEach((group, index) => {
  const name = `group-${String(index).padStart(2, '0')}`;
  const body = `/**
 * Generado por scripts/chunk-content.mjs — no editar a mano.
 */

import type { BlogContentEntry } from '../blogContentTypes';

export const blogContentGroup: Record<string, BlogContentEntry> = ${JSON.stringify(group, null, 2)};
`;
  fs.writeFileSync(path.join(OUT_DIR, `${name}.ts`), body, 'utf8');
  totalBytes += Buffer.byteLength(body, 'utf8');
  rows.push(`  () => import('./blogContent/${name}').then((m) => m.blogContentGroup),`);
  console.log(`  ${name}: ${Object.keys(group).length} artículos, ${(Buffer.byteLength(body, 'utf8') / 1024).toFixed(0)} KB`);
});

const index = `/**
 * blogContent.ts — Índice de contenido por grupos (generado).
 *
 * El cuerpo completo de los artículos vive en src/data/blogContent/group-XX.ts.
 * Cada grupo pesa ~90 KB y se carga sólo cuando se abre un artículo de ese
 * grupo. Regenerar con: npm run split-content (o npm run chunk-content).
 */

import type { BlogContentEntry } from './blogContentTypes';

export type { BlogContentEntry };

export const CONTENT_GROUP_COUNT = ${GROUPS};

export const contentGroups: Array<() => Promise<Record<string, BlogContentEntry>>> = [
${rows.join('\n')}
];
`;

fs.writeFileSync(CONTENT_PATH, index, 'utf8');
fs.rmSync(TMP_DIR, { recursive: true, force: true });

console.log(`\n✅ ${ids.length} artículos en ${GROUPS} grupos (${(totalBytes / 1024 / 1024).toFixed(2)} MB en total).`);
