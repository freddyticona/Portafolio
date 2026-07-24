/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect } from 'react';
import { PageId } from '../types';
import { TranslationT } from '../types.translation';

const ContactForm = lazy(() => import('../components/ContactForm'));
const BookingSystem = lazy(() => import('../components/BookingSystem'));
const ServiceLanding = lazy(() => import('../components/ServiceLanding'));
const AdminPanel = lazy(() => import('../components/AdminPanel'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="skeleton w-full h-32 rounded" aria-busy="true" aria-label="Cargando..." />
    </div>
  );
}

interface ContactPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
}

export function ContactPage({ lang, t }: ContactPageProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
      <div className="text-center space-y-3">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
          {lang === 'es' ? 'Trabajemos Juntos' : 'Work with me'}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          {t.contactTitle}
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed font-light">
          {t.contactSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Suspense fallback={<LoadingFallback />}>
          <ContactForm lang={lang} t={t} />
        </Suspense>

        <div className="flex flex-col items-center gap-6 pt-4 lg:pt-0">
          <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="freddy-ticona-guzman-41612871" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://bo.linkedin.com/in/freddy-ticona-guzman-41612871?trk=profile-badge">Freddy Ticona Guzman</a>
          </div>
        </div>
      </div>

      <div className="pb-8" />
    </div>
  );
}

interface BookingPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
}

export function BookingPage({ lang, t }: BookingPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
      <Suspense fallback={<LoadingFallback />}>
        <BookingSystem
          lang={lang}
          t={t}
          onSuccess={() => {
            // Booking success callback — can be extended for analytics
          }}
        />
      </Suspense>
      <div className="pb-8" />
    </div>
  );
}

interface ServicesPageProps {
  lang: 'es' | 'en';
  t: TranslationT;
  onContact: () => void;
  onBooking: () => void;
}

export function ServicesPage({ lang, t, onContact, onBooking }: ServicesPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
      <Suspense fallback={<LoadingFallback />}>
        <ServiceLanding
          lang={lang}
          t={t}
          onContact={onContact}
          onBooking={onBooking}
        />
      </Suspense>
    </div>
  );
}

interface AdminPageProps {
  lang: 'es' | 'en';
  onBack: () => void;
}

export function AdminPage({ lang, onBack }: AdminPageProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AdminPanel lang={lang} onBack={onBack} />
    </Suspense>
  );
}
