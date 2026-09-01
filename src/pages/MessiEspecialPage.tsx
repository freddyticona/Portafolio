/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * MessiEspecialPage — Edición conmemorativa: el adiós de Messi a la Selección.
 *
 * Reportaje especial con diseño propio (no usa BlogDetail):
 *  - Portada editorial estilo revista (serif Playfair Display)
 *  - Paleta albiceleste (celeste/blanco) + dorado sobre fondo oscuro
 *  - Scrollytelling (secciones que se revelan con scroll, IntersectionObserver)
 *  - La carta como "reliquia" con textura de papel y efecto de despliegue
 *  - Timeline interactiva vertical 2005 → 2026 (hitos clicables)
 *  - Modo homenaje con textura sutil
 *
 * Hechos verificados (no inventar): anuncio 31-ago-2026 vía carta en Instagram;
 * decisión 21-jul-2026 (dos días tras perder la final del Mundial 2026 1-0 ante
 * España); fallecimiento del padre Jorge Messi a inicios de agosto 2026; retiro
 * de la Selección (NO del fútbol: sigue en Inter Miami).
 */

import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Trophy, CalendarDays, Heart, ScrollText } from 'lucide-react';

interface MessiEspecialPageProps {
  lang: 'es' | 'en';
  onBackToNews?: () => void;
}

// ---------------------------------------------------------------------------
// Datos verificados (fuentes indicadas; sin cifras inventadas de goles/partidos)
// ---------------------------------------------------------------------------

const LETTER_QUOTES = {
  es: [
    'Después de este tiempo que pasó desde la final, pensándolo mucho, quiero comunicarles a todos que me retiro de la Selección.',
    'Fue una decisión que dolió y duele en el alma, pero entiendo que es el momento.',
    'Siempre dejé todo... por esta camiseta, por darles alegrías y hacer que se sientan orgullosos de ser argentinos.',
  ],
  en: [
    'After this time that has passed since the final, thinking it over a lot, I want to tell everyone that I am retiring from the national team.',
    'It was a decision that hurt and still hurts in the soul, but I understand that this is the moment.',
    'I always gave everything... for this shirt, to bring them joy and make them proud of being Argentine.',
  ],
};

const LETTER_CLOSING = {
  es: 'Me voy con la tranquilidad y el orgullo de haberles regalado, juntos con mis compañeros, momentos soñados... Gracias Dios por hacerme argentino. ¡Vamos Argentina!',
  en: 'I leave with the peace and pride of having gifted you, together with my teammates, dreamt moments... Thank God for making me Argentine. Vamos Argentina!',
};

const LA_PATILLA_QUOTE = {
  es: 'Me vacié, ya no tengo más para dar y aparte vienen chicos grandes que merecen estar.',
  en: 'I emptied myself, I have nothing left to give, and besides big kids are coming who deserve to be there.',
};

// Timeline (2005 → 2026). Datos verificados de trayectoria narrativa.
const TIMELINE = [
  {
    year: '2005',
    es: { t: 'Debut con la Selección', d: 'El 17 de agosto de 2005, con 18 años, viste por primera vez la celeste y blanca. El inicio de una era que duraría más de dos décadas.' },
    en: { t: 'National team debut', d: 'On August 17, 2005, at 18, he wore the sky-blue and white for the first time. The start of an era that would span more than two decades.' },
  },
  {
    year: '2014',
    es: { t: 'Subcampeón del mundo', d: 'En Brasil 2014, la Selección llegó a la final y cayó ante Alemania. La primera gran herida de una generación.' },
    en: { t: 'World runner-up', d: 'In Brazil 2014, the national team reached the final and fell to Germany. The first great wound of a generation.' },
  },
  {
    year: '2015–2016',
    es: { t: 'Finales perdidas y retiro temporal', d: 'Copa América 2015 y Copa América Centenario 2016: dos finales más perdidas. Tras la de 2016, anunció un retiro temporal de la Selección, del que luego regresó.' },
    en: { t: 'Lost finals and a temporary farewell', d: '2015 Copa América and 2016 Centenario: two more lost finals. After 2016 he announced a temporary retirement, then returned.' },
  },
  {
    year: '2021–2024',
    es: { t: 'Los cuatro títulos', d: 'Copa América 2021, la Finalissima 2022, el Mundial de Qatar 2022 y la Copa América 2024: cuatro trofeos que rompieron la sequía y coronaron a la generación.' },
    en: { t: 'The four titles', d: '2021 Copa América, the 2022 Finalissima, the 2022 World Cup in Qatar and the 2024 Copa América: four trophies that ended the drought and crowned the generation.' },
  },
  {
    year: '2022',
    es: { t: 'Campeón del mundo', d: 'En Qatar 2022 levantó la Copa del Mundo. El título que faltaba, el que lo consagró ante los ojos del planeta.' },
    en: { t: 'World champion', d: 'In Qatar 2022 he lifted the World Cup. The missing title, the one that crowned him before the eyes of the planet.' },
  },
  {
    year: '2026',
    es: { t: 'La final y la despedida', d: 'Subcampeón del Mundial 2026 tras caer 1-0 ante España en tiempo extra. El 21 de julio tomó la decisión; el 31 de agosto la comunicó al mundo.' },
    en: { t: 'The final and the farewell', d: 'Runner-up at the 2026 World Cup after falling 1-0 to Spain in extra time. On July 21 he made the decision; on August 31 he announced it to the world.' },
  },
];

const PALMARES = [
  { es: 'Mundial de Qatar 2022 — campeón', en: '2022 Qatar World Cup — champion' },
  { es: 'Subcampeón Mundial 2014 y 2026', en: 'Runner-up 2014 and 2026 World Cups' },
  { es: 'Copa América 2021 y 2024 — campeón', en: '2021 and 2024 Copa América — champion' },
  { es: 'Finalissima 2022 — campeón', en: '2022 Finalissima — champion' },
  { es: 'Único argentino en disputar seis Copas del Mundo', en: 'The only Argentine to play in six World Cups' },
];

const SCALONI_QUOTE = {
  es: '"historia pura... el mejor futbolista que ha visto el mundo"',
  en: '"pure history... the best footballer the world has ever seen"',
};

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

function useScrolly() {
  // Devuelve un ref de contenedor; marca los .scrolly-reveal dentro como visibles.
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('.scrolly-reveal');
    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return containerRef;
}

export default function MessiEspecialPage({ lang, onBackToNews }: MessiEspecialPageProps) {
  const [activeYear, setActiveYear] = useState<string>(TIMELINE[TIMELINE.length - 1].year);
  const [letterOpen, setLetterOpen] = useState(false);
  const containerRef = useScrolly();

  const L = (es: string, en: string) => (lang === 'es' ? es : en);
  const active = TIMELINE.find((t) => t.year === activeYear) || TIMELINE[TIMELINE.length - 1];

  return (
    <div ref={containerRef} className="messi-hero-bg min-h-screen text-white">
      {/* BARRA SUPERIOR */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {onBackToNews ? (
          <button onClick={onBackToNews} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {L('Volver a Noticias', 'Back to News')}
          </button>
        ) : <span />}
        <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-celeste border border-celeste/40 px-3 py-1.5 rounded-sm bg-celeste/10">
          {L('Edición conmemorativa', 'Commemorative edition')}
        </span>
      </div>

      {/* PORTADA / HERO */}
      <header className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-12 text-center scrolly-reveal is-visible">
        <p className="cover-kicker text-celeste mb-4">
          {L('31 de agosto de 2026 · Selección Argentina', 'August 31, 2026 · Argentina national team')}
        </p>
        <h1 className="cover-title text-4xl sm:text-6xl md:text-7xl text-white">
          {L('El adiós de Messi', 'Messi\'s farewell')}
        </h1>
        <p className="cover-title text-xl sm:text-3xl md:text-4xl text-celeste italic mt-3">
          {L('a la celeste y blanca', 'to the sky-blue and white')}
        </p>
        <div className="cover-rule w-40 mx-auto mt-8" />
        <p className="text-sm md:text-base text-stone-300 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
          {L(
            'Tras dos décadas, cuatro títulos y una final que dolió, Lionel Messi anunció este 31 de agosto su retiro de la Selección Argentina. Una carta manuscrita en Instagram cerró la era de quien, para muchos, es el mejor futbolista de la historia. Continúa su carrera en Inter Miami.',
            'After two decades, four titles and a painful final, Lionel Messi announced this August 31 his retirement from the Argentina national team. A handwritten letter on Instagram closed the era of the man many call the greatest footballer in history. He continues his career at Inter Miami.'
          )}
        </p>
        <a href="#carta" className="inline-flex items-center gap-2 mt-8 text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
          <ScrollText className="w-4 h-4" />
          {L('Leer la carta', 'Read the letter')} ↓
        </a>
      </header>

      {/* LA CARTA — elemento hero con textura de papel */}
      <section id="carta" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 scrolly-reveal">
          <span className="cover-kicker text-gold">{L('La carta', 'The letter')}</span>
          <h2 className="cover-title text-2xl md:text-4xl text-white mt-2">
            {L('En sus propias palabras', 'In his own words')}
          </h2>
        </div>

        <div className={`letter-paper letter-unfold p-7 md:p-12 ${letterOpen ? 'is-open' : ''}`}>
          <div className="space-y-6">
            <p className="font-serif-editorial text-[11px] uppercase tracking-[0.25em] text-stone-500">
              {L('Carta manuscrita · publicada en Instagram', 'Handwritten letter · published on Instagram')}
            </p>
            {(lang === 'es' ? LETTER_QUOTES.es : LETTER_QUOTES.en).map((q, i) => (
              <p key={i} className="font-serif-editorial text-base md:text-xl leading-relaxed text-stone-800">
                <span className="text-2xl text-gold" style={{ color: '#b8860b' }}>“</span>
                {q}
                <span className="text-2xl" style={{ color: '#b8860b' }}>”</span>
              </p>
            ))}
            <p className="font-serif-editorial text-base md:text-lg leading-relaxed text-stone-800 pt-3">
              {lang === 'es' ? LETTER_CLOSING.es : LETTER_CLOSING.en}
            </p>
            <p className="font-serif-editorial text-base md:text-xl leading-relaxed text-stone-800">
              {L(
                'Y la frase que lo retrata:', 'And the line that captures it:'
              )} <span className="italic">“{lang === 'es' ? LA_PATILLA_QUOTE.es : LA_PATILLA_QUOTE.en}”</span>
              <span className="block text-[11px] text-stone-500 mt-1 font-sans">
                {L('— Fuente: La Patilla', '— Source: La Patilla')}
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-6 scrolly-reveal">
          <button
            onClick={() => setLetterOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-celeste hover:text-white transition-colors"
          >
            {letterOpen ? L('Replegar la carta', 'Fold the letter') : L('Desplegar la carta', 'Unfold the letter')}
          </button>
        </div>
      </section>

      {/* LA DECISIÓN DETRÁS DE CÁMARAS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="scrolly-reveal space-y-2">
          <span className="cover-kicker text-celeste">{L('Detrás de cámaras', 'Behind the scenes')}</span>
          <h2 className="cover-title text-2xl md:text-4xl text-white">
            {L('La decisión del 21 de julio', 'The decision of July 21')}
          </h2>
        </div>
        <div className="scrolly-reveal grid md:grid-cols-3 gap-4">
          {[
            { n: '21/07', t: L('La decisión', 'The decision'), d: L('Dos días después de perder la final del Mundial 2026 ante España (1-0, en tiempo extra, en Nueva Jersey/Nueva York), Messi decidió retirarse de la Selección.', 'Two days after losing the 2026 World Cup final to Spain (1-0, in extra time, in New Jersey/New York), Messi decided to retire from the national team.') },
            { n: 'inicios/08', t: L('Su padre', 'His father'), d: L('El anuncio llega semanas después del fallecimiento de su padre, Jorge Messi, a inicios de agosto de 2026. Un golpe personal que acompañó el proceso de la decisión.', 'The announcement comes weeks after the death of his father, Jorge Messi, in early August 2026. A personal blow that accompanied the decision process.') },
            { n: '31/08', t: L('El anuncio', 'The announcement'), d: L('La decisión se comunicó el 31 de agosto de 2026, mediante una carta manuscrita publicada en Instagram.', 'The decision was announced on August 31, 2026, via a handwritten letter posted on Instagram.') },
          ].map((c, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-sm p-5 space-y-2">
              <div className="font-serif-editorial text-2xl text-gold">{c.n}</div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-celeste">{c.t}</div>
              <p className="text-sm text-stone-400 font-light leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CRONOLOGÍA INTERACTIVA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="scrolly-reveal space-y-2 mb-8">
          <span className="cover-kicker text-celeste">{L('Cronología de una era', 'Chronology of an era')}</span>
          <h2 className="cover-title text-2xl md:text-4xl text-white">
            {L('2005 → 2026, una línea de tiempo', '2005 → 2026, a timeline')}
          </h2>
        </div>

        <div className="grid md:grid-cols-[320px_1fr] gap-8">
          <ul className="messi-timeline-marker space-y-1">
            {TIMELINE.map((t) => (
              <li key={t.year}>
                <button
                  onClick={() => setActiveYear(t.year)}
                  className={`messi-timeline-item w-full text-left ${t.year === activeYear ? 'is-active' : ''}`}
                >
                  <span className={`messi-timeline-dot ${t.year === '2014' || t.year === '2015–2016' ? 'celeste-dot' : ''}`} />
                  <span className="font-serif-editorial text-xl text-white">{t.year}</span>
                  <span className="block text-xs text-stone-400 font-light mt-0.5">{L(t.es.t, t.en.t)}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="scrolly-reveal bg-white/[0.02] border border-celeste/30 rounded-md p-6 md:p-8 flex flex-col justify-center min-h-[200px]">
            <div className="font-serif-editorial text-5xl text-celeste">{active.year}</div>
            <h3 className="cover-title text-xl md:text-2xl text-white mt-3">{L(active.es.t, active.en.t)}</h3>
            <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed mt-3">{L(active.es.d, active.en.d)}</p>
          </div>
        </div>
      </section>

      {/* PALMARÉS / LEGADO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="scrolly-reveal space-y-2 mb-8">
          <span className="cover-kicker text-gold">{L('Legado con la Albiceleste', 'Legacy with the Albiceleste')}</span>
          <h2 className="cover-title text-2xl md:text-4xl text-white">
            {L('Un palmarés que cierra una era', 'A trophy cabinet that closes an era')}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PALMARES.map((p, i) => (
            <div key={i} className="scrolly-reveal bg-white/[0.02] border border-gold/20 rounded-sm p-5 flex items-start gap-3">
              <Trophy className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-stone-200 font-light leading-relaxed">{L(p.es, p.en)}</p>
            </div>
          ))}
        </div>
        <p className="scrolly-reveal text-sm text-stone-400 font-light max-w-3xl mt-8 leading-relaxed">
          {L(
            'El retiro de la Selección cierra una era, pero no una carrera: Messi continúa activo en Inter Miami. La albiceleste despide a su mayor símbolo, mientras el 10 sigue jugando al fútbol profesional.',
            'The retirement from the national team closes an era, but not a career: Messi remains active at Inter Miami. The sky-blue and white bids farewell to its greatest symbol, while the number 10 keeps playing professional football.'
          )}
        </p>
      </section>

      {/* REACCIONES VERIFICADAS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="scrolly-reveal space-y-2">
          <span className="cover-kicker text-celeste">{L('Repercusiones', 'Reactions')}</span>
          <h2 className="cover-title text-2xl md:text-4xl text-white">
            {L('Lo que se dijo', 'What was said')}
          </h2>
        </div>

        {/* Cita de Scaloni (verificada, previa al anuncio formal) */}
        <div className="scrolly-reveal border border-white/10 rounded-md p-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-celeste">
            <CalendarDays className="w-4 h-4" /> Lionel Scaloni · DT Argentina
          </div>
          <p className="messi-pullquote">{lang === 'es' ? SCALONI_QUOTE.es : SCALONI_QUOTE.en}</p>
          <p className="text-xs text-stone-500 font-light">
            {L(
              'Declaración posterior a la final del Mundial 2026, previa al anuncio formal del retiro. (Pendiente de verificación: enlace directo a la nota original.)',
              'Statement after the 2026 World Cup final, prior to the formal retirement announcement. (Pending verification: direct link to the original article.)'
            )}
          </p>
        </div>

        <div className="scrolly-reveal border border-celeste/30 rounded-md p-6 space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-celeste">
            {L('La publicación oficial', 'The official post')}
          </p>
          <p className="text-sm text-stone-300 font-light leading-relaxed">
            {L(
              'La carta fue publicada en la cuenta oficial de Instagram de Lionel Messi el 31 de agosto de 2026. (Pendiente de verificación: embed oficial / URL directa de la publicación.)',
              'The letter was posted to Lionel Messi\'s official Instagram account on August 31, 2026. (Pending verification: official embed / direct post URL.)'
            )}
          </p>
        </div>

        <p className="scrolly-reveal text-xs text-stone-500 font-light">
          {L(
            'Nota editorial: solo se incluyen reacciones verificables. Las reacciones de compañeros, hinchas y medios internacionales se incorporarán con su fuente específica a medida que se confirmen.',
            'Editorial note: only verifiable reactions are included. Reactions from teammates, fans and international media will be added with their specific source as they are confirmed.'
          )}
        </p>
      </section>

      {/* MODO HOMENAJE */}
      <section className="messi-homenaje border-t border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Heart className="w-8 h-8 text-celeste mx-auto" />
          <h2 className="cover-title text-3xl md:text-5xl text-white">
            {L('Gracias, Lionel', 'Gracias, Lionel')}
          </h2>
          <p className="text-sm md:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            {L(
              'Más de dos décadas con la celeste y blanca, cuatro títulos y un legado que trasciende el fútbol. Hoy la Selección despide a su capitán; el mundo lo recuerda como el mejor de todos.',
              'More than two decades in sky-blue and white, four titles and a legacy that transcends football. Today the national team bids farewell to its captain; the world remembers him as the greatest of all.'
            )}
          </p>
          <div className="inline-flex items-center gap-3 pt-2">
            <span className="inline-block h-1 w-16 bg-gradient-to-r from-celeste to-transparent" />
            <span className="font-serif-editorial text-2xl text-gold">10</span>
            <span className="inline-block h-1 w-16 bg-gradient-to-l from-celeste to-transparent" />
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-[11px] font-mono text-stone-500 tracking-wider">
          {L(
            'Edición conmemorativa · FreddyDev Noticias · 31 de agosto de 2026',
            'Commemorative edition · FreddyDev Noticias · August 31, 2026'
          )}
        </p>
      </footer>
    </div>
  );
}