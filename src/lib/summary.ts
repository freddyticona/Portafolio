/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * summary.ts — Extracción automática de los puntos clave de un artículo.
 *
 * El informe de GA4 muestra 13,8 s de tiempo medio de interacción: el lector
 * abandona antes de llegar al cuerpo del artículo. Un resumen de "3 puntos"
 * arriba del contenido da la respuesta inmediata y sube la retención.
 *
 * El cuerpo editorial (`src/data/blogContent/*`) está guardado como HTML, por
 * lo que la extracción descarta bloques que no son prosa (encabezados,
 * infografías, figuras, citas) antes de trocear en frases.
 */

export function extractKeyPoints(html: string, max = 3): string[] {
  if (!html) return [];

  const clean = html
    // Bloques sin prosa: se eliminan con su contenido.
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ' ')
    .replace(/<figure[\s\S]*?<\/figure>/gi, ' ')
    .replace(/<blockquote[\s\S]*?<\/blockquote>/gi, ' ')
    .replace(/<div[^>]*class="[^"]*(?:stat-grid|stat-card|doc-card|expert-quote|tweet-card)[^"]*"[\s\S]*?<\/div>/gi, ' ')
    .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
    .replace(/<code[\s\S]*?<\/code>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    // Etiquetas sueltas
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&/g, '&')
    .replace(/"/g, '"')
    .replace(/'/g, "'")
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/[*_`>#|]/g, ' ');

  const sentences = clean
    .split(/(?<=[.!?])\s+/)
    .map(s => s.replace(/\s+/g, ' ').trim())
    // Una frase útil: entre 45 y 260 caracteres, con letras y sin ser solo cifras.
    .filter(s => s.length > 45 && s.length < 260 && /[a-záéíóúñ]{3}/i.test(s))
    .filter(s => !/^[\d\s.,·x×%—–-]+$/.test(s));

  // Evita repetir frases casi idénticas (mismo inicio).
  const unique: string[] = [];
  for (const s of sentences) {
    const key = s.slice(0, 40).toLowerCase();
    if (!unique.some(u => u.slice(0, 40).toLowerCase() === key)) unique.push(s);
    if (unique.length >= max) break;
  }

  return unique;
}
