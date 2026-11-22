import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractArticles, escapeXml } from './extract-articles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://freddydev.net';
const TODAY = new Date().toISOString().slice(0, 10);

/**
 * Extrae el cuerpo HTML (idioma español) de un artículo a partir de su id.
 *
 * Los cuerpos viven en src/data/blogContent/group-XX.ts, donde XX = id % 39
 * (grupos 00..38). El formato es un objeto JSON-like con claves string (id) y
 * valores { "es": "HTML...", "en": "HTML..." }. Se captura el campo "es" con
 * una regex que respeta escapes (\\", \\\\, \\n, \\uXXXX).
 *
 * Devuelve null si no se encuentra el id o el archivo no existe, de modo que
 * el build nunca se rompe por un artículo sin cuerpo.
 *
 * @param {string|number} id
 * @returns {string|null}
 */
function loadArticleBody(id) {
  const num = parseInt(id, 10);
  if (!Number.isFinite(num)) return null;
  const group = num % 39;
  const groupFile = path.join(__dirname, '..', 'src', 'data', 'blogContent', 'group-' + String(group).padStart(2, '0') + '.ts');
  if (!fs.existsSync(groupFile)) return null;
  const src = fs.readFileSync(groupFile, 'utf-8');
  const keyIdx = src.indexOf('"' + id + '"');
  if (keyIdx === -1) return null;
  const esIdx = src.indexOf('"es"', keyIdx);
  if (esIdx === -1) return null;
  // find the colon after "es"
  const colonIdx = src.indexOf(':', esIdx);
  if (colonIdx === -1) return null;
  // find the opening quote of the value
  let i = colonIdx + 1;
  while (i < src.length && (src[i] === ' ' || src[i] === '\t' || src[i] === '\n' || src[i] === '\r')) i++;
  if (src[i] !== '"') return null;
  i++; // skip opening quote
  // scan the string, handling escapes
  let result = '';
  while (i < src.length) {
    const c = src[i];
    if (c === '"') {
      // end of string
      break;
    }
    if (c === '\\') {
      const next = src[i + 1];
      if (next === 'n') { result += '\n'; i += 2; continue; }
      if (next === 't') { result += '\t'; i += 2; continue; }
      if (next === 'r') { result += '\r'; i += 2; continue; }
      if (next === '"') { result += '"'; i += 2; continue; }
      if (next === '\\') { result += '\\'; i += 2; continue; }
      if (next === 'u') {
        const hex = src.slice(i + 2, i + 6);
        if (/^[0-9a-fA-F]{4}$/.test(hex)) {
          result += String.fromCharCode(parseInt(hex, 16));
          i += 6;
          continue;
        }
      }
      // unknown escape: keep backslash and char
      result += c;
      i++;
      continue;
    }
    result += c;
    i++;
  }
  return result;
}

const escapeAttr = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

/** Título <= 60 caracteres, recortado en límite de palabra. */
function fitTitle(value, max = 60) {
  const clean = String(value || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const p = cut.lastIndexOf(' ');
  return (p > 12 ? cut.slice(0, p) : cut).replace(/[\s,;:.–—-]+$/, '') + '…';
}

/** Descripción 140-155 caracteres con gancho comercial. */
function fitDescription(value, hook = ' Cotiza tus servicios audiovisuales en La Paz por WhatsApp.') {
  const min = 140;
  const max = 155;
  let s = String(value || '').replace(/\s+/g, ' ').trim();
  if (s.length >= min && s.length <= max) return s;
  if (s.length > max) {
    const cut = s.slice(0, max - 1);
    const p = cut.lastIndexOf(' ');
    return (p >= min - 1 ? cut.slice(0, p) : cut).replace(/[\s,;:.]+$/, '') + '…';
  }
  for (const extra of [hook, ' Precios claros y entrega rápida.', ' Atención personalizada en Bolivia.']) {
    if (s.length >= min) break;
    s = (s + extra).replace(/\s+/g, ' ').trim();
  }
  if (s.length > max) {
    const cut = s.slice(0, max - 1);
    const p = cut.lastIndexOf(' ');
    s = (p >= min - 1 ? cut.slice(0, p) : cut).replace(/[\s,;:.]+$/, '') + '…';
  }
  return s;
}

/** FAQPage real de una guía, a partir de sus H2/H3 y el primer párrafo posterior. */
function buildGuideFaq(title, body) {
  const clean = (s) => String(s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  const plain = (s) => clean(s)
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|\s)\*([^*]+)\*/g, '$1$2')
    .replace(/^[\s>*+\-]+/, '')
    .replace(/^\d+[.)]\s+/, '');
  const qa = [];
  const push = (rawQ, rawA) => {
    const q = plain(rawQ).replace(/[:：]\s*$/, '');
    let a = plain(rawA);
    if (q.length < 10 || q.length > 160 || a.length < 40) return;
    if (a.length > 600) a = a.slice(0, 597).trimEnd() + '…';
    qa.push({ name: /[?¿]$/.test(q) ? q : `¿${q}?`, text: a });
  };
  const lines = (body || '').split(/\r?\n/);
  for (let i = 0; i < lines.length && qa.length < 5; i++) {
    const heading = lines[i].match(/^#{2,4}\s+(.+)$/);
    if (!heading) continue;
    let answer = '';
    for (let j = i + 1; j < lines.length; j++) {
      const line = lines[j].trim();
      if (/^#{1,4}\s/.test(line)) break;
      if (!line || /^[-|:]+$/.test(line) || line.startsWith('|') || line.startsWith('---')) continue;
      answer = line;
      if (plain(line).length >= 40) break;
    }
    push(heading[1], answer);
  }
  if (qa.length === 0) {
    const re = /<h[23][^>]*>([\s\S]*?)<\/h[23]>([\s\S]*?)(?=<h[23][^>]*>|$)/gi;
    let m;
    while ((m = re.exec(body || '')) !== null && qa.length < 5) {
      const p = m[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      push(m[1], p ? p[1] : '');
    }
  }
  if (qa.length === 0) {
    const t = String(title).replace(/\s*\|\s*.*$/, '').trim();
    qa.push({ name: `¿Cómo se hace ${t}?`, text: `Esta guía explica paso a paso ${t.toLowerCase()}, con requisitos, costos actualizados y enlaces oficiales.` });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(q => ({ '@type': 'Question', name: q.name, acceptedAnswer: { '@type': 'Answer', text: q.text } })),
  };
}

function primaryPage(article) {
  if (article.categoryEs === 'Guías y Trámites') return 'guias';
  return 'blog';
}

const pages = {
  '': {
    title: 'Freddy Ticona | Camarógrafo en La Paz, Bolivia',
    desc: 'Camarógrafo y realizador en La Paz con 15+ años en TV y documentales. Filmación 4K, edición y cobertura con precios claros. Cotiza por WhatsApp.',
    ogTitle: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual',
    path: '/'
  },
  'inicio': {
    title: 'Freddy Ticona | Camarógrafo en La Paz, Bolivia',
    desc: 'Camarógrafo y realizador en La Paz con 15+ años en TV y documentales. Filmación 4K, edición y cobertura con precios claros. Cotiza por WhatsApp.',
    path: '/inicio',
    canonical: 'https://freddydev.net/',
    noindex: true
  },
  'sobre-mi': {
    title: 'Sobre Mí | Freddy Ticona, Camarógrafo en Bolivia',
    desc: '15 años en televisión boliviana, premio Eduardo Abaroa 2017 y experiencia en Bolivia TV, RTP y Red Uno. Conoce mi trayectoria y contrátame hoy.',
    path: '/sobre-mi'
  },
  'portafolio': {
    title: 'Portafolio Audiovisual | Freddy Ticona',
    desc: 'Documentales, coberturas y televisión en Bolivia TV, RTP y Red Uno. 8 proyectos reales con fotos y resultados. Cotiza una producción similar.',
    path: '/portafolio'
  },
  'cv': {
    title: 'CV de Camarógrafo en Bolivia | Freddy Ticona',
    desc: 'Formación en comunicación social y cinematografía, certificaciones técnicas y 15 años en TV boliviana. Descarga mi trayectoria y cotiza proyectos.',
    path: '/cv'
  },
  'blog': {
    title: 'Blog de Filmación y Edición | Freddy Ticona',
    desc: 'Tutoriales de cámara, edición y motion graphics con IA, además de guías prácticas para creadores en Bolivia. Aprende y cotiza tus proyectos.',
    path: '/blog'
  },
  'guias': {
    title: 'Guías de Trámites Bolivia 2026 | Freddy Ticona',
    desc: '31 guías paso a paso para trámites en Bolivia: SEGIP, licencia, SOAT, pasaporte y NIT. Requisitos, costos 2026 y enlaces oficiales. Empieza aquí.',
    path: '/guias'
  },
  'galeria': {
    title: 'Galería de Coberturas | Freddy Ticona',
    desc: 'Fotos reales de documentales, coberturas periodísticas y televisión en Bolivia. 8 proyectos con galerías completas y resultados. Cotiza tu cobertura.',
    path: '/galeria'
  },
  'eclipse-2026': {
    title: 'Eclipse Solar 2026 | Especial y Galería',
    desc: 'Especial del eclipse solar total del 12 de agosto de 2026: noticias por país, fotos, trayectoria y horarios. Sigue la cobertura completa ahora.',
    ogTitle: 'Especial Eclipse Solar Total 2026 | 10 Noticias y Galería',
    path: '/eclipse-2026'
  },
  'reportaje-iran-furia-epica': {
    title: 'Irán 2026 | Operación Furia Épica',
    desc: 'Reportaje especial sobre la Operación Furia Épica: cronología, actores y consecuencias del conflicto que reconfiguró Oriente Medio. Léelo ahora.',
    ogTitle: 'Operación Furia Épica | Reportaje Especial Irán',
    path: '/reportaje-iran-furia-epica'
  },
  'reportaje-gaza-desarme': {
    title: 'Gaza | Desarme en Disputa',
    desc: 'Reportaje especial sobre la tregua en Gaza: desarme de Hamás, retirada israelí y el Consejo de Paz. Análisis y cronología actualizada. Léelo ahora.',
    ogTitle: 'Gaza: Desarme en Disputa | Reportaje Especial',
    path: '/reportaje-gaza-desarme'
  },
  'reportaje-ucrania-estancamiento': {
    title: 'Ucrania | Negociaciones Estancadas',
    desc: 'Reportaje especial sobre el estancamiento de las negociaciones Rusia-Ucrania y la escalada militar de 2026. Cronología y análisis. Léelo ahora.',
    ogTitle: 'Ucrania: Negociaciones Estancadas | Reportaje Especial',
    path: '/reportaje-ucrania-estancamiento'
  },
  'reportaje-malvinas-historia': {
    title: 'Malvinas | 192 Años de Disputa',
    desc: 'Reportaje especial sobre la disputa por las Islas Malvinas: de la ocupación británica de 1833 a la base naval de 2026. Historia y análisis completo.',
    ogTitle: 'Malvinas: 192 Años de Disputa | Reportaje Especial',
    path: '/reportaje-malvinas-historia'
  },
  'servicios': {
    title: 'Servicios Audiovisuales en La Paz | Freddy Ticona',
    desc: 'Filmación 4K, edición, documentales y reels en La Paz desde Bs. 300. Precios reales, entregas en 3 a 5 días y cotización directa por WhatsApp.',
    path: '/servicios'
  },
  'reservas': {
    title: 'Reserva tu Filmación en La Paz | Freddy Ticona',
    desc: 'Agenda tu sesión de video, edición o consultoría audiovisual en La Paz. Elige fecha, recibe confirmación inmediata y cotiza tu proyecto sin compromiso.',
    path: '/reservas'
  },
  'contacto': {
    title: 'Contacto | Camarógrafo en La Paz, Bolivia',
    desc: 'Hablemos de tu proyecto: filmación, edición o documental en La Paz. Respuesta rápida por WhatsApp o formulario con presupuesto personalizado.',
    path: '/contacto'
  }
};

// Artículos del blog y noticias — extraídos dinámicamente de src/data/blogPosts.ts
const _rawArticles = extractArticles();
const articles = _rawArticles.map(a => ({
  id: a.id || '',
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

// Catálogo real de servicios y precios — misma fuente que la app y el
// JSON-LD de cliente (src/data/servicesPricing.json → src/config.ts).
const SERVICES_PRICING = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'servicesPricing.json'), 'utf-8')
);

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
  const pageTitle = fitTitle(meta.title);
  const pageDesc = fitDescription(meta.desc);

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${pageTitle}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${pageDesc}"`
  );

  // Replace OG title
  html = html.replace(
    /<meta property="og:title" content=".*?"/,
    `<meta property="og:title" content="${fitTitle(meta.ogTitle || meta.title)}"`
  );

  // Replace OG description
  html = html.replace(
    /<meta property="og:description" content=".*?"/,
    `<meta property="og:description" content="${pageDesc}"`
  );

  // Replace OG url
  html = html.replace(
    /<meta property="og:url" content=".*?"/,
    `<meta property="og:url" content="${SITE}${meta.path}"`
  );

  // Replace Twitter title
  html = html.replace(
    /<meta name="twitter:title" content=".*?"/,
    `<meta name="twitter:title" content="${fitTitle(meta.ogTitle || meta.title)}"`
  );

  // Replace Twitter description
  html = html.replace(
    /<meta name="twitter:description" content=".*?"/,
    `<meta name="twitter:description" content="${pageDesc}"`
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

  // Services + FAQ JSON-LD para la página /servicios.
  // Usa el catálogo real (src/data/servicesPricing.json) para que el schema
  // estático y el contenido visible muestren los mismos servicios y precios.
  if (key === 'servicios') {
    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Servicios Audiovisuales',
      description: 'Servicios de filmación, edición, fotografía y animación con precios base en La Paz, Bolivia',
      itemListElement: SERVICES_PRICING.map((service, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: service.nameEs,
        description: service.descriptionEs,
        serviceType: service.type,
        provider: { '@id': `${SITE}/#business` },
        areaServed: [
          { '@type': 'City', name: 'La Paz' },
          { '@type': 'City', name: 'El Alto' },
          { '@type': 'Country', name: 'Bolivia' }
        ],
        offers: {
          '@type': 'Offer',
          price: String(service.basePrice),
          priceCurrency: service.currency,
          availability: 'https://schema.org/InStock',
          url: `${SITE}/servicios`
        }
      }))
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma la entrega?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El material finalizado se entrega en un plazo de 3 a 5 días hábiles posteriores a la conclusión de la grabación o recepción del material.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Viajas a otras ciudades?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, estoy disponible para todo Bolivia con costo adicional de viáticos.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué incluye el precio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cada tarifa incluye preproducción, grabación multicámara Full HD (2 cámaras Nikon D5100), audio profesional inalámbrico con micrófono Rode Wireless GO 3, edición, corrección de color y entrega final en MP4 (H.264).'
          }
        }
      ]
    };

    html = html.replace(
      '</head>',
      `    <script type="application/ld+json">${JSON.stringify(servicesSchema)}</script>\n` +
      `    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n  </head>`
    );
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
  const articleTitle = fitTitle(`${article.title} | Freddy Ticona`);
  const articleDesc = fitDescription(article.desc);
  html = html.replace(/<title>.*?<\/title>/, `<title>${articleTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${articleDesc}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${articleTitle}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${articleDesc}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${articleUrl}"`);
  html = html.replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${imgUrl}"`);
  html = html.replace(/<meta property="og:type" content=".*?"/, `<meta property="og:type" content="article"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${articleTitle}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${articleDesc}"`);
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
  // Las guías de trámites añaden un FAQPage con preguntas reales del cuerpo
  // (H2/H3 + primer párrafo), también en el HTML estático que lee Googlebot.
  if (route === 'guias') {
    const body = loadArticleBody(article.id);
    if (body) {
      const faq = JSON.stringify(buildGuideFaq(article.title, body));
      html = html.replace('</head>', `    <script type="application/ld+json">${faq}</script>\n  </head>`);
    }
  }
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
  // Incluir contenido visible para Googlebot pre-renderizado.
  // Además del resumen (H1 + descripción), se inyecta el cuerpo completo del
  // artículo extraído de src/data/blogContent/group-XX.ts, para que crawlers
  // que no ejecutan JS (Googlebot en modo sin render, crawlers de IA, etc.)
  // vean el texto real y no solo el teaser.
  const articleBodyHtml = (typeof loadArticleBody === 'function') ? loadArticleBody(article.id) : null;
  const bodyContent = `
  <div id="seo-content" style="display:none">
    <h1>${article.title}</h1>
    <p>${article.desc}</p>
    <p>Fecha: ${article.date}</p>
    <p>Categoría: ${article.categoryEs}</p>
    ${article.source ? `<p>Fuente: ${escapeXml(article.source)}${article.sourceUrl ? ` — ${escapeXml(article.sourceUrl)}` : ''}</p>` : ''}
    ${articleBodyHtml ? `<article>${articleBodyHtml}</article>` : ''}
  </div>`.trim();
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${bodyContent}`);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✅ /${route}/${article.slug}`);
}

// Fichas individuales de servicios: URL propia, precio visible y schema
// Service + Offer + BreadcrumbList + FAQPage para búsquedas con intención
// ("cuánto cuesta X en La Paz 2026").
const servicesCatalog = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'servicesPricing.json'), 'utf-8'));
for (const service of servicesCatalog) {
  const dir = path.join(distDir, 'servicios', service.id);
  fs.mkdirSync(dir, { recursive: true });
  let html = cleanIndexHtml;
  const url = `${SITE}/servicios/${service.id}`;
  const priceLabel = service.currency === 'BOB' ? `Bs. ${service.basePrice}` : `${service.currency} ${service.basePrice}`;
  const title = fitTitle(`${service.nameEs} en La Paz 2026 | Desde ${priceLabel}`);
  const desc = fitDescription(`${service.nameEs} en La Paz desde ${priceLabel}. ${service.descriptionEs} Cotiza por WhatsApp.`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${escapeAttr(desc)}"`);
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${escapeAttr(title)}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${escapeAttr(desc)}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${url}"`);
  html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${escapeAttr(title)}"`);
  html = html.replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${escapeAttr(desc)}"`);
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${url}"`);

  const serviceSchema = {
    '@type': 'Service', '@id': `${url}#service`,
    name: service.nameEs, description: service.descriptionEs,
    serviceType: service.id, provider: { '@id': `${SITE}/#business` },
    areaServed: [
      { '@type': 'City', name: 'La Paz' },
      { '@type': 'City', name: 'El Alto' },
      { '@type': 'Country', name: 'Bolivia' },
    ],
    url,
    offers: { '@type': 'Offer', price: String(service.basePrice), priceCurrency: service.currency, availability: 'https://schema.org/InStock', url },
  };
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/servicios` },
      { '@type': 'ListItem', position: 3, name: service.nameEs, item: url },
    ],
  };
  const faq = {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `¿Cuánto cuesta ${service.nameEs}?`, acceptedAnswer: { '@type': 'Answer', text: `El precio base es ${priceLabel} (${service.duration}). El costo final se confirma según el alcance del proyecto.` } },
      { '@type': 'Question', name: `¿Qué incluye ${service.nameEs}?`, acceptedAnswer: { '@type': 'Answer', text: service.featuresEs.join('. ') + '.' } },
      { '@type': 'Question', name: '¿En qué ciudades ofreces este servicio?', acceptedAnswer: { '@type': 'Answer', text: 'Trabajo en La Paz y El Alto, y viajo a cualquier departamento de Bolivia para proyectos especiales con viáticos aparte.' } },
    ],
  };
  html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [serviceSchema, breadcrumb, faq] })}</script>\n  </head>`);

  const bodyContent = `<div class="max-w-4xl mx-auto px-4 py-16 space-y-6">
    <h1>${escapeXml(service.nameEs)} en La Paz, Bolivia</h1>
    <p>${escapeXml(service.descriptionEs)}</p>
    <p>Precio base: <strong>${priceLabel}</strong> · ${escapeXml(service.duration)}</p>
    <h2>¿Qué incluye?</h2>
    <ul>${service.featuresEs.map(f => `<li>${escapeXml(f)}</li>`).join('')}</ul>
    <h2>Preguntas frecuentes</h2>
    ${faq.mainEntity.map(q => `<h3>${escapeXml(q.name)}</h3><p>${escapeXml(q.acceptedAnswer.text)}</p>`).join('')}
    <p><a href="/servicios">Ver todos los servicios</a> · <a href="/contacto">Solicitar cotización</a></p>
  </div>`.trim();
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${bodyContent}`);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✅ /servicios/${service.id}`);
}

const total = Object.keys(pages).length + articles.length + servicesCatalog.length;
console.log(`\n🎉 ${total} páginas pre-renderizadas en dist/`);
console.log(`📄 ${articles.length} artículos extraídos dinámicamente de blogPosts.ts`);
console.log(`💼 ${servicesCatalog.length} fichas de servicio con schema Service + FAQ`);
