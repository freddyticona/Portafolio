/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { getCdnUrl, getLqipPlaceholder, getSrcset, defaultSizes, type ResizeOptions } from '../lib/image-cdn';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  widths?: number[];
  sizes?: string;
  quality?: number;
  blurSeed?: number;
  objectFit?: 'cover' | 'contain';
  threshold?: number;
  eager?: boolean;
}

const FALLBACKS = {
  blur: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 4 3%22%3E%3Crect width=%224%22 height=%223%22 fill=%22%231a1a1a%22/%3E%3C/svg%3E',
};

export default function LazyImage({
  src,
  alt,
  className = '',
  widths,
  sizes = defaultSizes(),
  quality = 80,
  blurSeed = 0,
  objectFit = 'cover',
  threshold = 0.1,
  eager = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(eager);
  const imgRef = useRef<HTMLImageElement>(null);

  const fallbackWidth = Array.isArray(widths) ? widths[0] ?? 800 : 800;
  const fallbackSrc = getCdnUrl(src, { width: fallbackWidth, quality } as ResizeOptions);
  const srcset = React.useMemo(() => getSrcset(src, widths, quality), [src, widths, quality]);
  const placeholder = getLqipPlaceholder(blurSeed) || FALLBACKS.blur;

  useEffect(() => {
    if (eager) {
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
      { threshold }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, [threshold, eager]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden aspect-video ${className}`}>
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} scale-110 blur-xl transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {isInView && (
        <img
          src={fallbackSrc}
          srcSet={srcset}
          sizes={sizes}
          alt={alt}
          onLoad={handleLoad}
          decoding="async"
          fetchpriority={eager ? 'high' : 'auto'}
          loading={eager ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer pointer-events-none" />
      )}
    </div>
  );
}

export function LazyBackground({
  src,
  children,
  className = '',
}: {
  src: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const url = getCdnUrl(src, { width: 1920, quality: 80 } as ResizeOptions);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => setIsLoaded(true);
  }, [url]);

  return (
    <div
      ref={divRef}
      className={`relative ${className}`}
      style={{
        backgroundImage: isLoaded ? `url(${url})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer" />
      )}
      {children}
    </div>
  );
}
