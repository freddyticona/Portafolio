import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = '2026-07-23';

const sections = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'inicio', priority: '1.0', changefreq: 'weekly' },
  { path: 'sobre-mi', priority: '0.9', changefreq: 'monthly' },
  { path: 'portafolio', priority: '0.9', changefreq: 'weekly' },
  { path: 'cv', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'noticias', priority: '0.9', changefreq: 'daily' },
  { path: 'servicios', priority: '0.9', changefreq: 'monthly' },
  { path: 'reservas', priority: '0.7', changefreq: 'monthly' },
  { path: 'contacto', priority: '0.7', changefreq: 'monthly' },
];

const articles = [
  'detras-de-camaras-la-estrella',
  'evolucion-televisiva-bolivia-analogo-digital',
  'premio-eduardo-abaroa-2026',
  'larga-noche-museos-2026',
  'festival-cine-santa-cruz-2026',
  'bolivia-puesto-91-rsf',
  'cinemateca-217-anos-la-paz',
  'fallece-tito-de-la-vina',
  'nolan-odisea-reparto',
  'reflexion-comparativa-cultura-audiovisual-bolivia-mundo',
  'cinemateca-50-anos-todo-lo-que-era-posible',
  'pianista-daniel-alvarez-gana-premio-sur-musica-nueva',
  'nova-vuelve-sinfonia-de-historias-inolvidables',
  'bolivia-lab-18-edicion-industria-cine',
  'cortometraje-yatichana-galardones-internacionales',
  'detras-epica-aventura-nolan-la-odisea',
  'incentivo-produccion-audiovisual-cultural-2026',
  'festival-cine-salar-uyuni-2026',
  'red-uno-xona-streaming',
  'documental-travesia-tierra-cinemateca',
  'documental-mi-cuerpo-mi-territorio-youtube',
  'serie-boliviana-inteligencia-artificial',
  'messi-bombon-asesino-himno-argentino',
  'morsa-abdominales-viral',
  'chucky-micro-el-torno',
  'abuelita-invento-casero-bicicleta',
  'gatito-maullidos-michael-jackson',
];

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

xml += `</urlset>\n`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

const total = sections.length + articles.length * 2;
console.log(`✅ Sitemap generado: ${outputPath}`);
console.log(`📡 ${total} URLs incluidas`);
