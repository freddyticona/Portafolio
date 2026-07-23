import React, { useState, useEffect } from 'react';
import { X, Shield, Cookie, FileText, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface CookieConsentProps {
  lang: 'es' | 'en';
  onOpenPrivacy: () => void;
}

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: ''
};

const STORAGE_KEY = 'freddydev-cookie-consent';

function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function applyConsent(consent: ConsentState) {
  // Google Analytics consent
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied'
      });
    }
  }
}

export default function CookieConsent({ lang, onOpenPrivacy }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [customConsent, setCustomConsent] = useState<ConsentState>({ ...defaultConsent });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
      // Default: deny all non-necessary until consent given
      applyConsent({ ...defaultConsent, analytics: false, marketing: false });
    } else {
      applyConsent(stored);
    }
  }, []);

  const saveConsent = (consent: ConsentState) => {
    const final: ConsentState = { ...consent, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(final));
    applyConsent(final);
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ ...defaultConsent });
  const saveCustom = () => saveConsent(customConsent);

  const openCustomize = () => {
    const stored = getStoredConsent();
    setCustomConsent(stored || { ...defaultConsent });
    setShowCustomize(true);
  };

  if (!visible) return null;

  return (
    <>
      {/* Main banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <Cookie className="w-5 h-5 text-gold shrink-0 mt-0.5 hidden sm:block" />
              <div className="space-y-1.5">
                <p className="text-xs text-stone-300 leading-relaxed">
                  {lang === 'es' ? (
                    <>Usamos cookies propias y de terceros (Google Analytics) para mejorar tu experiencia y analizar el tráfico del sitio. Cumplimos con el <strong className="text-white">Reglamento General de Protección de Datos (GDPR)</strong> de la UE y la <strong className="text-white">Ley N° 164 de Protección de Datos Personales</strong> de Bolivia. No almacenamos información personal sensible.</>
                  ) : (
                    <>We use first and third-party cookies (Google Analytics) to improve your experience and analyze site traffic. We comply with the <strong className="text-white">EU General Data Protection Regulation (GDPR)</strong> and Bolivia's <strong className="text-white">Law N° 164 on Personal Data Protection</strong>. No sensitive personal data is stored.</>
                  )}
                </p>
                <button
                  onClick={onOpenPrivacy}
                  className="text-[10px] font-mono text-gold hover:text-gold/80 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  <FileText className="w-3 h-3 inline mr-1" />
                  {lang === 'es' ? 'Ver política de privacidad' : 'View privacy policy'}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button onClick={rejectAll}
                className="px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-white border border-white/10 hover:border-white/20 rounded-sm transition-all duration-200 cursor-pointer">
                {lang === 'es' ? 'Rechazar' : 'Reject'}
              </button>
              <button onClick={openCustomize}
                className="px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-300 hover:text-white border border-white/10 hover:border-gold/50 rounded-sm transition-all duration-200 cursor-pointer">
                {lang === 'es' ? 'Personalizar' : 'Customize'}
              </button>
              <button onClick={acceptAll}
                className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-gold text-black hover:bg-gold-hover rounded-sm transition-all duration-200 cursor-pointer shadow-lg shadow-gold/10">
                <Check className="w-3 h-3 inline mr-1" />
                {lang === 'es' ? 'Aceptar' : 'Accept'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customize modal */}
      {showCustomize && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowCustomize(false)}>
          <div
            className="max-w-lg w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                {lang === 'es' ? 'Preferencias de Cookies' : 'Cookie Preferences'}
              </h2>
              <button onClick={() => setShowCustomize(false)} className="p-1.5 hover:bg-white/5 rounded-sm transition-colors cursor-pointer">
                <X className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {/* Necessary - always on */}
              <div className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-sm">
                <div>
                  <p className="text-xs font-semibold text-white">{lang === 'es' ? 'Necesarias' : 'Necessary'}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {lang === 'es' ? 'Imprescindibles para el funcionamiento del sitio.' : 'Essential for site functionality.'}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-stone-500 bg-white/5 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  {lang === 'es' ? 'Siempre activas' : 'Always active'}
                </span>
              </div>

              {/* Analytics */}
              <label className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-sm hover:border-white/10 transition-colors cursor-pointer">
                <div>
                  <p className="text-xs font-semibold text-white">{lang === 'es' ? 'Analíticas' : 'Analytics'}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {lang === 'es' ? 'Google Analytics: nos ayudan a medir el tráfico y mejorar.' : 'Google Analytics: help us measure traffic and improve.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={customConsent.analytics}
                  onChange={(e) => setCustomConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold cursor-pointer"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-sm hover:border-white/10 transition-colors cursor-pointer">
                <div>
                  <p className="text-xs font-semibold text-white">{lang === 'es' ? 'Marketing' : 'Marketing'}</p>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {lang === 'es' ? 'Publicidad personalizada y redes sociales.' : 'Personalized ads and social media.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={customConsent.marketing}
                  onChange={(e) => setCustomConsent(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold cursor-pointer"
                />
              </label>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button onClick={rejectAll}
                className="px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer">
                {lang === 'es' ? 'Rechazar todo' : 'Reject all'}
              </button>
              <button onClick={saveCustom}
                className="px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest bg-gold text-black hover:bg-gold-hover rounded-sm transition-colors cursor-pointer">
                <Check className="w-3 h-3 inline mr-1" />
                {lang === 'es' ? 'Guardar preferencias' : 'Save preferences'}
              </button>
            </div>

            <p className="text-[9px] text-stone-600 mt-4 text-center">
              {lang === 'es' ? 'Puedes cambiar tus preferencias en cualquier momento.' : 'You can change your preferences at any time.'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
