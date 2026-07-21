/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Datos estáticos del blog (mismos que en translations.ts)
const blogPosts = [
  {
    id: '1',
    slug: 'detras-de-camaras-la-estrella',
    title: 'Detrás de cámaras de "La Estrella": Cómo grabamos bajo cero en el Altiplano',
    date: '2026-05-12',
    excerpt: 'Reflexiones y trucos técnicos sobre cómo proteger el equipamiento cinematográfico del frío extremo...'
  },
  {
    id: '2',
    slug: 'evolucion-televisiva-bolivia-analogo-digital',
    title: '15 Años en la TV Boliviana: Mi viaje del formato análogo al flujo digital e IP',
    date: '2026-06-24',
    excerpt: 'Una mirada reflexiva sobre la transformación de las salas de prensa en La Paz...'
  }
];

const siteConfig = {
  title: 'Portafolio Freddy Ticona Guzmán',
  description: 'Camerógrafo y Realizador Audiovisual - Blog de reflexiones y técnicas audiovisuales',
  url: 'https://freddydev.net',
  language: 'es',
  author: {
    name: 'Freddy Ticona Guzmán',
    email: 'freddyticona62@gmail.com'
  }
};

// Generar RSS items
const rssItems = blogPosts.map(post => {
  const link = `${siteConfig.url}/blog/${post.slug}`;
  const guid = link;

  return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${guid}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteConfig.author.email} (${siteConfig.author.name})</author>
    </item>`;
}).join('\n');

// Generar RSS completo
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
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${siteConfig.author.email} (${siteConfig.author.name})</managingEditor>
    <webMaster>${siteConfig.author.email} (${siteConfig.author.name})</webMaster>
${rssItems}
  </channel>
</rss>`;

// Escribir archivo RSS
const rssPath = path.join(__dirname, '../public/rss.xml');
fs.writeFileSync(rssPath, rss, 'utf-8');

console.log('✅ RSS feed generado:', rssPath);
console.log(`📡 ${blogPosts.length} artículos incluidos`);
console.log(`🔗 URL: ${siteConfig.url}/rss.xml`);
