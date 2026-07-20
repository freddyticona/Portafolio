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
  t: any;
}

export default function Navbar({ activePage, setActivePage, lang, setLang, t }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: t.navHome },
    { id: 'sobre-mi', label: t.navAbout },
    { id: 'portafolio', label: t.navPortfolio },
    { id: 'cv', label: t.navCv },
    { id: 'blog', label: t.navBlog },
    { id: 'contacto', label: t.navContact },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update hash
    window.location.hash = pageId;
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/90 border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('inicio')}>
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center font-black text-[#050505] text-lg tracking-tighter">
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
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative ${
                    isActive
                      ? 'text-gold bg-white/5 font-bold'
                      : 'text-stone-400 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-10px] left-0 right-0 h-[1px] bg-gold" />
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 text-stone-300 hover:text-gold hover:bg-white/5 transition-all duration-200 text-xs font-mono font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              id="language-toggle-mobile"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-white/10 text-stone-300 text-xs font-mono font-semibold"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="inline-flex items-center justify-center p-2 rounded-sm text-stone-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-b border-white/5 py-3 px-4 animate-fadeIn">
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-sm text-sm uppercase tracking-widest font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-gold bg-white/5 font-bold border-l-2 border-gold'
                      : 'text-stone-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 bg-gold rounded-full" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
