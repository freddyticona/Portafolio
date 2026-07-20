/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, Check, Loader2, Shield } from 'lucide-react';

interface NewsletterSignupProps {
  lang?: 'es' | 'en';
  variant?: 'default' | 'compact' | 'footer';
}

/**
 * Componente de suscripción al newsletter
 */
export default function NewsletterSignup({
  lang = 'es',
  variant = 'default'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  /**
   * Manejar suscripción
   */
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validar email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(lang === 'es' ? 'Por favor ingresa un email válido' : 'Please enter a valid email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular llamada API (aquí integrarías con tu servicio de newsletter)
      // Por ejemplo: Mailchimp, ConvertKit, SendGrid, etc.

      // Simulación
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Guardar en localStorage como demo
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));

      setIsSubscribed(true);
      setEmail('');

      // Resetear mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (err) {
      setError(lang === 'es' ? 'Error al suscribirse. Intenta nuevamente.' : 'Error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variante compacta
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === 'es' ? 'Tu email' : 'Your email'}
            disabled={isSubscribed}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold disabled:opacity-50"
          />
        </div>
        <button
          onClick={handleSubscribe}
          disabled={isSubmitting || isSubscribed}
          className="px-4 py-2 bg-gold hover:bg-gold-hover text-black rounded-sm text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isSubscribed ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'es' ? '¡Suscrito!' : 'Subscribed!'}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'es' ? 'Suscribir' : 'Subscribe'}</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // Variante footer
  if (variant === 'footer') {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gold" />
          <div>
            <h4 className="font-bold text-white">{lang === 'es' ? 'Newsletter' : 'Newsletter'}</h4>
            <p className="text-xs text-stone-400">
              {lang === 'es'
                ? 'Recibe actualizaciones sobre mis proyectos'
                : 'Get updates on my projects'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubscribe} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === 'es' ? 'Email' : 'Email'}
            disabled={isSubscribed}
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubscribed}
            className="px-4 py-2 bg-gold hover:bg-gold-hover text-black rounded-sm text-xs font-bold uppercase transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isSubscribed ? (
              <Check className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </form>

        <div className="flex items-center gap-2 text-[10px] text-stone-500">
          <Shield className="w-3 h-3" />
          <span>{lang === 'es' ? 'No spam. Solo contenido valioso.' : 'No spam. Valuable content only.'}</span>
        </div>
      </div>
    );
  }

  // Variante default
  return (
    <div className="bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-sm p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-gold">
          <Mail className="w-6 h-6" />
          <h3 className="text-lg md:text-xl font-bold font-display">
            {lang === 'es' ? 'Suscríbete al Newsletter' : 'Subscribe to Newsletter'}
          </h3>
        </div>
        <p className="text-sm text-stone-400 max-w-md mx-auto">
          {lang === 'es'
            ? 'Recibe actualizaciones exclusivas sobre mis proyectos, tutoriales y detrás de cámaras directamente en tu email.'
            : 'Get exclusive updates on my projects, tutorials, and behind-the-scenes content directly in your inbox.'}
        </p>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubscribe} className="space-y-4 max-w-md mx-auto">
        <div className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === 'es' ? 'Tu correo electrónico' : 'Your email address'}
            disabled={isSubscribed}
            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all disabled:opacity-50"
          />
          {error && (
            <p className="text-xs text-red-400 pl-2">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubscribed}
          className="w-full px-6 py-4 bg-gold hover:bg-gold-hover text-black rounded-sm font-bold uppercase tracking-widest text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-gold/10"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{lang === 'es' ? 'Suscribiendo...' : 'Subscribing...'}</span>
            </>
          ) : isSubscribed ? (
            <>
              <Check className="w-5 h-5" />
              <span>{lang === 'es' ? '¡Suscrito!' : 'Subscribed!'}</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>{lang === 'es' ? 'Suscribirme' : 'Subscribe Now'}</span>
            </>
          )}
        </button>

        {/* Mensaje de privacidad */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
          <Shield className="w-3 h-3" />
          <span>
            {lang === 'es'
              ? 'Respetamos tu privacidad. Puedes darte de baja en cualquier momento.'
              : 'We respect your privacy. Unsubscribe anytime.'}
          </span>
        </div>
      </form>

      {/* Beneficios */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/10">
        {[
          {
            icon: '🎬',
            title: lang === 'es' ? 'Proyectos' : 'Projects',
            desc: lang === 'es' ? 'Nuevos trabajos' : 'New works'
          },
          {
            icon: '📚',
            title: lang === 'es' ? 'Tutoriales' : 'Tutorials',
            desc: lang === 'es' ? 'Tips y técnicas' : 'Tips & techniques'
          },
          {
            icon: '🎥',
            title: lang === 'es' ? 'Behind scenes' : 'Behind scenes',
            desc: lang === 'es' ? 'Contenido exclusivo' : 'Exclusive content'
          }
        ].map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-2">{benefit.icon}</div>
            <div className="text-xs font-bold text-white">{benefit.title}</div>
            <div className="text-[10px] text-stone-400">{benefit.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Modal emergente de newsletter
 */
export function NewsletterModal({
  isOpen,
  onClose,
  lang = 'es'
}: {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'es' | 'en';
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        onClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#0a0a0a] border border-gold/20 rounded-sm max-w-md w-full p-6 md:p-8 space-y-6 animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-sm transition-colors text-stone-400 hover:text-white"
          aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
        >
          ×
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              {lang === 'es' ? '¿No te lo pierdas!' : 'Don\'t miss out!'}
            </h3>
            <p className="text-sm text-stone-400">
              {lang === 'es'
                ? 'Suscríbete para recibir contenido exclusivo y actualizaciones'
                : 'Subscribe for exclusive content and updates'}
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'es' ? 'Email' : 'Email'}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-stone-300 placeholder-stone-500 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gold hover:bg-gold-hover text-black rounded-sm font-bold uppercase tracking-wider text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>{lang === 'es' ? 'Suscribirme' : 'Subscribe'}</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <Check className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="text-white font-bold">
                {lang === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
