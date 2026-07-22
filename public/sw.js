/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Service Worker para Portafolio Freddy Ticona - PWA v2.0
// Proporciona funcionalidad offline, caché inteligente y sincronización

const CACHE_VERSION = '2.0.0';
const CACHE_NAME = `freddy-ticona-${CACHE_VERSION}`;
const RUNTIME_CACHE = `freddy-ticono-runtime-${CACHE_VERSION}`;
const IMAGE_CACHE = `freddy-ticono-images-${CACHE_VERSION}`;

// Archivos estáticos para cachear inmediatamente
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/robots.txt',
  '/sitemap.xml'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caché abierto:', CACHE_NAME);
      return cache.addAll(STATIC_FILES.map((file) => {
        // Si falla un archivo, continuar con los demás
        return fetch(file).then((response) => {
          if (!response.ok) throw new Error(`Failed to fetch ${file}`);
          return cache.put(file, response);
        }).catch((error) => {
          console.warn(`[SW] No se pudo cachear ${file}:`, error);
          return null;
        });
      }).filter(Boolean));
    })
  );

  // Forzar activación inmediata
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activado');

  // Limpiar caches antiguos
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE && !cacheName.startsWith(IMAGE_CACHE)) {
            console.log('[SW] Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // Controlar todos los clientes inmediatamente
  self.clients.claim();
});

// Estrategia de caché: Network First para navegación, Cache First para assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requests de extensiones
  if (url.protocol === 'extension:') {
    return;
  }

  // Para archivos HTML - Network First con fallback a cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clonar respuesta y guardar en cache
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Si falla la red, buscar en cache
          return caches.match(request);
        })
    );
    return;
  }

  // Para imágenes - Cache First con actualización en segundo plano
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            // Actualizar en segundo plano
            fetch(request).then((freshResponse) => {
              if (freshResponse && freshResponse.ok) {
                cache.put(request, freshResponse.clone());
              }
            });
            return response;
          }

          // Si no está en cache, buscar en red
          return fetch(request).then((response) => {
            if (response.ok) {
              const responseClone = response.clone();
              cache.put(request, responseClone);
            }
            return response;
          });
        });
      })
    );
    return;
  }

  // Para CSS/JS - Network First (evita servir chunks obsoletos tras deploy)
  if (request.url.includes('/assets/') || request.url.includes('.')) {
    event.respondWith(
      fetch(request).then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        const responseClone = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      }).catch(() => {
        return caches.match(request).then((response) => {
          if (response) return response;
          // Si no hay nada en cache, devolver offline page
          return caches.match('/offline.html');
        });
      })
    );
    return;
  }

  // Para todo lo demás - Network First
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response;
      })
      .catch(() => {
        return caches.match(request).then((response) => {
          if (response) return response;
          return caches.match('/offline.html');
        });
      })
  );
});

// Mensajes desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', (event) => {
  console.log('[SW] Sync event:', event.tag);

  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncAnalytics() {
  // Sincronizar analytics guardados localmente
  console.log('[SW] Sincronizando analytics...');
}

async function syncForms() {
  // Sincronizar formularios guardados cuando no había conexión
  console.log('[SW] Sincronizando formularios...');
}

// Notificaciones push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data?.text() || 'Nueva actualización en el portafolio',
    icon: '/icon-192.png',
    badge: '/apple-touch-icon.png',
    vibrate: [200, 100, 200],
    data: { url: '/' },
    actions: [
      { action: 'explore', title: 'Ver Portafolio', icon: '/icon-192.png' },
      { action: 'close', title: 'Cerrar', icon: '/icon-192.png' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Freddy Ticona Portafolio', options)
  );
});

// Click en notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow(event.notification.data?.url || '/'));
  }
});
