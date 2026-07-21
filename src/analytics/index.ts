/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * SISTEMA DE ANALYTICS
 *
 * Sistema de tracking de analytics personalizado sin dependencias externas.
 * Guarda datos en localStorage para análisis básicos de comportamiento.
 */

interface AnalyticsEvent {
  type: 'pageview' | 'click' | 'scroll' | 'form_submit' | 'video_play' | 'lightbox_open';
  page: string;
  element?: string;
  timestamp: number;
  sessionId: string;
}

interface AnalyticsSession {
  id: string;
  startTime: number;
  referrer: string;
  userAgent: string;
  language: string;
  events: AnalyticsEvent[];
}

class Analytics {
  private sessionId: string;
  private session: AnalyticsSession | null = null;
  private queue: AnalyticsEvent[] = [];
  private isInitialized = false;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  }

  private getSession(): AnalyticsSession | null {
    if (!this.session) {
      const stored = localStorage.getItem(`analytics_session_${this.sessionId}`);
      if (stored) {
        try {
          this.session = JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing session:', e);
        }
      }
    }
    return this.session;
  }

  private saveSession(session: AnalyticsSession): void {
    localStorage.setItem(`analytics_session_${this.sessionId}`, JSON.stringify(session));
  }

  private cleanupOldSessions(): void {
    const now = Date.now();
    const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 días

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('analytics_session_')) {
        try {
          const session = JSON.parse(localStorage.getItem(key) || '{}');
          if (now - session.startTime > maxAge) {
            localStorage.removeItem(key);
          }
        } catch (e) {
          // Ignorar errores de parseo
        }
      }
    }
  }

  init(): void {
    if (this.isInitialized) return;
    if (typeof window === 'undefined') return;

    this.isInitialized = true;

    // Crear o recuperar sesión
    const existingSession = this.getSession();

    if (!existingSession) {
      this.session = {
        id: this.sessionId,
        startTime: Date.now(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        events: []
      };
      this.saveSession(this.session);
    } else {
      this.session = existingSession;
    }

    // Track page view inicial
    this.track('pageview', window.location.hash.replace('#', '') || 'inicio');

    // Track scroll depth
    this.setupScrollTracking();

    // Limpiar sesiones viejas
    this.cleanupOldSessions();

    // Guardar datos antes de salir
    window.addEventListener('beforeunload', () => {
      this.flush();
    });
  }

  private setupScrollTracking(): void {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        thresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            this.track('scroll', undefined, { depth: threshold });
          }
        });
      }
    };

    window.addEventListener('scroll', this.debounce(handleScroll, 100));
  }

  private debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: any;
    return ((...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    }) as T;
  }

  track(
    type: AnalyticsEvent['type'],
    page?: string,
    metadata?: Record<string, any>
  ): void {
    if (!this.isInitialized) return;

    const event: AnalyticsEvent = {
      type,
      page: page || window.location.hash.replace('#', '') || 'inicio',
      timestamp: Date.now(),
      sessionId: this.sessionId,
      ...metadata
    };

    this.queue.push(event);

    // Procesar cola cada 5 eventos o cada 30 segundos
    if (this.queue.length >= 5) {
      this.flush();
    }
  }

  flush(): void {
    if (!this.session || this.queue.length === 0) return;

    // Agregar eventos a la sesión
    this.session.events.push(...this.queue);
    this.queue = [];

    // Guardar sesión
    this.saveSession(this.session);

    // Actualizar estadísticas globales
    this.updateGlobalStats();
  }

  private updateGlobalStats(): void {
    const stats = this.getGlobalStats();

    stats.totalEvents += this.session?.events.length || 0;
    stats.lastActivity = Date.now();

    localStorage.setItem('analytics_stats', JSON.stringify(stats));
  }

  getGlobalStats(): any {
    const stored = localStorage.getItem('analytics_stats');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // Ignorar
      }
    }

    return {
      totalSessions: 0,
      totalEvents: 0,
      lastActivity: Date.now()
    };
  }

  getSessions(days: number = 7): AnalyticsSession[] {
    const sessions: AnalyticsSession[] = [];
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('analytics_session_')) {
        try {
          const session = JSON.parse(localStorage.getItem(key) || '{}');
          if (session.startTime > cutoff) {
            sessions.push(session);
          }
        } catch (e) {
          // Ignorar errores de parseo
        }
      }
    }

    return sessions.sort((a, b) => b.startTime - a.startTime);
  }

  getPageViews(days: number = 7): Record<string, number> {
    const sessions = this.getSessions(days);
    const pageViews: Record<string, number> = {};

    sessions.forEach(session => {
      session.events
        .filter(event => event.type === 'pageview')
        .forEach(event => {
          pageViews[event.page] = (pageViews[event.page] || 0) + 1;
        });
    });

    return pageViews;
  }

  getTopPages(days: number = 7, limit: number = 10): Array<{ page: string; views: number }> {
    const pageViews = this.getPageViews(days);

    return Object.entries(pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }
}

// Instancia singleton
export const analytics = new Analytics();

// Hook para usar analytics en componentes
export function useAnalytics() {
  return {
    track: (type: AnalyticsEvent['type'], page?: string, metadata?: Record<string, any>) => {
      analytics.track(type, page, metadata);
    },
    pageview: (page: string) => {
      analytics.track('pageview', page);
    },
    click: (element: string, page?: string) => {
      analytics.track('click', page, { element });
    },
    formSubmit: (formName: string, page?: string) => {
      analytics.track('form_submit', page, { element: formName });
    }
  };
}
