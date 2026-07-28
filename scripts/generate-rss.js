/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * generate-rss.js
 *
 * Genera public/rss.xml dinámicamente desde src/translations.ts
 * (No más slugs hardcodeados — el conteo se calcula en runtime).
 *
 * Email del editor: se lee desde env var RSS_EDITOR_EMAIL si existe;
 * si no, se omite el tag <author> (en lugar de exponer un email en git).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles, escapeXml } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteConfig = {
  title: 'Portafolio Freddy Ticona Guzmán',
  description: 'Camerógrafo y Realizador Audiovisual - Blog de reflexiones y técnicas audiovisuales',
  url: 'https://freddydev.net',
  language: 'es',
  author: {
    name: 'Freddy Ticona Guzmán',
    email: process.env.RSS_EDITOR_EMAIL || ''
  }
};

const blogPosts = extractArticles();

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  if (article.source) return 'noticias';
  return 'blog';
}

const rssItems = blogPosts.map(post => {
  const link = `${siteConfig.url}/${primaryPage(post)}/${post.slug}`;
  const guid = link;
  const safeTitle = escapeXml(post.titleEs);
  const safeExcerpt = escapeXml(post.excerpt);
  const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString();
  const authorTag = siteConfig.author.email
    ? `      <author>${siteConfig.author.email} (${siteConfig.author.name})</author>`
    : '';

  return `    <item>
      <title><![CDATA[${post.titleEs}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${guid}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>${authorTag ? '\n' + authorTag : ''}
    </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.title}]]></title>
    <link>${siteConfig.url}/</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>${siteConfig.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${siteConfig.author.email ? `
    <managingEditor>${siteConfig.author.email} (${siteConfig.author.name})</managingEditor>
    <webMaster>${siteConfig.author.email} (${siteConfig.author.name})</webMaster>` : ''}
${rssItems}
  </channel>
</rss>`;

const rssPath = path.join(__dirname, '../public/rss.xml');
fs.writeFileSync(rssPath, rss, 'utf-8');

console.log('✅ RSS feed generado:', rssPath);
console.log(`📡 ${blogPosts.length} artículos incluidos (extraídos dinámicamente de translations.ts)`);
console.log(`🔗 URL: ${siteConfig.url}/rss.xml`);
if (!siteConfig.author.email) {
  console.log('💡 Tip: define RSS_EDITOR_EMAIL para incluir el tag <author> en el feed.');
}
