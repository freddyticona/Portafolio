/**
 * Devuelve width/height reales para un <img> a partir del mapa generado por
 * scripts/generate-image-dimensions.mjs. Reservar el espacio evita CLS.
 */
import { IMAGE_DIMENSIONS } from './imageDimensions';

export function imgProps(src?: string | null, fallback?: { width: number; height: number }) {
  const dims = src ? IMAGE_DIMENSIONS[src] : undefined;
  if (dims) return { width: dims.width, height: dims.height };
  return fallback ? { width: fallback.width, height: fallback.height } : {};
}
