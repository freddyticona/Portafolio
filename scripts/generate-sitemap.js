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
import { extractSlugs } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = new Date().toISOString().slice(0, 10);

const sections = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'inicio', priority: '1.0', changefreq: 'weekly' },
  { path: 'sobre-mi', priority: '0.9', changefreq: 'monthly' },
  { path: 'portafolio', priority: '0.9', changefreq: 'weekly' },
  { path: 'cv', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'noticias', priority: '0.9', changefreq: 'daily' },
  { path: 'guias', priority: '0.8', changefreq: 'weekly' },
  { path: 'galeria', priority: '0.7', changefreq: 'monthly' },
  { path: 'servicios', priority: '0.9', changefreq: 'monthly' },
  { path: 'reservas', priority: '0.7', changefreq: 'monthly' },
  { path: 'contacto', priority: '0.7', changefreq: 'monthly' },
];

const articles = extractSlugs();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Secciones Principales -->\n`;

for (const section of sections) {
  const loc = section.path === '' ? SITE : `${SITE}/${section.path}`;
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${section.changefreq}</changefreq>
    <priority>${section.priority}</priority>
  </url>\n`;
}

xml += `\n  <!-- Artículos (Blog + Noticias) -->\n`;

for (const slug of articles) {
  // Blog route
  xml += `  <url>
    <loc>${SITE}/blog/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;

  // Noticias route
  xml += `  <url>
    <loc>${SITE}/noticias/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
}

xml += `\n  <!-- Guías de Trámites (ruta independiente) -->\n`;

const guiaSlugs = articles.filter(s => s.startsWith('guia-'));
for (const slug of guiaSlugs) {
  xml += `  <url>
    <loc>${SITE}/guias/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
}

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

const total = sections.length + articles.length * 2 + guiaSlugs.length;
console.log(`✅ Sitemap generado: ${outputPath}`);
console.log(`🗺  ${total} URLs incluidas (${sections.length} secciones + ${articles.length} artículos × 2 rutas + ${guiaSlugs.length} guías)`);
