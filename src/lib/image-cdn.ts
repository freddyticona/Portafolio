/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Image CDN helpers
 *
 * Estrategia:
 *  - URLs del CDN se generan via getCdnUrl() con variables de entorno.
 *  - Si no hay CDN configurado, devuelve la URL estática de /public.
 *  - srcset() genera los breakpoints 400 / 800 / 1200 / 1920 / 2560.
 *  - getLqipPlaceholder() entrega un data URL de baja resolución para
 *    mostrar un blur-up antes de que cargue la imagen real.
 *
 * Proveedores soportados:
 *   - Cloudflare Images  (VITE_CDN_BASE + VITE_CDN_TOKEN)
 *   - Imgix             (VITE_CDN_BASE)
 *   - Cloudinary        (VITE_CDN_BASE + cloudName)
 *
 * Default por entorno:
 *   - dev: /public local (sin transformaciones)
 *   - prod: CDN configurado (AVIF/WebP automático)
 */

const DEFAULT_WIDTHS = [400, 800, 1200, 1920, 2560] as const;

export type CdnProvider = 'cloudflare' | 'imgix' | 'cloudinary' | 'none';

interface CdnConfig {
  provider: CdnProvider;
  baseUrl: string;
  token?: string;
  cloudName?: string;
}

let cachedConfig: CdnConfig | null = null;

function readConfig(): CdnConfig {
  if (cachedConfig) return cachedConfig;

  const env = (import.meta.env ?? {}) as Record<string, string | undefined>;
  const provider = (env.VITE_CDN_PROVIDER ?? 'none') as CdnProvider;
  const baseUrl = env.VITE_CDN_BASE ?? '';
  const token = env.VITE_CDN_TOKEN;
  const cloudName = env.VITE_CDN_CLOUD_NAME;

  cachedConfig = {
    provider,
    baseUrl,
    token,
    cloudName,
  };
  return cachedConfig;
}

export function getCdnConfig(): CdnConfig {
  return readConfig();
}

/**
 * Determina si una URL es absoluta (http/https) o relativa a /public.
 * CDN URLs son absolutas; sirva de /public quedan relativas a /
 */
function isExternal(src: string): boolean {
  return /^https?:\/\//i.test(src) || src.startsWith('//');
}

function stripLeadingSlash(path: string): string {
  return path.replace(/^\/+/, '');
}

function joinUrl(base: string, path: string): string {
  if (!base) return `/${stripLeadingSlash(path)}`;
  const trimmedBase = base.replace(/\/+$/, '');
  const trimmedPath = stripLeadingSlash(path);
  if (isExternal(base) || base.startsWith('//')) {
    return `${trimmedBase}/${trimmedPath}`;
  }
  return `${trimmedBase}/${trimmedPath}`;
}

function buildCloudflareUrl(baseUrl: string, src: string, width: number, quality: number): string {
  return `${joinUrl(baseUrl, src)}?width=${width}&quality=${quality}&fit=cover&format=auto`;
}

function buildImgixUrl(baseUrl: string, src: string, width: number, quality: number): string {
  const sep = baseUrl.includes('?') ? '&' : '?';
  const qs = new URLSearchParams({
    w: String(width),
    q: String(quality),
    auto: 'format,compress',
    fit: 'cover',
  }).toString();
  return `${joinUrl(baseUrl, src)}${sep}${qs}`;
}

function buildCloudinaryUrl(baseUrl: string, cloudName: string | undefined, src: string, width: number, quality: number): string {
  const cloud = cloudName ?? '';
  const transforms = `w_${width},q_${quality},f_auto,c_fill`;
  return `https://res.cloudinary.com/${cloud}/image/upload/${transforms}/${stripLeadingSlash(src)}`;
}

export interface ResizeOptions {
  width: number;
  quality?: number;
  format?: 'auto' | 'avif' | 'webp' | 'jpg';
  fit?: 'cover' | 'contain' | 'crop';
}

/**
 * Genera una URL transformada para una sola resolución.
 * Si el proveedor no está configurado o la URL es externa,
 * devuelve la URL sin transformaciones.
 */
export function getCdnUrl(src: string, opts: ResizeOptions): string {
  if (!src) return src;
  if (isExternal(src)) return src;

  const cfg = readConfig();
  if (cfg.provider === 'none' || !cfg.baseUrl) {
    return `/${stripLeadingSlash(src)}`;
  }

  const quality = opts.quality ?? 80;

  switch (cfg.provider) {
    case 'cloudflare':
      return buildCloudflareUrl(cfg.baseUrl, src, opts.width, quality);
    case 'imgix':
      return buildImgixUrl(cfg.baseUrl, src, opts.width, quality);
    case 'cloudinary':
      return buildCloudinaryUrl(cfg.baseUrl, cfg.cloudName, src, opts.width, quality);
  }
}

/**
 * Genera el atributo `srcset` para el elemento <img>.
 */
export function getSrcset(src: string, widths: readonly number[] = DEFAULT_WIDTHS, quality = 80): string {
  const uniqueWidths = Array.from(new Set(widths)).sort((a, b) => a - b);
  return uniqueWidths
    .map((w) => `${getCdnUrl(src, { width: w, quality })} ${w}w`)
    .join(', ');
}

/**
 * Genera el atributo `sizes` por defecto cuando no se especifica.
 * Default en este sitio: full-width en móvil, dos columnas en tablet.
 */
export function defaultSizes(): string {
  return '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw';
}

/**
 * Genera un placeholder LQIP (Low Quality Image Placeholder) en data URL.
 * Usa un canvas para ~6 KB con un gradiente neutro que cambia al hacer hover.
 */
export function getLqipPlaceholder(seed = 0): string {
  const palettes: Array<[string, string]> = [
    ['%231a1a1a', '%23262626'],
    ['%23231a14', '%23261d12'],
    ['%231a1a23', '%231f1f2a'],
    ['%231f1a1a', '%2326201d'],
  ];
  const [a, b] = palettes[Math.abs(seed) % palettes.length];
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${a}"/><stop offset="100%" stop-color="${b}"/></linearGradient></defs><rect width="4" height="3" fill="url(%23g)"/></svg>`
  )}`;
}

/**
 * Determina si el `srcset` generado vale la pena (>= 2 resoluciones).
 */
export function hasSrcset(srcset: string): boolean {
  return srcset.split(',').filter(Boolean).length >= 2;
}
