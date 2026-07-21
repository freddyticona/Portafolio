/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface PDFExportProps {
  contentId: string;
  filename?: string;
  lang?: 'es' | 'en';
  buttonText?: string;
  buttonClassName?: string;
}

/**
 * Componente para exportar contenido a PDF
 * Usa la librería html2pdf.js
 */
export default function PDFExport({
  contentId,
  filename = 'freddy-ticona-cv.pdf',
  lang = 'es',
  buttonText,
  buttonClassName = ''
}: PDFExportProps) {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const content = document.getElementById(contentId);
    if (!content) return;

    // Add print-specific class
    content.classList.add('generating-pdf');

    // Trigger print dialog
    window.print();

    // Remove class after a delay
    setTimeout(() => {
      content.classList.remove('generating-pdf');
    }, 1000);
  };

  const handleExportPDF = async () => {
    setIsGenerating(true);

    try {
      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      const element = document.getElementById(contentId);
      if (!element) return;

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        }
      } as any;

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to print
      handlePrint();
    } finally {
      setIsGenerating(false);
    }
  };

  const defaultText = lang === 'es' ? 'Descargar CV PDF' : 'Download CV PDF';

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #${contentId}, #${contentId} * {
            visibility: visible;
          }
          #${contentId} {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
          }
          .no-print {
            display: none !important;
          }
          .print-break-before {
            page-break-before: always;
          }
          .print-break-after {
            page-break-after: always;
          }
          .print-break-inside-avoid {
            page-break-inside: avoid;
          }
        }

        .generating-pdf {
          background: white !important;
          color: black !important;
        }

        .generating-pdf * {
          background: white !important;
          color: black !important;
        }
      `}</style>

      <button
        onClick={handleExportPDF}
        disabled={isGenerating}
        className={`flex items-center gap-2 px-5 py-3.5 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 disabled:opacity-50 disabled:cursor-not-allowed ${buttonClassName}`}
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{lang === 'es' ? 'Generando...' : 'Generating...'}</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4" />
            <span>{buttonText || defaultText}</span>
          </>
        )}
      </button>
    </>
  );
}

/**
 * Componente simplificado para imprimir directamente
 */
export function PrintButton({
  contentId,
  lang = 'es',
  className = ''
}: {
  contentId: string;
  lang?: 'es' | 'en';
  className?: string;
}) {
  const handlePrint = () => {
    const content = document.getElementById(contentId);
    if (content) {
      content.classList.add('generating-pdf');
    }
    setTimeout(() => {
      window.print();
      if (content) {
        setTimeout(() => {
          content.classList.remove('generating-pdf');
        }, 1000);
      }
    }, 100);
  };

  return (
    <>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #${contentId}, #${contentId} * {
            visibility: visible;
          }
          #${contentId} {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        .generating-pdf {
          background: white !important;
          color: black !important;
        }
      `}</style>

      <button
        onClick={handlePrint}
        className={`flex items-center gap-1.5 px-4.5 py-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-stone-300 hover:text-white transition-colors cursor-pointer ${className}`}
      >
        <svg
          className="w-4 h-4 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
          />
        </svg>
        <span>{lang === 'es' ? 'Imprimir CV' : 'Print CV'}</span>
      </button>
    </>
  );
}

/**
 * Hook para descargar contenido como PDF
 */
export function usePDFExport() {
  const exportToPDF = async (elementId: string, filename: string) => {
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById(elementId);

      if (!element) {
        throw new Error('Element not found');
      }

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      } as any;

      await html2pdf().set(opt).from(element).save();
      return true;
    } catch (error) {
      console.error('PDF export error:', error);
      return false;
    }
  };

  return { exportToPDF };
}
