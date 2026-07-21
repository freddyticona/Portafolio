/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

/**
 * Hook para registrar y gestionar el Service Worker
 */
export function useServiceWorker() {
  const [isOnline, setIsOnline] = useState(true);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // Check online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Solo registrar en producción
    if (import.meta.env.DEV) return;

    if ('serviceWorker' in navigator) {
      // Registrar el service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[SW] Service Worker registrado:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;

            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Hay una nueva versión disponible
                  setWaitingWorker(newWorker);
                  setShowUpdatePrompt(true);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('[SW] Falló registro:', error);
        });

      // Refresh cuando hay una nueva versión
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  const updateServiceWorker = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowUpdatePrompt(false);
    }
  };

  const clearCache = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.active?.postMessage({ type: 'CLEAR_CACHE' });
      });
    }
  };

  return {
    isOnline,
    showUpdatePrompt,
    setShowUpdatePrompt,
    updateServiceWorker,
    clearCache
  };
}

/**
 * Componente para mostrar prompt de actualización
 */
export function UpdatePrompt() {
  const { showUpdatePrompt, setShowUpdatePrompt, updateServiceWorker } = useServiceWorker();

  if (!showUpdatePrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gold text-black p-4 rounded-sm shadow-2xl max-w-sm">
      <p className="font-bold mb-2">Nueva versión disponible</p>
      <p className="text-sm mb-4">Hay una actualización lista para instalar.</p>
      <div className="flex gap-2">
        <button
          onClick={updateServiceWorker}
          className="px-4 py-2 bg-black hover:bg-black/80 text-white rounded-sm text-sm font-bold"
        >
          Actualizar
        </button>
        <button
          onClick={() => setShowUpdatePrompt(false)}
          className="px-4 py-2 hover:bg-black/10 rounded-sm text-sm font-bold"
        >
          Ahora no
        </button>
      </div>
    </div>
  );
}

/**
 * Componente para mostrar estado de conexión
 */
export function OnlineStatus({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const { isOnline } = useServiceWorker();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 text-center text-sm font-mono">
      {lang === 'es'
        ? '⚠️ Sin conexión a internet. Mostrando contenido offline.'
        : '⚠️ No internet connection. Showing offline content.'}
    </div>
  );
}
