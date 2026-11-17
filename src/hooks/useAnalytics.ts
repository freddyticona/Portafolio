/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { trackPageView, PortfolioEvents } from '../lib/analytics';

/**
 * Hook para rastrear vistas de página automáticamente
 *
 * IMPORTANTE: no está en uso (verificado: ningún componente lo importa).
 * GA4 ya envía un page_view en la carga inicial y otro en cada cambio de
 * historial (Enhanced Measurement → "Page changes based on browser history
 * events"), que es justo lo que hacen los pushState de App.tsx.
 * Si se llegara a usar este hook, cada navegación contaría DOS veces.
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
    onEmailClick: () => PortfolioEvents.emailClick(),
    onPhoneClick: () => PortfolioEvents.phoneClick(),

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
