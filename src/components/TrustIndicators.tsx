import React, { useState } from 'react';
import { BlogPost } from '../types';
import { User, Shield, Scale, FileText, ExternalLink, Quote, X, Newspaper, CheckCircle2 } from 'lucide-react';

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

const NEWS_PUBLICATION = 'FreddyDev Noticias';

type TabId = 'estandares' | 'correcciones' | 'quienes';

function EditorialModal({ lang, initialTab, onClose }: { lang: 'es' | 'en'; initialTab: TabId; onClose: () => void }) {
  const [tab, setTab] = useState<TabId>(initialTab);

  const tabs: { id: TabId; es: string; en: string }[] = [
    { id: 'estandares', es: 'Política editorial', en: 'Editorial policy' },
    { id: 'correcciones', es: 'Correcciones', en: 'Corrections' },
    { id: 'quienes', es: 'Quiénes somos', en: 'About us' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-6 md:p-8 shadow-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-gold" />
            {lang === 'es' ? `Estándares de ${NEWS_PUBLICATION}` : `${NEWS_PUBLICATION} standards`}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-sm transition-colors cursor-pointer" aria-label="Cerrar">
            <X className="w-4 h-4 text-stone-400" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                tab === tb.id ? 'bg-gold text-black' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              {lang === 'es' ? tb.es : tb.en}
            </button>
          ))}
        </div>

        <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
          {tab === 'estandares' && (
            lang === 'es' ? (
              <>
                <p><strong className="text-white">{NEWS_PUBLICATION}</strong> es la redacción de noticias de FreddyDev.net. Nuestra política editorial se rige por la verificación de datos, la atribución transparente de fuentes y la separación clara entre información y opinión.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">Principios editoriales</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Precisión:</strong> contrastamos los hechos con fuentes primarias y oficiales antes de publicar.</li>
                  <li><strong className="text-white">Atribución:</strong> toda información proveniente de terceros se cita con el medio y, cuando está disponible, el enlace al artículo original.</li>
                  <li><strong className="text-white">Independencia:</strong> no publicamos contenido patrocinado presentado como información editorial.</li>
                  <li><strong className="text-white">Separación:</strong> las notas informativas, los análisis y las columnas de opinión se identifican con etiquetas distintas.</li>
                </ul>
              </>
            ) : (
              <>
                <p><strong className="text-white">{NEWS_PUBLICATION}</strong> is the newsroom of FreddyDev.net. Our editorial policy is guided by fact-checking, transparent source attribution and a clear separation between reporting and opinion.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">Editorial principles</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Accuracy:</strong> we cross-check facts against primary and official sources before publishing.</li>
                  <li><strong className="text-white">Attribution:</strong> third-party information is credited with the outlet and, when available, a link to the original article.</li>
                  <li><strong className="text-white">Independence:</strong> we do not publish sponsored content presented as journalism.</li>
                  <li><strong className="text-white">Separation:</strong> news, analysis and opinion pieces are labeled distinctly.</li>
                </ul>
              </>
            )
          )}

          {tab === 'correcciones' && (
            lang === 'es' ? (
              <>
                <p>En <strong className="text-white">{NEWS_PUBLICATION}</strong> estamos comprometidos con la precisión y la transparencia informativa, siguiendo los estándares de <strong className="text-white">The Trust Project</strong>.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">Cómo manejamos las correcciones</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Si identificamos un error factual, lo corregimos y añadimos una nota al final explicando el cambio.</li>
                  <li>Si un lector reporta un error, lo verificamos con fuentes primarias y, de confirmarse, lo corregimos en un plazo máximo de 48 horas hábiles.</li>
                  <li>Las correcciones importantes se anuncian en una nota visible al inicio del artículo.</li>
                  <li>No alteramos el contenido editorial sin dejar registro del cambio.</li>
                </ul>
                <h3 className="text-base font-bold text-white font-display mt-5">Reportar un error</h3>
                <p>Escribe a <a href="mailto:freddy@freddydev.net" className="text-gold hover:underline">freddy@freddydev.net</a>.</p>
              </>
            ) : (
              <>
                <p>At <strong className="text-white">{NEWS_PUBLICATION}</strong> we are committed to accuracy and transparency, following <strong className="text-white">The Trust Project</strong> standards.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">How we handle corrections</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>If we identify a factual error, we correct it and add a note explaining the change.</li>
                  <li>If a reader reports an error, we verify it and, if confirmed, correct it within 48 business hours.</li>
                  <li>Important corrections are announced in a visible note at the top of the article.</li>
                  <li>We do not alter editorial content without leaving a record of the change.</li>
                </ul>
                <h3 className="text-base font-bold text-white font-display mt-5">Report an error</h3>
                <p>Email <a href="mailto:freddy@freddydev.net" className="text-gold hover:underline">freddy@freddydev.net</a>.</p>
              </>
            )
          )}

          {tab === 'quienes' && (
            lang === 'es' ? (
              <>
                <p><strong className="text-white">{NEWS_PUBLICATION}</strong> es una redacción independiente de noticias integrada al sitio de Freddy Ticona Guzmán. Cubre actualidad boliviana, política, economía, ciencia y sucesos internacionales.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">Nuestra redacción</h3>
                <p>Fundada y dirigida por <strong className="text-white">Freddy Ticona Guzmán</strong>, camarógrafo y realizador audiovisual con más de 15 años de experiencia en televisión boliviana (Bolivia TV, Red Uno, RTP), la sección de noticias busca acercar información verificada con estándares periodísticos profesionales.</p>
                <p className="text-stone-500 text-xs mt-6">Esta sección es distinta de la página personal «Sobre mí» del portafolio.</p>
              </>
            ) : (
              <>
                <p><strong className="text-white">{NEWS_PUBLICATION}</strong> is an independent newsroom within Freddy Ticona Guzmán's site, covering Bolivian current affairs, politics, economics, science and international news.</p>
                <h3 className="text-base font-bold text-white font-display mt-5">Our newsroom</h3>
                <p>Founded and led by <strong className="text-white">Freddy Ticona Guzmán</strong>, cameraperson and audiovisual producer with 15+ years in Bolivian television (Bolivia TV, Red Uno, RTP), the news section brings verified information with professional journalistic standards.</p>
                <p className="text-stone-500 text-xs mt-6">This section is distinct from the personal «About me» portfolio page.</p>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrustIndicators({ post, lang, t }: TrustIndicatorsProps) {
  const [openTab, setOpenTab] = useState<TabId | null>(null);
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

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <button onClick={() => setOpenTab('estandares')} className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-400 hover:text-gold transition-colors underline underline-offset-2 cursor-pointer">
            <CheckCircle2 className="w-3 h-3" />
            {lang === 'es' ? 'Política editorial' : 'Editorial policy'}
          </button>
          <button onClick={() => setOpenTab('correcciones')} className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-400 hover:text-gold transition-colors underline underline-offset-2 cursor-pointer">
            <ExternalLink className="w-3 h-3" />
            {lang === 'es' ? 'Política de correcciones' : 'Corrections policy'}
          </button>
          <button onClick={() => setOpenTab('quienes')} className="inline-flex items-center gap-1.5 text-[10px] font-mono text-stone-400 hover:text-gold transition-colors underline underline-offset-2 cursor-pointer">
            <Newspaper className="w-3 h-3" />
            {lang === 'es' ? 'Quiénes somos' : 'About us'}
          </button>
        </div>
      </div>

      {openTab && (
        <EditorialModal lang={lang} initialTab={openTab} onClose={() => setOpenTab(null)} />
      )}
    </>
  );
}