/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Camera, Video, Aperture, Film, Clapperboard, Sparkles } from 'lucide-react';

interface BehindScenesImage {
  src: string;
  alt: string;
  title: string;
  category: 'set' | 'equipment' | 'location' | 'team';
  year?: string;
  location?: string;
  objectPosition?: string;
}

const CATEGORIES = {
  set: { icon: Clapperboard, label: 'En Set', color: 'from-purple-500/20 to-purple-900/20' },
  equipment: { icon: Camera, label: 'Equipamiento', color: 'from-blue-500/20 to-blue-900/20' },
  location: { icon: Aperture, label: 'Locaciones', color: 'from-amber-500/20 to-amber-900/20' },
  team: { icon: Video, label: 'Equipo', color: 'from-emerald-500/20 to-emerald-900/20' }
};

interface BehindScenesGalleryProps {
  lang?: 'es' | 'en';
  t?: any;
}

export default function BehindScenesGallery({ lang = 'es', t }: BehindScenesGalleryProps) {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const behindScenesImages: BehindScenesImage[] = [
    {
      src: '/images/behind-scenes/DSC_2994.webp',
      alt: 'Camarógrafo de estudio',
      title: lang === 'es' ? 'Camarógrafo de estudio - Abya Yala Noticias' : 'Studio cameraman - Abya Yala Noticias',
      category: 'set',
      year: '2021',
      location: 'Estudio Canal 41, La Paz'
    },
    {
      src: '/images/behind-scenes/28082012255.webp',
      alt: 'Copia de material a cassette',
      title: lang === 'es' ? 'Copia de material audiovisual entre cámaras a cassette (RCA)' : 'Copying audiovisual material between cameras to cassette (RCA)',
      category: 'equipment',
      year: '2018',
      location: 'Estudio'
    },
    {
      src: '/images/behind-scenes/24072012043.webp',
      alt: 'Graduación ANAPOL',
      title: lang === 'es' ? 'Cobertura de graduación ANAPOL - Gigavisión' : 'Graduation coverage ANAPOL - Gigavisión',
      category: 'location',
      year: '2018',
      location: 'Exteriores'
    },
    {
      src: '/images/behind-scenes/DSC_0044.webp',
      alt: 'Entrada Gran Poder',
      title: lang === 'es' ? 'Cobertura entrada Gran Poder - Gigavisión' : 'Gran Poder parade coverage - Gigavisión',
      category: 'set',
      year: '2018',
      location: 'La Paz'
    },
    {
      src: '/images/behind-scenes/08092012536.webp',
      alt: 'Tiwanaku',
      title: lang === 'es' ? 'Grabación de imágenes de apoyo - Tiwanaku' : 'B-roll footage shooting - Tiwanaku',
      category: 'location',
      year: '2018',
      location: 'Tiwanaku'
    },
    {
      src: '/images/behind-scenes/1428941048045(1).webp',
      alt: 'Planta Carlos Villegas',
      title: lang === 'es' ? 'Inspección planta separadora de líquidos Carlos Villegas' : 'Inspection at Carlos Villegas liquid separation plant',
      category: 'location',
      year: '2016',
      location: 'Planta Carlos Villegas'
    },
    {
      src: '/images/behind-scenes/DSC_2990.webp',
      alt: 'Estudio Abya Yala Noticias',
      title: lang === 'es' ? 'Estudio Abya Yala Noticias - cámara y prompter' : 'Abya Yala Noticias studio - camera and prompter',
      category: 'set',
      year: '2020',
      location: 'Estudio Canal 41, La Paz'
    },
    {
      src: '/images/behind-scenes/DSC07483.webp',
      alt: 'Planta San Buenaventura',
      title: lang === 'es' ? 'Planta azucarera San Buenaventura - RTP' : 'San Buenaventura sugar plant - RTP',
      category: 'location',
      year: '2019',
      location: 'San Buenaventura'
    },
    {
      src: '/images/behind-scenes/DSC_2187.webp',
      alt: 'Archivos Abya Yala',
      title: lang === 'es' ? 'Archivos y programación - Abya Yala' : 'Archives and programming - Abya Yala',
      category: 'team',
      year: '2019',
      location: 'Estudio Abya Yala',
      objectPosition: '75% center'
    },
    {
      src: '/images/behind-scenes/DSC_2455.webp',
      alt: 'Programa folclórico RTP',
      title: lang === 'es' ? 'Camarógrafo de piso - Programa folclórico RTP' : 'Floor cameraman - Folkloric program RTP',
      category: 'set',
      year: '2021',
      location: 'Estudio RTP'
    },
    {
      src: '/images/behind-scenes/DSC07353.webp',
      alt: 'Travesía San Buenaventura-Rurrenabaque',
      title: lang === 'es' ? 'Cruce San Buenaventura - Rurrenabaque en balsa - RTP' : 'San Buenaventura - Rurrenabaque river crossing on raft - RTP',
      category: 'location',
      year: '2019',
      location: 'Río Beni'
    },
    {
      src: '/images/behind-scenes/Canon VIXIA HF M313934.webp',
      alt: 'Sony DVCAM',
      title: lang === 'es' ? 'Cámara Sony DVCAM de cassette' : 'Sony DVCAM cassette camera',
      category: 'equipment',
      year: '2019',
      location: 'Estudio'
    },
    {
      src: '/images/behind-scenes/DSC_2060.webp',
      alt: 'Cobertura Trinidad',
      title: lang === 'es' ? 'Cobertura en Trinidad - RTP (avión Hércules de fondo)' : 'Coverage in Trinidad - RTP (Hercules aircraft background)',
      category: 'location',
      year: '2019',
      location: 'Trinidad, Beni'
    }
  ];

  const filteredImages = filter === 'all'
    ? behindScenesImages
    : behindScenesImages.filter(img => img.category === filter);

  const categories = ['all', ...Object.keys(CATEGORIES)];

  // Mostrar todas las fotos inmediatamente (sin animación problemática)
  useEffect(() => {
    setVisibleItems(behindScenesImages.length);
  }, [behindScenesImages.length]);

  return (
    <div ref={galleryRef} className="space-y-12">
      {/* Header cinematográfico */}
      <div className="relative overflow-hidden rounded-sm border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-8 md:p-12">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gold/10 rounded-sm border border-gold/20">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Exclusivo' : 'Exclusive'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            {lang === 'es' ? 'Detrás de Cámaras' : 'Behind the Scenes'}
          </h2>

          <p className="text-stone-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {lang === 'es'
              ? 'Un vistazo exclusivo a los momentos que capturan la esencia de la producción audiovisual. Desde las locaciones más remotas hasta el estudio más técnico.'
              : 'An exclusive look at the moments that capture the essence of audiovisual production. From the most remote locations to the most technical studio.'}
          </p>

          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-display">13</div>
                <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                  {lang === 'es' ? 'Fotos destacadas' : 'Featured photos'}
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-display">2016-2021</div>
                <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                  {lang === 'es' ? 'Periodo' : 'Period'}
                </div>
              </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gold font-display">Bolivia</div>
              <div className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                {lang === 'es' ? 'País' : 'Country'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros cinematográficos */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
            filter === 'all'
              ? 'bg-gold text-black shadow-lg shadow-gold/20'
              : 'bg-white/5 text-stone-400 hover:bg-white/10 border border-white/5'
          }`}
        >
          {lang === 'es' ? 'Ver Todo' : 'All'}
        </button>

        {Object.entries(CATEGORIES).map(([key, { icon: Icon, label }]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === key
                ? 'bg-gold text-black shadow-lg shadow-gold/20'
                : 'bg-white/5 text-stone-400 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Grid cinematográfico con hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => {
          const categoryConfig = CATEGORIES[image.category];
          const Icon = categoryConfig.icon;

          return (
            <div
              key={index}
              className={`group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5 cursor-pointer transition-all duration-500 ${
                hoveredIndex === index ? 'border-gold/50 shadow-xl shadow-gold/10 scale-[1.02]' : 'shadow-sm'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: index < visibleItems ? 1 : 0,
                transform: index < visibleItems ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out',
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Imagen */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                loading="lazy"
              />

              {/* Overlay con gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-t ${categoryConfig.color} transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-80' : 'opacity-40'
              }`} />

              {/* Contenido */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                {/* Categoría */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-black/40 rounded-sm backdrop-blur-sm">
                    <Icon className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-widest">
                    {categoryConfig.label}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-white text-sm font-bold font-display leading-tight mb-1 line-clamp-2">
                  {image.title}
                </h3>

                {/* Metadatos */}
                <div className="flex items-center gap-3 text-[10px] text-stone-300 font-mono">
                  {image.year && <span>{image.year}</span>}
                  {image.location && (
                    <>
                      <span className="text-gold/50">•</span>
                      <span>{image.location}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ${
                hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
              }`} />
            </div>
          );
        })}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4">
            <Camera className="w-8 h-8 text-stone-500" />
          </div>
          <p className="text-stone-400 text-sm">
            {lang === 'es' ? 'No hay imágenes en esta categoría' : 'No images in this category'}
          </p>
        </div>
      )}

      {/* CTA para ver más */}
      <div className="text-center pt-8">
        <a
          href="/galeria"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/15 cursor-pointer"
        >
          <Film className="w-4 h-4" />
          {lang === 'es' ? 'Ver Galería Completa' : 'View Full Gallery'}
        </a>
      </div>
    </div>
  );
}
