/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * TIPOS DE TRADUCCIÓN
 *
 * Este archivo exporta el tipo inferido de las traducciones para que
 * todos los componentes tengan type-safety en el objeto `t`.
 *
 * En lugar de usar `t: any`, los componentes deben usar `t: TranslationT`.
 * Esto garantiza que TypeScript detecte claves inexistentes en tiempo de compilación.
 */

import { translations } from './translations';

/**
 * Tipo inferido de las traducciones en español.
 * Se usa como referencia canónica ya que es el idioma principal.
 */
export type TranslationT = typeof translations['es'];

/**
 * Idiomas soportados por la aplicación.
 */
export type SupportedLang = 'es' | 'en';
