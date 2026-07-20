/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface RobustImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  fallback?: string; // Imagen de fallback si la principal falla
  showFallback?: boolean; // Mostrar fallback UI
}

/**
 * Componente de imagen robusto con:
 * - Verificación de existencia
 * - Múltiples fallbacks
 * - Manejo de errores
 * - Lazy loading
 */
export default function RobustImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  fallback = '/images/freddy_working.webp',
  showFallback = false
}: RobustImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    console.warn(`Image failed to load: ${currentSrc}`);

    // Si no hemos intentado el fallback aún, intentarlo
    if (currentSrc === src && fallback) {
      setCurrentSrc(fallback);
    } else {
      setHasError(true);
      setIsLoaded(true); // Ocultar skeleton
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 animate-shimmer" />
      )}

      {/* Imagen */}
      {isInView && (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Fallback UI cuando hay error */}
      {hasError && showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/50">
          <AlertCircle className="w-8 h-8 text-stone-500 mb-2" />
          <p className="text-xs text-stone-400">Imagen no disponible</p>
        </div>
      )}
    </div>
  );
}

/**
 * Hook para verificar si una imagen existe
 */
export function useImageExists(src: string): boolean {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setExists(true);
    img.onerror = () => setExists(false);
    img.src = src;
  }, [src]);

  return exists;
}

/**
 * Componente para imagen de perfil con fallback automático
 */
interface ProfileImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src = '/images/freddy_profile.webp', alt = 'Freddy Ticona', className = '' }: ProfileImageProps) {
  // Lista de fallbacks en orden
  const fallbacks = [
    '/images/freddy_profile.webp',
    '/images/freddy_studio.webp',
    '/images/freddy_working.webp',
    '/images/qr-mercantil.jpg' // Último recurso
  ];

  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState(-1);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      // Intentar siguiente fallback
      const nextIndex = fallbackIndex + 1;
      if (nextIndex < fallbacks.length) {
        setFallbackIndex(nextIndex);
        setCurrentSrc(fallbacks[nextIndex]);
      } else {
        setHasError(true);
        setIsLoaded(true);
      }
    };
    img.src = currentSrc;
  }, [currentSrc, fallbackIndex]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-800 animate-pulse" />
      )}

      <img
        src={hasError ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%231a1a1a"/%3E%3Ctext x="50" y="50" text-anchor="middle" fill="%23666" font-size="12"%3EFT%3C/text%3E%3C/svg%3E' : currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div  );
}
