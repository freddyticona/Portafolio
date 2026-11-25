/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * NewsletterSignup — Captura real de suscriptores.
 *
 * Antes el formulario solo mostraba un `alert()` y no guardaba nada, lo que
 * prometer una suscripción que nunca ocurre. Ahora envía el email a Web3Forms
 * (misma integración que el formulario de contacto) para que la lista llegue
 * al correo de Freddy, y dispara el evento `generate_lead` en GA4.
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Heart } from 'lucide-react';
import { CONTACT_FORM } from '../config';
import { PortfolioEvents } from '../lib/analytics';

interface NewsletterSignupProps {
  lang: 'es' | 'en';
  source: string;
  compact?: boolean;
  /** Se dispara tras un envío confirmado: permite desbloquear una demo o
   *  servicio gratuito sin duplicar la lógica de formulario. */
  onSuccess?: () => void;
}

export default function NewsletterSignup({ lang, source, compact = false, onSuccess }: NewsletterSignupProps) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setErrorMsg(lang === 'es' ? 'Escribe un correo válido.' : 'Enter a valid email address.');
      setState('error');
      return;
    }

    setState('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT_FORM.accessKey,
          name: lang === 'es' ? 'Suscriptor del blog' : 'Blog subscriber',
          email,
          subject: lang === 'es'
            ? `Nuevo suscriptor al blog (${source})`
            : `New blog subscriber (${source})`,
          message: lang === 'es'
            ? `Se suscribió desde: ${source}\nCorreo: ${email}\n\nResponder a este correo para dar de alta al suscriptor en la lista.`
            : `Subscribed from: ${source}\nEmail: ${email}`,
          from_name: CONTACT_FORM.fromName,
          botcheck: ''
        })
      });

      const result = await response.json();
      if (result.success) {
        setState('success');
        setEmail('');
        PortfolioEvents.newsletterSubscribe(source);
        onSuccess?.();
      } else {
        setErrorMsg(result.message || (lang === 'es' ? 'No se pudo completar. Intenta de nuevo.' : 'Could not subscribe. Please try again.'));
        setState('error');
      }
    } catch {
      setErrorMsg(lang === 'es'
        ? 'Error de conexión. Escríbeme por WhatsApp y te aviso cuando salga el próximo artículo.'
        : 'Connection error. Message me on WhatsApp and I will notify you.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-sm p-5 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-bold">
            {lang === 'es' ? '¡Recibido!' : 'Got it!'}
          </p>
          <p className="text-xs text-emerald-300/80 leading-relaxed">
            {lang === 'es'
              ? 'Te aviso por correo cuando publique el próximo artículo o guía. Si no te llega, revisa la carpeta de spam.'
              : 'I will email you when the next article or guide is published. Check your spam folder if it does not arrive.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className={`flex flex-col ${compact ? 'sm:flex-row' : 'sm:flex-row'} gap-3`}>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={lang === 'es' ? 'tu@email.com' : 'your@email.com'}
          aria-label={lang === 'es' ? 'Correo electrónico para suscribirse' : 'Email address to subscribe'}
          className="flex-1 min-w-0 px-4 py-3 bg-[#020202] border border-white/10 focus:border-gold rounded-sm text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover disabled:opacity-60 disabled:cursor-wait text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          {state === 'sending'
            ? (lang === 'es' ? 'Enviando...' : 'Sending...')
            : (lang === 'es' ? 'Suscribirme' : 'Subscribe')}
        </button>
      </div>

      {state === 'error' && errorMsg && (
        <p className="flex items-start gap-2 text-xs text-red-400">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          {errorMsg}
        </p>
      )}

      <p className="flex items-center gap-1.5 text-[9px] font-mono text-stone-600">
        <Heart className="w-3 h-3" />
        {lang === 'es'
          ? 'Sin spam. Máximo 1 correo al mes y podés darte de baja respondiendo "baja".'
          : 'No spam. One email per month at most, unsubscribe by replying "unsubscribe".'}
      </p>
    </form>
  );
}
