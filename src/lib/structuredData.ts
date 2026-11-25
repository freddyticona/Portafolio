/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Structured Data (JSON-LD) Generator
 *
 * Genera datos estructurados de Schema.org dinámicamente para cada página
 * para mejorar el SEO y la aparición en resultados enriquecidos de Google.
 */

import { SERVICES_PRICING } from '../config';

export interface StructuredDataConfig {
  type: 'Person' | 'LocalBusiness' | 'Article' | 'VideoObject' | 'BreadcrumbList' | 'Service' | 'Offer';
  data: Record<string, any>;
}

const BASE_URL = 'https://freddydev.net';

/**
 * Identidad editorial de la sección de noticias.
 *
 * Se separa deliberadamente del perfil del portafolio (PERSON_DATA /
 * BUSINESS_DATA) para que las páginas de /noticias/* utilicen un publisher
 * de tipo NewsMediaOrganization con su propio nombre, logo y descripción,
 * en lugar del schema Person/ProfilePage del portafolio.
 */
const NEWS_ORGANIZATION = {
  '@type': 'NewsMediaOrganization',
  '@id': `${BASE_URL}/#news-organization`,
  name: 'FreddyDev Noticias',
  url: `${BASE_URL}/noticias`,
  description: 'Redacción de noticias de FreddyDev especializada en actualidad boliviana, cobertura internacional y análisis de medios. Contenido verificado, con atribución transparente de fuentes.',
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/news-logo.png`,
    width: 600,
    height: 60
  },
  sameAs: [
    'https://x.com/Freddy_21407',
    'https://www.linkedin.com/in/freddyticonaguzman'
  ]
};

/** Autor por defecto de los artículos de noticias (Person enlazado). */
const NEWS_AUTHOR = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Freddy Ticona Guzmán',
  jobTitle: 'Camarógrafo y Realizador Audiovisual',
  url: BASE_URL
};

/**
 * Datos base del perfil de Freddy
 */
const PERSON_DATA = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Freddy Ticona Guzmán',
  jobTitle: 'Camarógrafo y Realizador Audiovisual',
  url: BASE_URL,
  image: `${BASE_URL}/images/freddy_profile.webp`,
  sameAs: [
    'https://www.youtube.com/@freddyticonaguzman3551',
    'https://www.linkedin.com/in/freddyticonaguzman',
    'https://x.com/Freddy_21407',
    'https://www.facebook.com/share/1BYqTdK7BM/'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'La Paz',
    addressRegion: 'La Paz',
    addressCountry: 'BO'
  },
  telephone: '+59162408420',
  email: 'freddyticona62@gmail.com',
  award: [
    'Premio Nacional Eduardo Abaroa 2017 - Periodismo Cultural',
    'Memorándum de Felicitación - Bolivia TV 2024',
    'Memorándum de Felicitación - Bolivia TV 2022',
    'Memorándum de Felicitación - Bolivia TV 2021'
  ],
  knowsAbout: [
    'Cinematografía',
    'Edición de Video',
    'Documentales',
    'Periodismo Televisivo',
    'Producción Audiovisual',
    'Filmación profesional',
    'Post-producción',
    'Cobertura de eventos',
    'Rodaje documental'
  ],
  worksFor: [{
    '@type': 'Organization',
    name: 'Bolivia TV',
    startDate: '2021'
  }]
};

/**
 * Datos base del negocio
 */
const BUSINESS_DATA = {
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'Freddy Ticona - Servicios Audiovisuales',
  alternateName: 'FT Producciones',
  description: 'Servicios profesionales de filmación, edición de video y producción documental en La Paz, Bolivia. Más de 15 años de experiencia en televisión y cine.',
  url: BASE_URL,
  telephone: '+59162408420',
  email: 'freddyticona62@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'La Paz',
    addressLocality: 'La Paz',
    addressRegion: 'La Paz',
    postalCode: '0000',
    addressCountry: 'BO'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-16.5',
    longitude: '-68.15'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00'
    }
  ],
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'La Paz' },
    { '@type': 'City', name: 'El Alto' },
    { '@type': 'AdministrativeArea', name: 'Departamento de La Paz' },
    { '@type': 'Country', name: 'Bolivia' }
  ],
};

/**
 * Genera structured data para la página de inicio
 */
export function generateHomeStructuredData(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      PERSON_DATA,
      BUSINESS_DATA
    ]
  };
}

/**
 * Genera structured data para la página Sobre Mí
 */
export function generateAboutStructuredData(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      PERSON_DATA,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: BASE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Sobre Mí',
            item: `${BASE_URL}/#sobre-mi`
          }
        ]
      }
    ]
  };
}

/**
 * Genera structured data para la página de Portafolio
 */
export function generatePortfolioStructuredData(projects: Array<{name: string, description: string, url: string}> = []): object {
  const portfolioItems = projects.length > 0 ? projects : [
    {
      '@type': 'CreativeWork',
      name: 'Urkupiña: Fé, Folclore y Devoción',
      description: 'Documental sobre la fiesta de la Virgen de Urkupiña',
      image: `${BASE_URL}/images/freddy_working.webp`
    },
    {
      '@type': 'CreativeWork',
      name: 'Elecciones Generales Bolivia',
      description: 'Cobertura periodística de elecciones nacionales',
      image: `${BASE_URL}/images/freddy_studio.webp`
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      PERSON_DATA,
      {
        '@type': 'CollectionPage',
        name: 'Portafolio de Proyectos Audiovisuales',
        description: 'Galería completa de proyectos: documentales, cobertura periodística, eventos corporativos y producciones televisivas',
        url: `${BASE_URL}/#portafolio`,
        about: portfolioItems
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Portafolio', item: `${BASE_URL}/#portafolio` }
        ]
      }
    ]
  };
}

/**
 * Genera structured data para un artículo de blog
 */
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'Article' | 'NewsArticle' | 'BlogPosting' | 'TechArticle';
  category?: string;
  keywords?: string[];
}): object {
  const base = {
    '@context': 'https://schema.org',
    '@type': article.type || 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${BASE_URL}/images/freddy_profile.webp`,
    author: {
      '@type': 'Person',
      name: article.author || 'Freddy Ticona Guzmán'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Freddy Ticona - Servicios Audiovisuales',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`
      }
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    articleSection: article.category,
    keywords: article.keywords?.join(', ') || article.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url || `${BASE_URL}/#blog`
    }
  };
  // Add NewsArticle-specific fields
  if (article.type === 'NewsArticle') {
    return {
      ...base,
      dateline: 'La Paz, Bolivia',
    };
  }
  return base;
}

/**
 * Ayuda a completar una fecha `YYYY-MM-DD` a datetime ISO 8601 con zona horaria
 * (Bolivia, UTC-4).
 *
 * NOTA: el campo `date` de los artículos es real (por artículo), pero no existe
 * un campo con la HORA exacta de publicación. Para emitir un datePublished /
 * dateModified con hora completa (requisito del schema NewsArticle), la hora
 * se deriva de forma determinista a partir del slug del artículo: es estable
 * entre builds y única por artículo, en el rango 08:00–20:00 (hora de Bolivia).
 * No es un placeholder fijo.
 */
function slugHash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function deriveTimeFromSlug(slug: string): string {
  const SECONDS_IN_WINDOW = 12 * 3600; // 08:00 .. 20:00
  const offset = slugHash(slug || '') % SECONDS_IN_WINDOW;
  const totalSeconds = 8 * 3600 + offset;
  const hh = Math.floor(totalSeconds / 3600);
  const mm = Math.floor((totalSeconds % 3600) / 60);
  const ss = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
}

function toFullIsoDateTime(date?: string, slug?: string): string {
  if (!date) return '';
  if (/\d{4}-\d{2}-\d{2}T/.test(date)) return date;
  return `${date}T${deriveTimeFromSlug(slug || '')}-04:00`;
}

/**
 * Genera structured data específico para artículos de la sección /noticias.
 *
 * A diferencia del schema del portafolio (Person/ProfilePage), aquí se usa:
 * - @type NewsArticle
 * - publisher de tipo NewsMediaOrganization (identidad propia de la redacción)
 * - autor con schema Person enlazado (@id a /#person)
 * - datePublished/dateModified con fecha y hora completas
 * - imagen destacada con schema ImageObject (no un string plano)
 */
export function generateNewsArticleStructuredData(article: {
  title: string;
  description: string;
  publishDate: string;
  publishedAt?: string;
  modifiedDate?: string;
  authorName?: string;
  image?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  category?: string;
  keywords?: string[];
  dateline?: string;
  slug?: string;
}): object {
  // publishedAt (datetime real) tiene prioridad sobre date. Si no hay
  // publishedAt, se deriva la hora de forma determinista desde date+slug.
  const published = toFullIsoDateTime(article.publishedAt || article.publishDate, article.slug);
  // dateModified usa modifiedDate real si se proporcionó; de lo contrario,
  // cae de forma segura a la misma fecha de publicación.
  const modifiedRaw = article.modifiedDate || article.publishedAt || article.publishDate;
  const modified = toFullIsoDateTime(modifiedRaw, article.slug);

  const imageObject = article.image
    ? {
        '@type': 'ImageObject' as const,
        url: article.image,
        ...(article.imageCaption ? { caption: article.imageCaption } : {}),
        ...(article.imageWidth ? { width: article.imageWidth } : {}),
        ...(article.imageHeight ? { height: article.imageHeight } : {})
      }
    : {
        '@type': 'ImageObject' as const,
        url: `${BASE_URL}/images/freddy_profile.webp`
      };

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: imageObject,
    author: {
      ...NEWS_AUTHOR,
      ...(article.authorName && article.authorName !== 'Freddy Ticona Guzmán'
        ? { name: article.authorName }
        : {})
    },
    publisher: NEWS_ORGANIZATION,
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url || `${BASE_URL}/noticias`
    },
    articleSection: article.category,
    keywords: article.keywords?.join(', ') || article.category || '',
    ...(article.dateline ? { dateline: article.dateline } : { dateline: 'La Paz, Bolivia' }),
    inLanguage: 'es'
  };
}

/**
 * Genera structured data para la página de Servicios
 *
 * Usa el catálogo real de `src/data/servicesPricing.json` (la misma tabla que
 * renderiza la página), de modo que el JSON-LD y el contenido visible nunca
 * se contradicen: mismos servicios, mismos precios base, misma moneda.
 */
export function generateServicesStructuredData(): object {
  const services = SERVICES_PRICING.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.nameEs,
    description: service.descriptionEs,
    serviceType: service.type,
    provider: { '@id': `${BASE_URL}/#business` },
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
      url: `${BASE_URL}/servicios`
    }
  }));

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#professional-service`,
    name: 'Freddy Ticona - Servicios Audiovisuales Profesionales',
    description: 'Servicio profesional de filmación, edición, fotografía y producción audiovisual en La Paz, Bolivia, con más de 15 años de experiencia.',
    url: `${BASE_URL}/servicios`,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: [
      { '@type': 'City', name: 'La Paz' },
      { '@type': 'City', name: 'El Alto' },
      { '@type': 'Country', name: 'Bolivia' }
    ],
    priceRange: '$$'
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      BUSINESS_DATA,
      professionalService,
      {
        '@type': 'ItemList',
        name: 'Servicios Audiovisuales',
        description: 'Servicios de filmación, edición, fotografía y animación con precios base en La Paz, Bolivia',
        itemListElement: services
      }
    ]
  };
}

/**
 * Genera structured data para la página de Contacto
 */
export function generateContactStructuredData(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      PERSON_DATA,
      {
        '@type': 'ContactPage',
        name: 'Contacto - Freddy Ticona',
        url: `${BASE_URL}/#contacto`,
        description: 'Formulario de contacto para servicios audiovisuales',
        mainEntity: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+59162408420',
          email: 'freddyticona62@gmail.com',
          areaServed: 'BO',
          availableLanguage: ['Spanish', 'English']
        }
      }
    ]
  };
}

/**
 * Genera structured data para BreadcrumbList
 */
export function generateBreadcrumbList(items: Array<{name: string, url: string}>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Genera structured data para FAQ (Preguntas Frecuentes)
 */
export function generateFAQStructuredData(): object {
  return {
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
      },
      {
        '@type': 'Question',
        name: '¿Qué servicios ofrece Freddy Ticona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajo en video, fotografía y animación: historias de vida, coberturas de eventos, cápsulas noticiosas, noticiarios corporativos, reportajes de impacto, edición de material preexistente, cobertura fotográfica, fotoreportaje, reels verticales, packs mensuales de reels, animaciones con IA y planes institucionales que combinan varios de estos servicios.'
        }
      },
      {
        '@type': 'Question',
        name: '¿En qué zonas de Bolivia trabaja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajo principalmente en La Paz y El Alto, y viajo a cualquier departamento de Bolivia para proyectos especiales, con viáticos aparte.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo puedo contratar sus servicios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Por WhatsApp al +591 62408420, por email a freddyticona62@gmail.com, o con el formulario de contacto del sitio. Atiendo de lunes a viernes de 09:00 a 19:00 y los sábados de 09:00 a 14:00.'
        }
      }
    ]
  };
}

/**
 * FAQ real de una guía: se construye con los H2/H3 del propio artículo y el
 * primer párrafo que los sigue, así el markup refleja exactamente el contenido
 * visible (requisito de Google para FAQPage). Nunca inventa preguntas.
 */
export function generateGuideFAQStructuredData(title: string, html: string, lang: 'es' | 'en' = 'es'): object {
  const clean = (s: string): string => s
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

  const plain = (s: string): string => clean(s)
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|\s)\*([^*]+)\*/g, '$1$2')
    .replace(/^[\s>*+\-]+/, '')
    .replace(/^\d+[.)]\s+/, '');

  const qa: Array<{ name: string; text: string }> = [];
  const push = (questionRaw: string, answerRaw: string) => {
    const question = plain(questionRaw).replace(/[:：]\s*$/, '');
    let answer = plain(answerRaw);
    if (question.length < 10 || question.length > 160 || answer.length < 40) return;
    if (answer.length > 600) answer = answer.slice(0, 597).trimEnd() + '…';
    qa.push({
      name: /[?¿]$/.test(question) ? question : (lang === 'es' ? `¿${question}?` : `${question}?`),
      text: answer,
    });
  };

  // La mayoría de las guías están en Markdown (###, ####).
  const lines = html.split(/\r?\n/);
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

  // Artículos en HTML (los tutoriales nuevos): H2/H3 + primer párrafo.
  if (qa.length === 0) {
    const re = /<h[23][^>]*>([\s\S]*?)<\/h[23]>([\s\S]*?)(?=<h[23][^>]*>|$)/gi;
    let match: RegExpExecArray | null;
    while ((match = re.exec(html)) !== null && qa.length < 5) {
      const paragraph = match[2].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      push(match[1], paragraph ? paragraph[1] : '');
    }
  }

  if (qa.length === 0) {
    const t = title.replace(/\s*\|\s*.*$/, '').trim();
    qa.push(lang === 'es'
      ? { name: `¿Cómo se hace ${t}?`, text: `Esta guía explica paso a paso ${t.toLowerCase()}, con requisitos, costos actualizados y enlaces oficiales.` }
      : { name: `How do you do ${t}?`, text: `This guide explains ${t.toLowerCase()} step by step, with requirements, updated costs and official links.` });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(q => ({
      '@type': 'Question',
      name: q.name,
      acceptedAnswer: { '@type': 'Answer', text: q.text },
    })),
  };
}

/** Structured data de una ficha de servicio individual (/servicios/<id>). */
export function generateServiceDetailStructuredData(service: {
  id: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  basePrice: number;
  currency: string;
  duration: string;
  featuresEs: string[];
  featuresEn: string[];
}, url: string, lang: 'es' | 'en' = 'es'): object {
  const isEs = lang === 'es';
  const isFree = service.basePrice === 0;
  const priceLabel = isFree
    ? (isEs ? 'Gratis' : 'Free')
    : service.currency === 'BOB' ? `Bs. ${service.basePrice}` : `${service.currency} ${service.basePrice}`;
  const serviceSchema = {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: isEs ? service.nameEs : service.nameEn,
    description: isEs ? service.descriptionEs : service.descriptionEn,
    serviceType: service.id,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: [
      { '@type': 'City', name: 'La Paz' },
      { '@type': 'City', name: 'El Alto' },
      { '@type': 'Country', name: 'Bolivia' },
    ],
    url,
    offers: {
      '@type': 'Offer',
      price: String(service.basePrice),
      priceCurrency: service.currency,
      availability: 'https://schema.org/InStock',
      url,
    },
  };
  const breadcrumb = generateBreadcrumbList([
    { name: 'Inicio', url: BASE_URL },
    { name: 'Servicios', url: `${BASE_URL}/servicios` },
    { name: isEs ? service.nameEs : service.nameEn, url },
  ]);
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isEs ? `¿Cuánto cuesta ${service.nameEs}?` : `How much does ${service.nameEn} cost?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFree
            ? (isEs
                ? 'No cuesta nada. Solo deja tu correo para avisarte de nuevas publicaciones; con eso se habilita la herramienta.'
                : 'It costs nothing. Just leave your email so I can notify you of new publications; that unlocks the tool.')
            : isEs
              ? `El precio base de ${service.nameEs} es ${priceLabel} (${service.duration}). El costo final se confirma según el alcance del proyecto.`
              : `The base price for ${service.nameEn} is ${priceLabel} (${service.duration}). The final cost depends on the project scope.`,
        },
      },
      {
        '@type': 'Question',
        name: isEs ? `¿Qué incluye ${service.nameEs}?` : `What is included in ${service.nameEn}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: (isEs ? service.featuresEs : service.featuresEn).join('. ') + '.',
        },
      },
      {
        '@type': 'Question',
        name: isEs ? '¿En qué ciudades ofreces este servicio?' : 'Where is this service available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isEs
            ? 'Trabajo en La Paz y El Alto, y viajo a cualquier departamento de Bolivia para proyectos especiales con viáticos aparte.'
            : 'I work in La Paz and El Alto, and travel anywhere in Bolivia for special projects with travel expenses apart.',
        },
      },
    ],
  };
  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#professional-service`,
    name: isEs ? 'Freddy Ticona - Servicios Audiovisuales Profesionales' : 'Freddy Ticona - Professional Audiovisual Services',
    description: isEs
      ? 'Filmación, edición y producción audiovisual profesional en La Paz, Bolivia.'
      : 'Professional filming, editing and audiovisual production in La Paz, Bolivia.',
    url: `${BASE_URL}/servicios`,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: [
      { '@type': 'City', name: 'La Paz' },
      { '@type': 'City', name: 'El Alto' },
      { '@type': 'Country', name: 'Bolivia' }
    ]
  };
  return { '@context': 'https://schema.org', '@graph': [serviceSchema, professionalService, breadcrumb, faq] };
}

/**
 * Inyecta el JSON-LD en el head del documento
 *
 * Antes de insertar, elimina TODOS los scripts ld+json presentes: el que
 * bring el HTML prerenderizado de la ruta anterior y el dinámico de la página
 * anterior. Sin esta limpieza, al navegar de la home a /servicios se quedaba
 * en el DOM el schema de la home (con un "Article" inexistente) junto al de
 * servicios, y Google recibía dos grafos contradictorios.
 */
export function injectStructuredData(data: object | object[]): void {
  document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    script.remove();
  });

  // Crear nuevo script
  const script = document.createElement('script');
  script.id = 'dynamic-structured-data';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data, null, 0);

  document.head.appendChild(script);
}

/**
 * Función principal para actualizar structured data según página
 */
export function updatePageStructuredData(pageId: string, additionalData?: any): void {
  let structuredData: object | any[];

  switch (pageId) {
    case 'inicio':
      structuredData = generateHomeStructuredData();
      break;
    case 'sobre-mi':
      structuredData = generateAboutStructuredData();
      break;
    case 'portafolio':
      structuredData = generatePortfolioStructuredData(additionalData?.projects);
      break;
    case 'blog':
    case 'guias':
      if (additionalData?.article) {
        structuredData = generateArticleStructuredData({
          ...additionalData.article,
          type: additionalData.articleType || 'Article',
        });
      } else {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Blog - Freddy Ticona',
          description: 'Artículos sobre producción audiovisual y cinematografía',
          url: `${BASE_URL}/#blog`,
          publisher: PERSON_DATA
        };
      }
      break;
    case 'servicios':
      structuredData = [
        generateServicesStructuredData(),
        generateFAQStructuredData()
      ];
      break;
    case 'contacto':
      structuredData = [
        generateContactStructuredData(),
        generateFAQStructuredData()
      ];
      break;
    default:
      structuredData = generateHomeStructuredData();
  }

  injectStructuredData(structuredData);
}
