/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * useScrollTracking — Mide la profundidad de lectura en cada página.
 *
 * Envía un evento `scroll_depth` por umbral (25/50/75/100 %) una sola vez por
 * ruta. Sirve para distinguir "tráfico que rebota" de "tráfico que lee", que
 * es la diferencia entre tráfico y clientes en un sitio de servicios.
 */

import { useEffect, useRef } from 'react';
import { PortfolioEvents } from '../lib/analytics';

const THRESHOLDS = [25, 50, 75, 100];

export function useScrollTracking(path: string) {
  const sentRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    sentRef.current = new Set();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !sentRef.current.has(threshold)) {
          sentRef.current.add(threshold);
          PortfolioEvents.scrollDepth(threshold, path);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [path]);
}
