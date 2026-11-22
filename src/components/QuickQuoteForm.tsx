/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * QuickQuoteForm — formulario de cotización embebido en la ficha de servicio.
 * Envía por Web3Forms (la misma fuente que el formulario de /contacto) para no
 * obligar al visitante a salir de la página y perder conversión.
 */
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_FORM } from '../config';
import { PortfolioEvents } from '../lib/analytics';

interface Props {
  lang: 'es' | 'en';
  serviceName: string;
  priceLabel: string;
}

type State = 'idle' | 'sending' | 'success' | 'error';

export default function QuickQuoteForm({ lang, serviceName, priceLabel }: Props) {
  const es = lang === 'es';
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim()) {
      setError(es ? 'Completa tu nombre y tu email.' : 'Please enter your name and email.');
      setState('error');
      return;
    }
    setState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT_FORM.accessKey,
          name: form.name,
          email: form.email,
          subject: `${es ? 'Cotización' : 'Quote'}: ${serviceName}`,
          message: `${form.message || (es ? 'Solicito cotización' : 'I request a quote')}\n\n${es ? 'Servicio' : 'Service'}: ${serviceName}\n${es ? 'Precio base' : 'Base price'}: ${priceLabel}`,
          from_name: CONTACT_FORM.fromName,
          botcheck: form.botcheck
        })
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
        PortfolioEvents.contactFormSubmit();
        setForm({ name: '', email: '', message: '', botcheck: '' });
      } else {
        setError(data.message || (es ? 'No se pudo enviar. Intenta de nuevo.' : 'Could not send. Please try again.'));
        setState('error');
      }
    } catch {
      setError(es ? 'Error de conexión. Intenta de nuevo.' : 'Connection error. Please try again.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-gold/[0.06] border border-gold/30 rounded-sm p-6 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-bold text-white">
            {es ? '¡Solicitud enviada!' : 'Request sent!'}
          </h3>
          <p className="text-sm text-stone-300 mt-1">
            {es
              ? 'Te respondo por email o WhatsApp en menos de 24 horas hábiles.'
              : 'I will reply by email or WhatsApp within 24 business hours.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white/[0.02] border border-white/10 rounded-sm p-5 md:p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-bold text-white font-display">
          {es ? 'Solicita una cotización rápida' : 'Request a quick quote'}
        </h3>
        <p className="text-xs text-stone-400">
          {es ? `Sin salir de esta página · ${serviceName} desde ${priceLabel}` : `No need to leave this page · ${serviceName} from ${priceLabel}`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-1.5">
            {es ? 'Nombre' : 'Name'}
          </span>
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            autoComplete="name"
            className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-sm text-sm text-stone-200 focus:outline-none focus:border-gold transition-colors"
          />
        </label>
        <label className="block">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-1.5">
            Email
          </span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            autoComplete="email"
            className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-sm text-sm text-stone-200 focus:outline-none focus:border-gold transition-colors"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-1.5">
          {es ? 'Cuéntame brevemente tu proyecto (opcional)' : 'Tell me briefly about your project (optional)'}
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={3}
          className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-sm text-sm text-stone-200 focus:outline-none focus:border-gold transition-colors resize-y"
        />
      </label>

      {/* Honeypot: oculto a usuarios, detectable por bots */}
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      {error && <p className="text-xs text-red-400" role="alert">{error}</p>}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'sending'
          ? <Loader2 className="w-4 h-4 animate-spin" />
          : <Send className="w-4 h-4" />}
        {state === 'sending'
          ? (es ? 'Enviando…' : 'Sending…')
          : (es ? 'Enviar solicitud' : 'Send request')}
      </button>
    </form>
  );
}
