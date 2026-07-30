import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = new Date().toISOString().slice(0, 10);

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  if (article.source) return 'noticias';
  return 'blog';
}

const pages = {
  '': {
    title: 'Freddy Ticona Guzmán | Camarógrafo Profesional en La Paz, Bolivia',
    desc: 'Camarógrafo profesional en La Paz, Bolivia. Freddy Ticona Guzmán, realizador audiovisual con 15+ años en televisión, documentales y cobertura periodística. Premio Nacional Eduardo Abaroa 2017.',
    ogTitle: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual',
    path: '/'
  },
  'inicio': {
    title: 'Freddy Ticona Guzmán | Camarógrafo Profesional La Paz Bolivia | Filmación 4K y Documentales',
    desc: 'Portafolio de Freddy Ticona, camarógrafo experto en La Paz, Bolivia. Más de 15 años filmando documentales, cobertura periodística y televisión 4K. Premio Eduardo Abaroa 2017.',
    path: '/inicio',
    canonical: 'https://freddydev.net/',
    noindex: true
  },
  'sobre-mi': {
    title: 'Sobre Mí - Freddy Ticona | Camarógrafo Profesional en Bolivia',
    desc: 'Conoce la trayectoria de Freddy Ticona Guzmán: 15 años en televisión boliviana, camarógrafo en Bolivia TV, Red Uno y RTP. Especialista en cinematografía y producción documental.',
    path: '/sobre-mi'
  },
  'portafolio': {
    title: 'Portafolio de Proyectos Audiovisuales | Documentales y Cobertura Televisiva',
    desc: 'Galería de proyectos de Freddy Ticona: documentales culturales, cobertura periodística nacional e internacional, y producción de video corporativo 4K en Bolivia.',
    path: '/portafolio'
  },
  'cv': {
    title: 'Currículum Camarógrafo Bolivia | Freddy Ticona Guzmán',
    desc: 'Currículum profesional de Freddy Ticona. Licenciado en Comunicación Social, Técnico en Cinematografía. Certificaciones en producción audiovisual y ciberseguridad.',
    path: '/cv'
  },
  'blog': {
    title: 'Blog de Producción Audiovisual y Cinematografía Bolivia | Tips de Filmación',
    desc: 'Blog profesional de Freddy Ticona sobre técnicas de filmación 4K, edición de video, documentales y la evolución de la televisión en Bolivia.',
    path: '/blog'
  },
  'noticias': {
    title: 'Noticias Audiovisuales Bolivia | Cobertura Periodística y Análisis',
    desc: 'Cobertura periodística del acontecer nacional e historias del mundo audiovisual en Bolivia. Crónicas, reportajes y análisis desde la mirada de un camarógrafo con 15 años de experiencia.',
    path: '/noticias'
  },
  'guias': {
    title: 'Guías de Trámites Bolivia | SEGIP, SOAT, Licencias, Pasaportes y más',
    desc: 'Guías actualizadas para realizar trámites en Bolivia: cédula de identidad SEGIP, SOAT, licencia de conducir, pasaporte, NIT, RUAT, certificados y visas. Paso a paso, costos y requisitos oficiales.',
    path: '/guias'
  },
  'galeria': {
    title: 'Galería de Coberturas | Freddy Ticona',
    desc: 'Galería de fotos de coberturas periodísticas, documentales y producciones televisivas de Freddy Ticona en toda Bolivia.',
    path: '/galeria'
  },
  'servicios': {
    title: 'Servicios Audiovisuales La Paz Bolivia | Filmación 4K, Edición y Documentales',
    desc: 'Contrata servicios profesionales de filmación 4K, edición de video, producción de documentales y consultoría audiovisual en La Paz, Bolivia. Cotiza tu proyecto.',
    path: '/servicios'
  },
  'reservas': {
    title: 'Reservar Camarógrafo La Paz Bolivia | Agendar Filmación y Edición Online',
    desc: 'Sistema de reservas online para agendar sesiones de filmación 4K, edición de video y producción audiovisual con Freddy Ticona en La Paz, Bolivia.',
    path: '/reservas'
  },
  'contacto': {
    title: 'Contacto - Contrata Camarógrafo en La Paz Bolivia | Filmación y Edición de Video',
    desc: 'Contacta a Freddy Ticona, camarógrafo profesional en La Paz, Bolivia. Solicita cotizaciones para filmación 4K, edición de video, documentales y cobertura periodística.',
    path: '/contacto'
  }
};

// Artículos del blog y noticias — extraídos dinámicamente de src/translations.ts
const _rawArticles = extractArticles();
const articles = _rawArticles.map(a => ({
  slug: a.slug,
  title: a.titleEs,
  titleEn: a.titleEn || '',
  desc: a.excerpt,
  date: a.date || '',
  imageUrl: a.imageUrl || '',
  source: a.source || '',
  categoryEs: a.categoryEs || '',
}));
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ no encontrado. Ejecuta "npm run build" primero.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Eliminar el schema original (Person, LocalBusiness, VideoObject, Article, BreadcrumbList)
// para que las páginas de artículos no hereden VideoObject de contenido no visible en esas URLs.
const cleanIndexHtml = indexHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');

for (const [key, meta] of Object.entries(pages)) {
  let html = indexHtml;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${meta.desc}"`
  );

  // Replace OG title
  html = html.replace(
    /<meta property="og:title" content=".*?"/,
    `<meta property="og:title" content="${meta.ogTitle || meta.title}"`
  );

  // Replace OG description
  html = html.replace(
    /<meta property="og:description" content=".*?"/,
    `<meta property="og:description" content="${meta.desc}"`
  );

  // Replace OG url
  html = html.replace(
    /<meta property="og:url" content=".*?"/,
    `<meta property="og:url" content="${SITE}${meta.path}"`
  );

  // Replace Twitter title
  html = html.replace(
    /<meta name="twitter:title" content=".*?"/,
    `<meta name="twitter:title" content="${meta.ogTitle || meta.title}"`
  );

  // Replace Twitter description
  html = html.replace(
    /<meta name="twitter:description" content=".*?"/,
    `<meta name="twitter:description" content="${meta.desc}"`
  );

  // Replace Twitter URL
  html = html.replace(
    /<meta name="twitter:url" content=".*?"/,
    `<meta name="twitter:url" content="${SITE}${meta.path}"`
  );

  // Replace canonical URL (con override para páginas como /inicio → /)
  const canonicalUrl = meta.canonical || `${SITE}${meta.path}`;
  html = html.replace(
    /<link rel="canonical" href=".*?"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  // noindex para páginas duplicadas
  if (meta.noindex) {
    html = html.replace(
      /<meta name="robots" content=".*?"/,
      `<meta name="robots" content="noindex, follow"`
    );
  }

  // Add hreflang
  const esUrl = canonicalUrl;
  const enUrl = `${SITE}/en${meta.path === '/' ? '' : meta.path}`;
  html = html.replace(
    '</head>',
    `    <link rel="alternate" hreflang="es" href="${esUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${esUrl}" />
  </head>`
  );

  // Write the file
  if (key === '') {
    // Root page — overwrite index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log(`✅ / → ${meta.title}`);
  } else {
    const dir = path.join(distDir, key);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    console.log(`✅ /${key} → ${meta.title}`);
  }
}

// Generate individual article pages (cada artículo en su ruta primaria)
// Usar cleanIndexHtml sin el schema original para evitar que páginas de artículos
// hereden VideoObject de contenido no visible (causa "Video is not on a display page")
for (const article of articles) {
  const route = primaryPage(article);
  const dir = path.join(distDir, route, article.slug);
  fs.mkdirSync(dir, { recursive: true });
  let html = cleanIndexHtml;
  const articleUrl = `${SITE}/${route}/${article.slug}`;
  const imgUrl = article.imageUrl ? (article.imageUrl.startsWith('http') ? article.imageUrl : `${SITE}${article.imageUrl}`) : 'https://freddydev.net/og-image.jpg';
  const articleType = route === 'guias' ? 'TechArticle' : route === 'blog' ? 'BlogPosting' : 'NewsArticle';
  html = html.replace(/<title>.*?<\/title>/, `<title>${article.title} | Freddy Ticona</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${article.desc}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${article.title}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${article.desc}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${articleUrl}"`);
  html = html.replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${imgUrl}"`);
  html = html.replace(/<meta property="og:type" content=".*?"/, `<meta property="og:type" content="article"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${article.title}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${article.desc}"`);
  html = html.replace(/<meta name="twitter:url" content=".*?"/, `<meta name="twitter:url" content="${articleUrl}"`);
  html = html.replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${imgUrl}"`);
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${articleUrl}"`);
  // Article structured data
  const articleSchema = `{
      "@context": "https://schema.org",
      "@type": "${articleType}",
      "headline": "${article.title.replace(/"/g, '\\"')}",
      "description": "${(article.desc || '').replace(/"/g, '\\"')}",
      "image": "${imgUrl}",
      "url": "${articleUrl}",
      "datePublished": "${article.date || TODAY}",
      "author": {
        "@type": "Person",
        "name": "Freddy Ticona Guzmán"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Freddy Ticona - Servicios Audiovisuales"
      }
    }`;
  html = html.replace('</head>', `    <script type="application/ld+json">${articleSchema}</script>\n  </head>`);
  // hreflang — solo para artículos con contenido en inglés
  const esUrl = articleUrl;
  const enUrl = `${SITE}/en/${route}/${article.slug}`;
  html = html.replace('</head>', `    <link rel="alternate" hreflang="es" href="${esUrl}" />
    <link rel="alternate" hreflang="x-default" href="${esUrl}" />
    ${article.titleEn && article.titleEn !== article.title ? `<link rel="alternate" hreflang="en" href="${enUrl}" />` : ''}
  </head>`);
  // Incluir contenido visible para Googlebot pre-renderizado
  const bodyContent = `
  <div id="seo-content" style="display:none">
    <h1>${article.title}</h1>
    <p>${article.desc}</p>
    <p>Fecha: ${article.date}</p>
    <p>Categoría: ${article.categoryEs}</p>
  </div>`.trim();
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${bodyContent}`);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✅ /${route}/${article.slug}`);
}

const total = Object.keys(pages).length + articles.length;
console.log(`\n🎉 ${total} páginas pre-renderizadas en dist/`);
console.log(`📄 ${articles.length} artículos extraídos dinámicamente de translations.ts`);
