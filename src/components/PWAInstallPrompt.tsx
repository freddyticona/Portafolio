/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, X, Wifi, WifiOff, Database, Trash2 } from 'lucide-react';

interface PWAInstallPromptProps {
  lang?: 'es' | 'en';
}

/**
 * Componente para mostrar prompt de instalación PWA y estado offline
 */
export default function PWAInstallPrompt({ lang = 'es' }: PWAInstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);
  const [cacheSize, setCacheSize] = useState<string>('0 KB');

  useEffect(() => {
    // Detectar online/offline
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(true);
      setTimeout(() => setShowOfflineMessage(false), 3000);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Verificar estado inicial
    setIsOnline(navigator.onLine);

    // Capturar evento beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // Calcular tamaño del caché
    getCacheSize();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const getCacheSize = async () => {
    try {
      if ('serviceWorker' in navigator && 'caches' in window) {
        const cacheNames = await caches.keys();
        let totalSize = 0;

        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();

          for (const request of keys) {
            const response = await cache.match(request);
            if (response) {
              const blob = await response.blob();
              totalSize += blob.size;
            }
          }
        }

        const sizeMB = (totalSize / 1024 / 1024).toFixed(2);
        setCacheSize(`${sizeMB} MB`);
      }
    } catch (error) {
      console.error('Error getting cache size:', error);
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA instalado');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  const handleClearCache = async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      setCacheSize('0 KB');
      window.location.reload();
    }
  };

  // Mensaje de offline (cuando se pierde conexión)
  if (!isOnline && showOfflineMessage) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-50 bg-red-600 text-white px-4 py-3 rounded-sm shadow-lg flex items-center gap-3 animate-fadeIn">
        <WifiOff className="w-5 h-5 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-bold text-sm">
            {lang === 'es' ? 'Sin conexión a internet' : 'No internet connection'}
          </p>
          <p className="text-xs opacity-90">
            {lang === 'es' ? 'Mostrando contenido disponible' : 'Showing available content'}
          </p>
        </div>
      </div>
    );
  }

  // Prompt de instalación
  if (showInstallPrompt && deferredPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-gold text-black px-4 py-4 rounded-sm shadow-2xl animate-fadeIn">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black/10 rounded-sm flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">
                {lang === 'es' ? 'Instalar App' : 'Install App'}
              </p>
              <p className="text-xs opacity-80">
                {lang === 'es'
                  ? 'Instala el portafolio en tu dispositivo'
                  : 'Install portfolio on your device'}
              </p>
            </div>
          </div>
          <button
            onClick={handleDismissInstall}
            className="text-black/50 hover:text-black transition-colors"
            aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleInstallClick}
            className="flex-1 px-4 py-2 bg-black hover:bg-black/80 text-white rounded-sm text-xs font-bold uppercase transition-colors"
          >
            {lang === 'es' ? 'Instalar' : 'Install'}
          </button>
          <button
            onClick={handleDismissInstall}
            className="px-4 py-2 hover:bg-black/10 rounded-sm text-xs font-bold uppercase transition-colors"
          >
            {lang === 'es' ? 'Ahora no' : 'Not now'}
          </button>
        </div>
      </div>
    );
  }

  // Indicador de estado (discreto)
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      {/* Online indicator */}
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-sm border transition-all ${
          isOnline
            ? 'bg-green-500/10 border-green-500/20 text-green-400'
            : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}
      >
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            <span className="text-xs font-mono font-bold hidden sm:inline">
              {lang === 'es' ? 'En línea' : 'Online'}
            </span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            <span className="text-xs font-mono font-bold hidden sm:inline">
              {lang === 'es' ? 'Offline' : 'Offline'}
            </span>
          </>
        )}
      </div>

      {/* Cache info (solo en development) */}
      {import.meta.env.DEV && (
        <button
          onClick={handleClearCache}
          className="px-3 py-2 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-stone-400 hover:text-gold hover:border-gold/30 transition-all flex items-center gap-2"
          title={`${lang === 'es' ? 'Caché' : 'Cache'}: ${cacheSize}`}
        >
          <Database className="w-4 h-4" />
          <span className="hidden sm:inline">{cacheSize}</span>
          <Trash2 className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

/**
 * Variante compacta para el navbar
 */
export function PWAStatusCompact({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 text-center text-sm font-mono">
      {lang === 'es'
        ? '⚠️ Sin conexión a internet. Mostrando contenido offline.'
        : '⚠️ No internet connection. Showing offline content.'}
    </div>
  );
}
