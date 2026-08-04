/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, Film, Play, Clapperboard, Users } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../config';

interface ShowreelPageProps {
  lang?: 'es' | 'en';
  t?: any;
  handleNavToTab?: (page: string) => void;
}

export default function ShowreelPage({ lang = 'es', t, handleNavToTab }: ShowreelPageProps) {
  const [reelMuted, setReelMuted] = useState(true);

  const isEs = lang === 'es';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-12 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in-up">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Clapperboard className="w-4 h-4" />
          {isEs ? t?.showreelPageEyebrow || 'Showreel 2026' : t?.showreelPageEyebrow || '2026 Showreel'}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          {isEs ? t?.showreelPageHeading || 'Showreel Audiovisual' : t?.showreelPageHeading || 'Audiovisual Showreel'}
        </h1>
        <p className="max-w-3xl mx-auto text-sm md:text-base text-stone-400 leading-relaxed font-light">
          {isEs ? t?.showreelPageLead : t?.showreelPageLead}
        </p>
      </div>

      {/* Video player - always visible */}
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black border border-white/5 relative shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS.showreel}?autoplay=1&mute=${reelMuted ? '1' : '0'}&rel=0`}
          title={isEs ? 'Showreel Audiovisual de Freddy Ticona' : 'Freddy Ticona Audiovisual Showreel'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <button
          onClick={() => setReelMuted(!reelMuted)}
          aria-label={reelMuted ? (isEs ? 'Activar sonido' : 'Unmute') : (isEs ? 'Silenciar' : 'Mute')}
          className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/80 border border-white/10 text-gold hover:text-white transition-colors cursor-pointer"
        >
          {reelMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gsap-stagger">
        {[
          { icon: Film, label: '15+', sub: isEs ? 'Años de Experiencia' : 'Years of Experience' },
          { icon: Play, label: '30+', sub: isEs ? 'Documentales Producidos' : 'Documentaries Produced' },
          { icon: Users, label: '7+', sub: isEs ? 'Canales de TV' : 'TV Networks' },
        ].map(({ icon: Icon, label, sub }, i) => (
          <div key={i} className="bento-card p-6 text-center space-y-2">
            <Icon className="w-6 h-6 text-gold mx-auto" />
            <div className="text-3xl font-black text-gold font-display tracking-tight">{label}</div>
            <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">{sub}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => handleNavToTab?.('portafolio')}
          className="px-8 py-3.5 bg-gold text-black rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 hover:bg-gold-hover cursor-pointer"
        >
          {isEs ? t?.showreelPageCtaPortfolio || 'Ver Portafolio Completo' : t?.showreelPageCtaPortfolio || 'View Full Portfolio'}
        </button>
      </div>
    </div>
  );
}