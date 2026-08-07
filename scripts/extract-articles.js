/**
 * extract-articles.js
 *
 * Helper compartido por los scripts de build (generate-rss, generate-sitemap,
 * generate-pages, generate-news-sitemap) para extraer dinámicamente los
 * artículos desde src/translations.ts sin tener que sincronizar a mano los
 * slugs/títulos/fechas en cada script.
 *
 * Parsea el array `export const blogPosts: BlogPost[] = [...]` del archivo
 * translations.ts con un parser ligero línea-por-línea (sin ejecutar TS).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TRANSLATIONS_PATH = path.join(__dirname, '..', 'src', 'translations.ts');

/**
 * Lee el fuente de translations.ts y devuelve el bloque del array blogPosts.
 * @returns {string} texto crudo dentro del array
 */
function readBlogPostsBlock() {
  const src = fs.readFileSync(TRANSLATIONS_PATH, 'utf-8');
  const match = src.match(/export const blogPosts:\s*BlogPost\[\]\s*=\s*\[([\s\S]*?)\];/);
  if (!match) {
    throw new Error('No se pudo encontrar `export const blogPosts: BlogPost[]` en src/translations.ts');
  }
  return match[1];
}

/**
 * Convierte un literal string TS a JS:
 *  - Soporta comillas simples y dobles
 *  - Soporta template literals con backticks
 *  - Resuelve secuencias de escape básicas (\\, \', \", \n, \t)
 *  - DES-escapa comillas embebidas en template literals
 * No ejecuta TS; solo aplica transformaciones conservadoras.
 * @param {string} raw valor string literal desde el fuente
 * @returns {string}
 */
function parseStringLiteral(raw) {
  const trimmed = raw.trim();
  const resolveUnicodeEscapes = (s) => s.replace(/\\u([0-9a-fA-F]{4})/g, (m, hex) => String.fromCharCode(parseInt(hex, 16)));
  if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
    const inner = trimmed.slice(1, -1);
    return resolveUnicodeEscapes(inner.replace(/\\`/g, '`').replace(/\\\$\{/g, '${').replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\'));
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return resolveUnicodeEscapes(trimmed.slice(1, -1).replace(/\\'/g, "'").replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\'));
  }
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return resolveUnicodeEscapes(trimmed.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\'));
  }
  return trimmed;
}

/**
 * Escapa caracteres especiales para XML/HTML (entidades).
 * @param {string} s
 * @returns {string}
 */
function escapeXml(s) {
  return String(s)
    .replace(/&/g, '\u0026amp;')
    .replace(/</g, '\u0026lt;')
    .replace(/>/g, '\u0026gt;')
    .replace(/"/g, '\u0026quot;')
    .replace(/'/g, '\u0026apos;');
}

/**
 * Extrae el valor de un campo `key: 'value'` o `key: "value"` o `key: \`value\``
 * de una línea del fuente. Devuelve null si no hay match.
 * @param {string} line
 * @param {string} key
 * @returns {string|null}
 */
function extractField(line, key) {
  // Soporta strings simples, dobles y template literals multilínea (en ese caso
  // solo captura hasta el primer cierre en la misma línea).
  // (?:\\\\.|[^\\\\]) captura escapes (ej: \' \" \\ \`) sin cortar en ellos.
  const re = new RegExp(`^\\s*${key}:\\s*(['"\`])((?:\\\\.|[^\\\\])*?)\\1`);
  const m = line.match(re);
  if (!m) return null;
  return parseStringLiteral(m[1] + m[2] + m[1]);
}

/**
 * Parser principal: recorre el bloque del array blogPosts y devuelve
 * un array de objetos con slug, titleEs, excerpt, date, imageUrl, categoryEs.
 *
 * Maneja template literals multilinea (contentEs: `...`) saltando líneas hasta
 * encontrar el cierre del string, ya que esos bloques pueden contener comillas
 * y llaves que confundirían a un parser simple.
 *
 * @returns {Array<{slug:string,titleEs:string,excerpt:string,date:string,imageUrl:string,categoryEs:string,titleEn:string,source:string,sourceUrl:string}>}
 */
export function extractArticles() {
  const block = readBlogPostsBlock();
  const lines = block.split('\n');

  const articles = [];
  let pending = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detectar si la línea abre un template literal multilinea para un campo simple
    // (content Es/En, content legacy): en ese caso saltamos hasta el cierre del string.
    // Maneja templates de una sola línea (misma línea cierra) Y multilinea (varias líneas).
    // Importante: contar solo backticks NO escapados (\\` no cuenta como cierre).
    const countUnescapedBackticks = (s) => {
      let c = 0;
      for (let k = 0; k < s.length; k++) {
        if (s[k] === '`' && s[k - 1] !== '\\') c++;
      }
      return c;
    };
    const ticksInLine = countUnescapedBackticks(line);
    if (ticksInLine > 0) {
      // Nota: usamos [\s\S] en lugar de . porque las líneas pueden tener \r final (CRLF)
      const tmplStart = line.match(/^(\s*)([a-zA-Z]+):\s*`([\s\S]*?)\s*\r?$/);
      if (tmplStart && ticksInLine === 1) {
        // Template multilinea: `\` al final, sin cierre en la misma línea.
        let j = i + 1;
        while (j < lines.length) {
          const t = countUnescapedBackticks(lines[j]);
          if (t > 0) { j++; break; }
          j++;
        }
        i = j;
        continue;
      }
      // Si ticksInLine === 2 en la misma línea (template inline), no saltamos: cae al extractor normal.
    }

    const slug = extractField(line, 'slug');
    if (slug !== null) pending.slug = slug;

    const titleEs = extractField(line, 'titleEs');
    if (titleEs !== null) pending.titleEs = titleEs;

    const titleEn = extractField(line, 'titleEn');
    if (titleEn !== null) pending.titleEn = titleEn;

    // Soporta ambos formatos: `excerpt:` (legacy) y `excerptEs:` (i18n actual)
    const excerptLegacy = extractField(line, 'excerpt');
    if (excerptLegacy !== null) pending.excerpt = excerptLegacy;
    const excerptEs = extractField(line, 'excerptEs');
    if (excerptEs !== null) pending.excerpt = excerptEs;

    const date = extractField(line, 'date');
    if (date !== null) {
      pending.date = date;
    }

    const imageUrl = extractField(line, 'imageUrl');
    if (imageUrl !== null) pending.imageUrl = imageUrl;

    const categoryEs = extractField(line, 'categoryEs');
    if (categoryEs !== null) pending.categoryEs = categoryEs;

    const source = extractField(line, 'source');
    if (source !== null) pending.source = source;

    const sourceUrl = extractField(line, 'sourceUrl');
    if (sourceUrl !== null) pending.sourceUrl = sourceUrl;

    // Cierre de objeto: `},` o `}` (último item). Soporta indentación 0 o más.
    if (/^\s*\},?\s*$/.test(line) && pending.slug) {
      articles.push({
        slug: pending.slug,
        titleEs: pending.titleEs || pending.slug,
        titleEn: pending.titleEn || pending.titleEs || pending.slug,
        excerpt: pending.excerpt || '',
        date: pending.date || '',
        imageUrl: pending.imageUrl || '',
        categoryEs: pending.categoryEs || '',
        source: pending.source || '',
        sourceUrl: pending.sourceUrl || '',
      });
      pending = {};
    }

    i++;
  }

  // Ordenar por fecha descendente (más reciente primero) si todas las fechas son válidas
  articles.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return articles;
}

/**
 * Devuelve solo los slugs (para sitemap).
 * @returns {string[]}
 */
export function extractSlugs() {
  return extractArticles().map(a => a.slug);
}

export { escapeXml, parseStringLiteral };
