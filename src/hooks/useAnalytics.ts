/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { trackPageView, PortfolioEvents } from '../lib/analytics';

/**
 * Hook para rastrear vistas de página automáticamente
 */
export function usePageTracking(path: string, title: string) {
  useEffect(() => {
    trackPageView(path, title);
  }, [path, title]);
}

/**
 * Hook para rastrear interacciones del portafolio
 */
export function usePortfolioEvents() {
  return {
    // Contacto
    onContactSubmit: () => PortfolioEvents.contactFormSubmit(),
    onWhatsAppClick: () => PortfolioEvents.whatsappClick(),

    // Portafolio
    onProjectView: (title: string) => PortfolioEvents.portfolioView(title),
    onFilterChange: (filter: string) => PortfolioEvents.portfolioFilter(filter),

    // Blog
    onBlogView: (title: string) => PortfolioEvents.blogPostView(title),
    onBlogShare: (platform: string, title: string) => PortfolioEvents.blogPostShare(platform, title),

    // Descargas
    onCVDownload: () => PortfolioEvents.cvDownload(),

    // Navegación
    onNavClick: (page: string) => PortfolioEvents.navClick(page),
    onLanguageToggle: (lang: 'es' | 'en') => PortfolioEvents.languageToggle(lang),

    // Búsqueda
    onSearch: (query: string) => PortfolioEvents.searchQuery(query),

    // Mapa
    onMapLocationClick: (location: string) => PortfolioEvents.mapLocationClick(location)
  };
}

/**
 * Hook para rastrear errores
 */
export function useErrorTracking() {
  return (error: Error, context?: string) => {
    import('../lib/analytics').then(({ trackError }) => {
      trackError(error, context);
    });
  };
}
