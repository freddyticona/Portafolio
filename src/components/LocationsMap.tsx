/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Camera, Award, Globe, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  nameEs: string;
  nameEn: string;
  regionEs: string;
  regionEn: string;
  coordinates: { x: number; y: number }; // Posición en el mapa (porcentaje)
  projects: number;
  notableProjects: string[];
  type: 'urban' | 'rural' | 'natural' | 'ceremonial';
}

const locations: Location[] = [
  {
    id: 'lapaz',
    nameEs: 'La Paz',
    nameEn: 'La Paz',
    regionEs: 'Departamento de La Paz',
    regionEn: 'La Paz Department',
    coordinates: { x: 35, y: 45 },
    projects: 15,
    notableProjects: ['Caminos de la Rebelión', 'Fiesta de la Virgen de Urkupiña'],
    type: 'urban'
  },
  {
    id: 'elalto',
    nameEs: 'El Alto',
    nameEn: 'El Alto',
    regionEs: 'Ciudad de El Alto',
    regionEn: 'El Alto City',
    coordinates: { x: 38, y: 40 },
    projects: 8,
    notableProjects: ['Ferias de El Alto', 'Cultura Aymara Urbana'],
    type: 'urban'
  },
  {
    id: 'copacabana',
    nameEs: 'Copacabana',
    nameEn: 'Copacabana',
    regionEs: 'Lago Titicaca',
    regionEn: 'Lake Titicaca',
    coordinates: { x: 55, y: 35 },
    projects: 6,
    notableProjects: ['Peregrinación a la Virgen', 'Isla del Sol'],
    type: 'ceremonial'
  },
  {
    id: 'sorata',
    nameEs: 'Sorata',
    nameEn: 'Sorata',
    regionEs: 'Provincia Larecaja',
    regionEn: 'Larecaja Province',
    coordinates: { x: 50, y: 25 },
    projects: 4,
    notableProjects: ['Campos de Cultivo', 'Vida Rural'],
    type: 'rural'
  },
  {
    id: 'yungas',
    nameEs: 'Yungas',
    nameEn: 'Yungas',
    regionEs: 'Ruta de la Muerte',
    regionEn: 'Death Road',
    coordinates: { x: 25, y: 55 },
    projects: 5,
    notableProjects: ['Caminos de la Muerte', 'Bosques de Nubes'],
    type: 'natural'
  },
  {
    id: 'oruro',
    nameEs: 'Oruro',
    nameEn: 'Oruro',
    regionEs: 'Departamento de Oruro',
    regionEn: 'Oruro Department',
    coordinates: { x: 60, y: 50 },
    projects: 7,
    notableProjects: ['Diablada', 'Carnaval de Oruro'],
    type: 'ceremonial'
  },
  {
    id: 'potosi',
    nameEs: 'Potosí',
    nameEn: 'Potosí',
    regionEs: 'Departamento de Potosí',
    regionEn: 'Potosí Department',
    coordinates: { x: 70, y: 65 },
    projects: 6,
    notableProjects: ['Minas de Cerro Rico', 'Salar de Uyuni'],
    type: 'rural'
  },
  {
    id: 'sucre',
    nameEs: 'Sucre',
    nameEn: 'Sucre',
    regionEs: 'Departamento de Chuquisaca',
    regionEn: 'Chuquisaca Department',
    coordinates: { x: 65, y: 75 },
    projects: 4,
    notableProjects: ['Ciudad Blanca', 'Patrimonio Cultural'],
    type: 'urban'
  }
];

interface LocationsMapProps {
  lang: 'es' | 'en';
}

export default function LocationsMap({ lang }: LocationsMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [zoom, setZoom] = useState(1);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const typeColors = {
    urban: '#D4AF37',
    rural: '#8B7355',
    natural: '#228B22',
    ceremonial: '#DC143C'
  };

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Globe className="w-6 h-6 text-gold" />
          <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
            {lang === 'es' ? 'Ubicaciones de Filmación' : 'Filming Locations'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
          {lang === 'es' ? 'Bolivia a Través de Mi Lente' : 'Bolivia Through My Lens'}
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          {lang === 'es'
            ? 'Más de 15 años documentando la diversidad cultural, geográfica y social de Bolivia desde la cámara.'
            : 'Over 15 years documenting Bolivia\'s cultural, geographic, and social diversity through the lens.'}
        </p>
      </div>

      {/* Map Container */}
      <div className="relative bg-[#020202] border border-white/5 rounded-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {/* Bolivia Map SVG Background */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* Simplified Bolivia SVG outline */}
          <svg
            viewBox="0 0 100 120"
            className="w-full h-full max-w-3xl max-h-[600px]"
            style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.1))' }}
          >
            {/* Bolivia simplified outline */}
            <path
              d="M 30 10 L 70 10 L 85 30 L 80 50 L 90 70 L 70 100 L 50 115 L 30 100 L 20 70 L 25 50 L 15 30 Z"
              fill="none"
              stroke="rgba(212, 175, 55, 0.3)"
              strokeWidth="0.5"
              className="animate-pulse"
            />
            {/* Department divisions (simplified) */}
            <path
              d="M 30 35 L 70 35 M 50 10 L 50 50 M 35 60 L 75 60"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="0.3"
              fill="none"
            />
          </svg>

          {/* Location Markers */}
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleMarkerClick(location)}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus:outline-none"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
                zIndex: hoveredLocation === location.id || selectedLocation?.id === location.id ? 10 : 1
              }}
              aria-label={`${lang === 'es' ? location.nameEs : location.nameEn} - ${location.projects} ${lang === 'es' ? 'proyectos' : 'projects'}`}
            >
              <div
                className={`relative transition-all duration-300 ${
                  hoveredLocation === location.id || selectedLocation?.id === location.id
                    ? 'scale-125'
                    : 'scale-100'
                }`}
              >
                {/* Pulse effect */}
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-30"
                  style={{ backgroundColor: typeColors[location.type] }}
                />
                {/* Main marker */}
                <div
                  className="relative w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: typeColors[location.type] }}
                >
                  <Camera className="w-2 h-2 text-black" />
                </div>
                {/* Project count badge */}
                {location.projects > 5 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-black text-[8px] font-bold rounded-full flex items-center justify-center">
                    {location.projects}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            aria-label={lang === 'es' ? 'Acercar' : 'Zoom in'}
            className="p-2 bg-[#050505]/90 border border-white/10 text-stone-400 hover:text-gold rounded-sm transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label={lang === 'es' ? 'Alejar' : 'Zoom out'}
            className="p-2 bg-[#050505]/90 border border-white/10 text-stone-400 hover:text-gold rounded-sm transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-[#050505]/90 border border-white/10 p-3 rounded-sm space-y-2">
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2">
            {lang === 'es' ? 'Tipos de Ubicación' : 'Location Types'}
          </div>
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-[10px]">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-stone-400 capitalize">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="bg-[#020202] border border-gold/30 rounded-sm p-6 space-y-4 animate-fadeIn">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-display">
                {lang === 'es' ? selectedLocation.nameEs : selectedLocation.nameEn}
              </h3>
              <p className="text-sm text-stone-400 font-mono">
                {lang === 'es' ? selectedLocation.regionEs : selectedLocation.regionEn}
              </p>
              <div className="flex items-center gap-2 text-xs text-gold">
                <Camera className="w-4 h-4" />
                <span className="font-bold">
                  {selectedLocation.projects} {lang === 'es' ? 'proyectos filmados' : 'projects filmed'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="p-2 hover:bg-white/5 rounded-sm transition-colors text-stone-400 hover:text-white"
              aria-label={lang === 'es' ? 'Cerrar detalles' : 'Close details'}
            >
              ×
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-gold uppercase tracking-wider">
              {lang === 'es' ? 'Proyectos Destacados' : 'Notable Projects'}
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedLocation.notableProjects.map((project, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-xs rounded-sm"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lang === 'es' ? selectedLocation.nameEs : selectedLocation.nameEn)},+Bolivia`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-hover transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-mono font-bold">
                {lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: lang === 'es' ? 'Departamentos' : 'Departments', value: '6+' },
          { label: lang === 'es' ? 'Municipios' : 'Municipalities', value: '8+' },
          { label: lang === 'es' ? 'Altitud Máx' : 'Max Altitude', value: '4,000m' },
          { label: lang === 'es' ? 'Proyectos' : 'Projects', value: '55+' }
        ].map((stat, index) => (
          <div key={index} className="bg-[#020202] border border-white/5 p-4 rounded-sm text-center">
            <div className="text-2xl font-bold text-gold font-display">{stat.value}</div>
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Compact version of the map for smaller spaces
 */
export function LocationsMapCompact({ lang }: LocationsMapProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gold" />
          <h3 className="text-lg font-bold text-white">
            {lang === 'es' ? 'Ubicaciones' : 'Locations'}
          </h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-gold hover:text-gold-hover transition-colors"
        >
          {expanded ? (lang === 'es' ? 'Ver menos' : 'Show less') : (lang === 'es' ? 'Ver más' : 'Show more')}
        </button>
      </div>

      {expanded && <LocationsMap lang={lang} />}
    </div>
  );
}
