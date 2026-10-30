/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * loader.ts — Punto único de carga del contenido editorial.
 *
 * `blogPosts.ts` pesa ~4,4 MB (624 artículos en ES/EN). Importarlo de forma
 * estática bloquearía el primer render, así que se carga aparte y se cachea
 * la promesa para que navegar entre secciones no lo vuelva a pedir.
 */

import type { BlogPost } from '../types';

let cached: Promise<BlogPost[]> | null = null;

export function loadBlogPosts(): Promise<BlogPost[]> {
  if (!cached) {
    cached = import('./blogPosts')
      .then(mod => mod.blogPosts)
      .catch(err => {
        cached = null;
        throw err;
      });
  }
  return cached;
}
