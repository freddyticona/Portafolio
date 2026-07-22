/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Award, Play, ChevronDown, Sparkles } from 'lucide-react';

interface CinematicHeroProps {
  onPortfolioClick: () => void;
  onCvClick: () => void;
  lang?: 'es' | 'en';
  t?: any;
}

export default function CinematicHero({ onPortfolioClick, onCvClick, lang = 'es', t }: CinematicHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => setTime(prev => prev + 0.01), 16);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Blur-up loading: cargar versión HD después de la small
  useEffect(() => {
    const hdImage = new Image();
    hdImage.src = '/images/behind-scenes/DSC_2994-large.webp';
    hdImage.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = hdImage.src;
        setHeroLoaded(true);
      }
    };
  }, []);

  const heroContent = {
    es: {
      badge: 'Premio Eduardo Abaroa 2017',
      title: 'Freddy Ticona Guzmán',
      subtitle: 'Camarógrafo • Realizador Audiovisual',
      experience: '+15 años de experiencia',
      slogan: 'Capturando la esencia de Bolivia a través del lente. Documentales, televisión y contenido visual con impacto humano.',
      ctaPortfolio: 'Ver Portafolio',
      ctaCv: 'Mi Trayectoria',
      explore: 'Explorar'
    },
    en: {
      badge: 'Eduardo Abaroa Award 2017',
      title: 'Freddy Ticona Guzmán',
      subtitle: 'Cameraman • Video Producer',
      experience: '+15 years experience',
      slogan: 'Capturing the essence of Bolivia through the lens. Documentaries, television and visual content with human impact.',
      ctaPortfolio: 'View Portfolio',
      ctaCv: 'My Journey',
      explore: 'Explore'
    }
  };

  const content = heroContent[lang];

  // Efecto de partículas sutil
  const Particle = React.memo(({ index }: { index: number }) => {
    const delay = index * 0.5;
    const x = Math.sin(time + delay) * 50;
    const y = Math.cos(time + delay * 0.5) * 30;

    return (
      <div
        className="absolute w-1 h-1 bg-gold/30 rounded-full"
        style={{
          left: `${50 + Math.sin(index * 567) * 40 + x * 0.1}%`,
          top: `${50 + Math.cos(index * 321) * 40 + y * 0.1}%`,
          animation: `float ${3 + delay}s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  return (
    <div
      ref={heroRef}
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden"
      style={{
        perspective: '1000px'
      }}
    >
      {/* Background con efecto parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale3d(${1 + scrollY * 0.0001}, ${1 + scrollY * 0.0001}, 1, ${mousePosition.x * -10}px, ${mousePosition.y * -10}px, 0)`
        }}
      >
        <img
          ref={imageRef}
          src="/images/behind-scenes/DSC_2994-small.webp"
          srcSet="/images/behind-scenes/DSC_2994-medium.webp 960w,
                  /images/behind-scenes/DSC_2994-large.webp 1920w"
          sizes="(max-width: 960px) 480px, (max-width: 1920px) 960px, 1920px"
          alt="Freddy Ticona trabajando en el set"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
          style={{
            filter: `brightness(${0.3 - scrollY * 0.001}) saturate(${1 - scrollY * 0.001}) ${!heroLoaded ? 'blur(8px)' : ''}`,
            opacity: heroLoaded ? 1 : 0.85
          }}
          fetchPriority="high"
          width={1920}
          height={1080}
          decoding="sync"
        />


        {/* Gradientes superpuestos */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/80" />

        {/* Efecto de viñeta dinámica */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)]"
          style={{
            opacity: 0.3 + scrollY * 0.001
          }}
        />

        {/* Grid overlay cinematográfico */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, index) => {
            return <Particle key={index} index={index} />;
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY * 0.002
        }}
      >
        {/* Award Badge con efecto pulsante */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-gold/10 border border-gold/20 text-gold text-xs font-mono font-bold tracking-widest uppercase shadow-xl animate-pulse backdrop-blur-sm">
          <Sparkles className="w-4.5 h-4.5" />
          <span>{content.badge}</span>
        </div>

        {/* Título principal con efecto de entrada escalonado */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-display">
            <span className="inline-block" style={{
              animation: 'slideInLeft 0.8s ease-out forwards',
              opacity: 0,
              animationDelay: '0.2s'
            }}>
              {content.title}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-mono text-sm md:text-lg text-gold font-bold tracking-widest uppercase">
            <span style={{
              animation: 'fadeIn 0.8s ease-out forwards',
              opacity: 0,
              animationDelay: '0.4s'
            }}>
              {content.subtitle}
            </span>
            <span className="hidden sm:inline text-stone-700">•</span>
            <span className="text-stone-400 font-normal text-xs md:text-sm normal-case tracking-normal" style={{
              animation: 'fadeIn 0.8s ease-out forwards',
              opacity: 0,
              animationDelay: '0.6s'
            }}>
              {content.experience}
            </span>
          </div>
        </div>

        {/* Slogan narrativo */}
        <p
          className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed font-light font-sans"
          style={{
            animation: 'fadeIn 1s ease-out forwards',
            opacity: 0,
            animationDelay: '0.8s'
          }}
        >
          {content.slogan}
        </p>

        {/* Call To Action Buttons con hover effects mejorados */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto pt-2"
          style={{
            animation: 'fadeIn 1s ease-out forwards',
            opacity: 0,
            animationDelay: '1s'
          }}
        >
          <button
            onClick={onPortfolioClick}
            className="group relative px-8 py-4 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              {content.ctaPortfolio}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
          </button>

          <button
            onClick={onCvClick}
            className="px-8 py-4 bg-white/[0.02] hover:bg-white/[0.08] text-white font-bold rounded-sm text-xs uppercase tracking-widest border border-white/5 hover:border-gold/50 transition-all duration-300 hover:scale-105"
          >
            {content.ctaCv}
          </button>
        </div>
      </div>

      {/* Scroll indicator animado */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{
          animation: 'fadeIn 1.5s ease-out forwards',
          opacity: 0,
          animationDelay: '1.5s'
        }}
      >
        <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">
          {content.explore}
        </span>
        <div className="relative w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>

      {/* Estilos globales para animaciones */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(0, -20px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
        }

        @keyframes shine {
          to {
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
