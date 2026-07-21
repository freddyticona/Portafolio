/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Youtube, Linkedin, Mail, Phone, MapPin, Film, ArrowUp, X } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  lang: 'es' | 'en';
  t: any;
}

export default function Footer({ setActivePage, lang, t }: FooterProps) {
  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const path = pageId === 'inicio' ? '/' : '/' + pageId;
    window.history.pushState(null, '', path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 text-stone-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('inicio')}>
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center font-bold text-black text-sm">
                FT
              </div>
              <span className="font-display text-lg font-bold text-white tracking-widest uppercase">
                Guzmán
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed font-light">
              {lang === 'es' 
                ? 'Realizador audiovisual y camarógrafo boliviano con más de 15 años capturando momentos históricos, documentales culturales y coberturas periodísticas en alta fidelidad.'
                : 'Bolivian videographer and editor with over 15 years capturing historic events, cultural documentaries, and high-fidelity television broadcasting.'}
            </p>
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-youtube"
                className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-gold hover:text-black text-stone-300 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-linkedin"
                className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-gold hover:text-black text-stone-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-x"
                className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-gold hover:text-black text-stone-300 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-facebook"
                className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-gold hover:text-black text-stone-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                id="footer-social-email"
                className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-gold hover:text-black text-stone-300 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button onClick={() => handleNavClick('inicio')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre-mi')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('portafolio')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navPortfolio}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('cv')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navCv}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navBlog}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contacto')} className="hover:text-gold transition-colors duration-200 text-left cursor-pointer">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                <a href={`https://wa.me/${CONTACT_INFO.phoneNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.phoneNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left space-y-1">
            <p>{t.footerCopyright}</p>
            <p className="text-stone-500 font-mono">
              {lang === 'es'
                ? 'Desarrollado con alto estándar estético en React.'
                : 'Crafted with premium styling in React.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              id="back-to-top-button"
              className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-sm text-stone-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <span>{lang === 'es' ? 'Volver arriba' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold animate-pulse" />
            </button>
          </div>
        </div>

        {/* Admin link (discreto) */}
        <div className="pt-4 text-center">
          <button
            onClick={() => {
              setActivePage('admin');
              window.history.pushState(null, '', '/admin');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-stone-700 hover:text-stone-500 text-[10px] font-mono transition-colors cursor-pointer"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}
