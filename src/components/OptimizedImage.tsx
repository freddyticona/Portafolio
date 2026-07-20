/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Componente de imagen optimizada con soporte WebP y fallback
 *
 * Uso:
 * <OptimizedImage
 *   src="/images/freddy.jpg"
 *   alt="Freddy Ticona"
 *   className="w-full h-auto"
 *   sizes="(max-width: 768px) 100vw, 50vw"
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  priority = false
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generar rutas para diferentes formatos
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    // Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback a imagen original si WebP/AVIF fallan
    console.warn('Error loading optimized image, using fallback');
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer" />
      )}

      {/* Picture element con múltiples formatos */}
      {isInView && (
        <picture>
          {/* AVIF - mejor compresión, soporte moderno */}
          <source
            srcSet={avifSrc}
            type="image/avif"
            sizes={sizes}
          />
          {/* WebP - buen balance compresión/calidad */}
          <source
            srcSet={webpSrc}
            type="image/webp"
            sizes={sizes}
          />
          {/* Fallback a formato original */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      )}
    </div>
  );
}

/**
 * Variante para backgrounds optimizados
 */
export function OptimizedBackground({
  src,
  children,
  className = ''
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

    // Intentar cargar AVIF primero
    const img = new Image();
    img.src = avifSrc;

    img.onload = () => {
      setIsLoaded(true);
      // Aplicar background
      if (document.querySelector('.optimized-bg')) {
        const element = document.querySelector('.optimized-bg') as HTMLElement;
        element.style.backgroundImage = `url(${avifSrc})`;
      }
    };

    img.onerror = () => {
      // Fallback a WebP
      const webpImg = new Image();
      webpImg.src = webpSrc;
      webpImg.onload = () => {
        setIsLoaded(true);
        if (document.querySelector('.optimized-bg')) {
          const element = document.querySelector('.optimized-bg') as HTMLElement;
          element.style.backgroundImage = `url(${webpSrc})`;
        }
      };
    };
  }, [src]);

  return (
    <div
      className={`optimized-bg ${className}`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer" />
      )}
      {children}
    </div>
  );
}

/**
 * Hook para predecir si el navegador soporta WebP
 */
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const checkWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const dataURL = canvas.toDataURL('image/webp');
      setSupportsWebP(dataURL.indexOf('data:image/webp') === 0);
    };

    checkWebP();
  }, []);

  return supportsWebP;
}
