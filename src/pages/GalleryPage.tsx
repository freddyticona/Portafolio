import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Film, Sparkles } from 'lucide-react';

interface GalleryPhoto {
  src: string;
  orientation: 'horizontal' | 'vertical';
}

const horizontalPhotos: GalleryPhoto[] = [
  '55717476_1192210687627033_8583848958349017088_n.jpg',
  '55908432_1192210604293708_6030766474568663040_n.jpg',
  '71261838_102276721182659_2827440935904739328_n.jpg',
  '71892910_102277004515964_7113338652544991232_n.jpg',
  'Canon PowerShot SX40 HS1605.webp',
  'Canon PowerShot SX40 HS2906.webp',
  'Canon PowerShot SX40 HS3323.webp',
  'HXR-NX70N4742.webp',
  'HXR-NX70N635.webp',
  'IMG-20190805-WA0024.webp',
  'IMG_20100101_141020.webp',
  'LT29i2339.webp',
  'PSX_20190805_102454 1.webp',
  '_DSC0312.webp',
  '_DSC0364.webp',
  '_DSC0427.webp',
].map(f => ({ src: `/images/behind-scenes/horizontal/${f}`, orientation: 'horizontal' as const }));

const verticalPhotos: GalleryPhoto[] = [
  '20170422_101655.webp',
  '20171007_112016.webp',
  '20171008_201317.webp',
  '20190228_190246.webp',
  '24072012044.webp',
  '71280215_102276897849308_17463186701680640_n.jpg',
  '892344_139453372902775_1317569229_o.webp',
  'DSC_2987.webp',
  'DSC_3001.webp',
  'GT-I91902764.webp',
  'IMG_20100101_084106.webp',
  'IMG_20100101_084118.webp',
  'IMG_20100101_133444.webp',
  'PSX_20190811_094134 1.webp',
  'PSX_20190811_094405 1.webp',
  'PSX_20250829_211859.webp',
  'PSX_20250829_212120.webp',
  '_DSC0266.webp',
].map(f => ({ src: `/images/behind-scenes/vertical/${f}`, orientation: 'vertical' as const }));

const allPhotos = [...verticalPhotos, ...horizontalPhotos];

interface GalleryPageProps {
  lang?: 'es' | 'en';
  t?: any;
}

export default function GalleryPage({ lang = 'es' }: GalleryPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + allPhotos.length) % allPhotos.length : null);
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % allPhotos.length : null);

  // Keyboard navigation for cinematic lightbox (inspired by The Wall template)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-10 animate-fadeIn">

      {/* Header */}
      <div className="relative overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-8 md:p-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gold/10 rounded-sm border border-gold/20">
              <Camera className="w-5 h-5 text-gold" />
            </div>
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Galería' : 'Gallery'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            {lang === 'es' ? 'Galería de Coberturas' : 'Coverage Gallery'}
          </h1>
          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {lang === 'es'
              ? 'Más de 15 años de trayectoria capturados en imágenes. Coberturas periodísticas, documentales, producciones televisivas y momentos detrás de cámaras en toda Bolivia.'
              : 'Over 15 years of experience captured in images. Journalistic coverage, documentaries, TV productions and behind-the-scenes moments across Bolivia.'}
          </p>
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/5">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold font-display">{allPhotos.length}</div>
              <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                {lang === 'es' ? 'Fotos' : 'Photos'}
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gold font-display">{horizontalPhotos.length}H / {verticalPhotos.length}V</div>
              <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                {lang === 'es' ? 'Horizontal / Vertical' : 'Horizontal / Vertical'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de fotos con layout tipo masonry (horizontales más anchas) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
        {allPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className={`group relative overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5 cursor-pointer transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 hover:scale-[1.02] ${
              photo.orientation === 'horizontal' ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
            }`}
          >
            <img
              src={photo.src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-mono text-gold uppercase tracking-wider font-bold flex items-center gap-1">
                <Film className="w-3 h-3" />
                {photo.orientation === 'horizontal' ? 'Horizontal' : 'Vertical'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Cinemático (inspirado en la plantilla The Wall) */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Ambient blurred background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center blur-3xl scale-125 transition-all duration-700"
            style={{ backgroundImage: `url(${allPhotos[lightboxIndex].src})` }}
          />

          {/* Top Bar Header */}
          <div
            className="relative z-20 flex items-center justify-between gap-4 border-b border-white/10 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="p-1.5 bg-gold/10 border border-gold/20 rounded-sm">
                <Camera className="w-4 h-4 text-gold" />
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase block">
                  {lang === 'es' ? 'Coberturas Audiovisuales' : 'Audiovisual Coverage'}
                </span>
                <span className="text-[10px] font-mono text-gold/80 uppercase tracking-widest">
                  {allPhotos[lightboxIndex].orientation === 'horizontal' ? 'Formato Horizontal 16:9' : 'Formato Vertical 9:16'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] font-mono text-stone-400">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>{lang === 'es' ? 'Usa ← → o Esc para navegar' : 'Use ← → or Esc to navigate'}</span>
              </span>

              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-gold hover:text-black rounded-sm transition-colors cursor-pointer text-white"
                aria-label={lang === 'es' ? 'Cerrar visor' : 'Close viewer'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container */}
          <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 my-3">
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-gold hover:text-black border border-white/10 rounded-sm transition-all cursor-pointer z-20 text-white shadow-xl"
              aria-label={lang === 'es' ? 'Foto anterior' : 'Previous photo'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-gold hover:text-black border border-white/10 rounded-sm transition-all cursor-pointer z-20 text-white shadow-xl"
              aria-label={lang === 'es' ? 'Foto siguiente' : 'Next photo'}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={allPhotos[lightboxIndex].src}
              alt=""
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Thumbnail Strip (The Wall Style) */}
          <div
            className="relative z-20 pt-2 border-t border-white/10 flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span className="text-stone-300 font-bold">
                {lang === 'es' ? 'Foto' : 'Photo'} {lightboxIndex + 1} {lang === 'es' ? 'de' : 'of'} {allPhotos.length}
              </span>
              <span className="text-gold font-bold">
                {Math.round(((lightboxIndex + 1) / allPhotos.length) * 100)}%
              </span>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-gold/30">
              {allPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className={`relative shrink-0 h-12 rounded-sm overflow-hidden border transition-all duration-200 cursor-pointer ${
                    idx === lightboxIndex
                      ? 'border-gold ring-2 ring-gold/50 scale-105 opacity-100'
                      : 'border-white/10 opacity-40 hover:opacity-80'
                  } ${photo.orientation === 'horizontal' ? 'w-20' : 'w-10'}`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
