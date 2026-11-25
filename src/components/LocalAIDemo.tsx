/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * LocalAITrust — bloque de confianza y demo real de OCR local.
 *
 * La librería runonweb (MIT, midudev) se importa SOLO dentro del handler del
 * botón: nunca entra en el bundle inicial. Los modelos se descargan de
 * Hugging Face la primera vez; el archivo del visitante se procesa en su
 * dispositivo (WebGPU con fallback WASM). No se envía contenido a GA4.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  ScanText,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Mic,
  Scissors,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { PortfolioEvents } from '../lib/analytics';
import { CONTACT_INFO } from '../config';

/**
 * runonweb se carga desde esm.sh SOLO cuando el visitante pulsa el botón.
 * El import() lleva @vite-ignore y la URL se construye en una variable: así
 * Rollup no genera un chunk de ~500 KB que se descargaría en cada visita.
 * El archivo del usuario sigue procesándose en su dispositivo; el CDN solo
 * entrega código, nunca datos.
 */
const RUNONWEB_ESM = 'https://esm.sh/runonweb@0.1.0';

type ProgressInfo = { status: string; progress?: number };
type CoreModule = { isWebGPUAvailable: () => Promise<boolean> };

interface Props {
  lang: 'es' | 'en';
  /** Versión corta para las fichas de servicio. */
  compact?: boolean;
}

type Phase = 'idle' | 'loading' | 'recognizing' | 'done' | 'error';

// La instancia se reutiliza mientras el modal está abierto y se libera al
// cerrarlo: los sessions de onnxruntime consumen memoria bastante grande.
type OCRInstance = {
  read: (image: File) => Promise<{ text: string; lines: unknown[]; confidence: number }>;
  dispose: () => Promise<void>;
};
type OCRModule = {
  OCR: new (options: { size: 'tiny'; onProgress: (info: ProgressInfo) => void }) => OCRInstance;
};

const TEXT = {
  es: {
    eyebrow: 'Privacidad demostrable',
    title: 'Tus archivos no salen de tu dispositivo',
    body: 'Uso modelos de IA que corren en tu navegador con runonweb (MIT, creado por midudev). La primera vez se descargan los modelos desde Hugging Face; tus imágenes y entrevistas nunca se suben a un servidor.',
    chips: ['OCR para documentos', 'STT para entrevistas', 'Recorte de fondos'],
    button: 'Probar OCR local',
    footnote: 'Demo real · sin registro ni APIs',
    modalTitle: 'OCR en tu navegador',
    intro: 'Sube una captura o un documento. El texto se extrae aquí, en tu dispositivo.',
    note: 'Primera vez: descarga de modelos (~6 MB) desde Hugging Face. Tu archivo no se envía a ningún servidor.',
    choose: 'Elegir imagen',
    change: 'Cambiar imagen',
    loading: 'Descargando modelos…',
    recognizing: 'Leyendo el texto…',
    ready: 'Modelo listo',
    done: 'Listo',
    resultTitle: 'Texto detectado',
    empty: 'El texto aparecerá aquí.',
    noText: 'No se detectó texto legible. Prueba con una imagen con letras grandes y buena luz.',
    errorTitle: 'No se pudo completar',
    errorHint: 'Puede ser falta de compatibilidad del navegador o una descarga interrumpida. Inténtalo de nuevo; si insiste, escríbeme por WhatsApp.',
    retry: 'Reintentar',
    copy: 'Copiar',
    copied: 'Copiado',
    close: 'Cerrar',
    wa: 'Cotizar este trabajo',
    waText: 'Hola Freddy, vi la demo de OCR local en tu web. Tengo documentos y entrevistas para transcribir y quiero una cotización.',
    webgpu: 'WebGPU activo',
    wasm: 'Modo WASM (compatible)'
  },
  en: {
    eyebrow: 'Verifiable privacy',
    title: 'Your files never leave your device',
    body: 'I use AI models that run in your browser with runonweb (MIT, by midudev). Models are downloaded from Hugging Face the first time; your images and interviews are never uploaded to a server.',
    chips: ['OCR for documents', 'STT for interviews', 'Background removal'],
    button: 'Try local OCR',
    footnote: 'Real demo · no signup, no APIs',
    modalTitle: 'OCR in your browser',
    intro: 'Upload a screenshot or a document. Text is extracted right here, on your device.',
    note: 'First time: models are downloaded (~6 MB) from Hugging Face. Your file is never sent to a server.',
    choose: 'Choose image',
    change: 'Change image',
    loading: 'Downloading models…',
    recognizing: 'Reading text…',
    ready: 'Model ready',
    done: 'Done',
    resultTitle: 'Detected text',
    empty: 'Detected text will appear here.',
    noText: 'No readable text was found. Try an image with large letters and good lighting.',
    errorTitle: 'Could not complete',
    errorHint: 'The browser may be unsupported or the download was interrupted. Try again; if it keeps failing, message me on WhatsApp.',
    retry: 'Try again',
    copy: 'Copy',
    copied: 'Copied',
    close: 'Close',
    wa: 'Quote this work',
    waText: "Hi Freddy, I tried the local OCR demo on your site. I have documents and interviews to transcribe and would like a quote.",
    webgpu: 'WebGPU active',
    wasm: 'WASM mode (compatible)'
  }
} as const;

export function LocalAITrust({ lang, compact = false }: Props) {
  const c = TEXT[lang];
  const titleId = compact ? 'local-ai-title-compact' : 'local-ai-title';
  const waNumber = CONTACT_INFO.phoneNumber.replace(/\D/g, '');

  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [webgpu, setWebgpu] = useState(false);
  const [copied, setCopied] = useState(false);
  const ocrRef = useRef<OCRInstance | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    void ocrRef.current?.dispose().catch(() => undefined);
    ocrRef.current = null;
    setPhase('idle');
    setProgress(undefined);
    setFile(null);
    setResult('');
    setError('');
    setCopied(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  useEffect(() => () => { void ocrRef.current?.dispose().catch(() => undefined); }, []);

  const openDemo = async () => {
    PortfolioEvents.localAIDemoOpen();
    setOpen(true);
    requestAnimationFrame(() => overlayRef.current?.scrollTo(0, 0));
    try {
      const core = await import(/* @vite-ignore */ `${RUNONWEB_ESM}/core`) as CoreModule;
      setWebgpu(await core.isWebGPUAvailable());
    } catch {
      setWebgpu(false);
    }
  };

  const run = async (selected: File) => {
    overlayRef.current?.scrollTo(0, 0);
    setFile(selected);
    setResult('');
    setError('');
    setCopied(false);
    setPhase('loading');
    setProgress(undefined);
    PortfolioEvents.localAIDemoRun(webgpu ? 'webgpu' : 'wasm');
    try {
      const { OCR } = await import(/* @vite-ignore */ `${RUNONWEB_ESM}/ocr`) as OCRModule;
      if (!ocrRef.current) {
        ocrRef.current = new OCR({
          size: 'tiny',
          onProgress: (info: ProgressInfo) => {
            if (info.status === 'recognizing') setPhase('recognizing');
            else if (info.status === 'done') setPhase('done');
            if (typeof info.progress === 'number') setProgress(Math.round(info.progress));
          }
        });
      }
      const output = await ocrRef.current.read(selected);
      setResult(output.text.trim());
      setPhase('done');
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
      setPhase('error');
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (selected) void run(selected);
    event.target.value = '';
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const busy = phase === 'loading' || phase === 'recognizing';

  return (
    <>
      <section
        className={`relative overflow-hidden bg-[#020202] border border-gold/20 rounded-lg ${compact ? 'p-5' : 'p-7 md:p-9'}`}
        aria-labelledby={titleId}
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-gold/70" aria-hidden="true" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gold">
              <ShieldCheck className="w-4 h-4" />
              {c.eyebrow}
            </p>
            <h2
              id={titleId}
              className={`font-extrabold text-white font-display ${compact ? 'text-lg' : 'text-2xl md:text-3xl'}`}
            >
              {c.title}
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">{c.body}</p>
            <ul className="flex flex-wrap gap-2" aria-label={lang === 'es' ? 'Módulos que uso' : 'Modules I use'}>
              {c.chips.map(chip => (
                <li key={chip} className="px-2.5 py-1 text-[11px] font-mono text-stone-300 border border-white/10 rounded-sm">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <button
              type="button"
              onClick={() => void openDemo()}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/50 text-gold font-bold rounded-sm text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ScanText className="w-4 h-4" />
              {c.button}
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] font-mono text-stone-500">{c.footnote}</p>
          </div>
        </div>
      </section>

      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 pt-8 md:pt-16"
          role="presentation"
          onMouseDown={event => { if (event.target === event.currentTarget) close(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="local-ai-modal-title"
            className="w-full max-w-2xl bg-[#08090b] border border-white/15 rounded-lg shadow-2xl"
            style={{ minHeight: '420px' }}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
              <h2 id="local-ai-modal-title" className="text-lg font-bold text-white font-display flex items-center gap-2">
                <ScanText className="w-5 h-5 text-gold" />
                {c.modalTitle}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label={c.close}
                className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-5" style={{ minHeight: '340px' }}>
              <p className="text-sm text-stone-300 leading-relaxed">{c.intro}</p>
              <p className="text-xs text-stone-500 leading-relaxed border-l-2 border-gold/40 pl-3">{c.note}</p>

              <div className="flex flex-wrap items-center gap-3">
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  tabIndex={-1}
                  onChange={onFileChange}
                  aria-label={c.choose}
                />
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => inputRef.current?.click()}
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/10 disabled:opacity-50 border border-white/15 text-white rounded-sm text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                >
                  {file ? c.change : c.choose}
                </button>
                {file && <span className="text-xs text-stone-500 truncate max-w-[240px]">{file.name}</span>}
                <span className="ml-auto text-[11px] font-mono text-stone-500">
                  {webgpu ? c.webgpu : c.wasm}
                </span>
              </div>

              {busy && (
                <div className="flex items-center gap-3 text-sm text-gold" role="status" aria-live="polite">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{phase === 'loading' ? c.loading : c.recognizing}</span>
                  {typeof progress === 'number' && <span className="text-stone-500">({progress}%)</span>}
                </div>
              )}

              {phase === 'error' && (
                <div className="space-y-2 p-4 border border-red-500/30 bg-red-500/5 rounded-sm" role="alert">
                  <p className="flex items-center gap-2 text-sm font-bold text-red-300">
                    <AlertCircle className="w-4 h-4" />
                    {c.errorTitle}
                  </p>
                  <p className="text-xs text-stone-400 leading-relaxed">{c.errorHint}</p>
                  <button
                    type="button"
                    onClick={() => file && void run(file)}
                    disabled={!file}
                    className="text-xs font-mono uppercase tracking-widest text-gold hover:text-gold-hover disabled:opacity-40 cursor-pointer"
                  >
                    {c.retry}
                  </button>
                </div>
              )}

              {(phase === 'done' || phase === 'ready') && !error && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold">
                      <CheckCircle2 className="w-4 h-4" />
                      {c.resultTitle}
                    </h3>
                    {result && (
                      <button
                        type="button"
                        onClick={() => void copyResult()}
                        className="flex items-center gap-1.5 text-[11px] font-mono text-stone-400 hover:text-gold cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copied ? c.copied : c.copy}
                      </button>
                    )}
                  </div>
                  <div className="min-h-[96px] p-4 bg-white/[0.02] border border-white/10 rounded-sm text-sm text-stone-200 whitespace-pre-wrap break-words font-mono leading-relaxed">
                    {result || c.noText}
                  </div>
                  <a
                    href={`https://wa.me/${waNumber}?text=${encodeURIComponent(c.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { PortfolioEvents.localAIDemoContact(); }}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1FB855] text-black font-bold rounded-sm text-xs font-mono uppercase tracking-widest transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {c.wa}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LocalAITrust;
