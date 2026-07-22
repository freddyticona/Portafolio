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
  },
  {
    id: '3',
    slug: 'premio-eduardo-abaroa-2026',
    title: 'Premio Eduardo Abaroa 2026: entregaron más de Bs 1,3 millones a 79 ganadores',
    date: '2026-07-11',
    excerpt: 'El Ministerio de Culturas premió a 79 ganadores de la versión 2026 del galardón más importante de las artes...'
  },
  {
    id: '4',
    slug: 'larga-noche-museos-2026',
    title: 'XX Larga Noche de Museos: miles de personas colmaron espacios culturales en La Paz y El Alto',
    date: '2026-07-11',
    excerpt: 'Más de 100 espacios culturales abrieron sus puertas de forma gratuita en la vigésima edición...'
  },
  {
    id: '5',
    slug: 'festival-cine-santa-cruz-2026',
    title: 'Festival de Cine de Santa Cruz 2026: lo mejor del audiovisual boliviano en cartelera',
    date: '2026-07-10',
    excerpt: 'La décima edición del FENAVID trajo 48 producciones nacionales y una delegación internacional récord.'
  },
  {
    id: '6',
    slug: 'bolivia-puesto-91-rsf',
    title: 'RSF: Bolivia se ubica en el puesto 91 de alto riesgo para periodistas en el mundo',
    date: '2026-05-18',
    excerpt: 'El informe 2026 de Reporteros Sin Fronteras ubica a Bolivia en la categoría de "alto riesgo"...'
  },
  {
    id: '7',
    slug: 'cinemateca-217-anos-la-paz',
    title: 'Cinemateca Boliviana celebra 217 años de La Paz con ciclo de cine nacional gratuito',
    date: '2026-07-15',
    excerpt: 'Desde clásicos restaurados hasta estrenos contemporáneos, la Cinemateca programó una semana de funciones gratuitas...'
  },
  {
    id: '8',
    slug: 'fallece-tito-de-la-vina',
    title: 'Fallece Tito de la Viña, leyenda del periodismo deportivo boliviano, a los 87 años',
    date: '2026-07-18',
    excerpt: 'El reconocido periodista deportivo, con más de seis décadas de trayectoria en radio y televisión...'
  },
  {
    id: '9',
    slug: 'nolan-odisea-reparto',
    title: 'Christopher Nolan lleva "La Odisea" al cine: el reparto incluye a Matt Damon y Tom Holland',
    date: '2026-07-14',
    excerpt: 'El aclamado director británico confirmó el reparto de su próxima epopeya basada en el clásico de Homero.'
  },
  {
    id: '10',
    slug: 'reflexion-comparativa-cultura-audiovisual-bolivia-mundo',
    title: 'Bolivia en el espejo del mundo: reflexión comparativa sobre cultura audiovisual y periodismo',
    date: '2026-07-21',
    excerpt: 'Un análisis que contrasta las noticias bolivianas con sus equivalentes internacionales en acceso cultural, libertad de prensa y preservación audiovisual.'
  },
  {
    id: '11',
    slug: 'cinemateca-50-anos-todo-lo-que-era-posible',
    title: 'Cinemateca Boliviana: 50 Años Preservando la Memoria Audiovisual',
    date: '2026-07-19',
    excerpt: 'El expresidente y fundador de la Cinemateca Boliviana, Carlos D. Mesa, escribe un emotivo relato sobre el nacimiento de la institución.'
  },
  {
    id: '12',
    slug: 'pianista-daniel-alvarez-gana-premio-sur-musica-nueva',
    title: 'Pianista Daniel Álvarez gana Premio Sur de Música Nueva Latinoamericana',
    date: '2026-07-17',
    excerpt: 'El compositor orureño Daniel Álvarez Veizaga conquistó el máximo galardón en la primera edición del certamen internacional.'
  },
  {
    id: '13',
    slug: 'nova-vuelve-sinfonia-de-historias-inolvidables',
    title: 'NOVA Filarmónica vuelve con la "Sinfonía de historias inolvidables"',
    date: '2026-07-19',
    excerpt: 'La NOVA Filarmónica presenta el segundo programa de su temporada 2026 fusionando bandas sonoras del cine con obras maestras sinfónicas.'
  },
  {
    id: '14',
    slug: 'bolivia-lab-18-edicion-industria-cine',
    title: 'Bolivia Lab 2026: Dos filmes son la previa del encuentro de la industria del cine iberoamericano',
    date: '2026-07-19',
    excerpt: 'La décimo octava edición de Bolivia Lab se desarrollará en La Paz, Cochabamba, Santa Cruz y Sucre con actividades para profesionales del audiovisual.'
  },
  {
    id: '15',
    slug: 'cortometraje-yatichana-galardones-internacionales',
    title: 'Cortometraje boliviano "Yatichana" conquista dos galardones internacionales',
    date: '2026-07-03',
    excerpt: 'El documental del cineasta cochabambino Mauricio Panozo alcanzó el primer lugar en My Hero International Film Festival.'
  },
  {
    id: '16',
    slug: 'detras-epica-aventura-nolan-la-odisea',
    title: 'Detrás de la épica aventura de Christopher Nolan para llevar "La Odisea" al cine',
    date: '2026-07-14',
    excerpt: 'Nolan viajó a seis países, usó barcos reales en mares reales y rodó íntegramente en película IMAX.'
  },
  {
    id: '17',
    slug: 'incentivo-produccion-audiovisual-cultural-2026',
    title: 'Abren convocatoria para incentivar la producción audiovisual y cultural en Bolivia',
    date: '2026-06-19',
    excerpt: 'El Viceministerio de Culturas lanzó seis líneas de incentivo económico, incluyendo una específica para creación y producción audiovisual.'
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
