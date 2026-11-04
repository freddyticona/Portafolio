/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * loader.ts — Punto único de carga del contenido editorial.
 *
 * `blogPosts.ts` pesa ~835 KB (624 metadatos) y el cuerpo completo está
 * troceado en src/data/blogContent/group-XX.ts (~90 KB por grupo). Las listas
 * cargan sólo los metadatos y la página de detalle pide el grupo del artículo
 * abierto. Tanto la promesa de metadatos como la de cada grupo se cachean para
 * no repetir descargas al navegar.
 */

import type { BlogPost } from '../types';
import type { BlogContentEntry } from './blogContentTypes';
import { contentGroups, CONTENT_GROUP_COUNT } from './blogContent';

let postsPromise: Promise<BlogPost[]> | null = null;
const groupPromises = new Map<number, Promise<Record<string, BlogContentEntry>>>();

export function loadBlogPosts(): Promise<BlogPost[]> {
  if (!postsPromise) {
    postsPromise = import('./blogPosts')
      .then(mod => mod.blogPosts)
      .catch(err => {
        postsPromise = null;
        throw err;
      });
  }
  return postsPromise;
}

/**
 * Devuelve el contenido ES/EN de un artículo cargando sólo su grupo.
 * Devuelve null si el id no es válido o no existe en el grupo.
 */
export async function loadBlogContent(id: string): Promise<BlogContentEntry | null> {
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId < 0) return null;

  const groupIndex = numericId % CONTENT_GROUP_COUNT;
  const loadGroup = contentGroups[groupIndex];
  if (!loadGroup) return null;

  let promise = groupPromises.get(groupIndex);
  if (!promise) {
    promise = loadGroup().catch(err => {
      groupPromises.delete(groupIndex);
      throw err;
    });
    groupPromises.set(groupIndex, promise);
  }

  const group = await promise;
  return group[id] ?? null;
}
