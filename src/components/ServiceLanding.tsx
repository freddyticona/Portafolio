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
  TrendingUp
} from 'lucide-react';

interface ServiceLandingProps {
  lang: 'es' | 'en';
  t: any;
  onContact: () => void;
  onBooking: () => void;
}

export default function ServiceLanding({ lang, t, onContact, onBooking }: ServiceLandingProps) {
  const services = [
    {
      id: 'filmacion-eventos',
      icon: Camera,
      titleEs: 'Filmación de Eventos en La Paz',
      titleEn: 'Event Filming in La Paz',
      slug: 'servicios/filmacion-eventos-la-paz',
      descriptionEs: 'Cobertura profesional de eventos sociales, corporativos y periodísticos con tecnología 4K. Más de 15 años capturando momentos únicos en Bolivia.',
      descriptionEn: 'Professional coverage of social, corporate and journalistic events with 4K technology. Over 15 years capturing unique moments in Bolivia.',
      keywordsEs: ['camarógrafo eventos La Paz', 'filmación bodas Bolivia', 'video corporativo La Paz', 'cobertura eventos 4K'],
      keywordsEn: ['event cameraman La Paz', 'wedding filming Bolivia', 'corporate video La Paz', '4K event coverage'],
      featuresEs: [
        'Cámaras 4K profesionales (Sony FX9, FS7)',
        'Cobertura de 2 a 8 horas continuas',
        'Entrega en 24-48 horas (express)',
        'Edición incluida con música licenciada',
        'Disponible para viajes nacionales',
        'Dron opcional para tomas aéreas'
      ],
      featuresEn: [
        'Professional 4K cameras (Sony FX9, FS7)',
        'Coverage from 2 to 8 continuous hours',
        'Delivery in 24-48 hours (express)',
        'Editing included with licensed music',
        'Available for national travel',
        'Optional drone for aerial shots'
      ],
      priceEs: 'Desde $50/hora',
      priceEn: 'From $50/hour',
      ctaEs: 'Solicitar Cotización',
      ctaEn: 'Get Quote'
    },
    {
      id: 'edicion-video',
      icon: Video,
      titleEs: 'Edición de Video Profesional',
      titleEn: 'Professional Video Editing',
      slug: 'servicios/edicion-video-bolivia',
      descriptionEs: 'Post-producción de alta calidad para documentales, contenido corporativo y videos de redes sociales. Color grading, sonido profesional y masterización.',
      descriptionEn: 'High-quality post-production for documentaries, corporate content and social media videos. Color grading, professional sound and mastering.',
      keywordsEs: ['editor de video Bolivia', 'postproducción La Paz', 'color grading Bolivia', 'edición documental'],
      keywordsEn: ['video editor Bolivia', 'post-production La Paz', 'color grading Bolivia', 'documentary editing'],
      featuresEs: [
        'Adobe Premiere Pro y DaVinci Resolve',
        'Corrección de color cinematográfico',
        'Mezcla de sonido profesional',
        'Motion graphics y animaciones',
        'Formatos para TV, web y redes sociales',
        'Revisions ilimitadas hasta satisfacción'
      ],
      featuresEn: [
        'Adobe Premiere Pro and DaVinci Resolve',
        'Cinematic color grading',
        'Professional sound mixing',
        'Motion graphics and animations',
        'Formats for TV, web and social media',
        'Unlimited revisions until satisfaction'
      ],
      priceEs: 'Desde $30/hora',
      priceEn: 'From $30/hour',
      ctaEs: 'Consultar Proyecto',
      ctaEn: 'Discuss Project'
    },
    {
      id: 'documentales',
      icon: Clapperboard,
      titleEs: 'Producción de Documentales',
      titleEn: 'Documentary Production',
      slug: 'servicios/produccion-documentales-bolivia',
      descriptionEs: 'Documentales de televisión y cine con enfoque cultural y social. Ganador del Premio Nacional Eduardo Abaroa 2017 por "La Estrella".',
      descriptionEn: 'Television and film documentaries with cultural and social focus. Winner of the 2017 National Eduardo Abaroa Award for "La Estrella".',
      keywordsEs: ['productor de documentales Bolivia', 'cine documental La Paz', 'documental cultural', 'premio Eduardo Abaroa'],
      keywordsEn: ['documentary producer Bolivia', 'documentary film La Paz', 'cultural documentary', 'Eduardo Abaroa award'],
      featuresEs: [
        'Investigación y guionización',
        'Rodaje en locaciones remotas',
        'Entrevistas en profundidad',
        'Archivos y licencias de música',
        'Distribución en festivales',
        'Versión para TV y versión web'
      ],
      featuresEn: [
        'Research and scriptwriting',
        'Shooting in remote locations',
        'In-depth interviews',
        'Footage and music licensing',
        'Festival distribution',
        'TV and web versions'
      ],
      priceEs: 'Según proyecto',
      priceEn: 'Project-based',
      ctaEs: 'Discutir Idea',
      ctaEn: 'Discuss Idea'
    },
    {
      id: 'consultoria',
      icon: FileText,
      titleEs: 'Consultoría Audiovisual',
      titleEn: 'Audiovisual Consulting',
      slug: 'servicios/consultoria-produccion-video',
      descriptionEs: 'Asesoría para proyectos de producción, estrategia de contenido y capacitación técnica. Optimiza tus flujos de trabajo y mejora la calidad de tus producciones.',
      descriptionEn: 'Consulting for production projects, content strategy and technical training. Optimize your workflows and improve your production quality.',
      keywordsEs: ['consultoría audiovisual', 'capacitación video', 'asesoría producción Bolivia', 'talleres cinematografía'],
      keywordsEn: ['audiovisual consulting', 'video training', 'production consulting Bolivia', 'cinematography workshops'],
      featuresEs: [
        'Evaluación de equipamiento',
        'Optimización de flujos de trabajo',
        'Capacitación personalizada',
        'Estrategia de contenidos digitales',
        'Soporte en producción',
        'Conexiones con la industria'
      ],
      featuresEn: [
        'Equipment evaluation',
        'Workflow optimization',
        'Personalized training',
        'Digital content strategy',
        'Production support',
        'Industry connections'
      ],
      priceEs: '$40/hora',
      priceEn: '$40/hour',
      ctaEs: 'Agendar Sesión',
      ctaEn: 'Book Session'
    }
  ];

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
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center font-display">
          {lang === 'es' ? 'Catálogo de Servicios' : 'Service Catalog'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#020202] border border-white/10 rounded-lg overflow-hidden hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold">{lang === 'es' ? service.priceEs : service.priceEn}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {lang === 'es' ? service.titleEs : service.titleEn}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {lang === 'es' ? service.descriptionEs : service.descriptionEn}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {(lang === 'es' ? service.featuresEs : service.featuresEn).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-stone-300">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onContact}
                    className="w-full px-6 py-3 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded text-sm font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {lang === 'es' ? service.ctaEs : service.ctaEn}
                    <ChevronRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              </motion.div>
            );
          })}
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
