/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Camera,
  Video,
  Clapperboard,
  FileText,
  CheckCircle,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Calendar,
  TrendingUp,
  Scissors,
  MessageCircle,
  Radio,
  Briefcase,
  Heart,
  Wrench,
  Film,
  CreditCard,
  Smartphone,
  Building2,
  Wallet
} from 'lucide-react';
import { CheckoutButton, PriceBadge } from './CheckoutButton';
import { PaymentModal } from './PaymentModal';
import type { CheckoutSession } from '../types';
import { createCheckoutSession, getFeaturedServices, getServiceById } from '../lib/payments';

interface ServiceLandingProps {
  lang: 'es' | 'en';
  t: any;
  onContact: () => void;
  onBooking: () => void;
}

export default function ServiceLanding({ lang, t, onContact, onBooking }: ServiceLandingProps) {
  // Estado para el modal de pago
  const [checkoutSession, setCheckoutSession] = useState<CheckoutSession | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Iconos para los tipos de servicio
  const serviceIcons: Record<string, React.ElementType> = {
    'Camera': Camera,
    'Video': Video,
    'Scissors': Scissors,
    'Wrench': Wrench,
    'Film': Film,
    'Clapperboard': Clapperboard,
    'MessageCircle': MessageCircle,
    'Radio': Radio,
    'Briefcase': Briefcase,
    'Heart': Heart
  };

  // Escuchar evento de checkout
  useEffect(() => {
    const handleCheckout = (e: CustomEvent) => {
      setCheckoutSession(e.detail);
      setIsPaymentModalOpen(true);
    };

    window.addEventListener('open-checkout-modal', handleCheckout as EventListener);
    return () => window.removeEventListener('open-checkout-modal', handleCheckout as EventListener);
  }, []);

  const handlePaymentModalClose = () => {
    setIsPaymentModalOpen(false);
    setCheckoutSession(null);
  };

  const st = {
    title: lang === 'es' ? 'Servicios Profesionales' : 'Professional Services',
    subtitle: lang === 'es'
      ? 'Soluciones audiovisuales completas en La Paz, Bolivia'
      : 'Complete audiovisual solutions in La Paz, Bolivia',
    whyChooseUs: lang === 'es' ? 'Por qué elegir mis servicios' : 'Why choose my services',
    reasons: [
      {
        icon: Award,
        titleEs: 'Premio Nacional Abaroa 2017',
        titleEn: 'National Abaroa Award 2017',
        descEs: 'Reconocimiento por excelencia en periodismo cultural',
        descEn: 'Recognized for excellence in cultural journalism'
      },
      {
        icon: Clock,
        titleEs: '15+ Años de Experiencia',
        titleEn: '15+ Years Experience',
        descEs: 'Trayectoria en Bolivia TV, Red Uno, RTP',
        descEn: 'Track record at Bolivia TV, Red Uno, RTP'
      },
      {
        icon: MapPin,
        titleEs: 'Cobertura Nacional',
        titleEn: 'National Coverage',
        descEs: 'Disponible en todo el departamento de La Paz',
        descEn: 'Available throughout La Paz department'
      },
      {
        icon: TrendingUp,
        titleEs: 'Tecnología 4K',
        titleEn: '4K Technology',
        descEs: 'Equipamiento de última generación',
        descEn: 'State-of-the-art equipment'
      }
    ],
    processTitle: lang === 'es' ? 'Cómo trabajo' : 'How I work',
    processSteps: [
      { step: '1', titleEs: 'Consulta', titleEn: 'Consultation', descEs: 'Discutimos tu proyecto y objetivos', descEn: 'We discuss your project and goals' },
      { step: '2', titleEs: 'Planificación', titleEn: 'Planning', descEs: 'Definimos fechas, locaciones y estrategia', descEn: 'We define dates, locations and strategy' },
      { step: '3', titleEs: 'Producción', titleEn: 'Production', descEs: 'Rodaje con tecnología profesional', descEn: 'Shooting with professional technology' },
      { step: '4', titleEs: 'Entrega', titleEn: 'Delivery', descEs: 'Recibe tu video en los formatos que necesitas', descEn: 'Receive your video in the formats you need' }
    ],
    testimonials: {
      title: lang === 'es' ? 'Lo que dicen los clientes' : 'What clients say',
      items: [
        { name: 'María L.', roleEs: 'Organizadora de eventos', roleEn: 'Event Planner', textEs: 'Capturó moments que nuestra familia atesorará para siempre.', textEn: 'Captured moments our family will treasure forever.' },
        { name: 'Carlos R.', roleEs: 'Productor de TV', roleEn: 'TV Producer', textEs: 'Entrega impecable bajo presión, siempre profesional.', textEn: 'Impeccable delivery under pressure, always professional.' }
      ]
    },
    faq: {
      title: lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions',
      items: [
        {
          qEs: '¿Cuánto tiempo toma la edición?',
          qEn: 'How long does editing take?',
          aEs: 'Eventos sociales: 2-3 días. Corporativos: 5-7 días. Documentales: según proyecto.',
          aEn: 'Social events: 2-3 days. Corporate: 5-7 days. Documentaries: project-based.'
        },
        {
          qEs: '¿Viajas a otras ciudades?',
          qEn: 'Do you travel to other cities?',
          aEs: 'Sí, estoy disponible para todo Bolivia con costo adicional de viáticos.',
          aEn: 'Yes, available throughout Bolivia with additional travel expenses.'
        },
        {
          qEs: '¿Qué incluye el precio?',
          qEn: 'What does the price include?',
          aEs: 'Filmación, edición básica, música licenciada y entregas en formatos digitales.',
          aEn: 'Filming, basic editing, licensed music and digital format deliveries.'
        }
      ]
    }
  };

  return (
    <div className="space-y-24 animate-fadeIn">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-mono font-bold uppercase tracking-widest">
          <Star className="w-4 h-4" />
          {lang === 'es' ? 'Servicios Premium' : 'Premium Services'}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-display">
          {st.title}
        </h1>

        <p className="text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto">
          {st.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onBooking}
            className="px-8 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            {lang === 'es' ? 'Agendar' : 'Book Now'}
          </button>
          <button
            onClick={onContact}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-4 h-4 inline mr-2" />
            {lang === 'es' ? 'Consultar' : 'Inquire'}
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-12 font-display">
          {st.whyChooseUs}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {st.reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-4 hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{lang === 'es' ? reason.titleEs : reason.titleEn}</h3>
                  <p className="text-sm text-stone-400">{lang === 'es' ? reason.descEs : reason.descEn}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
            {lang === 'es' ? 'Catálogo de Servicios con Precios' : 'Services Catalog with Pricing'}
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {lang === 'es'
              ? 'Selecciona un servicio y paga de forma segura online. También aceptamos transferencias y QR de Bolivia.'
              : 'Select a service and pay securely online. We also accept transfers and QR payments from Bolivia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFeaturedServices().map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Camera;
            const isEs = lang === 'es';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-[#020202] border ${service.popular ? 'border-gold/50 ring-1 ring-gold/20' : 'border-white/10'} rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 group relative`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gold text-black text-xs font-bold uppercase rounded-sm">
                      {isEs ? 'Popular' : 'Popular'}
                    </span>
                  </div>
                )}
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-right">
                      <PriceBadge service={service} lang={lang} />
                      <p className="text-xs text-stone-500 mt-1">/ {service.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isEs ? service.nameEs : service.nameEn}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {isEs ? service.descriptionEs : service.descriptionEn}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {(isEs ? service.featuresEs : service.featuresEn).slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-stone-300">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-stone-800 flex gap-3">
                    <CheckoutButton
                      service={service}
                      lang={lang}
                      variant="default"
                      className="flex-1"
                    />
                    <button
                      onClick={onContact}
                      className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-stone-300 hover:text-white transition-all"
                      title={isEs ? 'Consultar' : 'Inquire'}
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods Info */}
        <div className="mt-12 bg-stone-900/30 border border-stone-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            {lang === 'es' ? 'Métodos de Pago Aceptados' : 'Accepted Payment Methods'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <CreditCard className="w-8 h-8 mx-auto text-gold" />
              <p className="text-xs text-stone-400">{lang === 'es' ? 'Tarjeta (Stripe)' : 'Card (Stripe)'}</p>
            </div>
            <div className="space-y-2">
              <Smartphone className="w-8 h-8 mx-auto text-gold" />
              <p className="text-xs text-stone-400">{lang === 'es' ? 'QR / Billetera' : 'QR / Wallet'}</p>
            </div>
            <div className="space-y-2">
              <Building2 className="w-8 h-8 mx-auto text-gold" />
              <p className="text-xs text-stone-400">{lang === 'es' ? 'Transferencia' : 'Transfer'}</p>
            </div>
            <div className="space-y-2">
              <Wallet className="w-8 h-8 mx-auto text-gold" />
              <p className="text-xs text-stone-400">{lang === 'es' ? 'Efectivo' : 'Cash'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handlePaymentModalClose}
        checkoutSession={checkoutSession}
        lang={lang}
      />

      {/* Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-12 font-display">
          {st.processTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {st.processSteps.map((step, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center font-black text-xl mx-auto">
                {step.step}
              </div>
              <h4 className="font-bold text-white">{lang === 'es' ? step.titleEs : step.titleEn}</h4>
              <p className="text-sm text-stone-400">{lang === 'es' ? step.descEs : step.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-12 font-display">
          {st.faq.title}
        </h2>

        <div className="space-y-4">
          {st.faq.items.map((item, idx) => (
            <details
              key={idx}
              className="bg-white/[0.02] border border-white/10 rounded-lg group"
            >
              <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-bold text-white hover:text-gold transition-colors">
                {lang === 'es' ? item.qEs : item.qEn}
                <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-6 py-4 text-stone-400 text-sm">
                {lang === 'es' ? item.aEs : item.aEn}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center space-y-6 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-y border-gold/20 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white font-display">
          {lang === 'es' ? '¿Listo para comenzar tu proyecto?' : 'Ready to start your project?'}
        </h2>
        <p className="text-stone-400 max-w-xl mx-auto">
          {lang === 'es'
            ? 'Contáctame hoy para discutir cómo puedo ayudarte a capturar tu visión.'
            : 'Contact me today to discuss how I can help you capture your vision.'}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onBooking}
            className="px-8 py-4 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            {lang === 'es' ? 'Agendar Ahora' : 'Book Now'}
          </button>
          <a
            href="tel:+59162408420"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            +591 62408420
          </a>
        </div>
      </section>
    </div>
  );
}
