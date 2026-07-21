/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Google Analytics 4 Integration
 *
 * Para usar:
 * 1. Reemplaza 'G-XXXXXXXXXX' con tu Measurement ID real de GA4
 * 2. Ve a https://analytics.google.com para obtener tu ID
 */

export const GA_MEASUREMENT_ID = 'G-XRW2HZHB69'; // Freddy Ticona Portafolio GA4

/**
 * Inicializar Google Analytics 4
 */
export const initGA = () => {
  // Solo en producción
  if (import.meta.env.DEV) {
    console.log('[GA] Development mode - GA4 disabled');
    return;
  }

  try {
    // Cargar gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_location: window.location.href,
      page_path: window.location.pathname || '/',
      page_title: document.title
    });

    console.log('[GA] Google Analytics 4 inicializado');
  } catch (error) {
    console.error('[GA] Error inicializando GA4:', error);
  }
};

/**
 * Rastrear vista de página
 */
export const trackPageView = (path: string, title: string) => {
  if (import.meta.env.DEV) return;

  try {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href
    });
  } catch (error) {
    console.error('[GA] Error tracking page view:', error);
  }
};

/**
 * Rastrear eventos personalizados
 */
export const trackEvent = (
  eventName: string,
  parameters?: {
    [key: string]: string | number | boolean;
  }
) => {
  if (import.meta.env.DEV) {
    console.log('[GA] Event:', eventName, parameters);
    return;
  }

  try {
    (window as any).gtag('event', eventName, parameters);
  } catch (error) {
    console.error('[GA] Error tracking event:', error);
  }
};

/**
 * Eventos específicos para el portafolio
 */
export const PortfolioEvents = {
  // Contacto
  contactFormSubmit: () => trackEvent('generate_lead', {
    form_name: 'Contact Form',
    category: 'Contact'
  }),

  whatsappClick: () => trackEvent('contact', {
    method: 'whatsapp',
    category: 'Contact'
  }),

  // Portafolio
  portfolioView: (projectTitle: string) => trackEvent('view_item', {
    item_name: projectTitle,
    category: 'Portfolio'
  }),

  portfolioFilter: (filter: string) => trackEvent('filter_portfolio', {
    filter_type: filter,
    category: 'Portfolio'
  }),

  // Blog
  blogPostView: (postTitle: string) => trackEvent('view_item', {
    item_name: postTitle,
    category: 'Blog'
  }),

  blogPostShare: (platform: string, postTitle: string) => trackEvent('share', {
    method: platform,
    content_type: 'blog_post',
    item_id: postTitle,
    category: 'Blog'
  }),

  // Descargas
  cvDownload: () => trackEvent('file_download', {
    file_name: 'CV_Freddy_Ticona',
    file_extension: 'PDF',
    category: 'Download'
  }),

  // Navegación
  navClick: (page: string) => trackEvent('navigation', {
    destination: page,
    category: 'Navigation'
  }),

  languageToggle: (lang: 'es' | 'en') => trackEvent('language_change', {
    language: lang,
    category: 'Settings'
  }),

  // Búsqueda
  searchQuery: (query: string) => trackEvent('search', {
    search_term: query,
    category: 'Search'
  }),

  // Mapa
  mapLocationClick: (location: string) => trackEvent('map_interaction', {
    location_name: location,
    category: 'Map'
  })
};

/**
 * Rastrear errores
 */
export const trackError = (error: Error, context?: string) => {
  trackEvent('exception', {
    description: error.message,
    fatal: false,
    context: context || 'unknown'
  });
};

/**
 * Types para TypeScript
 */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
