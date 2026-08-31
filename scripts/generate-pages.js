import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles, escapeXml } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = new Date().toISOString().slice(0, 10);

const escapeAttr = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

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
  'eclipse-2026': {
    title: 'Eclipse Solar Total 12 de Agosto 2026 | Especial Noticias y Fotos',
    desc: 'Especial del eclipse solar total del 12 de agosto de 2026: 10 noticias por país, galería de fotos, trayectoria y horarios de la totalidad desde Siberia hasta la península ibérica.',
    ogTitle: 'Especial Eclipse Solar Total 2026 | 10 Noticias y Galería',
    path: '/eclipse-2026'
  },
  'showreel': {
    title: 'Showreel Audiovisual | Freddy Ticona Camarógrafo Bolivia | Filmación 4K',
    desc: 'Showreel profesional de Freddy Ticona Guzmán: documentales, cobertura periodística en primera línea, producciones televisivas y proyectos internacionales. Más de 15 años de experiencia en filmación 4K.',
    ogTitle: 'Showreel Audiovisual de Freddy Ticona | Camarógrafo Bolivia',
    path: '/showreel',
    video: true
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
  publishedAt: a.publishedAt || '',
  dateModified: a.dateModified || '',
  imageUrl: a.imageUrl || '',
  source: a.source || '',
  sourceUrl: a.sourceUrl || '',
  imageCaption: a.imageCaption || '',
  categoryEs: a.categoryEs || '',
}));
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ no encontrado. Ejecuta "npm run build" primero.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Identidad editorial de la sección de noticias (debe coincidir con
// src/lib/structuredData.ts para que el HTML estático que lee Googlebot
// sea idéntico al schema inyectado en cliente).
const NEWS_PUBLICATION_NAME = 'FreddyDev Noticias';
const NEWS_ORGANIZATION_LOGO = 'https://freddydev.net/images/news-logo.png';
const NEWS_LOGO_WIDTH = 600;
const NEWS_LOGO_HEIGHT = 60;

// Mapa de dimensiones reales de las imágenes (públicas, generadas por
// generate-image-dimensions.mjs antes del build).
const imageDimsPath = path.join(__dirname, 'image-dimensions.json');
const IMAGE_DIMENSIONS = fs.existsSync(imageDimsPath)
  ? JSON.parse(fs.readFileSync(imageDimsPath, 'utf-8'))
  : {};

/** Hash determinista (djb2) para derivar hora estable por artículo del slug. */
function slugHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Deriva HH:mm:ss entre 08:00:00 y 19:59:59 a partir del slug. */
function deriveTimeFromSlug(slug) {
  const SECONDS = 12 * 3600;
  const offset = slugHash(slug || '') % SECONDS;
  const total = 8 * 3600 + offset;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
}

/** Convierte a datetime ISO 8601 completo (usa publishedAt si existe). */
function toFullIsoDateTime(date, slug) {
  if (!date) return '';
  if (/\d{4}-\d{2}-\d{2}T/.test(date)) return date;
  return `${date}T${deriveTimeFromSlug(slug)}-04:00`;
}

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

  // Add hreflang — el contenido se sirve en ambos idiomas en la misma URL (toggle), sin URLs /en
  const esUrl = canonicalUrl;
  html = html.replace(
    '</head>',
    `    <link rel="alternate" hreflang="es" href="${esUrl}" />
    <link rel="alternate" hreflang="x-default" href="${esUrl}" />
  </head>`
  );

  // VideoObject JSON-LD para la página dedicada del showreel
  if (meta.video) {
    const videoSchema = `{
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Freddy Ticona Guzmán - Showreel Audiovisual 2026",
      "description": "Showreel profesional de Freddy Ticona Guzmán: documentales, cobertura periodística, producciones televisivas y proyectos internacionales. Más de 15 años de experiencia.",
      "thumbnailUrl": "https://img.youtube.com/vi/MK4au-qQcsw/hqdefault.jpg",
      "uploadDate": "2026-07-01T12:00:00-04:00",
      "embedUrl": "https://www.youtube.com/embed/MK4au-qQcsw",
      "contentUrl": "https://www.youtube.com/watch?v=MK4au-qQcsw",
      "author": {
        "@type": "Person",
        "name": "Freddy Ticona Guzmán",
        "url": "${SITE}/#person"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Freddy Ticona - Servicios Audiovisuales",
        "logo": {
          "@type": "ImageObject",
          "url": "${SITE}/favicon.ico"
        }
      }
    }`;
    html = html.replace('</head>', `    <script type="application/ld+json">${videoSchema}</script>\n  </head>`);
  }

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
  // Identidad: la sección de noticias no debe heredar la marca del portafolio
  // (auditoría SEO). og:site_name refleja la sección según la ruta primaria.
  const siteName = route === 'noticias' ? 'FreddyDev - Noticias' : 'Freddy Ticona Guzmán';
  html = html.replace(/<meta property="og:site_name" content=".*?"/, `<meta property="og:site_name" content="${siteName}"`);
  // og:image:alt descriptivo del artículo (evita heredar "Camarógrafo Profesional")
  const imgAlt = escapeAttr(article.imageCaption || article.title);
  html = html.replace(/<meta property="og:image:alt" content=".*?"/, `<meta property="og:image:alt" content="${imgAlt}"`);
  // meta keywords derivados del artículo (evita keywords del portafolio en noticias)
  const keywords = [article.categoryEs, article.source, article.title.split(/\s+/).slice(0, 6).join(' ')].filter(Boolean).join(', ');
  html = html.replace(/<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${escapeAttr(keywords)}"`);
  // Twitter image alt para consistencia con og:image:alt
  html = html.replace(/<meta name="twitter:image:alt" content=".*?"/, `<meta name="twitter:image:alt" content="${imgAlt}"`);
  // Article structured data (datePublished con hora, dateModified real, ImageObject con dimensiones)
  const dims = article.imageUrl ? IMAGE_DIMENSIONS[article.imageUrl] : undefined;
  const published = toFullIsoDateTime(article.publishedAt || article.date, article.slug);
  const modified = toFullIsoDateTime(article.dateModified || article.publishedAt || article.date, article.slug);

  // Construir el schema como objeto y serializar (evita problemas de escape).
  const schemaObj = {
    '@context': 'https://schema.org',
    '@type': articleType,
    headline: article.title,
    description: article.desc || '',
    image: {
      '@type': 'ImageObject',
      url: imgUrl,
      ...(article.imageCaption ? { caption: article.imageCaption } : {}),
      ...(dims?.width ? { width: dims.width } : {}),
      ...(dims?.height ? { height: dims.height } : {}),
    },
    url: articleUrl,
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Freddy Ticona Guzmán',
      jobTitle: 'Camarógrafo y Realizador Audiovisual',
      url: SITE,
    },
    publisher:
      route === 'noticias'
        ? {
            '@type': 'NewsMediaOrganization',
            '@id': `${SITE}/#news-organization`,
            name: NEWS_PUBLICATION_NAME,
            url: `${SITE}/noticias`,
            description: 'Redacción de noticias de FreddyDev especializada en actualidad boliviana, cobertura internacional y análisis de medios. Contenido verificado, con atribución transparente de fuentes.',
            logo: { '@type': 'ImageObject', url: NEWS_ORGANIZATION_LOGO, width: NEWS_LOGO_WIDTH, height: NEWS_LOGO_HEIGHT },
          }
        : {
            '@type': 'Organization',
            name: 'Freddy Ticona - Servicios Audiovisuales',
            logo: { '@type': 'ImageObject', url: NEWS_ORGANIZATION_LOGO, width: NEWS_LOGO_WIDTH, height: NEWS_LOGO_HEIGHT },
          },
    ...(article.categoryEs ? { articleSection: article.categoryEs } : {}),
    ...(route === 'noticias' ? { dateline: 'La Paz, Bolivia', inLanguage: 'es' } : {}),
  };

  const articleSchema = JSON.stringify(schemaObj);
  html = html.replace('</head>', `    <script type="application/ld+json">${articleSchema}</script>\n  </head>`);
  // Meta tags de artículo (Google News, Facebook, X leen HTML estático)
  const articleMeta = `
    <meta property="article:published_time" content="${published}" />
    <meta property="article:modified_time" content="${modified}" />
    ${article.categoryEs ? `<meta property="article:section" content="${article.categoryEs.replace(/"/g, '&quot;')}" />` : ''}
  `;
  html = html.replace('</head>', `${articleMeta}\n  </head>`);
  // hreflang — el contenido se sirve en ambos idiomas en la misma URL (toggle), sin URLs /en
  const esUrl = articleUrl;
  html = html.replace('</head>', `    <link rel="alternate" hreflang="es" href="${esUrl}" />
    <link rel="alternate" hreflang="x-default" href="${esUrl}" />
  </head>`);
  // Incluir contenido visible para Googlebot pre-renderizado
  const bodyContent = `
  <div id="seo-content" style="display:none">
    <h1>${article.title}</h1>
    <p>${article.desc}</p>
    <p>Fecha: ${article.date}</p>
    <p>Categoría: ${article.categoryEs}</p>
    ${article.source ? `<p>Fuente: ${escapeXml(article.source)}${article.sourceUrl ? ` — ${escapeXml(article.sourceUrl)}` : ''}</p>` : ''}
  </div>`.trim();
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${bodyContent}`);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✅ /${route}/${article.slug}`);
}

const total = Object.keys(pages).length + articles.length;
console.log(`\n🎉 ${total} páginas pre-renderizadas en dist/`);
console.log(`📄 ${articles.length} artículos extraídos dinámicamente de translations.ts`);
