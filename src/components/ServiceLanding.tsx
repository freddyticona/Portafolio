/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Camera,
  Video,
  Clapperboard,
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
  Send
} from 'lucide-react';
import { SERVICES_PRICING, CONTACT_INFO } from '../config';

interface ServiceLandingProps {
  lang: 'es' | 'en';
  t: any;
  onContact: () => void;
  onBooking: () => void;
}

export default function ServiceLanding({ lang, t, onContact, onBooking }: ServiceLandingProps) {
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
            {lang === 'es' ? 'Catálogo de Servicios' : 'Services Catalog'}
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            {lang === 'es'
              ? 'Soluciones audiovisuales profesionales para cada necesidad. Contáctame para una cotización personalizada.'
              : 'Professional audiovisual solutions for every need. Contact me for a personalized quote.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_PRICING.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Camera;
            const isEs = lang === 'es';
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
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
                      <div className="text-2xl font-black text-gold">
                        {service.currency === 'BOB' ? 'Bs.' : '$'}{service.basePrice}
                      </div>
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

                  <div className="pt-4 border-t border-stone-800">
                    <button
                      onClick={onContact}
                      className="w-full px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      {isEs ? 'Solicitar Cotización' : 'Request Quote'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Service Contact Card */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gold/10 via-[#020202] to-gold/5 border border-gold/30 rounded-xl p-8 md:p-12 text-center space-y-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-mono font-bold uppercase tracking-widest">
                <MessageCircle className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Solicita tu Cotización' : 'Request Your Quote'}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display">
                {lang === 'es'
                  ? '¿Tienes un proyecto en mente?'
                  : 'Do you have a project in mind?'}
              </h3>
              <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
                {lang === 'es'
                  ? 'Cuéntame tu idea y te preparo una cotización personalizada sin compromiso. Respondo en menos de 24 horas.'
                  : 'Tell me your idea and I\'ll prepare a personalized quote with no commitment. I respond within 24 hours.'}
              </p>
            </div>

            {/* Contact options */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneNumber.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(lang === 'es' ? 'Hola Freddy, me interesa cotizar un servicio audiovisual.' : 'Hi Freddy, I\'m interested in getting a quote for an audiovisual service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-[#25D366]/5 hover:bg-[#25D366]/15 border border-[#25D366]/20 hover:border-[#25D366]/50 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">WhatsApp</div>
                  <div className="text-xs text-stone-400 mt-0.5">{CONTACT_INFO.phoneNumber}</div>
                </div>
                <span className="text-[#25D366] text-xs font-mono font-bold uppercase tracking-wider group-hover:underline">
                  {lang === 'es' ? 'Escribir ahora →' : 'Message now →'}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(lang === 'es' ? 'Cotización de Servicio Audiovisual' : 'Audiovisual Service Quote')}`}
                className="group flex flex-col items-center gap-3 p-6 bg-gold/5 hover:bg-gold/10 border border-gold/20 hover:border-gold/50 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Email</div>
                  <div className="text-xs text-stone-400 mt-0.5">{CONTACT_INFO.email}</div>
                </div>
                <span className="text-gold text-xs font-mono font-bold uppercase tracking-wider group-hover:underline">
                  {lang === 'es' ? 'Enviar correo →' : 'Send email →'}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phoneNumber.replace(/\s+/g, '')}`}
                className="group flex flex-col items-center gap-3 p-6 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-6 h-6 text-stone-300" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{lang === 'es' ? 'Llamada' : 'Phone Call'}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{CONTACT_INFO.phoneNumber}</div>
                </div>
                <span className="text-stone-300 text-xs font-mono font-bold uppercase tracking-wider group-hover:underline">
                  {lang === 'es' ? 'Llamar ahora →' : 'Call now →'}
                </span>
              </a>
            </div>

            {/* Bottom note */}
            <p className="relative z-10 text-xs text-stone-500 font-mono">
              {lang === 'es'
                ? '⚡ Respuesta garantizada en menos de 24 horas — Sin compromisos, sin costos ocultos'
                : '⚡ Guaranteed response within 24 hours — No commitments, no hidden costs'}
            </p>
          </motion.div>
        </div>

      </section>

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
