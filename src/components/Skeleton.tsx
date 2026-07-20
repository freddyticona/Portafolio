/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Componente Skeleton para mostrar placeholder de carga
 */
export function Skeleton({
  className = '',
  variant = 'default',
  count = 1
}: {
  className?: string;
  variant?: 'default' | 'text' | 'circular' | 'rectangular';
  count?: number;
}) {
  const variants = {
    default: 'rounded-sm',
    text: 'rounded-sm h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-sm'
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-stone-800 ${variants[variant]} ${className}`}
          style={{
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      ))}
    </>
  );
}

/**
 * Skeleton para tarjeta de proyecto
 */
export function PortfolioCardSkeleton() {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden space-y-4">
      {/* Image placeholder */}
      <Skeleton className="w-full aspect-video" variant="rectangular" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton para tarjeta de blog
 */
export function BlogCardSkeleton() {
  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden space-y-4">
      <Skeleton className="w-full aspect-video" variant="rectangular" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

/**
 * Skeleton para timeline
 */
export function TimelineSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          {/* Date */}
          <div className="w-20 flex-shrink-0">
            <Skeleton className="h-4 w-16" />
          </div>

          {/* Content */}
          <div className="flex-grow space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton para caso de estudio
 */
export function CaseStudySkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="space-y-4">
        <Skeleton className="w-full aspect-video" variant="rectangular" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>

      {/* Content sections */}
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" count={3} />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Loading screen animado
 */
export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center">
      <div className="text-center space-y-4">
        {/* Animated camera icon */}
        <div className="w-16 h-16 mx-auto relative">
          <div className="absolute inset-0 border-2 border-gold/30 rounded-full animate-ping" />
          <div className="absolute inset-2 border-2 border-gold/50 rounded-full animate-pulse" />
          <div className="w-8 h-8 mx-auto mt-4 bg-gold/20 rounded-full animate-bounce" />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>

        {/* Progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
            <div className="h-full bg-gold animate-loading" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 80%; }
          100% { width: 100%; }
        }
        .animate-loading {
          animation: loading 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/**
 * Skeleton para formulario de contacto
 */
export function ContactFormSkeleton() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-3">
        <Skeleton className="h-8 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-3/4 mx-auto" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-12 w-full" />
          </div>
        ))}
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

/**
 * Spinner de carga minimalista
 */
export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`inline-block ${sizes[size]} animate-spin`}>
      <svg
        className="w-full h-full text-gold"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

/**
 * Inline loading placeholder
 */
export function InlineLoading({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <div className="flex items-center gap-2 text-stone-500 text-sm">
      <Spinner size="sm" />
      <span>{lang === 'es' ? 'Cargando...' : 'Loading...'}</span>
    </div>
  );
}

/**
 * Skeleton para Hero Section
 */
export function HeroSkeleton() {
  return (
    <div className="w-full min-h-[80vh] bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full space-y-6 py-20">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-16 w-3/4 mx-auto max-w-2xl" />
          <Skeleton className="h-6 w-full mx-auto max-w-xl" />
          <div className="flex gap-4 justify-center pt-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton para Estadísticas
 */
export function StatsSkeleton() {
  return (
    <div className="bg-white/[0.01] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-12 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton para Testimonios
 */
export function TestimonialSkeleton() {
  return (
    <div className="bg-[#020202] border border-white/5 p-6 rounded-sm space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" count={3} />
      </div>
      <div className="pt-4 border-t border-white/5 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
}

/**
 * Skeleton para About Section
 */
export function AboutSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5">
        <Skeleton className="w-full aspect-[4/5]" variant="rectangular" />
      </div>
      <div className="lg:col-span-7 space-y-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" count={4} />
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  );
}

/**
 * Skeleton para CV Section
 */
export function CVSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-4 w-full max-w-xl" />
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left column */}
        <div className="space-y-6">
          <Skeleton className="h-6 w-32" />
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-2 p-4 bg-[#020202] rounded-sm">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-32" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          <Skeleton className="h-6 w-40" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 bg-[#020202] rounded-sm space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
