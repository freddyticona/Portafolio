/**
 * blogContent.ts — Índice de contenido por grupos (generado).
 *
 * El cuerpo completo de los artículos vive en src/data/blogContent/group-XX.ts.
 * Cada grupo pesa ~90 KB y se carga sólo cuando se abre un artículo de ese
 * grupo. Regenerar con: npm run split-content (o npm run chunk-content).
 */

import type { BlogContentEntry } from './blogContentTypes';

export type { BlogContentEntry };

export const CONTENT_GROUP_COUNT = 39;

export const contentGroups: Array<() => Promise<Record<string, BlogContentEntry>>> = [
  () => import('./blogContent/group-00').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-01').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-02').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-03').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-04').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-05').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-06').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-07').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-08').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-09').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-10').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-11').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-12').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-13').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-14').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-15').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-16').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-17').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-18').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-19').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-20').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-21').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-22').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-23').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-24').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-25').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-26').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-27').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-28').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-29').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-30').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-31').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-32').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-33').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-34').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-35').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-36').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-37').then((m) => m.blogContentGroup),
  () => import('./blogContent/group-38').then((m) => m.blogContentGroup),
];
