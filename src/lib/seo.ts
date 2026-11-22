/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * SEO Metadata Generator
 *
 * Genera meta tags y Open Graph dinámicos para cada página
 * para mejorar el posicionamiento en buscadores.
 *
 * Integrado con structured data para Schema.org
 */

import { updatePageStructuredData } from './structuredData';
import { trackPageView } from './analytics';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'video.other';
  canonical?: string;
  noIndex?: boolean;
}

const SITE_CONFIG = {
  name: 'Freddy Ticona Guzmán',
  url: 'https://freddydev.net',
  locale: 'es_BO',
  ogImageDefault: 'https://freddydev.net/images/OG/OG_HOME.webp',
};

/**
 * Recorta un título a máximo 60 caracteres sin partir palabras.
 */
export function fitTitle(value: string, max = 60): string {
  const clean = String(value || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 12 ? cut.slice(0, lastSpace) : cut)
    .replace(/[\s,;:.–—-]+$/, '') + '…';
}

/**
 * Ajusta una descripción a 140-155 caracteres. Si es corta, añade un gancho
 * comercial; si es larga, recorta en límite de palabra sin bajar de 140.
 */
export function fitDescription(value: string, hook = ' Cotiza tus servicios audiovisuales en La Paz por WhatsApp.'): string {
  const min = 140;
  const max = 155;
  let s = String(value || '').replace(/\s+/g, ' ').trim();
  if (s.length <= max && s.length >= min) return s;
  if (s.length > max) {
    const cut = s.slice(0, max - 1);
    const p = cut.lastIndexOf(' ');
    s = (p >= min - 1 ? cut.slice(0, p) : cut).replace(/[\s,;:.]+$/, '') + '…';
    return s;
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

/**
 * Metadatos SEO para cada página
 */
export const PAGE_METADATA: Record<string, { es: SEOMetadata; en: SEOMetadata }> = {
  inicio: {
    es: {
      title: 'Freddy Ticona | Camarógrafo en La Paz, Bolivia',
      description: 'Camarógrafo y realizador en La Paz con 15+ años en TV y documentales. Filmación 4K, edición y cobertura con precios claros. Cotiza por WhatsApp.',
      keywords: ['camarógrafo La Paz', 'camarógrafo Bolivia', 'filmación profesional La Paz', 'realizador audiovisual Bolivia', 'edición de video profesional', 'documentales Bolivia', 'cobertura periodística', 'productor de video'],
    },
    en: {
      title: 'Freddy Ticona | Cameraman in La Paz, Bolivia',
      description: 'Cameraman and producer in La Paz with 15+ years in TV and documentaries. 4K filming, editing and coverage with clear prices. Quote on WhatsApp.',
      keywords: ['cameraman La Paz', 'video producer Bolivia', 'event filming', 'video editing', 'documentaries Bolivia', 'journalistic coverage'],
    }
  },
  'sobre-mi': {
    es: {
      title: 'Sobre Mí | Freddy Ticona, Camarógrafo en Bolivia',
      description: '15 años en televisión boliviana, premio Eduardo Abaroa 2017 y experiencia en Bolivia TV, RTP y Red Uno. Conoce mi trayectoria y contrátame hoy.',
      keywords: ['biografía camarógrafo', 'Freddy Ticona trayectoria', 'realizador audiovisual Bolivia', 'premio Eduardo Abaroa', 'camarógrafo prensa'],
    },
    en: {
      title: 'About Me | Freddy Ticona, Cameraman in Bolivia',
      description: '15 years in Bolivian television, 2017 Eduardo Abaroa Award and work at Bolivia TV, RTP and Red Uno. Discover my track record and hire me today.',
      keywords: ['cameraman biography', 'Freddy Ticona career', 'video producer Bolivia', 'Eduardo Abaroa award', 'news cameraman'],
    }
  },
  portafolio: {
    es: {
      title: 'Portafolio Audiovisual | Freddy Ticona',
      description: 'Documentales, coberturas y televisión en Bolivia TV, RTP y Red Uno. 8 proyectos reales con fotos y resultados. Cotiza una producción similar.',
      keywords: ['portafolio camarógrafo', 'proyectos documentales Bolivia', 'cobertura televisiva', 'trabajos edición video', 'producciones televisivas Bolivia', 'filmación eventos La Paz'],
    },
    en: {
      title: 'Audiovisual Portfolio | Freddy Ticona',
      description: 'Documentaries, coverage and TV work for Bolivia TV, RTP and Red Uno. 8 real projects with photos and results. Quote a similar production today.',
      keywords: ['cameraman portfolio', 'filming projects', 'Bolivia documentaries', 'video editing works', 'TV productions'],
    }
  },
  cv: {
    es: {
      title: 'CV de Camarógrafo en Bolivia | Freddy Ticona',
      description: 'Formación en comunicación social y cinematografía, certificaciones técnicas y 15 años en TV boliviana. Descarga mi trayectoria y cotiza proyectos.',
      keywords: ['CV camarógrafo Bolivia', 'currículum realizador audiovisual', 'formación técnica video', 'certificaciones Adobe', 'experiencia televisión', 'camarógrafo profesional La Paz'],
    },
    en: {
      title: 'Cameraman CV in Bolivia | Freddy Ticona',
      description: 'Social communication and cinematography training, technical certifications and 15 years in Bolivian TV. Review my experience and quote a project.',
      keywords: ['cameraman CV', 'video producer resume', 'video technical training', 'Adobe certifications', 'television experience'],
    }
  },
  blog: {
    es: {
      title: 'Blog de Filmación y Edición | Freddy Ticona',
      description: 'Tutoriales de cámara, edición y motion graphics con IA, además de guías prácticas para creadores en Bolivia. Aprende y cotiza tus proyectos.',
      keywords: ['blog cinematografía', 'producción video Bolivia', 'técnicas de filmación', 'edición documental', 'periodismo televisivo', 'tips camarógrafo', 'blog video profesional'],
    },
    en: {
      title: 'Filming and Editing Blog | Freddy Ticona',
      description: 'Tutorials on camera, editing and AI motion graphics, plus practical guides for creators in Bolivia. Learn the craft and quote your next project.',
      keywords: ['cinematography blog', 'video production Bolivia', 'filming techniques', 'documentary editing', 'television journalism'],
    }
  },
  contacto: {
    es: {
      title: 'Contacto | Camarógrafo en La Paz, Bolivia',
      description: 'Hablemos de tu proyecto: filmación, edición o documental en La Paz. Respuesta rápida por WhatsApp o formulario con presupuesto personalizado.',
      keywords: ['contactar camarógrafo', 'servicios filmación La Paz', 'camarógrafo Bolivia', 'cotización video', 'producción audiovisual La Paz', 'contratar editor video', 'filmación eventos', 'camarógrafo bodas'],
    },
    en: {
      title: 'Contact | Cameraman in La Paz, Bolivia',
      description: 'Tell me about your project: filming, editing or a documentary in La Paz. Fast reply by WhatsApp or form with a personalized quote. Get in touch.',
      keywords: ['contact cameraman', 'filming services La Paz', 'video quote', 'audiovisual production', 'hire editor'],
    }
  },
  reservas: {
    es: {
      title: 'Reserva tu Filmación en La Paz | Freddy Ticona',
      description: 'Agenda tu sesión de video, edición o consultoría audiovisual en La Paz. Elige fecha, recibe confirmación inmediata y cotiza tu proyecto sin compromiso.',
      keywords: ['reservar camarógrafo La Paz', 'agendar filmación Bolivia', 'cita edición video', 'sistema de reservas', 'agendar producción', 'reservar camarógrafo online'],
    },
    en: {
      title: 'Book Your Filming in La Paz | Freddy Ticona',
      description: 'Schedule your video, editing or consulting session in La Paz. Pick a date, get instant confirmation and request a no-obligation quote today.',
      keywords: ['book cameraman', 'schedule filming', 'video editing appointment', 'booking system', 'arrange production'],
    }
  },
  servicios: {
    es: {
      title: 'Servicios Audiovisuales en La Paz | Freddy Ticona',
      description: 'Filmación 4K, edición, documentales y reels en La Paz desde Bs. 300. Precios reales, entregas en 3 a 5 días y cotización directa por WhatsApp.',
      keywords: ['servicios camarógrafo La Paz', 'filmación eventos Bolivia', 'edición video profesional', 'producción documental', 'consultoría audiovisual', 'filmación bodas La Paz', 'servicios video Bolivia'],
    },
    en: {
      title: 'Audiovisual Services in La Paz | Freddy Ticona',
      description: '4K filming, editing, documentaries and reels in La Paz from BOB 300. Real prices, 3 to 5 day delivery and a direct quote on WhatsApp. Book now.',
      keywords: ['cameraman services', 'event filming Bolivia', 'professional video editing', 'documentary production', 'audiovisual consulting'],
    }
  },
  guias: {
    es: {
      title: 'Guías de Trámites Bolivia 2026 | Freddy Ticona',
      description: '31 guías paso a paso para trámites en Bolivia: SEGIP, licencia, SOAT, pasaporte y NIT. Requisitos, costos 2026 y enlaces oficiales. Empieza aquí.',
      keywords: ['guías trámites Bolivia', 'SEGIP cédula identidad', 'SOAT Bolivia 2026', 'licencia conducir Bolivia', 'pasaporte boliviano', 'NIT Bolivia', 'RUAT transferencia vehicular', 'certificado nacimiento Bolivia', 'antecedentes policiales REAP', 'visa Bolivia'],
    },
    en: {
      title: 'Bolivia Procedures Guides 2026 | Freddy Ticona',
      description: '31 step-by-step guides for procedures in Bolivia: SEGIP, license, SOAT, passport and NIT. Requirements, 2026 costs and official links. Start now.',
      keywords: ['Bolivia procedures guide', 'SEGIP ID card', 'SOAT Bolivia 2026', 'Bolivia driver license', 'Bolivia passport', 'NIT Bolivia', 'Bolivia visa', 'police records Bolivia', 'birth certificate Bolivia'],
    }
  },
  tienda: {
    es: {
      title: 'Tienda Digital | Recursos para Creadores',
      description: 'Compra guiones para Reels, LUTs cinematográficos y el compendio de guías de Bolivia 2026. Descarga inmediata y pago local por WhatsApp.',
      keywords: ['tienda digital Bolivia', 'guiones reels', 'LUTs cinematográficos', 'guías trámites Bolivia PDF', 'recursos para creadores'],
    },
    en: {
      title: 'Digital Store | Creator Resources',
      description: 'Buy Reels scripts, cinematic LUTs and the Bolivia 2026 procedures compendium. Instant download and local WhatsApp payment.',
      keywords: ['digital store Bolivia', 'reels scripts', 'cinematic LUTs', 'Bolivia procedures PDF', 'creator resources'],
    }
  },

};

/** Open Graph diferenciado por sección (1200x630 WebP, nombres en mayúsculas). */
const OG_BY_PAGE: Record<string, string> = {
  inicio: 'https://freddydev.net/images/OG/OG_HOME.webp',
  servicios: 'https://freddydev.net/images/OG/OG_SERVICIOS.webp',
  blog: 'https://freddydev.net/images/OG/OG_BLOG.webp',
  guias: 'https://freddydev.net/images/OG/OG_GUIAS.webp',
  tienda: 'https://freddydev.net/images/OG/OG_TIENDA.webp',
};

/**
 * Actualiza los meta tags del documento dinámicamente
 */
export function updateMetaTags(pageId: string, lang: 'es' | 'en', additionalData?: any): void {
  const metadata = PAGE_METADATA[pageId]?.[lang] || PAGE_METADATA.inicio[lang];
  // Límites estrictos: título <= 60, descripción 140-155 con gancho comercial.
  const title = fitTitle(metadata.title);
  const description = fitDescription(metadata.description);
  const ogImage = OG_BY_PAGE[pageId] || metadata.ogImage || SITE_CONFIG.ogImageDefault;

  // Actualizar título
  document.title = title;

  // Actualizar o crear meta description
  updateOrCreateMetaTag('name', 'description', description);

  // Actualizar o crear meta keywords
  updateOrCreateMetaTag('name', 'keywords', metadata.keywords.join(', '));

  // Actualizar Open Graph
  updateOrCreateMetaTag('property', 'og:title', title);
  updateOrCreateMetaTag('property', 'og:description', description);
  updateOrCreateMetaTag('property', 'og:type', metadata.ogType || 'website');
  updateOrCreateMetaTag('property', 'og:image', ogImage);
  updateOrCreateMetaTag('property', 'og:locale', lang === 'es' ? 'es_BO' : 'en_US');
  updateOrCreateMetaTag('property', 'og:site_name', SITE_CONFIG.name);

  // Actualizar Twitter Card
  updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', title);
  updateOrCreateMetaTag('name', 'twitter:description', description);
  updateOrCreateMetaTag('name', 'twitter:image', ogImage);

  // Actualizar canonical y Open Graph URL
  const pagePath = pageId === 'inicio' ? '/' : `/${pageId}`;
  const canonicalUrl = metadata.canonical || `${SITE_CONFIG.url}${pagePath}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;
  updateOrCreateMetaTag('property', 'og:url', canonicalUrl);

  // hreflang para i18n (SEO multilanguage) — el contenido se sirve en ambos
  // idiomas en la misma URL (toggle), no existen rutas /en/*. Solo apuntamos
  // a la URL actual para evitar que Google indexe URLs inexistentes.
  updateOrCreateLinkTag('link', 'alternate', 'hreflang', 'es', `${SITE_CONFIG.url}${pagePath}`);
  updateOrCreateLinkTag('link', 'alternate', 'hreflang', 'x-default', `${SITE_CONFIG.url}${pagePath}`);

  // robots tag
  if (metadata.noIndex) {
    updateOrCreateMetaTag('name', 'robots', 'noindex, nofollow');
  }

  // Actualizar structured data (JSON-LD)
  updatePageStructuredData(pageId, additionalData);

  // Medición: una sola vista de página por ruta+título. Se emite aquí, y no
  // en el click del enlace, porque aquí el <title> ya es el definitivo: en una
  // SPA React actualiza el título DESPUÉS del pushState, así que medir en el
  // click registraba todas las vistas con el título de la sección anterior.
  trackPageView(window.location.pathname || '/', document.title);
}

/**
 * Determina la ruta primaria de un artículo según su origen
 */
function primaryRoute(post: { source?: string; categoryEs?: string }): string {
  if (post.categoryEs === 'Guías y Trámites') return 'guias';
  return 'blog';
}

/**
 * Actualiza los meta tags para la vista detalle de un artículo
 */
export function updateArticleMetaTags(
  post: { titleEs: string; titleEn: string; excerptEs: string; excerptEn: string; imageUrl?: string; imageCaption?: string; slug: string; source?: string; categoryEs?: string },
  lang: 'es' | 'en',
  pagePath?: string
): void {
  const rawTitle = lang === 'es' ? post.titleEs : post.titleEn;
  const rawDescription = lang === 'es' ? post.excerptEs : post.excerptEn;
  const title = fitTitle(`${rawTitle} | Freddy Ticona`);
  const description = fitDescription(rawDescription);
  const ogImage = post.imageUrl || SITE_CONFIG.ogImageDefault;
  const route = primaryRoute(post);
  const canonicalUrl = `${SITE_CONFIG.url}/${route}/${post.slug}`;

  document.title = title;

  updateOrCreateMetaTag('name', 'description', description);
  const keywords = [post.categoryEs, post.source, title.split(/\s+/).slice(0, 6).join(' ')].filter(Boolean).join(', ');
  updateOrCreateMetaTag('name', 'keywords', keywords);
  updateOrCreateMetaTag('property', 'og:title', title);
  updateOrCreateMetaTag('property', 'og:description', description);
  updateOrCreateMetaTag('property', 'og:type', 'article');
  updateOrCreateMetaTag('property', 'og:image', ogImage);
  updateOrCreateMetaTag('property', 'og:image:alt', post.imageCaption || title);
  updateOrCreateMetaTag('property', 'og:locale', lang === 'es' ? 'es_BO' : 'en_US');
  const siteName = SITE_CONFIG.name;
  updateOrCreateMetaTag('property', 'og:site_name', siteName);
  updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', title);
  updateOrCreateMetaTag('name', 'twitter:description', description);
  updateOrCreateMetaTag('name', 'twitter:image', ogImage);

  const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement || document.createElement('link');
  if (!canonicalLink.parentNode) {
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  updateOrCreateMetaTag('property', 'og:url', canonicalUrl);

  // Medición: la vista del artículo se cuenta con su título real (ver nota en
  // updateMetaTags). La ruta sale del propio artículo para no depender del
  // pushState, que en una SPA puede venir desfasado.
  trackPageView(`/${route}/${post.slug}`, document.title);
}

/**
 * Helper para actualizar o crear un meta tag
 */
function updateOrCreateMetaTag(attrName: string, attrValue: string, content: string): void {
  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

/**
 * Helper para actualizar o crear un link tag (para hreflang, canonical, etc.)
 */
function updateOrCreateLinkTag(
  tagName: string,
  rel: string,
  attrName: string,
  attrValue: string,
  href: string
): void {
  const selector = `${tagName}[rel="${rel}"][${attrName}="${attrValue}"]`;
  let link = document.querySelector(selector) as HTMLLinkElement;

  if (!link) {
    link = document.createElement(tagName) as HTMLLinkElement;
    link.rel = rel;
    link.setAttribute(attrName, attrValue);
    document.head.appendChild(link);
  }

  link.href = href;
}

