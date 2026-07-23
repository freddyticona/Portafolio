import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookieBannerProps {
  lang: 'es' | 'en';
}

export default function CookieBanner({ lang }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-[#0a0a0a] border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-400 leading-relaxed max-w-3xl">
          {lang === 'es'
            ? 'Usamos cookies de Google Analytics para entender cómo navegas y mejorar el sitio. No almacenamos datos personales. Al hacer clic en "Aceptar", consentís su uso.'
            : 'We use Google Analytics cookies to understand browsing and improve the site. No personal data is stored. By clicking "Accept", you consent to their use.'}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={reject}
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-white border border-white/10 rounded-sm transition-colors cursor-pointer">
            {lang === 'es' ? 'Rechazar' : 'Reject'}
          </button>
          <button onClick={accept}
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest bg-gold text-black hover:bg-gold-hover rounded-sm transition-colors cursor-pointer">
            {lang === 'es' ? 'Aceptar' : 'Accept'}
          </button>
          <button onClick={reject}
            className="p-2 text-stone-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
