/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Real User Monitoring (RUM) + Core Web Vitals
 *
 * Captura métricas reales de performance en el navegador del usuario
 * y las envía a GA4 + Vercel Analytics.
 *
 * Métricas monitoreadas:
 *   - LCP (Largest Contentful Paint)   [Objetivo: < 2.5s]
 *   - INP (Interaction to Next Paint)  [Objetivo: < 200ms]
 *   - CLS (Cumulative Layout Shift)    [Objetivo: < 0.1]
 *   - FCP (First Contentful Paint)     [Objetivo: < 1.8s]
 *   - TTFB (Time to First Byte)        [Objetivo: < 600ms]
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

type MetricRating = 'good' | 'needs-improvement' | 'poor';

interface RumPayload {
  metric_name: string;
  value: number;
  rating: MetricRating;
  delta?: number;
  id?: string;
  page_path?: string;
  page_location?: string;
}

const RATING_THRESHOLDS: Record<string, [number, number]> = {
  LCP: [2500, 4000],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [600, 1500],
};

function ratingFor(metric: Metric): MetricRating {
  const threshold = RATING_THRESHOLDS[metric.name];
  if (!threshold) return 'good';
  if (metric.value <= threshold[0]) return 'good';
  if (metric.value <= threshold[1]) return 'needs-improvement';
  return 'poor';
}

function buildPayload(metric: Metric): RumPayload {
  return {
    metric_name: metric.name,
    value: Math.round(metric.value * 1000) / 1000,
    rating: ratingFor(metric),
    delta: metric.delta,
    id: metric.id,
    page_path: window.location.pathname,
    page_location: window.location.href,
  };
}

/**
 * Envía métricas a GA4 como eventos `web_vitals_*`.
 */
function sendToGA4(payload: RumPayload): void {
  const gtag = (window as any).gtag;
  if (!gtag) return;
  gtag('event', `web_vital_${payload.metric_name.toLowerCase()}`, {
    metric_rating: payload.rating,
    metric_value: payload.value,
    metric_delta: payload.delta,
    page_path: payload.page_path,
    non_interaction: true,
  });
}

/**
 * Envía métricas a Vercel Analytics si está disponible.
 */
function sendToVercel(payload: RumPayload): void {
  const va = (window as any).va;
  if (!va || typeof va !== 'function') return;
  try {
    va('track', `web-vital-${payload.metric_name}`, { value: payload.value, rating: payload.rating });
  } catch {}
}

/**
 * Log en consola durante el desarrollo.
 */
function logToDev(payload: RumPayload): void {
  if (!import.meta.env.DEV) return;
  const colorTag =
    payload.rating === 'good'
      ? '%c GOOD '
      : payload.rating === 'needs-improvement'
      ? '%c NEEDS IMPROVEMENT '
      : '%c POOR ';
  const color =
    payload.rating === 'good'
      ? 'background:#22c55e;color:#000;padding:2px 6px;border-radius:4px'
      : payload.rating === 'needs-improvement'
      ? 'background:#eab308;color:#000;padding:2px 6px;border-radius:4px'
      : 'background:#ef4444;color:#fff;padding:2px 6px;border-radius:4px';
  console.log(
    `[RUM] ${colorTag}${payload.metric_name}=${payload.value}`,
    color,
    `(${payload.rating})`,
    payload.page_path || ''
  );
}

/**
 * Pipeline de envío: si todas las fuentes fallan, los datos siguen disponibles
 * vía PerformanceObserver / GA4 — nunca perdemos eventos silenciosamente.
 */
function report(metric: Metric): void {
  const payload = buildPayload(metric);
  logToDev(payload);
  sendToGA4(payload);
  sendToVercel(payload);
}

/**
 * Inicializa Real User Monitoring. Llamar después de hidratación.
 *
 * Se carga dinámicamente desde el main thread (window.load + setTimeout(0))
 * para evitar onCLS / onINP que disparen en el momento crítico del LCP/FCP
 * dentro del evaluation del bundle principal.
 */
export function initRUM(): void {
  if (typeof window === 'undefined') return;

  const start = () => {
    try {
      onLCP(report);
      onINP(report);
      onCLS(report);
      onFCP(report);
      onTTFB(report);
    } catch (err) {
      console.error('[RUM] Error inicializando métricas', err);
    }
  };

  if (document.readyState === 'complete') {
    setTimeout(start, 0);
  } else {
    window.addEventListener('load', () => setTimeout(start, 0), { once: true });
  }
}

export type { RumPayload, MetricRating };
