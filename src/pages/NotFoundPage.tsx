import React from 'react';
import { Home, Film } from 'lucide-react';

interface NotFoundPageProps {
  lang: 'es' | 'en';
  onHome: () => void;
}

export default function NotFoundPage({ lang, onHome }: NotFoundPageProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg space-y-8">
        {/* Cinta de película decorativa */}
        <div className="flex justify-center gap-1 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gold rounded-sm" />
          ))}
        </div>

        <div className="space-y-4">
          <div className="font-mono text-8xl font-black text-gold/30 tracking-tighter select-none">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-display tracking-tight">
            {lang === 'es' ? 'ESCENA NO ENCONTRADA' : 'SCENE NOT FOUND'}
          </h1>
          <p className="text-stone-400 text-sm leading-relaxed font-mono">
            {lang === 'es'
              ? 'Esta escena fue eliminada en la sala de edición. Volvé al inicio para encontrar lo que buscás.'
              : 'This scene was cut in the editing room. Go back home to find what you\'re looking for.'}
          </p>
        </div>

        <button
          onClick={onHome}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-bold rounded-sm text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-gold/20 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
        </button>

        {/* Take number */}
        <div className="pt-8 font-mono text-[10px] text-stone-600 tracking-[0.2em] uppercase">
          {lang === 'es' ? 'Toma 2 — Reproducir de nuevo' : 'Take 2 — Play it again'}
        </div>
      </div>
    </div>
  );
}
