import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'freddydev-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setVisible(false);
    try {
      const w = window as any;
      if (w.gtag) {
        w.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted',
        });
      }
    } catch(e) {}
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-white/10 p-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-stone-400 text-xs md:text-sm">
          Usamos cookies para mejorar tu experiencia y mostrar anuncios personalizados.{' '}
          <a href="/privacidad" className="text-gold underline">Más información</a>
        </p>
        <button onClick={accept} className="px-6 py-2 bg-gold text-black text-sm font-bold hover:brightness-110 transition-all shrink-0 cursor-pointer">
          Aceptar
        </button>
      </div>
    </div>
  );
}
