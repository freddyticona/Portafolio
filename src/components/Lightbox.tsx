/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

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
  const [showControls, setShowControls] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const controlsTimer = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef(0);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      setShowControls(true);
    }
  }, [isOpen, initialIndex]);

  // Auto-hide controls after 3s of inactivity
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    if (isOpen) resetControlsTimer();
    return () => { if (controlsTimer.current) clearTimeout(controlsTimer.current); };
  }, [isOpen, currentIndex, resetControlsTimer]);

  // Keyboard + fullscreen
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowRight') { nextImage(); resetControlsTimer(); return; }
      if (e.key === 'ArrowLeft') { prevImage(); resetControlsTimer(); return; }
      if (e.key === 'f') setFullscreen(f => !f);
      resetControlsTimer();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKey);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, resetControlsTimer]);

  const currentImage = images[currentIndex];

  const nextImage = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(c => c + 1);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [currentIndex, images.length]);

  const prevImage = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [currentIndex]);

  const handleZoomIn = () => setZoom(z => Math.min(z * 1.25, 3));
  const handleZoomOut = () => {
    setZoom(z => {
      const next = z / 1.25;
      if (next <= 1) { setPosition({ x: 0, y: 0 }); return 1; }
      return next;
    });
  };

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 60) {
      if (diff < 0) nextImage(); else prevImage();
      resetControlsTimer();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      const startX = e.clientX - position.x;
      const startY = e.clientY - position.y;
      const handleMove = (me: MouseEvent) => setPosition({ x: me.clientX - startX, y: me.clientY - startY });
      const handleUp = () => { window.removeEventListener('mousemove', handleMove); window.removeEventListener('mouseup', handleUp); };
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
    } else {
      // Click navigation at zoom=1
      const screenW = window.innerWidth;
      if (e.clientX > screenW / 2) nextImage(); else prevImage();
      resetControlsTimer();
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onMouseMove={resetControlsTimer}
        >
          {/* Overlay click to close */}
          <div className="absolute inset-0 z-0" onClick={onClose} />

          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-50 p-2.5 bg-black/60 backdrop-blur-sm hover:bg-gold hover:text-black rounded-full transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image counter — estilo cinema 001/012 */}
          <div className={`absolute top-4 left-4 z-50 ${showControls ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <span className="cinema-counter text-xs">
              {String(currentIndex + 1).padStart(3, '0')}/{String(images.length).padStart(3, '0')}
            </span>
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={() => setFullscreen(f => !f)}
            className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 p-2 bg-black/60 backdrop-blur-sm hover:bg-gold hover:text-black rounded-full transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label={fullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Main image with AnimatePresence for smooth transitions */}
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: zoom }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing select-none"
                style={{
                  transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Image title */}
          {currentImage.title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 10 }}
              className="absolute bottom-24 left-0 right-0 text-center px-8"
            >
              <p className="text-white/80 text-sm font-display tracking-wide">{currentImage.title}</p>
            </motion.div>
          )}

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: showControls ? 1 : 0, x: showControls ? 0 : -10 }}
                onClick={prevImage}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/60 backdrop-blur-sm hover:bg-gold hover:text-black rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: showControls ? 1 : 0, x: showControls ? 0 : 10 }}
                onClick={nextImage}
                disabled={currentIndex === images.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/60 backdrop-blur-sm hover:bg-gold hover:text-black rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </>
          )}

          {/* Zoom controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 10 }}
            className="absolute bottom-4 right-4 z-40 flex items-center gap-2"
          >
            <button onClick={handleZoomOut} disabled={zoom <= 1}
              className="p-2 bg-black/60 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ZoomOut className="w-4 h-4 text-white" />
            </button>
            <span className="text-white/80 text-xs font-mono bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full min-w-[3rem] text-center tabular-nums">
              {Math.round(zoom * 100)}%
            </span>
            <button onClick={handleZoomIn} disabled={zoom >= 3}
              className="p-2 bg-black/60 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <ZoomIn className="w-4 h-4 text-white" />
            </button>
            <button onClick={() => { setZoom(1); setPosition({ x: 0, y: 0 }); }}
              className="px-2.5 py-1.5 bg-black/60 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all text-white/80 text-xs font-mono">
              Reset
            </button>
          </motion.div>

          {/* Thumbnails strip */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              className="absolute bottom-4 left-0 right-0 z-40 flex justify-center gap-1.5 px-16"
            >
              {images.map((image, i) => (
                <button key={i} onClick={() => { setCurrentIndex(i); setZoom(1); setPosition({ x: 0, y: 0 }); resetControlsTimer(); }}
                  className={`w-12 h-12 rounded overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                    i === currentIndex ? 'border-gold scale-110 shadow-lg shadow-gold/20' : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                  }`}>
                  <img src={image.src} alt="" className="w-full h-full object-cover" draggable={false} />
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
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
