/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Star, Award, Film } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
  lang: 'es' | 'en';
  t: any;
}

export default function Timeline({ events, lang, t }: TimelineProps) {
  const [expandedEventId, setExpandedEventId] = useState<string | null>('1'); // Expand first event by default

  const toggleEvent = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-white/5 to-[#050505] hidden md:block" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const isExpanded = expandedEventId === event.id;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={event.id} 
              id={`timeline-event-${event.id}`}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 md:-ml-3.5 top-1.5 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#050505] border-2 border-gold shadow-lg shadow-gold/20">
                <Briefcase className="w-3.5 h-3.5 text-gold" />
              </div>

              {/* Spacer / Aligning block */}
              <div className="w-full md:w-1/2" />

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div 
                  onClick={() => toggleEvent(event.id)}
                  className={`cursor-pointer group text-left bg-white/[0.02] hover:bg-white/[0.03] p-6 rounded-sm border transition-all duration-300 relative ${
                    isExpanded 
                      ? 'border-gold/40 shadow-xl shadow-gold/5' 
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Glowing border accent on expand */}
                  {isExpanded && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-hover rounded-t-sm" />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded-sm uppercase">
                      <Calendar className="w-3 h-3" />
                      {event.period}
                    </span>
                    <span className="text-stone-500 font-mono text-[10px] uppercase font-bold hidden sm:inline">
                      {event.logoPlaceholder}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mt-3 group-hover:text-gold transition-colors font-display">
                    {lang === 'es' ? event.roleEs : event.roleEn}
                  </h3>
                  <p className="text-xs font-bold text-gold/80 font-mono tracking-wider mt-0.5 uppercase">
                    {event.company}
                  </p>

                  <p className="text-sm text-stone-400 mt-3 leading-relaxed font-light">
                    {lang === 'es' ? event.descriptionEs : event.descriptionEn}
                  </p>

                  {/* Expandable achievements section */}
                  {isExpanded ? (
                    <div className="mt-5 pt-5 border-t border-white/5 space-y-3 animate-slideDown">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5" />
                        {lang === 'es' ? 'Logros Clave' : 'Key Achievements'}
                      </h4>
                      <ul className="space-y-2 text-sm text-stone-300 font-light">
                        {(lang === 'es' ? event.achievementsEs : event.achievementsEn).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-gold shrink-0 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center text-[10px] uppercase font-mono tracking-wider font-bold text-stone-500 group-hover:text-stone-400">
                      <span className="mr-1">{lang === 'es' ? 'Ver detalles de gestión' : 'View achievement details'}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}

                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center text-[10px] uppercase font-mono tracking-wider font-bold text-stone-500">
                      <span className="mr-1">{lang === 'es' ? 'Colapsar detalles' : 'Collapse details'}</span>
                      <ChevronUp className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
