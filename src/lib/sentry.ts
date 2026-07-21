import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN || '';

export function initSentry() {
  if (!SENTRY_DSN) return;

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.5,
    replaysSessionSampleRate: 0.2,
    replaysOnErrorSampleRate: 1.0,
    environment: import.meta.env.MODE === 'production' ? 'production' : 'development',
  });
}

export default Sentry;
