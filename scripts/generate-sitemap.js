/**
 * generate-sitemap.js
 *
 * Genera public/sitemap.xml dinámicamente desde src/translations.ts.
 * Las secciones estáticas siguen definidas aquí; los slugs de artículos
 * se extraen automáticamente con extract-articles.js.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = new Date().toISOString().slice(0, 10);

// Encontrar la fecha más reciente de artículos por sección
function maxDate(articles, route, fallback) {
  const posts = articles.filter(a => primaryPage(a) === route);
  if (posts.length === 0) return fallback;
  const dates = posts.map(a => a.date).filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d));
  if (dates.length === 0) return fallback;
  dates.sort().reverse();
  return dates[0];
}

const sections = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'sobre-mi', priority: '0.9', changefreq: 'monthly' },
  { path: 'portafolio', priority: '0.9', changefreq: 'weekly' },
  { path: 'cv', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'noticias', priority: '0.9', changefreq: 'daily' },
  { path: 'guias', priority: '0.8', changefreq: 'weekly' },
  { path: 'galeria', priority: '0.7', changefreq: 'monthly' },
  { path: 'showreel', priority: '0.9', changefreq: 'monthly' },
  { path: 'servicios', priority: '0.9', changefreq: 'monthly' },
  { path: 'reservas', priority: '0.7', changefreq: 'monthly' },
  { path: 'contacto', priority: '0.7', changefreq: 'monthly' },
];

const articles = extractArticles();

// Fecha más reciente del sitio para páginas sin contenido asociado
const SITE_MAX_DATE = articles.filter(a => /^\d{4}-\d{2}-\d{2}$/.test(a.date))
  .map(a => a.date).sort().reverse()[0] || TODAY;

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  if (article.source) return 'noticias';
  return 'blog';
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Secciones Principales -->\n`;

for (const section of sections) {
  const loc = section.path === '' ? SITE : `${SITE}/${section.path}`;
  const sectionSlug = section.path || 'inicio';
  const sectionDate = (sectionSlug !== 'inicio') ? maxDate(articles, sectionSlug, SITE_MAX_DATE) : SITE_MAX_DATE;
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${sectionDate}</lastmod>
    <changefreq>${section.changefreq}</changefreq>
    <priority>${section.priority}</priority>
  </url>\n`;
}

xml += `\n  <!-- Artículos (cada uno en su ruta primaria) -->\n`;

for (const article of articles) {
  const route = primaryPage(article);
  const priority = route === 'guias' ? '0.7' : '0.6';
  const articleDate = (article.date && /^\d{4}-\d{2}-\d{2}$/.test(article.date)) ? article.date : TODAY;
  xml += `  <url>
    <loc>${SITE}/${route}/${article.slug}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

const total = sections.length + articles.length;
console.log(`✅ Sitemap generado: ${outputPath}`);
console.log(`🗺  ${total} URLs incluidas (${sections.length} secciones + ${articles.length} artículos en ruta única)`);
