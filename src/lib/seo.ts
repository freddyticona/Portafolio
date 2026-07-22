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
  url: 'https://freddydev.net',
  locale: 'es_BO',
  ogImageDefault: 'https://freddydev.net/og-image.jpg',
};

/**
 * Metadatos SEO para cada página
 */
export const PAGE_METADATA: Record<string, { es: SEOMetadata; en: SEOMetadata }> = {
  inicio: {
    es: {
      title: 'Freddy Ticona Guzmán | Camarógrafo Profesional La Paz Bolivia | Filmación 4K y Documentales',
      description: 'Portafolio profesional de Freddy Ticona Guzmán, camarógrafo experto en La Paz, Bolivia con más de 15 años de experiencia en televisión, documentales y cobertura periodística. Servicios de filmación 4K, edición de video y producción audiovisual. Ganador del Premio Nacional Eduardo Abaroa 2017.',
      keywords: ['camarógrafo La Paz', 'camarógrafo Bolivia', 'filmación 4K La Paz', 'realizador audiovisual Bolivia', 'edición de video profesional', 'documentales Bolivia', 'cobertura periodística', 'productor de video'],
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
      title: 'Portafolio de Proyectos Audiovisuales | Documentales y Cobertura Televisiva | Freddy Ticona',
      description: 'Galería completa de proyectos audiovisuales: documentales culturales, cobertura periodística en vivo, eventos corporativos 4K y producciones televisivas. Trabajos para Bolivia TV, Red Uno, RTP y más. Experiencia en todo el territorio boliviano.',
      keywords: ['portafolio camarógrafo', 'proyectos documentales Bolivia', 'cobertura televisiva', 'trabajos edición video', 'producciones televisivas Bolivia', 'filmación eventos La Paz'],
    },
    en: {
      title: 'Portfolio - Filming and Editing Projects | Freddy Ticona',
      description: 'Complete gallery of projects: documentaries, journalistic coverage, corporate events and TV productions. Work at Bolivia TV, Red Uno and more.',
      keywords: ['cameraman portfolio', 'filming projects', 'Bolivia documentaries', 'video editing works', 'TV productions'],
    }
  },
  cv: {
    es: {
      title: 'Currículum Camarógrafo Bolivia | Freddy Ticona Guzmán - Experiencia y Formación',
      description: 'CV profesional completo: formación en comunicación social, técnica audiovisual en Escuela Andina de Cinematografía, certificaciones técnicas y premios. 15+ años de experiencia en Bolivia TV, Red Uno y RTP. Disponible para proyectos.',
      keywords: ['CV camarógrafo Bolivia', 'currículum realizador audiovisual', 'formación técnica video', 'certificaciones Adobe', 'experiencia televisión', 'camarógrafo profesional La Paz'],
    },
    en: {
      title: 'CV - Freddy Ticona Guzmán | Education and Certifications',
      description: 'Complete CV: social communication education, audiovisual training, technical certifications and awards. Professional cameraman available for projects.',
      keywords: ['cameraman CV', 'video producer resume', 'video technical training', 'Adobe certifications', 'television experience'],
    }
  },
  blog: {
    es: {
      title: 'Blog de Producción Audiovisual y Cinematografía Bolivia | Tips de Filmación',
      description: 'Artículos especializados sobre técnicas de filmación 4K, edición de video profesional, producción de documentales y reflexiones sobre el medio audiovisual en Bolivia. Guías para camarógrafos y realizadores.',
      keywords: ['blog cinematografía', 'producción video Bolivia', 'técnicas de filmación', 'edición documental', 'periodismo televisivo', 'tips camarógrafo', 'blog video profesional'],
    },
    en: {
      title: 'Blog - Audiovisual Production and Cinematography Notes',
      description: 'Articles about filming techniques, video editing, documentary production and reflections on the audiovisual medium in Bolivia.',
      keywords: ['cinematography blog', 'video production Bolivia', 'filming techniques', 'documentary editing', 'television journalism'],
    }
  },
  contacto: {
    es: {
      title: 'Contacto - Contrata Camarógrafo en La Paz Bolivia | Filmación y Edición de Video',
      description: 'Contrata servicios profesionales de camarógrafo, edición de video y producción documental en La Paz, Bolivia. Disponible para eventos sociales, bodas, corporativos, proyectos de TV y consultorías audiovisuales. Presupuestos personalizados.',
      keywords: ['contactar camarógrafo', 'servicios filmación La Paz', 'camarógrafo Bolivia', 'cotización video', 'producción audiovisual La Paz', 'contratar editor video', 'filmación eventos', 'camarógrafo bodas'],
    },
    en: {
      title: 'Contact - Filming and Editing Services | Freddy Ticona',
      description: 'Hire cameraman services, video editing and documentary production in La Paz, Bolivia. Available for events, TV projects and consulting.',
      keywords: ['contact cameraman', 'filming services La Paz', 'video quote', 'audiovisual production', 'hire editor'],
    }
  },
  reservas: {
    es: {
      title: 'Reservar Camarógrafo La Paz Bolivia | Agendar Filmación y Edición Online',
      description: 'Sistema de reservas online para agendar sesiones de filmación 4K, edición de video y consultoría audiovisual en La Paz, Bolivia. Reserva tu fecha para eventos, bodas, documentales y proyectos televisivos.',
      keywords: ['reservar camarógrafo La Paz', 'agendar filmación Bolivia', 'cita edición video', 'sistema de reservas', 'agendar producción', 'reservar camarógrafo online'],
    },
    en: {
      title: 'Book Appointment - Booking System | Freddy Ticona',
      description: 'Schedule your filming, editing or consulting session. Online booking system for audiovisual services in La Paz, Bolivia.',
      keywords: ['book cameraman', 'schedule filming', 'video editing appointment', 'booking system', 'arrange production'],
    }
  },
  servicios: {
    es: {
      title: 'Servicios Audiovisuales La Paz Bolivia | Filmación 4K, Edición y Documentales',
      description: 'Servicios profesionales de filmación 4K, edición de video con color grading, producción de documentales y consultoría audiovisual en La Paz, Bolivia. Cobertura de eventos, bodas, corporativos y proyectos televisivos. Más de 15 años de experiencia.',
      keywords: ['servicios camarógrafo La Paz', 'filmación eventos Bolivia', 'edición video profesional', 'producción documental', 'consultoría audiovisual', 'camarógrafo 4K', 'filmación bodas La Paz', 'servicios video Bolivia'],
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
export function updateMetaTags(pageId: string, lang: 'es' | 'en', additionalData?: any): void {
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

  // hreflang para i18n (SEO multilanguage)
  updateOrCreateLinkTag('link', 'alternate', 'hreflang', 'es', `${SITE_CONFIG.url}/#${pageId}`);
  updateOrCreateLinkTag('link', 'alternate', 'hreflang', 'en', `${SITE_CONFIG.url}/en/#${pageId}`);
  updateOrCreateLinkTag('link', 'alternate', 'hreflang', 'x-default', `${SITE_CONFIG.url}/#${pageId}`);

  // robots tag
  if (metadata.noIndex) {
    updateOrCreateMetaTag('name', 'robots', 'noindex, nofollow');
  }

  // Actualizar structured data (JSON-LD)
  updatePageStructuredData(pageId, additionalData);
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

