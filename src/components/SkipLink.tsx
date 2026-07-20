/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SkipLinkProps {
  lang?: 'es' | 'en';
}

/**
 * Componente SkipLink para accesibilidad
 * Permite a los usuarios de lectores de pantalla saltar directamente al contenido principal
 */
export default function SkipLink({ lang = 'es' }: SkipLinkProps) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-gold focus:text-black focus:font-bold focus:rounded-sm focus:shadow-lg"
    >
      {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
    </a>
  );
}

/**
 * Componente que envuelve el contenido principal con el ID correcto para el SkipLink
 */
export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1}>
      {children}
    </main>
  );
}
