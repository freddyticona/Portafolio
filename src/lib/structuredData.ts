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
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00'
  }],
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
  type?: 'Article' | 'NewsArticle';
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url || `${BASE_URL}/#blog`
    }
  };
  // Add NewsArticle-specific fields
  if (article.type === 'NewsArticle') {
    return {
      ...base,
      articleSection: article.category,
      keywords: article.keywords?.join(', ') || article.category,
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
 * Genera structured data (VideoObject) para la página de Showreel.
 * Solo se emite en la página dedicada /showreel donde el video se muestra visible.
 */
export function generateShowreelStructuredData(video: {
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
}): object {
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
  const contentUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl || `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
    uploadDate: video.uploadDate || '2026-07-01T12:00:00-04:00',
    duration: video.duration || 'PT1M',
    embedUrl,
    contentUrl,
    author: PERSON_DATA,
    publisher: {
      '@type': 'Organization',
      name: 'Freddy Ticona - Servicios Audiovisuales',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.ico` }
    }
  };
}

/**
 * Genera structured data para la página de Servicios
 */
export function generateServicesStructuredData(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      BUSINESS_DATA,
      {
        '@type': 'ItemList',
        name: 'Servicios Audiovisuales',
        description: 'Lista de servicios audiovisuales profesionales',
        itemListElement: [
          {
            '@type': 'Service',
            position: 1,
            name: 'Filmación de Eventos',
            description: 'Cobertura profesional de eventos con tecnología Full HD',
            provider: PERSON_DATA,
            areaServed: { '@type': 'City', name: 'La Paz' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Filmación de Eventos',
              itemListElement: [{
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Filmación Básica',
                  description: '2 horas de cobertura',
                  price: '500',
                  priceCurrency: 'BOB'
                }
              }]
            }
          },
          {
            '@type': 'Service',
            position: 2,
            name: 'Edición de Video',
            description: 'Post-producción profesional con color grading',
            provider: PERSON_DATA
          },
          {
            '@type': 'Service',
            position: 3,
            name: 'Producción de Documentales',
            description: 'Documentales de televisión y cine con enfoque cultural',
            provider: PERSON_DATA
          },
          {
            '@type': 'Service',
            position: 4,
            name: 'Consultoría Audiovisual',
            description: 'Asesoría para proyectos de producción y estrategia',
            provider: PERSON_DATA
          }
        ]
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
        name: '¿Qué servicios ofrece Freddy Ticona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ofrezco servicios de filmación profesional de eventos, edición de video con color grading, producción de documentales y consultoría audiovisual en La Paz, Bolivia.'
        }
      },
      {
        '@type': 'Question',
        name: '¿En qué zonas de Bolivia trabaja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajo principalmente en La Paz y El Alto, pero también estoy disponible para viajar a cualquier departamento de Bolivia para proyectos especiales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo puedo contratar sus servicios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puede contactarme por WhatsApp al +59162408420, por email a freddyticona62@gmail.com, o usar el formulario de contacto en este sitio web.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Tiene experiencia en televisión?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, tengo más de 15 años de experiencia en televisión boliviana, incluyendo trabajos en Bolivia TV, Red Uno y RTP. Ganador del Premio Nacional Eduardo Abaroa 2017.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué equipos utiliza para filmación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilizo cámaras profesionales Full HD (Nikon D5100 y cámara secundaria), equipos de iluminación LED y sistemas de audio inalámbricos Rode Wireless GO 3, dependiendo de las necesidades del proyecto.'
        }
      }
    ]
  };
}

/**
 * Inyecta el JSON-LD en el head del documento
 */
export function injectStructuredData(data: object): void {
  // Eliminar JSON-LD anterior si existe
  const existingScript = document.getElementById('dynamic-structured-data');
  if (existingScript) {
    existingScript.remove();
  }

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
    case 'noticias':
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
    case 'showreel':
      structuredData = generateShowreelStructuredData(additionalData?.video || {});
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
