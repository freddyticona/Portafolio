/**
 * generate-news-sitemap.js
 *
 * Genera public/news-sitemap.xml (Google News Sitemap).
 * Solo incluye URLs de los últimos 2 días según especificación de Google News.
 *
 * Google News requiere:
 * - <news:publication> con name + language
 * - <news:publication_date>
 * - <news:title>
 * - <news:keywords> (opcional, mejora indexación)
 *
 * Los artículos se extraen dinámicamente desde src/translations.ts
 * usando el helper compartido extract-articles.js.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';

const allArticles = extractArticles();

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  if (article.source) return 'noticias';
  return 'blog';
}

const articles = allArticles.map(a => ({
  slug: a.slug,
  date: a.date,
  title: a.titleEs,
  keywords: a.categoryEs ? [a.categoryEs] : [],
  source: a.source,
  categoryEs: a.categoryEs,
}));

// Filtrar artículos de los últimos 2 días (Google News policy)
const now = new Date();
const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

const recentArticles = articles.filter(a => {
  if (!a.date) return false;
  const d = new Date(a.date);
  return d >= twoDaysAgo;
});

// Si no hay artículos recientes, igual generar con los últimos 10 (para que Google reconozca el sitemap)
const sitemapArticles = recentArticles.length > 0 ? recentArticles : articles.slice(0, 10);

const escTitle = (s) => String(s)
  .replace(/&/g, '\u0026amp;')
  .replace(/</g, '\u0026lt;')
  .replace(/>/g, '\u0026gt;')
  .replace(/"/g, '\u0026quot;');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const article of sitemapArticles) {
  const safeTitle = escTitle(article.title);
  const kw = article.keywords.length ? `<news:keywords>${escTitle(article.keywords.join(','))}</news:keywords>` : '';
  const route = primaryPage(article);
  xml += `  <url>
    <loc>${SITE}/${route}/${article.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>FreddyDev</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${safeTitle}</news:title>
      ${kw}
    </news:news>
  </url>\n`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '..', 'public', 'news-sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Google News Sitemap generado: ${outputPath}`);
console.log(`📡 ${sitemapArticles.length} URLs de noticias incluidas (recientes: ${recentArticles.length})`);

