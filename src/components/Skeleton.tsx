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
export function InlineLoading() {
  return (
    <div className="flex items-center gap-2 text-stone-500 text-sm">
      <Spinner size="sm" />
      <span>Cargando...</span>
    </div>
  );
}
