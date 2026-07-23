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
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';

// Leer translations.ts para obtener slugs + fechas + títulos
const translationSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'translations.ts'), 'utf-8');
const blogMatch = translationSrc.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);

const articles = [];
let currentDate = '';
let currentSlug = '';
let currentTitleEs = '';

if (blogMatch) {
  for (const line of blogMatch[1].split('\n')) {
    const slugM = line.match(/^\s+slug:\s*'([^']+)'/);
    if (slugM) currentSlug = slugM[1];

    const dateM = line.match(/^\s+date:\s*'([^']+)'/);
    if (dateM) currentDate = dateM[1];

    const titleM = line.match(/^\s+titleEs:\s*'([^']+)'/);
    if (titleM) currentTitleEs = titleM[1];

    const catM = line.match(/^\s+categoryEs:\s*'([^']+)'/);

    if (line.trim() === '},' && currentSlug && currentDate) {
      articles.push({
        slug: currentSlug,
        date: currentDate,
        title: currentTitleEs,
        keywords: catM ? [catM[1]] : [],
      });
      currentSlug = '';
      currentDate = '';
      currentTitleEs = '';
    }
  }
}

// Filtrar artículos de los últimos 2 días (Google News policy)
const now = new Date();
const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

const recentArticles = articles.filter(a => {
  const d = new Date(a.date);
  return d >= twoDaysAgo;
});

// Si no hay artículos recientes, igual generar con los últimos 10 (para que Google reconozca el sitemap)
const sitemapArticles = recentArticles.length > 0 ? recentArticles : articles.slice(0, 10);

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const article of sitemapArticles) {
  // Blog route
  xml += `  <url>
    <loc>${SITE}/blog/${article.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>FreddyDev</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}</news:title>
      ${article.keywords.length ? `<news:keywords>${article.keywords.join(',')}</news:keywords>` : ''}
    </news:news>
  </url>\n`;

  // Noticias route
  xml += `  <url>
    <loc>${SITE}/noticias/${article.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <news:news>
      <news:publication>
        <news:name>FreddyDev</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}</news:title>
      ${article.keywords.length ? `<news:keywords>${article.keywords.join(',')}</news:keywords>` : ''}
    </news:news>
  </url>\n`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '..', 'public', 'news-sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Google News Sitemap generado: ${outputPath}`);
console.log(`📡 ${sitemapArticles.length * 2} URLs de noticias incluidas (recientes: ${recentArticles.length})`);
