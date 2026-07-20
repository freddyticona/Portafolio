/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * SEO Metadata Generator
 *
 * Genera meta tags y Open Graph dinámicos para cada página
 * para mejorar el posicionamiento en buscadores.
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
}

const SITE_CONFIG = {
  name: 'Freddy Ticona Guzmán',
  url: 'https://freddy-ticona-portafolio.vercel.app',
  locale: 'es_BO',
  ogImageDefault: 'https://freddy-ticona-portafolio.vercel.app/images/freddy_profile.jpg',
};

/**
 * Metadatos SEO para cada página
 */
export const PAGE_METADATA: Record<string, { es: SEOMetadata; en: SEOMetadata }> = {
  inicio: {
    es: {
      title: 'Freddy Ticona Guzmán | Camarógrafo y Realizador Audiovisual - La Paz, Bolivia',
      description: 'Portafolio profesional de Freddy Ticona Guzmán, camarógrafo y realizador audiovisual con más de 15 años de experiencia en televisión, documentales y cobertura periodística en Bolivia. Ganador del Premio Nacional Eduardo Abaroa 2017.',
      keywords: ['camarógrafo La Paz', 'realizador audiovisual Bolivia', 'filmación de eventos', 'edición de video', 'documentales Bolivia', 'cobertura periodística'],
    },
    en: {
      title: 'Freddy Ticona Guzmán | Cameraman and Video Producer - La Paz, Bolivia',
      description: 'Professional portfolio of Freddy Ticona Guzmán, cameraman and video producer with over 15 years of experience in television, documentaries and journalistic coverage in Bolivia. Winner of the 2017 National Eduardo Abaroa Award.',
      keywords: ['cameraman La Paz', 'video producer Bolivia', 'event filming', 'video editing', 'documentaries Bolivia', 'journalistic coverage'],
    }
  },
  'sobre-mi': {
    es: {
      title: 'Sobre Mí - Freddy Ticona | Camarógrafo Profesional en Bolivia',
      description: 'Conoce la trayectoria de Freddy Ticona Guzmán: más de 15 años en televisión boliviana, premio Eduardo Abaroa 2017, y experiencia en Bolivia TV, Red Uno y RTP.',
      keywords: ['biografía camarógrafo', 'Freddy Ticona trayectoria', 'realizador audiovisual Bolivia', 'premio Eduardo Abaroa', 'camarógrafo prensa'],
    },
    en: {
      title: 'About Me - Freddy Ticona | Professional Cameraman in Bolivia',
      description: 'Learn about Freddy Ticona Guzmán\'s career: over 15 years in Bolivian television, 2017 Eduardo Abaroa Award winner, and experience at Bolivia TV, Red Uno and RTP.',
      keywords: ['cameraman biography', 'Freddy Ticona career', 'video producer Bolivia', 'Eduardo Abaroa award', 'news cameraman'],
    }
  },
  portafolio: {
    es: {
      title: 'Portafolio - Proyectos de Filmación y Edición | Freddy Ticona',
      description: 'Galería completa de proyectos: documentales, cobertura periodística, eventos corporativos y producciones televisivas. Trabajos en Bolivia TV, Red Uno y más.',
      keywords: ['portafolio camarógrafo', 'proyectos filmación', 'documentales Bolivia', 'trabajos edición video', 'producciones televisivas'],
    },
    en: {
      title: 'Portfolio - Filming and Editing Projects | Freddy Ticona',
      description: 'Complete gallery of projects: documentaries, journalistic coverage, corporate events and TV productions. Work at Bolivia TV, Red Uno and more.',
      keywords: ['cameraman portfolio', 'filming projects', 'Bolivia documentaries', 'video editing works', 'TV productions'],
    }
  },
  cv: {
    es: {
      title: 'Currículum - Freddy Ticona Guzmán | Formación y Certificaciones',
      description: 'CV completo: formación en comunicación social, técnica audiovisual, certificaciones técnicas y premios obtenidos. Camarógrafo profesional disponible para proyectos.',
      keywords: ['CV camarógrafo', 'currículum realizador audiovisual', 'formación técnica video', 'certificaciones Adobe', 'experiencia televisión'],
    },
    en: {
      title: 'CV - Freddy Ticona Guzmán | Education and Certifications',
      description: 'Complete CV: social communication education, audiovisual training, technical certifications and awards. Professional cameraman available for projects.',
      keywords: ['cameraman CV', 'video producer resume', 'video technical training', 'Adobe certifications', 'television experience'],
    }
  },
  blog: {
    es: {
      title: 'Blog - Apuntes de Producción Audiovisual y Cinematografía',
      description: 'Artículos sobre técnicas de filmación, edición de video, producción de documentales y reflexiones sobre el medio audiovisual en Bolivia.',
      keywords: ['blog cinematografía', 'producción video Bolivia', 'técnicas de filmación', 'edición documental', 'periodismo televisivo'],
    },
    en: {
      title: 'Blog - Audiovisual Production and Cinematography Notes',
      description: 'Articles about filming techniques, video editing, documentary production and reflections on the audiovisual medium in Bolivia.',
      keywords: ['cinematography blog', 'video production Bolivia', 'filming techniques', 'documentary editing', 'television journalism'],
    }
  },
  contacto: {
    es: {
      title: 'Contacto - Servicios de Filmación y Edición | Freddy Ticona',
      description: 'Contrata servicios de camarógrafo, edición de video y producción documental en La Paz, Bolivia. Disponible para eventos, proyectos de TV y consultorías.',
      keywords: ['contactar camarógrafo', 'servicios filmación La Paz', 'cotización video', 'producción audiovisual', 'contratar editor'],
    },
    en: {
      title: 'Contact - Filming and Editing Services | Freddy Ticona',
      description: 'Hire cameraman services, video editing and documentary production in La Paz, Bolivia. Available for events, TV projects and consulting.',
      keywords: ['contact cameraman', 'filming services La Paz', 'video quote', 'audiovisual production', 'hire editor'],
    }
  },
  reservas: {
    es: {
      title: 'Reservar Cita - Sistema de Agendamiento | Freddy Ticona',
      description: 'Agenda tu sesión de filmación, edición o consultoría. Sistema de reservas online para servicios audiovisuales en La Paz, Bolivia.',
      keywords: ['reservar camarógrafo', 'agendar filmación', 'cita edición video', 'sistema de reservas', 'agendar producción'],
    },
    en: {
      title: 'Book Appointment - Booking System | Freddy Ticona',
      description: 'Schedule your filming, editing or consulting session. Online booking system for audiovisual services in La Paz, Bolivia.',
      keywords: ['book cameraman', 'schedule filming', 'video editing appointment', 'booking system', 'arrange production'],
    }
  },
  servicios: {
    es: {
      title: 'Servicios - Filmación de Eventos, Edición y Documentales | Freddy Ticona',
      description: 'Servicios profesionales: filmación de eventos 4K, edición de video, producción de documentales y consultoría audiovisual en La Paz, Bolivia.',
      keywords: ['servicios camarógrafo', 'filmación eventos Bolivia', 'edición video profesional', 'producción documental', 'consultoría audiovisual'],
    },
    en: {
      title: 'Services - Event Filming, Editing and Documentaries | Freddy Ticona',
      description: 'Professional services: 4K event filming, video editing, documentary production and audiovisual consulting in La Paz, Bolivia.',
      keywords: ['cameraman services', 'event filming Bolivia', 'professional video editing', 'documentary production', 'audiovisual consulting'],
    }
  }
};

/**
 * Actualiza los meta tags del documento dinámicamente
 */
export function updateMetaTags(pageId: string, lang: 'es' | 'en'): void {
  const metadata = PAGE_METADATA[pageId]?.[lang] || PAGE_METADATA.inicio[lang];

  // Actualizar título
  document.title = metadata.title;

  // Actualizar o crear meta description
  updateOrCreateMetaTag('name', 'description', metadata.description);

  // Actualizar o crear meta keywords
  updateOrCreateMetaTag('name', 'keywords', metadata.keywords.join(', '));

  // Actualizar Open Graph
  updateOrCreateMetaTag('property', 'og:title', metadata.title);
  updateOrCreateMetaTag('property', 'og:description', metadata.description);
  updateOrCreateMetaTag('property', 'og:type', metadata.ogType || 'website');
  updateOrCreateMetaTag('property', 'og:image', metadata.ogImage || SITE_CONFIG.ogImageDefault);
  updateOrCreateMetaTag('property', 'og:locale', lang === 'es' ? 'es_BO' : 'en_US');
  updateOrCreateMetaTag('property', 'og:site_name', SITE_CONFIG.name);

  // Actualizar Twitter Card
  updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', metadata.title);
  updateOrCreateMetaTag('name', 'twitter:description', metadata.description);
  updateOrCreateMetaTag('name', 'twitter:image', metadata.ogImage || SITE_CONFIG.ogImageDefault);

  // Actualizar canonical
  const canonicalUrl = metadata.canonical || `${SITE_CONFIG.url}/#${pageId}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonicalUrl;

  // robots tag
  if (metadata.noIndex) {
    updateOrCreateMetaTag('name', 'robots', 'noindex, nofollow');
  }
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
 * Genera structured data para una página específica
 */
export function generatePageSchema(pageId: string, lang: 'es' | 'en'): object {
  const baseUrl = SITE_CONFIG.url;

  const schemas: Record<string, object> = {
    servicios: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: lang === 'es' ? 'Servicios Audiovisuales' : 'Audiovisual Services',
      description: lang === 'es'
        ? 'Lista de servicios audiovisuales profesionales ofrecidos por Freddy Ticona'
        : 'List of professional audiovisual services offered by Freddy Ticona',
      itemListElement: [
        {
          '@type': 'Service',
          position: 1,
          name: lang === 'es' ? 'Filmación de Eventos' : 'Event Filming',
          description: lang === 'es'
            ? 'Cobertura profesional de eventos con tecnología 4K'
            : 'Professional event coverage with 4K technology',
          provider: {
            '@type': 'Person',
            name: 'Freddy Ticona Guzmán'
          },
          areaServed: {
            '@type': 'City',
            name: 'La Paz'
          }
        },
        {
          '@type': 'Service',
          position: 2,
          name: lang === 'es' ? 'Edición de Video' : 'Video Editing',
          description: lang === 'es'
            ? 'Post-producción profesional con color grading'
            : 'Professional post-production with color grading',
          provider: {
            '@type': 'Person',
            name: 'Freddy Ticona Guzmán'
          }
        },
        {
          '@type': 'Service',
          position: 3,
          name: lang === 'es' ? 'Producción de Documentales' : 'Documentary Production',
          description: lang === 'es'
            ? 'Documentales de televisión y cine con enfoque cultural'
            : 'Television and film documentaries with cultural focus',
          provider: {
            '@type': 'Person',
            name: 'Freddy Ticona Guzmán'
          }
        },
        {
          '@type': 'Service',
          position: 4,
          name: lang === 'es' ? 'Consultoría Audiovisual' : 'Audiovisual Consulting',
          description: lang === 'es'
            ? 'Asesoría para proyectos de producción y estrategia'
            : 'Consulting for production projects and strategy',
          provider: {
            '@type': 'Person',
            name: 'Freddy Ticona Guzmán'
          }
        }
      ]
    }
  };

  return schemas[pageId] || {};
}
