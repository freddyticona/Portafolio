/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact' | 'floating';
}

/**
 * Componente de botones para compartir en redes sociales
 */
export default function ShareButtons({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Freddy Ticona Guzmán - Portafolio Audiovisual',
  description = 'Camarógrafo y Realizador Audiovisual con más de 15 años de experiencia en televisión, documentales y cobertura periodística en Bolivia.',
  lang = 'es',
  variant = 'default'
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showNativeShare, setShowNativeShare] = useState(false);

  // Verificar si el navegador soporta Web Share API
  const supportsNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const shareData = {
    title,
    text: description,
    url
  };

  /**
   * Compartir usando Web Share API (móviles)
   */
  const handleNativeShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  /**
   * Compartir en Facebook
   */
  const shareFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    trackShare('facebook');
  };

  /**
   * Compartir en Twitter/X
   */
  const shareTwitter = () => {
    const text = lang === 'es'
      ? `🎥 Mira el portafolio de @Freddy_21407 - Camarógrafo y Realizador Audiovisual en Bolivia`
      : `🎥 Check out @Freddy_21407's portfolio - Cameraman and Video Producer in Bolivia`;

    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    trackShare('twitter');
  };

  /**
   * Compartir en LinkedIn
   */
  const shareLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    trackShare('linkedin');
  };

  /**
   * Copiar enlace al portapapeles
   */
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      trackShare('copy');
    } catch (error) {
      console.error('Error copying:', error);
    }
  };

  /**
   * Rastrear evento de compartir (Google Analytics)
   */
  const trackShare = (platform: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'website'
      });
    }
  };

  // Variante compacta
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={supportsNativeShare ? handleNativeShare : shareFacebook}
          className="p-2 hover:bg-white/5 rounded-sm transition-colors text-stone-400 hover:text-white"
          title={lang === 'es' ? 'Compartir' : 'Share'}
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          onClick={copyLink}
          className="p-2 hover:bg-white/5 rounded-sm transition-colors text-stone-400 hover:text-white"
          title={copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : (lang === 'es' ? 'Copiar enlace' : 'Copy link')}
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    );
  }

  // Variante floating (botón flotante)
  if (variant === 'floating') {
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="fixed bottom-20 right-4 z-40 flex flex-col-reverse gap-2">
        {expanded && (
          <div className="flex flex-col gap-2 animate-fadeIn">
            <button
              onClick={shareFacebook}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={shareTwitter}
              className="p-3 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg transition-colors"
              title="Twitter/X"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={shareLinkedIn}
              className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={copyLink}
              className="p-3 bg-gold hover:bg-gold-hover text-black rounded-full shadow-lg transition-colors"
              title={copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : (lang === 'es' ? 'Copiar' : 'Copy')}
            >
              {copied ? <Check className="w-5 h-5" /> : <Link className="w-5 h-5" />}
            </button>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`p-3 rounded-full shadow-lg transition-all ${
            expanded
              ? 'bg-white/10 text-white rotate-45'
              : 'bg-gold hover:bg-gold-hover text-black'
          }`}
          title={lang === 'es' ? 'Compartir' : 'Share'}
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    );
  }

  // Variante default (fila de botones)
  return (
    <div className="flex items-center gap-3">
      {/* Botón nativo para móviles */}
      {supportsNativeShare && (
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-hover text-black rounded-sm text-xs font-mono font-bold uppercase tracking-widest transition-all"
        >
          <Share2 className="w-4 h-4" />
          <span>{lang === 'es' ? 'Compartir' : 'Share'}</span>
        </button>
      )}

      {/* Botones individuales para desktop */}
      <div className="flex items-center gap-2">
        <button
          onClick={shareFacebook}
          className="p-2.5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 text-blue-400 rounded-sm transition-all"
          title="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </button>
        <button
          onClick={shareTwitter}
          className="p-2.5 bg-black/10 hover:bg-black/20 border border-white/10 text-stone-300 rounded-sm transition-all"
          title="Twitter/X"
        >
          <Twitter className="w-4 h-4" />
        </button>
        <button
          onClick={shareLinkedIn}
          className="p-2.5 bg-blue-700/10 hover:bg-blue-700/20 border border-blue-700/20 text-blue-400 rounded-sm transition-all"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </button>
        <button
          onClick={copyLink}
          className={`p-2.5 border rounded-sm transition-all flex items-center gap-1.5 ${
            copied
              ? 'bg-green-500/10 border-green-500/20 text-green-400'
              : 'bg-white/5 hover:bg-white/10 border-white/10 text-stone-400'
          }`}
          title={copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : (lang === 'es' ? 'Copiar enlace' : 'Copy link')}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="text-xs font-bold">{lang === 'es' ? 'Copiado' : 'Copied'}</span>
            </>
          ) : (
            <>
              <Link className="w-4 h-4" />
              <span className="text-xs font-bold">{lang === 'es' ? 'Copiar' : 'Copy'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * Componente para compartir un post o proyecto específico
 */
export function ShareProject({
  projectId,
  projectName,
  imageUrl,
  lang = 'es'
}: {
  projectId: string;
  projectName: string;
  imageUrl?: string;
  lang?: 'es' | 'en';
}) {
  const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/#portafolio`;
  const title = `${projectName} - Freddy Ticona Guzmán`;

  return (
    <ShareButtons
      url={url}
      title={title}
      description={lang === 'es'
        ? `Mira mi trabajo "${projectName}" en mi portafolio audiovisual`
        : `Check out my work "${projectName}" in my video portfolio`}
      lang={lang}
      variant="compact"
    />
  );
}

/**
 * Botón simple de compartir con dropdown
 */
export function ShareDropdown({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-mono font-semibold transition-colors"
      >
        <Share2 className="w-4 h-4" />
        <span>{lang === 'es' ? 'Compartir' : 'Share'}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-20 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-xl py-2 min-w-[200px] animate-fadeIn">
            <div className="px-3 py-2 text-xs font-mono text-stone-500 uppercase tracking-wider border-b border-white/5 mb-2">
              {lang === 'es' ? 'Compartir en' : 'Share on'}
            </div>
            <button
              onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 text-stone-300 hover:text-white transition-colors text-left text-sm"
            >
              <Facebook className="w-4 h-4 text-blue-400" />
              <span>Facebook</span>
            </button>
            <button
              onClick={() => {
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 text-stone-300 hover:text-white transition-colors text-left text-sm"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter/X</span>
            </button>
            <button
              onClick={() => {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 text-stone-300 hover:text-white transition-colors text-left text-sm"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </button>
            <div className="border-t border-white/5 my-1" />
            <button
              onClick={copyLink}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 text-stone-300 hover:text-white transition-colors text-left text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">{lang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Link className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Copiar enlace' : 'Copy link'}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
