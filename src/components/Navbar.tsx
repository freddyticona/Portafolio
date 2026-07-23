/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Video, Menu, X, Globe, Film } from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  t: Record<string, string>;
}

export default function Navbar({ activePage, setActivePage, lang, setLang, t }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: t.navHome },
    { id: 'sobre-mi', label: t.navAbout },
    { id: 'portafolio', label: t.navPortfolio },
    { id: 'cv', label: t.navCv },
    { id: 'noticias', label: t.navNews },
    { id: 'blog', label: t.navBlog },
    { id: 'servicios', label: lang === 'es' ? 'Servicios' : 'Services' },
    { id: 'reservas', label: lang === 'es' ? 'Reservas' : 'Booking' },
    { id: 'contacto', label: t.navContact },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const path = pageId === 'inicio' ? '/' : '/' + pageId;
    window.history.pushState(null, '', path);
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/90 border-b border-white/5 backdrop-blur-md" role="navigation" aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('inicio')}
            role="button"
            tabIndex={0}
            aria-label={lang === 'es' ? 'Ir a inicio' : 'Go to home'}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavClick('inicio');
              }
            }}
          >
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center font-black text-[#050505] text-lg tracking-tighter" aria-hidden="true">
              FT
            </div>
            <div className="leading-none">
              <span className="font-display text-sm sm:text-base font-bold tracking-widest text-white uppercase block">
                Guzmán
              </span>
              <span className="font-mono text-[9px] text-gold/80 tracking-[0.15em] block uppercase font-bold">
                {lang === 'es' ? 'Realizador Audiovisual' : 'Audiovisual Realizer'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2" role="menubar">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={item.label}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative ${
                    isActive
                      ? 'text-gold bg-white/5 font-bold'
                      : 'text-stone-400 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-10px] left-0 right-0 h-[1px] bg-gold" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Language Switcher and Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              id="language-toggle-desktop"
              aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 text-stone-300 hover:text-gold hover:bg-white/5 transition-all duration-200 text-xs font-mono font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              id="language-toggle-mobile"
              aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-white/10 text-stone-300 text-xs font-mono font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? (lang === 'es' ? 'Cerrar menú' : 'Close menu') : (lang === 'es' ? 'Abrir menú' : 'Open menu')}
              className="inline-flex items-center justify-center p-2 rounded-sm text-stone-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#050505] border-b border-white/5 py-3 px-4 animate-fadeIn"
          role="menu"
          aria-label={lang === 'es' ? 'Menú de navegación móvil' : 'Mobile navigation menu'}
        >
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-4 py-3 rounded-sm text-sm uppercase tracking-widest font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-gold bg-white/5 font-bold border-l-2 border-gold'
                      : 'text-stone-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
