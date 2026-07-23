/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
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

      <Suspense fallback={<LoadingFallback />}>
        <ContactForm lang={lang} t={t} />
      </Suspense>

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
