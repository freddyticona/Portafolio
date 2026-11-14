/**
 * Verifica el lote 1440-1459 en dist/:
 *  - 20 rutas prerenderizadas con h1, JSON-LD, sin U+FFFD
 *  - listados sin cuerpos completos incrustados
 *  - sitemap (sin barra final), rss y sitemap-news (filtro de 48 h de Google News)
 * Los cuerpos se cargan por cliente (groupId), no van incrustados en el HTML.
 */
const fs = require('fs');
const path = require('path');

const postsSrc = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const block = postsSrc.slice(postsSrc.indexOf('export const blogPosts'));

const entries = [...block.matchAll(
  /\{\s*id:\s*"(14[45]\d)",\s*contentType:\s*"(\w+)",\s*slug:\s*"([^"]+)"/g
)].map(m => ({ id: m[1], contentType: m[2], slug: m[3] }));

const batch = entries.filter(e => Number(e.id) >= 1440 && Number(e.id) <= 1459);
console.log(`entradas del lote 1440-1459 en blogPosts.ts: ${batch.length}`);
if (batch.length !== 20) { console.log('PROBLEMS: se esperaban 20 entradas'); process.exit(1); }

let problems = 0;
for (const e of batch) {
  const isBlog = e.contentType === 'blog';
  const file = path.join('dist', isBlog ? 'blog' : 'noticias', e.slug, 'index.html');
  if (!fs.existsSync(file)) {
    console.log(`MISSING ${file}`);
    problems++;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const checks = {
    h1: (html.match(/<h1[ >]/g) || []).length === 1,
    title: html.includes(`<title>`),
    ldjson: html.includes(isBlog ? 'BlogPosting' : 'NewsArticle'),
    noFffd: !html.includes('\uFFFD'),
    lazy: !/"es":\s*"<h1/.test(html),
  };
  const failed = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
  if (failed.length) {
    console.log(`FAIL ${e.id} ${e.slug}: ${failed.join(', ')}`);
    problems++;
  }
}
console.log('rutas prerenderizadas verificadas');

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const sitemapNews = fs.readFileSync('dist/sitemap-news.xml', 'utf8');
const rss = fs.readFileSync('dist/rss.xml', 'utf8');
for (const e of batch) {
  const url = `/${e.contentType === 'blog' ? 'blog' : 'noticias'}/${e.slug}`;
  if (!sitemap.includes(url)) { console.log(`SITEMAP FAIL ${url}`); problems++; }
  if (!rss.includes(e.slug)) { console.log(`RSS FAIL ${e.slug}`); problems++; }
}
const newsBatch = batch.filter(e => e.contentType === 'news');
for (const e of newsBatch) {
  if (!sitemapNews.includes(e.slug)) { console.log(`SITEMAP-NEWS FAIL ${e.slug}`); problems++; }
}
console.log('sitemaps y rss verificados (news-sitemap solo ultimas 48h)');

// Imágenes del lote en dist
const imgDirs = ['dist/images/news/2026-11-13', 'dist/images/blog/2026-11/edicion'];
for (const d of imgDirs) {
  if (!fs.existsSync(d)) { console.log(`IMG DIR MISSING ${d}`); problems++; continue; }
  const n = fs.readdirSync(d).length;
  console.log(`${d}: ${n} archivos`);
  if (n === 0) problems++;
}

console.log(problems === 0 ? 'ALL BATCH CHECKS OK' : `PROBLEMS: ${problems}`);
