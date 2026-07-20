/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Loader2, FileText, Check } from 'lucide-react';

interface CVDownloadButtonProps {
  lang?: 'es' | 'en';
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Botón para descargar CV en PDF
 */
export default function CVDownloadButton({
  lang = 'es',
  variant = 'primary',
  size = 'md'
}: CVDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      // Importar dinámicamente para reducir bundle size
      const { generateCVPDF } = await import('../lib/pdfGenerator');

      // Pequeño delay para UX
      await new Promise(resolve => setTimeout(resolve, 500));

      generateCVPDF(lang);

      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert(lang === 'es'
        ? 'Error al generar el PDF. Por favor intenta de nuevo.'
        : 'Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const variants = {
    primary: 'bg-gold hover:bg-gold-hover text-black font-bold',
    secondary: 'bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white'
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-sm
        font-mono
        uppercase
        tracking-widest
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${downloaded ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
      `}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>{lang === 'es' ? 'Generando...' : 'Generating...'}</span>
        </>
      ) : downloaded ? (
        <>
          <Check className="w-4 h-4" />
          <span>{lang === 'es' ? '¡Descargado!' : 'Downloaded!'}</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>{lang === 'es' ? 'Descargar CV' : 'Download CV'}</span>
        </>
      )}
    </button>
  );
}

/**
 * Botón compacto para el navbar
 */
export function CVDownloadCompact({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const { generateCVPDF } = await import('../lib/pdfGenerator');
      await new Promise(resolve => setTimeout(resolve, 300));
      generateCVPDF(lang);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-mono font-semibold transition-colors disabled:opacity-50"
      title={lang === 'es' ? 'Descargar CV PDF' : 'Download CV PDF'}
    >
      <FileText className="w-4 h-4 text-gold" />
      <span className="hidden sm:inline">
        {lang === 'es' ? 'CV' : 'CV'}
      </span>
      {isGenerating && <Loader2 className="w-3 h-3 animate-spin" />}
    </button>
  );
}
