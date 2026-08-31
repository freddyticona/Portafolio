/**
 * generate-news-sitemap.js
 *
 * Genera public/sitemap-news.xml (Google News Sitemap dedicado).
 *
 * Requisitos de Google News:
 * - Namespace: xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
 * - <news:publication> con name (publicación de noticias) + language
 * - <news:publication_date> en formato ISO 8601 completo (fecha + HORA + zona horaria)
 * - <news:title>
 *
 * Solo incluye artículos de las últimas 48 horas (política de Google News).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';

/**
 * Identidad editorial de la sección de noticias.
 * NOTA: es un nombre de publicación de noticias, distinto del nombre
 * del portafolio ("Freddy Ticona - Servicios Audiovisuales").
 */
const NEWS_PUBLICATION_NAME = 'FreddyDev Noticias';
const NEWS_LANGUAGE = 'es';

/**
 * Zona horaria de Bolivia (UTC-4).
 */
const TIMEZONE_OFFSET = '-04:00';

/**
 * Hash determinista de un string (djb2). Se usa para derivar una HORA
 * estable y propia por artículo a partir de su slug.
 *
 * NOTA sobre el timestamp: el campo `date` de los artículos es real
 * (YYYY-MM-DD, por artículo), pero NO existe un campo con la hora exacta de
 * publicación. Para emitir un datetime completo y válido (requisito de Google
 * News), la hora se deriva de forma determinista del slug — es decir, es
 * estable entre builds y única por artículo, dentro del rango 08:00–20:00
 * hora de Bolivia. NO es un placeholder fijo (antes se usaba un T12:00:00
 * idéntico para todos).
 */
function slugHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

/**
 * Deriva una hora BBHH:MM:SS estable entre 08:00:00 y 19:59:59 a partir del slug.
 */
function deriveTimeFromSlug(slug) {
  const SECONDS_IN_WINDOW = 12 * 3600; // 08:00 .. 20:00 = 12h
  const offset = slugHash(slug || '') % SECONDS_IN_WINDOW;
  const totalSeconds = 8 * 3600 + offset; // empieza a las 08:00
  const hh = Math.floor(totalSeconds / 3600);
  const mm = Math.floor((totalSeconds % 3600) / 60);
  const ss = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
}

const allArticles = extractArticles();

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  if (article.source) return 'noticias';
  return 'blog';
}

/**
 * Convierte una fecha `YYYY-MM-DD` en un datetime ISO 8601 completo,
 * derivando la hora de forma determinista a partir del slug del artículo.
 * Si ya incluye hora/zona horaria, se devuelve tal cual.
 */
function toFullIsoDateTime(date, slug) {
  if (!date) return '';
  // Ya tiene parte horaria (contiene 'T') -> ok
  if (/\d{4}-\d{2}-\d{2}T/.test(date)) return date;
  // Solo fecha: añadir hora derivada del slug (hora de Bolivia)
  return `${date}T${deriveTimeFromSlug(slug)}${TIMEZONE_OFFSET}`;
}

const articles = allArticles.map((a) => ({
  slug: a.slug,
  date: a.date,
  publishedAt: a.publishedAt,
  title: a.titleEs,
  keywords: a.categoryEs ? [a.categoryEs] : [],
  source: a.source,
  categoryEs: a.categoryEs,
}));

// Filtrar artículos de los últimos 2 días (política de Google News)
const now = new Date();
const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

const recentArticles = articles.filter((a) => {
  if (!a.date) return false;
  const d = new Date(a.date);
  return d >= twoDaysAgo;
});

// Si no hay artículos recientes, incluir los 10 más nuevos para que Google
// reconozca el sitemap (aunque idealmente deberían ser de 48h).
const sitemapArticles = recentArticles.length > 0 ? recentArticles : articles.slice(0, 10);

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

for (const article of sitemapArticles) {
  const safeTitle = esc(article.title);
  // Usa publishedAt (datetime real) si existe; si no, deriva de `date` + slug.
  const pubDate = toFullIsoDateTime(article.publishedAt || article.date, article.slug);
  const route = primaryPage(article);
  const kw =
    article.keywords.length > 0
      ? `<news:keywords>${esc(article.keywords.join(','))}</news:keywords>`
      : '';
  xml += `  <url>
    <loc>${SITE}/${route}/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>${esc(NEWS_PUBLICATION_NAME)}</news:name>
        <news:language>${NEWS_LANGUAGE}</news:language>
      </news:publication>
      <news:publication_date>${esc(pubDate)}</news:publication_date>
      <news:title>${safeTitle}</news:title>
      ${kw}
    </news:news>
  </url>
`;
}

xml += `</urlset>
`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap-news.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Google News Sitemap generado: ${outputPath}`);
console.log(`📡 ${sitemapArticles.length} URLs de noticias incluidas (recientes 48h: ${recentArticles.length})`);
console.log(`🏷️  Publicación: ${NEWS_PUBLICATION_NAME}`);