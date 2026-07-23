import React, { useState } from 'react';
import { BlogPost } from '../types';
import { User, Shield, Scale, FileText, ExternalLink, Quote, X } from 'lucide-react';

interface TrustIndicatorsProps {
  post: BlogPost;
  lang: 'es' | 'en';
  t: any;
}

const contentTypeConfig: Record<string, { labelEs: string; labelEn: string; icon: React.ReactNode; color: string }> = {
  news: {
    labelEs: 'NOTICIA',
    labelEn: 'NEWS',
    icon: <FileText className="w-3 h-3" />,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  analysis: {
    labelEs: 'ANÁLISIS',
    labelEn: 'ANALYSIS',
    icon: <Scale className="w-3 h-3" />,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  opinion: {
    labelEs: 'OPINIÓN',
    labelEn: 'OPINION',
    icon: <Quote className="w-3 h-3" />,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  },
  reportage: {
    labelEs: 'REPORTAJE',
    labelEn: 'REPORTAGE',
    icon: <Shield className="w-3 h-3" />,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  },
  'behind-scenes': {
    labelEs: 'DETRÁS DE CÁMARAS',
    labelEn: 'BEHIND THE SCENES',
    icon: <User className="w-3 h-3" />,
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
  }
};

function CorrectionsModal({ lang, t, onClose }: { lang: 'es' | 'en'; t: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-6 md:p-8 shadow-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            {lang === 'es' ? 'Política de Correcciones' : 'Corrections Policy'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-sm transition-colors cursor-pointer" aria-label="Cerrar">
            <X className="w-4 h-4 text-stone-400" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
          {lang === 'es' ? (
            <>
              <p>En <strong className="text-white">FreddyDev.net</strong> estamos comprometidos con la precisión y la transparencia informativa, siguiendo los estándares de <strong className="text-white">The Trust Project</strong>.</p>
              <h3 className="text-base font-bold text-white font-display mt-6">Cómo manejamos las correcciones</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Si identificamos un error factual en un artículo, lo corregimos y añadimos una nota al final explicando el cambio realizado.</li>
                <li>Si un lector reporta un error, lo verificamos con fuentes primarias y, de confirmarse, lo corregimos en un plazo máximo de 48 horas hábiles.</li>
                <li>Las correcciones importantes se anuncian en una nota visible al inicio del artículo: <em className="text-stone-400">"Este artículo fue corregido el [fecha] para reflejar [detalle del cambio]"</em>.</li>
                <li>No alteramos el contenido editorial sin dejar registro del cambio. La transparencia es nuestro principio rector.</li>
              </ul>
              <h3 className="text-base font-bold text-white font-display mt-6">Reportar un error</h3>
              <p>Si encuentras un error en alguno de nuestros artículos, por favor repórtalo a través de la sección de comentarios del artículo o escribiendo a <a href="mailto:freddy@freddydev.net" className="text-gold hover:underline">freddy@freddydev.net</a>.</p>
              <p className="text-stone-500 text-xs mt-6">Actualizado: julio 2026</p>
            </>
          ) : (
            <>
              <p>At <strong className="text-white">FreddyDev.net</strong>, we are committed to accuracy and transparency in our reporting, following <strong className="text-white">The Trust Project</strong> standards.</p>
              <h3 className="text-base font-bold text-white font-display mt-6">How we handle corrections</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>If we identify a factual error in an article, we correct it and add a note at the end explaining the change made.</li>
                <li>If a reader reports an error, we verify it against primary sources and, if confirmed, correct it within 48 business hours.</li>
                <li>Important corrections are announced in a visible note at the top of the article: <em className="text-stone-400">"This article was corrected on [date] to reflect [change detail]"</em>.</li>
                <li>We do not alter editorial content without leaving a record of the change. Transparency is our guiding principle.</li>
              </ul>
              <h3 className="text-base font-bold text-white font-display mt-6">Report an error</h3>
              <p>If you find an error in any of our articles, please report it through the article's comment section or by emailing <a href="mailto:freddy@freddydev.net" className="text-gold hover:underline">freddy@freddydev.net</a>.</p>
              <p className="text-stone-500 text-xs mt-6">Updated: July 2026</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrustIndicators({ post, lang, t }: TrustIndicatorsProps) {
  const [showCorrections, setShowCorrections] = useState(false);
  const ct = post.contentType ? contentTypeConfig[post.contentType] : null;

  return (
    <>
      <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 md:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold">
            {lang === 'es' ? 'Estándares de Confianza' : 'Trust Standards'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {ct && (
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider ${ct.color}`}>
              {ct.icon}
              {lang === 'es' ? ct.labelEs : ct.labelEn}
            </span>
          )}

          {post.source && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/10 rounded-sm text-[10px] font-mono text-stone-300">
              <FileText className="w-3 h-3 text-gold/70" />
              {lang === 'es' ? 'Fuente: ' : 'Source: '}
              {post.sourceUrl ? (
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline underline-offset-2">
                  {post.source}
                </a>
              ) : post.source}
            </span>
          )}

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white/10 rounded-sm text-[10px] font-mono text-stone-300">
            <User className="w-3 h-3 text-gold/70" />
            {lang === 'es' ? 'Autor: ' : 'By: '}
            <span className="text-white">Freddy Ticona Guzmán</span>
          </span>
        </div>

        <button
          onClick={() => setShowCorrections(true)}
          className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-400 hover:text-gold transition-colors underline underline-offset-2 cursor-pointer"
        >
          <ExternalLink className="w-3 h-3" />
          {lang === 'es' ? 'Política de correcciones' : 'Corrections policy'}
        </button>
      </div>

      {showCorrections && (
        <CorrectionsModal lang={lang} t={t} onClose={() => setShowCorrections(false)} />
      )}
    </>
  );
}
