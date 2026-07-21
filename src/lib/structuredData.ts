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
    'https://www.linkedin.com/in/freddy-ticona-guzman-4161287',
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
  award: ['Premio Nacional Eduardo Abaroa 2017 - Periodismo Cultural'],
  knowsAbout: [
    'Cinematografía',
    'Edición de Video',
    'Documentales',
    'Periodismo Televisivo',
    'Producción Audiovisual',
    'Filmación 4K',
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
      BUSINESS_DATA,
      {
        '@type': 'VideoObject',
        '@id': `${BASE_URL}/#showreel`,
        name: 'Showreel Freddy Ticona - Camarógrafo Profesional Bolivia',
        description: 'Showreel profesional destacando 15 años de experiencia en cinematografía, documentales y cobertura periodística en Bolivia. Filmación 4K, edición y producción audiovisual en La Paz.',
        thumbnailUrl: [
          `${BASE_URL}/images/freddy_studio.webp`,
          `${BASE_URL}/images/freddy_profile.webp`
        ],
        uploadDate: '2026-07-20',
        duration: 'PT90S',
        contentUrl: 'https://www.youtube.com/watch?v=6CL4rVpVOYU',
        embedUrl: 'https://www.youtube.com/embed/6CL4rVpVOYU',
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: { '@type': 'WatchAction' },
          userInteractionCount: 150
        },
        regionsAllowed: 'BO',
        requiresSubscription: false,
        inLanguage: 'es',
        publication: {
          '@type': 'BroadcastEvent',
          isLiveBroadcast: false,
          startDate: '2026-07-20T10:00:00-04:00'
        }
      }
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
 * Videos de YouTube del portafolio
 */
const YOUTUBE_VIDEOS = [
  {
    '@type': 'VideoObject',
    '@id': `${BASE_URL}/#video-urkupina`,
    name: 'Urkupiña: Fé, Folclore y Devoción - Documental Cultural',
    description: 'Documental sobre la fiesta de la Virgen de Urkupiña en Quillacollo, Cochabamba. Cobertura del folclore boliviano, procesiones y devoción popular.',
    thumbnailUrl: `${BASE_URL}/images/freddy_working.webp`,
    uploadDate: '2026-07-20',
    duration: 'PT300S',
    contentUrl: 'https://www.youtube.com/watch?v=UmimDWaK61I',
    embedUrl: 'https://www.youtube.com/embed/UmimDWaK61I',
    inLanguage: 'es',
    regionsAllowed: 'BO',
    genre: 'Documental',
    keywords: 'documental, Urkupiña, folclore boliviano, cultura, Cochabamba'
  },
  {
    '@type': 'VideoObject',
    '@id': `${BASE_URL}/#video-elecciones`,
    name: 'Elecciones Generales en Bolivia - Cobertura Periodística',
    description: 'Cobertura periodística de las elecciones generales en Bolivia. Transmisión en vivo, análisis y entrevistas con actores políticos.',
    thumbnailUrl: `${BASE_URL}/images/freddy_studio.webp`,
    uploadDate: '2026-07-20',
    duration: 'PT240S',
    contentUrl: 'https://www.youtube.com/watch?v=INagReojtOM',
    embedUrl: 'https://www.youtube.com/embed/INagReojtOM',
    inLanguage: 'es',
    regionsAllowed: 'BO',
    genre: 'Periodismo',
    keywords: 'elecciones, Bolivia, periodismo, cobertura política, televisión'
  }
];

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
      ...YOUTUBE_VIDEOS,
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
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
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
      '@id': `${BASE_URL}/#blog`
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
            description: 'Cobertura profesional de eventos con tecnología 4K',
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
  let structuredData: object;

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
      if (additionalData?.article) {
        structuredData = generateArticleStructuredData(additionalData.article);
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
      structuredData = generateServicesStructuredData();
      break;
    case 'contacto':
      structuredData = generateContactStructuredData();
      break;
    default:
      structuredData = generateHomeStructuredData();
  }

  injectStructuredData(structuredData);
}
