/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex = 0, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Reset to initial index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen]);

  const currentImage = images[currentIndex];

  const nextImage = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [currentIndex]);

  const handleZoomIn = () => {
    if (zoom < 3) setZoom(zoom * 1.25);
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom / 1.25);
      if (zoom / 1.25 <= 1) {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      const startX = e.clientX - position.x;
      const startY = e.clientY - position.y;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        setPosition({
          x: moveEvent.clientX - startX,
          y: moveEvent.clientY - startY
        });
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 rounded-full">
        <span className="text-white text-sm font-mono">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Main image container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain transition-transform duration-200 cursor-grab active:cursor-grabbing"
          style={{
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
          }}
          onMouseDown={handleMouseDown}
          onClick={() => {
            if (zoom === 1) {
              // Click on right side goes next, left side goes prev
              const clickX = (event as any).clientX;
              const screenWidth = window.innerWidth;
              if (clickX > screenWidth / 2) {
                nextImage();
              } else {
                prevImage();
              }
            }
          }}
        />
      </div>

      {/* Image title */}
      {currentImage.title && (
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <p className="text-white text-lg font-display">{currentImage.title}</p>
        </div>
      )}

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={nextImage}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </>
      )}

      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 1}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Reducir zoom"
        >
          <ZoomOut className="w-5 h-5 text-white" />
        </button>
        <span className="text-white text-sm font-mono bg-white/10 px-3 py-2 rounded-full">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={handleZoomIn}
          disabled={zoom >= 3}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Aumentar zoom"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setPosition({ x: 0, y: 0 });
          }}
          className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white text-sm font-mono"
        >
          Reset
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-20">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setZoom(1);
                setPosition({ x: 0, y: 0 });
              }}
              className={`w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-gold scale-110'
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Hook para usar el lightbox fácilmente
export function useLightbox(images: LightboxImage[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = (index: number = 0) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return {
    isOpen,
    initialIndex,
    openLightbox,
    closeLightbox,
    LightboxComponent: () => (
      <Lightbox
        images={images}
        initialIndex={initialIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
      />
    )
  };
}
