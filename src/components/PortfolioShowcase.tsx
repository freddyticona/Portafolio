import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Play } from 'lucide-react';
import { proyectos as projectsData } from '../data/proyectos';

type Project = {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  anio: number;
  herramientas: string[];
  paleta_colores: string[];
  resumen_proyecto: string;
  portada_webp: string;
  galeria_webp: string[];
  video_mp4: string | null;
  pdf_descargable: string | null;
};

const PROJECTS = projectsData as Project[];

// Los filtros se derivan de los datos: al añadir un proyecto con nueva categoría aparece solo.
const FILTERS = ['all', ...Array.from(new Set(PROJECTS.map((p) => p.categoria)))];
const FILTER_LABELS: Record<string, string> = { all: 'Todo' };

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState<Project | null>(null);
  const [idx, setIdx] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollGuardado = useRef<number | null>(null);

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categoria === filter);

  const openModal = useCallback((p: Project) => {
    setOpen(p);
    setIdx(0);
    setZoomed(false);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setOpen(null);
    document.body.style.overflow = '';
  }, []);

  const showSlide = useCallback(
    (i: number) => {
      if (!open) return;
      const g = open.galeria_webp;
      let n = i;
      if (n < 0) n = g.length - 1;
      if (n >= g.length) n = 0;
      // Guardamos el scroll interno del modal antes de cambiar de slide
      scrollGuardado.current = overlayRef.current?.scrollTop ?? 0;
      setIdx(n);
      setZoomed(false);
    },
    [open]
  );

  // Restauramos el scroll en el mismo frame en que cambia la imagen
  useLayoutEffect(() => {
    if (scrollGuardado.current !== null && overlayRef.current) {
      overlayRef.current.scrollTop = scrollGuardado.current;
      scrollGuardado.current = null;
    }
  }, [idx]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showSlide(idx - 1);
      if (e.key === 'ArrowRight') showSlide(idx + 1);
      if (e.key === 'z' || e.key === 'Z') setZoomed((z) => !z);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, idx, closeModal, showSlide]);

  // Limpia el overflow del body si el componente se desmonta con el modal abierto
  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      // clipboard no disponible (HTTP): se ignora
    }
  };

  return (
    <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
          Catálogo de diseño
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          Proyectos con identidad propia
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          Identidad visual, diseño gráfico, redes sociales y audiovisual. Cada proyecto es un caso de estudio completo.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border ${
              filter === f
                ? 'bg-gold text-black border-gold'
                : 'bg-white/[0.02] text-stone-400 border-white/10 hover:border-gold/50 hover:text-gold'
            }`}
          >
            {FILTER_LABELS[f] ?? f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((p, i) => (
          <article
            key={p.id}
            onClick={() => openModal(p)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p); } }}
            role="button"
            tabIndex={0}
            aria-label={`Abrir proyecto ${p.titulo}`}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <div
              className="aspect-[4/5] overflow-hidden relative"
              style={{ backgroundColor: p.paleta_colores[0] || '#0a0a0a' }}
            >
              <img
                src={p.portada_webp}
                alt={p.titulo}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              {p.video_mp4 && (
                <video
                  className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src={p.video_mp4}
                  muted
                  loop
                  playsInline
                  preload="none"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={(e) => {
                    const v = e.currentTarget as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
              )}
              <span className="absolute top-3 left-3 bg-black/60 backdrop-blur border border-white/10 text-stone-200 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                {p.categoria}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-bold text-white leading-snug group-hover:text-gold transition-colors font-display line-clamp-2">
                {p.titulo}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">{p.subtitulo}</p>
              <div className="flex gap-1.5 pt-1">
                {p.paleta_colores.slice(0, 5).map((c) => (
                  <span
                    key={c}
                    className="w-4 h-4 rounded-full border border-white/15"
                    style={{ background: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Portal al body: evita que los transforms de .page-transition / .animate-fadeIn
          conviertan al modal en fixed relativo a la página en vez del viewport. */}
      {open && createPortal(
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={open.titulo}
        >
          <div
            className="relative w-full max-w-5xl bg-[#111114] border border-white/10 rounded-lg shadow-2xl my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Cerrar"
              className="sticky top-3 float-right mr-3 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-stone-200 hover:text-gold text-xl leading-none z-10 cursor-pointer"
            >
              <X className="w-4 h-4 mx-auto" />
            </button>
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <span className="text-gold font-mono text-[10px] font-bold uppercase tracking-widest">
                  {open.categoria} · {open.anio}
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
                  {open.titulo}
                </h3>
                <p className="text-stone-400 text-sm md:text-base mt-1">{open.subtitulo}</p>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                  {open.resumen_proyecto}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                    Herramientas
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {open.herramientas.map((t) => (
                      <span key={t} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-xs text-stone-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-500">
                    Paleta (clic para copiar HEX)
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {open.paleta_colores.map((c) => (
                      <button
                        key={c}
                        onClick={() => copyHex(c)}
                        className="w-9 h-9 rounded-md border border-white/15 hover:scale-110 transition-transform cursor-pointer"
                        style={{ background: c }}
                        title={`Copiar ${c}`}
                        aria-label={`Copiar ${c}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative bg-black rounded-lg overflow-hidden h-[60vh] min-h-[260px] flex items-center justify-center">
                <button
                  onClick={() => showSlide(idx - 1)}
                  aria-label="Anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-stone-200 hover:text-gold text-xl cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 mx-auto" />
                </button>
                {open.galeria_webp[idx]?.endsWith('.mp4') ? (
                  <video
                    key={open.galeria_webp[idx]}
                    src={open.galeria_webp[idx]}
                    className="max-w-full max-h-full object-contain cursor-zoom-in"
                    style={{ transform: zoomed ? 'scale(2)' : 'scale(1)', transition: 'transform 0.3s' }}
                    muted
                    loop
                    autoPlay
                    playsInline
                    onClick={() => setZoomed((z) => !z)}
                  />
                ) : (
                  <img
                    key={open.galeria_webp[idx]}
                    src={open.galeria_webp[idx]}
                    alt={`${open.titulo} — ${idx + 1}`}
                    className="max-w-full max-h-full object-contain cursor-zoom-in"
                    style={{ transform: zoomed ? 'scale(2)' : 'scale(1)', transition: 'transform 0.3s' }}
                    onClick={() => setZoomed((z) => !z)}
                  />
                )}
                <button
                  onClick={() => showSlide(idx + 1)}
                  aria-label="Siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/10 text-stone-200 hover:text-gold text-xl cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 mx-auto" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-mono text-stone-400 tracking-widest">
                  {String(idx + 1).padStart(2, '0')} / {String(open.galeria_webp.length).padStart(2, '0')}
                </div>
                <button
                  onClick={() => setZoomed((z) => !z)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-black/70 border border-white/10 text-stone-200 hover:text-gold px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase tracking-widest cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" /> (Z) Zoom
                </button>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {open.pdf_descargable && (
                  <a
                    href={open.pdf_descargable}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-black font-bold rounded text-xs font-mono uppercase tracking-widest hover:bg-gold-hover transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Ver / Descargar Manual PDF
                  </a>
                )}
                {open.video_mp4 && (
                  <a
                    href={open.video_mp4}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-stone-200 hover:text-gold rounded text-xs font-mono uppercase tracking-widest transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Ver video (MP4)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
