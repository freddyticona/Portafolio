/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Eclipse2026Page — Página dedicada al eclipse solar total del 12 de agosto de 2026.
 * Reúne las 10 noticias del evento con hero, galería por país, trayectoria y horarios.
 */

import React, { useState } from 'react';
import { BlogPost, PageId } from '../types';
import { TranslationT } from '../types.translation';
import { Sun, MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface Eclipse2026PageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  blogPosts: BlogPost[];
  handleArticleClick: (post: BlogPost, page?: PageId) => void;
  onBackToNews?: () => void;
}

// Datos curados del evento (imágenes locales descargadas a /images/news/)
const ECLIPSE_DATE = '2026-08-12';

interface CountryCard {
  id: number;
  flag: string;
  country: string;
  countryEn: string;
  type: 'total' | 'partial';
  totalEs: string;
  totalEn: string;
  image: string;
  captionEs: string;
  captionEn: string;
  slug: string;
  maxEs: string;
  maxEn: string;
}

const countries: CountryCard[] = [
  {
    id: 948,
    flag: '🇪🇸',
    country: 'España',
    countryEn: 'Spain',
    type: 'total',
    totalEs: 'Totalidad en 13 comunidades',
    totalEn: 'Totality in 13 regions',
    image: '/images/news/2026-08-12-eclipse-espana.jpg',
    captionEs: 'El primer eclipse total en la península ibérica en más de un siglo.',
    captionEn: 'The first total eclipse on the Iberian peninsula in over a century.',
    slug: 'eclipse-solar-total-espana-historia-13-comunidades',
    maxEs: 'León · 20:28',
    maxEn: 'León · 8:28 p.m.',
  },
  {
    id: 949,
    flag: '🇮🇸',
    country: 'Islandia',
    countryEn: 'Iceland',
    type: 'total',
    totalEs: 'Casi un minuto en Reikiavik',
    totalEn: 'Nearly a minute in Reykjavík',
    image: '/images/news/2026-08-12-eclipse-islandia.jpg',
    captionEs: 'La umbra sumió a la capital islandesa en la oscuridad.',
    captionEn: 'The umbra plunged Iceland\'s capital into darkness.',
    slug: 'eclipse-solar-total-islandia-reikiavik-totalidad',
    maxEs: 'Reikiavik · 17:48',
    maxEn: 'Reykjavík · 5:48 p.m.',
  },
  {
    id: 950,
    flag: '🇬🇱',
    country: 'Groenlandia',
    countryEn: 'Greenland',
    type: 'total',
    totalEs: 'Totalidad sobre el hielo',
    totalEn: 'Totality over the ice',
    image: '/images/news/2026-08-12-eclipse-groenlandia.jpg',
    captionEs: 'Una de las zonas más remotas del planeta recibió la umbra.',
    captionEn: 'One of the most remote areas on Earth received the umbra.',
    slug: 'eclipse-solar-total-groenlandia-paso-nativa',
    maxEs: 'Costa este · mediodía',
    maxEn: 'East coast · noon',
  },
  {
    id: 951,
    flag: '🇷🇺',
    country: 'Rusia',
    countryEn: 'Russia',
    type: 'total',
    totalEs: 'Primera totalidad del día',
    totalEn: 'First totality of the day',
    image: '/images/news/2026-08-12-eclipse-rusia.jpg',
    captionEs: 'La sombra lunar entró a la Tierra por la península de Taimyr.',
    captionEn: 'The lunar shadow entered Earth at the Taymyr Peninsula.',
    slug: 'eclipse-solar-total-rusia-siberia-primera-totalidad',
    maxEs: 'Taimyr · amanecer',
    maxEn: 'Taymyr · sunrise',
  },
  {
    id: 952,
    flag: '🇵🇹',
    country: 'Portugal',
    countryEn: 'Portugal',
    type: 'total',
    totalEs: 'Totalidad en Montesinho',
    totalEn: 'Totality in Montesinho',
    image: '/images/news/2026-08-12-eclipse-portugal.jpg',
    captionEs: 'Solo el extremo noreste rozó la franja de totalidad.',
    captionEn: 'Only the far northeast grazed the path of totality.',
    slug: 'eclipse-solar-total-portugal-guadramil-montesinho',
    maxEs: 'Guadramil · 20:00',
    maxEn: 'Guadramil · 8:00 p.m.',
  },
  {
    id: 953,
    flag: '🇬🇧',
    country: 'Reino Unido',
    countryEn: 'United Kingdom',
    type: 'partial',
    totalEs: 'Hasta el 91-94% cubierto',
    totalEn: 'Up to 91-94% covered',
    image: '/images/news/2026-08-12-eclipse-reino-unido.jpg',
    captionEs: 'Londres vivió su eclipse parcial más profundo en décadas.',
    captionEn: 'London saw its deepest partial eclipse in decades.',
    slug: 'eclipse-solar-parcial-reino-unido-londres-91',
    maxEs: 'Londres · 19:13',
    maxEn: 'London · 7:13 p.m.',
  },
  {
    id: 954,
    flag: '🇺🇸',
    country: 'EE.UU.',
    countryEn: 'USA',
    type: 'partial',
    totalEs: 'Parcial de costa a costa',
    totalEn: 'Coast-to-coast partial',
    image: '/images/news/2026-08-12-eclipse-eeuu.jpg',
    captionEs: 'La NASA retransmitió en vivo todo el evento.',
    captionEn: 'NASA broadcast the entire event live.',
    slug: 'eclipse-solar-parcial-eeuu-alaska-nasa-en-vivo',
    maxEs: 'Anchorage · 28%',
    maxEn: 'Anchorage · 28%',
  },
  {
    id: 955,
    flag: '🇲🇦',
    country: 'Marruecos',
    countryEn: 'Morocco',
    type: 'partial',
    totalEs: 'Hasta 93% en el norte',
    totalEn: 'Up to 93% in the north',
    image: '/images/news/2026-08-12-eclipse-marruecos.jpg',
    captionEs: 'El país del Magreb con mejor visibilidad del parcial.',
    captionEn: 'The Maghreb country with the best partial visibility.',
    slug: 'eclipse-solar-parcial-marruecos-tanger-casablanca-87',
    maxEs: 'Nador · 92,9%',
    maxEn: 'Nador · 92.9%',
  },
  {
    id: 956,
    flag: '🇫🇷',
    country: 'Francia',
    countryEn: 'France',
    type: 'partial',
    totalEs: '92% en París al atardecer',
    totalEn: '92% in Paris at sunset',
    image: '/images/news/2026-08-12-eclipse-francia.jpg',
    captionEs: 'Un atardecer que se oscureció de forma brusca.',
    captionEn: 'A sunset that darkened abruptly.',
    slug: 'eclipse-solar-francia-parcial-92-paris-atardecer',
    maxEs: 'París · 20:17',
    maxEn: 'Paris · 8:17 p.m.',
  },
  {
    id: 957,
    flag: '🌍',
    country: 'Una sola galería',
    countryEn: 'One global gallery',
    type: 'partial',
    totalEs: 'Las mejores fotos del mundo',
    totalEn: 'The best photos worldwide',
    image: '/images/news/2026-08-12-eclipse-mundo.jpg',
    captionEs: 'De Groenlandia a Mallorca: la corona solar en imágenes.',
    captionEn: 'From Greenland to Mallorca: the corona in images.',
    slug: 'eclipse-solar-2026-mejores-fotos-mundo-masa-nasa',
    maxEs: 'Corona solar',
    maxEn: 'Solar corona',
  },
];

interface TimelineItem {
  timeEs: string;
  timeEn: string;
  placeEs: string;
  placeEn: string;
  detailEs: string;
  detailEn: string;
  flag: string;
}

const timeline: TimelineItem[] = [
  {
    timeEs: 'Amanecer',
    timeEn: 'Sunrise',
    placeEs: 'Península de Taimyr, Rusia',
    placeEn: 'Taymyr Peninsula, Russia',
    detailEs: 'La umbra hace contacto con la Tierra y comienza la totalidad.',
    detailEn: 'The umbra touches Earth and totality begins.',
    flag: '🇷🇺',
  },
  {
    timeEs: '12:00',
    timeEn: 'Noon',
    placeEs: 'Este de Groenlandia',
    placeEn: 'Eastern Greenland',
    detailEs: 'La sombra cruza el hielo ártico camino al Atlántico.',
    detailEn: 'The shadow crosses Arctic ice on its way to the Atlantic.',
    flag: '🇬🇱',
  },
  {
    timeEs: '17:48',
    timeEn: '5:48 p.m.',
    placeEs: 'Reikiavik, Islandia',
    placeEn: 'Reykjavík, Iceland',
    detailEs: 'Totalidad de casi un minuto sobre la capital islandesa.',
    detailEn: 'Nearly a minute of totality over Iceland\'s capital.',
    flag: '🇮🇸',
  },
  {
    timeEs: '20:28-20:33',
    timeEn: '8:28-8:33 p.m.',
    placeEs: 'León y Valencia, España',
    placeEn: 'León and Valencia, Spain',
    detailEs: 'Totalidad en la península, cerrando con un eclipse de atardecer.',
    detailEn: 'Totality on the peninsula, closing with a sunset eclipse.',
    flag: '🇪🇸',
  },
  {
    timeEs: '20:00-20:30',
    timeEn: '8:00-8:30 p.m.',
    placeEs: 'Magreb y resto de Europa',
    placeEn: 'Maghreb and rest of Europe',
    detailEs: 'Parciales de más del 90% y atardeceres rojos en África.',
    detailEn: 'Partials above 90% and red sunsets across Africa.',
    flag: '🌍',
  },
];

export default function Eclipse2026Page({ lang, t, blogPosts, handleArticleClick, onBackToNews }: Eclipse2026PageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const postsById = (id: number | string) => blogPosts.find(p => String(p.id) === String(id));

  const gotoArticle = (id: number | string) => {
    const post = postsById(String(id));
    if (post) handleArticleClick(post, 'noticias');
  };

  const featured = postsById(948);
  const next = () => setActiveIndex((i) => (i + 1) % countries.length);
  const prev = () => setActiveIndex((i) => (i - 1 + countries.length) % countries.length);

  const totals = countries.filter(c => c.type === 'total');
  const partials = countries.filter(c => c.type === 'partial');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 animate-fadeIn">

      {/* Botón volver a noticias */}
      {onBackToNews && (
        <button
          onClick={onBackToNews}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'es' ? 'Volver a Noticias' : 'Back to News'}
        </button>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-black to-[#0a0a0a]">
        <img
          src="/images/news/2026-08-12-eclipse-mundo.jpg"
          alt="Eclipse solar total del 12 de agosto de 2026"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-sm">
            <Sun className="w-4 h-4" />
            {lang === 'es' ? 'Evento astronómico del año' : 'Astronomical event of the year'}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-tight">
            {lang === 'es'
              ? 'El Eclipse Solar Total 2026'
              : 'The 2026 Total Solar Eclipse'}
          </h1>
          <p className="text-base md:text-lg text-stone-300 font-light leading-relaxed">
            {lang === 'es'
              ? 'El 12 de agosto de 2026, la sombra de la Luna recorrió el planeta desde la Siberia rusa hasta las Baleares. Este especial reúne las 10 noticias, la galería por país, la trayectoria y los horarios del fenómeno que cruzó Groenlandia, Islandia y la península ibérica.'
              : 'On August 12, 2026, the Moon\'s shadow crossed the planet from Russian Siberia to the Balearic Islands. This special gathers the 10 stories, the country gallery, the trajectory and the times of the phenomenon that crossed Greenland, Iceland and the Iberian peninsula.'}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => featured && gotoArticle(featured.id)}
              className="inline-flex items-center gap-2 bg-gold text-black text-xs font-bold font-mono uppercase tracking-widest px-5 py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {lang === 'es' ? 'Leer la cobertura de España' : 'Read the Spain coverage'}
            </button>
            <a
              href="https://science.nasa.gov/eclipses/future-eclipses/total-solar-eclipse-on-august-12-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-bold font-mono uppercase tracking-widest px-5 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              {lang === 'es' ? 'Mapa oficial NASA' : 'Official NASA map'}
            </a>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS RÁPIDAS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: '10', labelEs: 'noticias del evento', labelEn: 'stories this special' },
          { n: '5', labelEs: 'países en la totalidad', labelEn: 'countries in totality' },
          { n: fullTimes('13'), labelEs: 'comunidades españolas', labelEn: 'Spanish regions' },
          { n: '~2\'30"', labelEs: 'máx. duración', labelEn: 'max. duration' },
        ].map((s, i) => (
          <div key={i} className="text-center bg-white/[0.02] border border-white/5 rounded-sm py-5 px-3">
            <div className="text-3xl font-display font-extrabold text-gold">{s.n}</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mt-1">
              {lang === 'es' ? s.labelEs : s.labelEn}
            </div>
          </div>
        ))}
      </section>

      {/* GALERÍA POR PAÍS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">Galeria / Gallery</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es' ? 'El eclipse, país por país' : 'The eclipse, country by country'}
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-md border border-white/10 bg-black/80">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <img
                src={countries[activeIndex].image}
                alt={lang === 'es' ? countries[activeIndex].country : countries[activeIndex].countryEn}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold">
                  <MapPin className="w-4 h-4" /> {countries[activeIndex].flag}
                  <span>{lang === 'es' ? countries[activeIndex].country : countries[activeIndex].countryEn}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-extrabold text-white font-display tracking-tight">
                  {lang === 'es' ? countries[activeIndex].totalEs : countries[activeIndex].totalEn}
                </h3>
                <p className="hidden md:block text-sm text-stone-300 font-light max-w-2xl">
                  {lang === 'es' ? countries[activeIndex].captionEs : countries[activeIndex].captionEn}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-300 bg-black/40 border border-white/15 px-2.5 py-1 rounded-sm">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {lang === 'es' ? countries[activeIndex].maxEs : countries[activeIndex].maxEn}
                  </span>
                  <button
                    onClick={() => gotoArticle(countries[activeIndex].id)}
                    className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {lang === 'es' ? 'Leer nota' : 'Read story'} <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={prev}
            aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-gold hover:text-black transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-gold hover:text-black transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center gap-1.5 mt-4">
            {countries.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveIndex(i)}
                aria-label={lang === 'es' ? c.country : c.countryEn}
                className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-gold' : 'w-3 bg-stone-700 hover:bg-stone-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TRAYECTORIA / MAPA */}
      <section className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-md border border-white/10 bg-white/[0.02] overflow-hidden">
          <img
            src="/images/news/2026-08-12-eclipse-nasa-mapa.jpg"
            alt="Mapa de la trayectoria del eclipse solar total del 12 de agosto de 2026"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-4">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">Trajectory / Trayectoria</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es'
              ? 'Un trayecto de más de 10.000 km'
              : 'A path spanning more than 10,000 km'}
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-200 bg-gold/10 border border-gold/25 px-2.5 py-1 rounded-sm">
              <Sun className="w-3.5 h-3.5 text-gold" />
              {lang === 'es' ? 'Franja de totalidad (~200 km)' : 'Path of totality (~200 km)'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-400 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-sm">
              {lang === 'es' ? 'Siberia → Groenlandia → Islandia → España' : 'Siberia → Greenland → Iceland → Spain'}
            </span>
          </div>
          <p className="text-sm text-stone-400 font-light leading-relaxed">
            {lang === 'es'
              ? 'La banda de totalidad se desplazó de este a oeste durante más de cuatro horas. La umbra entró por el norte de Rusia, cruzó el Ártico, barrió la costa este de Groenlandia y la isla de Islandia, atravesó el Atlántico y cerró su recorrido sobre la España peninsular y las Baleares antes de hundirse en el Mediterráneo.'
              : 'The path of totality moved east to west for more than four hours. The umbra entered over northern Russia, crossed the Arctic, swept the east coast of Greenland and the island of Iceland, crossed the Atlantic and ended its journey over peninsular Spain and the Balearic Islands before sinking into the Mediterranean.'}
          </p>
          <p className="text-sm text-stone-400 font-light leading-relaxed">
            {lang === 'es'
              ? 'Otros seis países y regiones (Reino Unido, EE.UU., Marruecos, Francia, Portugal y el resto de Europa) observaron un eclipse parcial. En Europa continental y África el Sol se puso aún eclipsado, con atardeceres de intensos tonos rojos.'
              : 'Six other countries and regions (UK, USA, Morocco, France, Portugal and the rest of Europe) saw a partial eclipse. Across continental Europe and Africa the Sun set while still eclipsed, producing intense red sunsets.'}
          </p>
        </div>
      </section>

      {/* LÍNEA DE TIEMPO */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">Timeline / Horarios</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es' ? 'El viaje de la umbra, hora a hora' : 'The umbra\'s journey, hour by hour'}
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {timeline.map((item, i) => (
            <div key={i} className="relative bg-white/[0.02] border border-white/5 rounded-md p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold">{item.timeEs}</span>
                <span className="text-lg">{item.flag}</span>
              </div>
              <p className="text-sm font-bold text-white">{lang === 'es' ? item.placeEs : item.placeEn}</p>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {lang === 'es' ? item.detailEs : item.detailEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TARJETAS DE LAS 10 NOTICIAS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">Noticias del especial / Special stories</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
            {lang === 'es' ? 'Las 10 notas del eclipse' : 'The 10 eclipse stories'}
          </h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-mono uppercase tracking-widest text-stone-300">
              {lang === 'es' ? `Totalidad · ${totals.length} notas` : `Totality · ${totals.length} stories`}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {totals.map((c) => (
              <button
                key={c.id}
                onClick={() => gotoArticle(c.id)}
                className="group text-left overflow-hidden rounded-md border border-white/10 bg-white/[0.02] hover:border-gold/50 hover:bg-white/[0.04] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt={c.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-2xl">{c.flag}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-xs font-bold text-white">{lang === 'es' ? c.country : c.countryEn}</p>
                  <p className="text-[10px] font-mono text-stone-400">{lang === 'es' ? c.totalEs : c.totalEn}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-stone-300">
              {lang === 'es' ? `Parcial y galería · ${partials.length} notas` : `Partial & gallery · ${partials.length} stories`}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {partials.map((c) => (
              <button
                key={c.id}
                onClick={() => gotoArticle(c.id)}
                className="group text-left overflow-hidden rounded-md border border-white/10 bg-white/[0.02] hover:border-sky-400/50 hover:bg-white/[0.04] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt={c.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-2xl">{c.flag}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-xs font-bold text-white">{lang === 'es' ? c.country : c.countryEn}</p>
                  <p className="text-[10px] font-mono text-stone-400">{lang === 'es' ? c.totalEs : c.totalEn}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center rounded-md border border-gold/20 bg-gold/[0.04] px-6 py-10 space-y-3">
        <Sun className="w-8 h-8 text-gold mx-auto" />
        <h2 className="text-xl md:text-2xl font-extrabold text-white font-display">
          {lang === 'es' ? '¿Te perdiste el eclipse?' : 'Did you miss the eclipse?'}
        </h2>
        <p className="text-sm text-stone-400 font-light max-w-xl mx-auto">
          {lang === 'es'
            ? 'Revive el fenómeno con la galería global y las 10 notas del especial. El próximo desde Europa será el 2 de agosto de 2027.'
            : 'Relive the phenomenon with the global gallery and the 10 stories of this special. The next one from Europe is August 2, 2027.'}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={() => gotoArticle(957)}
            className="inline-flex items-center gap-2 bg-gold text-black text-xs font-bold font-mono uppercase tracking-widest px-5 py-3 rounded-sm hover:bg-gold/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {lang === 'es' ? 'Ver las mejores fotos' : 'See the best photos'}
          </button>
          {onBackToNews && (
            <button
              onClick={onBackToNews}
              className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-bold font-mono uppercase tracking-widest px-5 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors"
            >
              {lang === 'es' ? 'Todas las noticias' : 'All the news'}
            </button>
          )}
        </div>
      </section>

      <div className="pb-4" />
    </div>
  );
}

// Helper tipográfico (mantiene literality en counts resumidos)
function fullTimes(v: string): string {
  return v;
}