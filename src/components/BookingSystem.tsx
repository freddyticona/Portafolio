/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  Camera,
  Video,
  Clapperboard,
  CheckCircle,
  ChevronRight,
  X,
  MapPin,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';

import { CONTACT_FORM, CONTACT_INFO, SERVICES_PRICING } from '../config';
import { PortfolioEvents } from '../lib/analytics';

// ==========================================
// TYPES
// ==========================================

interface BookingSlot {
  date: Date;
  time: string;
  available: boolean;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

interface BookingSystemProps {
  lang: 'es' | 'en';
  t: any;
  onSuccess?: (booking: BookingFormData) => void;
}

// ==========================================
// SERVICES AVAILABLE
// ==========================================

/**
 * Servicios que se pueden reservar desde el sitio.
 *
 * `catalogId` apunta al servicio real del catálogo (src/data/servicesPricing.json,
 * expuesto como SERVICES_PRICING): el precio que ve el cliente sale de ahí y
 * no se escribe a mano, para que nunca se desincronice con /servicios, el
 * JSON-LD ni el HTML prerenderizado.
 *
 * No se pide anticipo: el pago se coordina con el cliente al confirmar la cita.
 */
const SERVICES = {
  filming: {
    id: 'filming',
    icon: Camera,
    duration: { es: '2-8 horas', en: '2-8 hours' },
    catalogId: 'cobertura-evento',
    es: { name: 'Filmación de Evento', desc: 'Cobertura completa con cámara profesional' },
    en: { name: 'Event Filming', desc: 'Full coverage with professional camera' }
  },
  editing: {
    id: 'editing',
    icon: Video,
    duration: { es: 'Entrega en 3-5 días', en: 'Delivery in 3-5 days' },
    catalogId: 'edicion-preexistente',
    es: { name: 'Edición de Video', desc: 'Post-producción profesional' },
    en: { name: 'Video Editing', desc: 'Professional post-production' }
  },
  documentary: {
    id: 'documentary',
    icon: Clapperboard,
    duration: { es: 'Proyecto completo', en: 'Full project' },
    catalogId: 'reportaje-impacto',
    es: { name: 'Documental/Reportaje', desc: 'Producción de contenido largo' },
    en: { name: 'Documentary', desc: 'Long-form production' }
  },
  consultation: {
    id: 'consultation',
    icon: FileText,
    duration: { es: '1 hora', en: '1 hour' },
    catalogId: null,
    es: { name: 'Consultoría', desc: 'Asesoría en proyectos audiovisuales' },
    en: { name: 'Consultation', desc: 'Advice on audiovisual projects' }
  }
};

/** Formatea un precio del catálogo con el separador de miles según el idioma. */
const formatPrice = (amount: number, lang: 'es' | 'en') =>
  `Bs ${amount.toLocaleString(lang === 'es' ? 'es-BO' : 'en-US')}`;

/** Precio real (catálogo) del servicio de reserva, o null si no tiene precio fijo. */
const catalogPrice = (catalogId: string | null) => {
  if (!catalogId) return null;
  const service = SERVICES_PRICING.find((s) => s.id === catalogId);
  return service ? service.basePrice : null;
};

// ==========================================
// TIME SLOTS
// ==========================================

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00'
];

// ==========================================
// COMPONENT
// ==========================================

export default function BookingSystem({ lang, t, onSuccess }: BookingSystemProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  // Copia de la reserva enviada: alimenta el botón de WhatsApp tras confirmar.
  const [sentBooking, setSentBooking] = useState<BookingFormData | null>(null);

  // Generate available dates (next 30 days)
  const availableDates = React.useMemo(() => {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  }, []);

  // Sábado cierra a las 14:00: la última sesión empieza a las 12:00
  const isSaturday = selectedDate
    ? new Date(`${selectedDate}T12:00:00`).getDay() === 6
    : false;
  const availableTimeSlots = isSaturday
    ? TIME_SLOTS.filter((time) => time <= '13:00')
    : TIME_SLOTS;

  React.useEffect(() => {
    if (isSaturday && selectedTime && selectedTime > '13:00') {
      setSelectedTime('');
    }
  }, [isSaturday, selectedTime]);

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    return date.toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', options);
  };

  /**
   * Formatea una fecha como 'YYYY-MM-DD' usando la fecha LOCAL.
   * `toISOString()` convierte a UTC y desplaza el día para zonas horarias
   * positivas (p. ej. un visitante en España vería "mar, 24 nov" como "lun, 23 nov").
   */
  const formatDateForInput = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  // ─── Datos derivados de la reserva ─────────────────────────────────────
  const serviceLabel = (serviceId: string) => {
    const service = SERVICES[serviceId as keyof typeof SERVICES];
    if (!service) return serviceId;
    return lang === 'es' ? service.es.name : service.en.name;
  };

  const servicePriceLabel = (serviceId: string) => {
    const service = SERVICES[serviceId as keyof typeof SERVICES];
    const price = catalogPrice(service?.catalogId ?? null);
    if (price === null) return '';
    return lang === 'es'
      ? `Desde ${formatPrice(price, lang)}`
      : `From ${formatPrice(price, lang)}`;
  };

  /**
   * Parsea una fecha 'YYYY-MM-DD' como fecha LOCAL (no UTC).
   * `new Date('2026-11-25')` se interpreta como medianoche UTC y en Bolivia
   * (UTC-4) mostraría el día anterior.
   */
  const parseLocalDate = (dateString: string) => {
    const [y, m, d] = dateString.split('-').map(Number);
    if (!y || !m || !d) return new Date(dateString);
    return new Date(y, m - 1, d);
  };

  /** Resumen legible de la reserva: se usa en el correo y en el mensaje de WhatsApp. */
  const buildSummaryLines = (booking: BookingFormData): string[] => {
    const dateText = booking.date ? formatDate(parseLocalDate(booking.date)) : '';
    const price = servicePriceLabel(booking.service);
    return lang === 'es'
      ? [
          `Servicio: ${serviceLabel(booking.service)}`,
          price ? `Referencia de precio: ${price}` : '',
          `Fecha: ${dateText}`,
          `Hora: ${booking.time}`,
          `Nombre: ${booking.name}`,
          `Correo: ${booking.email}`,
          `Teléfono / WhatsApp: ${booking.phone}`,
          booking.notes ? `Detalles: ${booking.notes}` : ''
        ].filter(Boolean)
      : [
          `Service: ${serviceLabel(booking.service)}`,
          price ? `Price reference: ${price}` : '',
          `Date: ${dateText}`,
          `Time: ${booking.time}`,
          `Name: ${booking.name}`,
          `Email: ${booking.email}`,
          `Phone / WhatsApp: ${booking.phone}`,
          booking.notes ? `Details: ${booking.notes}` : ''
        ].filter(Boolean);
  };

  /** Enlace de WhatsApp con la reserva ya escrita: el cliente solo pulsa enviar. */
  const whatsappBookingUrl = (booking: BookingFormData) => {
    const number = CONTACT_INFO.phoneNumber.replace(/\D/g, '');
    const text = lang === 'es'
      ? `Hola Freddy, acabo de reservar una sesión en freddydev.net:\n\n${buildSummaryLines(booking).join('\n')}`
      : `Hi Freddy, I just booked a session on freddydev.net:\n\n${buildSummaryLines(booking).join('\n')}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!name || !email || !phone) {
      setSubmitError(lang === 'es'
        ? 'Completa nombre, correo y teléfono para confirmar la reserva.'
        : 'Fill in your name, email and phone to confirm the booking.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setSubmitError(lang === 'es' ? 'Escribe un correo válido.' : 'Enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const booking: BookingFormData = {
      ...formData,
      name,
      email,
      phone,
      service: formData.service || selectedService,
      date: formData.date || selectedDate,
      time: formData.time || selectedTime
    };
    const summary = buildSummaryLines(booking).join('\n');

    try {
      // Entrega real del lead: Web3Forms envía el aviso al correo del estudio.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT_FORM.accessKey,
          name: booking.name,
          email: booking.email,
          subject: lang === 'es'
            ? `Nueva reserva: ${serviceLabel(booking.service)} (${booking.date} ${booking.time})`
            : `New booking: ${serviceLabel(booking.service)} (${booking.date} ${booking.time})`,
          message: lang === 'es'
            ? `Reserva enviada desde freddydev.net/reservas\n\n${summary}\n\nCoordinar por WhatsApp o correo.`
            : `Booking sent from freddydev.net/reservas\n\n${summary}\n\nCoordinate via WhatsApp or email.`,
          from_name: CONTACT_FORM.fromName,
          botcheck: ''
        })
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'send_error');
      }

      // Copia local de respaldo (si el navegador permite localStorage).
      try {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push({ ...booking, id: Date.now(), status: 'pending', createdAt: new Date().toISOString() });
        localStorage.setItem('bookings', JSON.stringify(bookings));
      } catch {
        /* localStorage bloqueado: no es crítico, el correo ya salió */
      }

      setSentBooking(booking);
      setSubmitted(true);
      PortfolioEvents.bookingComplete(serviceLabel(booking.service), booking.date, booking.time);

      if (onSuccess) {
        onSuccess(booking);
      }
    } catch {
      // Fallo de envío: no se dice "reserva confirmada". El cliente conserva
      // el canal de WhatsApp, que es donde se cierra la reserva.
      setSentBooking(booking);
      setSubmitError(lang === 'es'
        ? 'No pudimos registrar la reserva automáticamente. Envíala por WhatsApp y la confirmamos al instante.'
        : 'We could not register the booking automatically. Send it via WhatsApp and we will confirm it right away.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /** Reinicia el wizard para hacer otra reserva. */
  const resetBooking = () => {
    setSubmitted(false);
    setSentBooking(null);
    setSubmitError('');
    setStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  // Translations for this component
  const bt = {
    title: lang === 'es' ? 'Agenda una Cita' : 'Book an Appointment',
    subtitle: lang === 'es'
      ? 'Reserva tu sesión de filmación, edición o consultoría'
      : 'Book your filming, editing, or consultation session',

    // Steps
    step1Title: lang === 'es' ? 'Selecciona un Servicio' : 'Select a Service',
    step1Subtitle: lang === 'es'
      ? 'Elige el tipo de servicio que necesitas'
      : 'Choose the type of service you need',

    step2Title: lang === 'es' ? 'Elige Fecha y Hora' : 'Choose Date & Time',
    step2Subtitle: lang === 'es'
      ? 'Selecciona tu fecha y hora preferida'
      : 'Select your preferred date and time',

    step3Title: lang === 'es' ? 'Tus Datos' : 'Your Information',
    step3Subtitle: lang === 'es'
      ? 'Completa tus datos de contacto'
      : 'Complete your contact information',

    // Form fields
    nameLabel: lang === 'es' ? 'Nombre completo' : 'Full name',
    emailLabel: lang === 'es' ? 'Correo electrónico' : 'Email',
    phoneLabel: lang === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp',
    notesLabel: lang === 'es' ? 'Detalles adicionales (opcional)' : 'Additional details (optional)',
    notesPlaceholder: lang === 'es'
      ? 'Describe tu proyecto, ubicación, requisitos especiales...'
      : 'Describe your project, location, special requirements...',

    // Buttons
    nextBtn: lang === 'es' ? 'Continuar' : 'Continue',
    backBtn: lang === 'es' ? 'Atrás' : 'Back',
    submitBtn: lang === 'es' ? 'Confirmar Reserva' : 'Confirm Booking',
    changeBtn: lang === 'es' ? 'Cambiar' : 'Change',

    // Success
    successTitle: lang === 'es' ? '¡Reserva Enviada!' : 'Booking Sent!',
    successMessage: lang === 'es'
      ? 'Recibo tu solicitud al instante. Envíame el resumen por WhatsApp para que confirmemos la cita hoy mismo.'
      : 'I receive your request instantly. Send me the summary via WhatsApp so we can confirm the appointment today.',
    whatsappCta: lang === 'es' ? 'Continuar por WhatsApp' : 'Continue on WhatsApp',
    newBooking: lang === 'es' ? 'Hacer otra reserva' : 'Make another booking',
    sendErrorTitle: lang === 'es' ? 'Reserva no registrada' : 'Booking not registered',

    // Expectativas
    expectNoDeposit: lang === 'es' ? 'Sin depósito online' : 'No online deposit',
    expectNoDepositDesc: lang === 'es'
      ? 'La reserva es sin compromiso y sin anticipo. Coordinamos el pago cuando esté confirmado el alcance del trabajo.'
      : 'The booking has no commitment and no upfront payment. We coordinate payment once the scope of work is confirmed.',
    expectConfirm: lang === 'es' ? 'Confirmación el mismo día' : 'Same-day confirmation',
    expectConfirmDesc: lang === 'es'
      ? 'Te escribo por WhatsApp para confirmar fecha, hora y alcance antes de agendar el trabajo.'
      : 'I contact you on WhatsApp to confirm date, time and scope before scheduling the work.',
    expectHours: lang === 'es' ? 'Horario de atención' : 'Office hours',
    expectHoursDesc: lang === 'es'
      ? 'Lunes a viernes de 9:00 a 19:00 y sábados de 9:00 a 14:00. Domingos cerrado.'
      : 'Monday to Friday 9:00-19:00 and Saturday 9:00-14:00. Closed on Sundays.',

    // Labels
    duration: lang === 'es' ? 'Duración' : 'Duration',
    price: lang === 'es' ? 'Precio' : 'Price',
    selectService: lang === 'es' ? 'Seleccionar' : 'Select',
    selectDate: lang === 'es' ? 'Seleccionar fecha' : 'Select date',
    selectTime: lang === 'es' ? 'Seleccionar hora' : 'Select time',
    required: lang === 'es' ? 'Requerido' : 'Required'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-8">
        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest">
          <Calendar className="w-4 h-4 inline mr-1" />
          {lang === 'es' ? 'Sistema de Reservas' : 'Booking System'}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">
          {bt.title}
        </h2>
        <p className="text-sm text-stone-400 leading-relaxed font-light">
          {bt.subtitle}
        </p>
      </div>

      {/* Expectativas: qué pasa al reservar, sin depósito y con horario real */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        {[
          {
            icon: CheckCircle,
            title: bt.expectNoDeposit,
            desc: bt.expectNoDepositDesc
          },
          {
            icon: MessageCircle,
            title: bt.expectConfirm,
            desc: bt.expectConfirmDesc
          },
          {
            icon: Clock,
            title: bt.expectHours,
            desc: bt.expectHoursDesc
          }
        ].map((item) => (
          <div key={item.title} className="bg-white/[0.02] border border-white/10 rounded-sm p-4 flex gap-3">
            <item.icon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
              ${step >= s ? 'bg-gold text-black' : 'bg-white/5 text-stone-500'}
            `}>
              {step > s ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div className={`
                w-16 h-0.5 transition-all duration-300
                ${step > s ? 'bg-gold' : 'bg-white/10'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 text-center space-y-5"
          >
            <CheckCircle className="w-16 h-16 text-gold mx-auto" />
            <h3 className="text-2xl font-bold text-white">{bt.successTitle}</h3>
            <p className="text-stone-300 max-w-xl mx-auto">{bt.successMessage}</p>

            {sentBooking && (
              <div className="bg-black/30 border border-white/10 rounded-lg p-4 text-left text-sm space-y-1 max-w-xl mx-auto">
                {buildSummaryLines(sentBooking).map((line, i) => (
                  <p key={i} className="text-stone-300 font-mono text-xs">{line}</p>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {sentBooking && (
                <a
                  href={whatsappBookingUrl(sentBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => PortfolioEvents.bookingWhatsapp(serviceLabel(sentBooking.service))}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1eb855] text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  {bt.whatsappCta}
                </a>
              )}
              <button
                type="button"
                onClick={resetBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 hover:border-gold/50 text-stone-300 hover:text-white rounded-sm text-xs uppercase tracking-widest font-mono transition-all duration-300"
              >
                {bt.newBooking}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white">{bt.step1Title}</h3>
                <p className="text-sm text-stone-400">{bt.step1Subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(SERVICES).map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;
                  const serviceLang = lang === 'es' ? service.es : service.en;

                  return (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedService(service.id);
                        PortfolioEvents.bookingStart(lang === 'es' ? service.es.name : service.en.name);
                      }}
                      className={`
                        p-6 rounded-lg border text-left transition-all duration-300
                        ${isSelected
                          ? 'border-gold bg-gold/10'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-3 rounded-lg
                          ${isSelected ? 'bg-gold text-black' : 'bg-white/5 text-stone-400'}
                        `}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{serviceLang.name}</h3>
                          <p className="text-sm text-stone-400 mb-2">{serviceLang.desc}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-gold">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {lang === 'es' ? service.duration.es : service.duration.en}
                            </span>
                            {catalogPrice(service.catalogId) !== null && (
                              <span>{bt.price}: {servicePriceLabel(service.id)}</span>
                            )}
                          </div>
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => {
                    if (selectedService) {
                      setFormData({ ...formData, service: selectedService });
                      setStep(2);
                    }
                  }}
                  disabled={!selectedService}
                  className={`
                    px-6 py-3 rounded-sm font-mono font-bold uppercase text-sm tracking-wider
                    flex items-center gap-2 transition-all duration-300
                    ${selectedService
                      ? 'bg-gold hover:bg-gold-hover text-black cursor-pointer'
                      : 'bg-white/5 text-stone-500 cursor-not-allowed'
                    }
                  `}
                >
                  {bt.nextBtn}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white">{bt.step2Title}</h3>
                <p className="text-sm text-stone-400">{bt.step2Subtitle}</p>
              </div>

              {/* Selected Service Summary */}
              {selectedService && (
                <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <div className="flex-1">
                    <span className="text-sm font-bold text-white">
                      {lang === 'es'
                        ? SERVICES[selectedService as keyof typeof SERVICES].es.name
                        : SERVICES[selectedService as keyof typeof SERVICES].en.name}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedService('');
                      setStep(1);
                    }}
                    className="text-xs text-gold hover:text-gold-hover transition-colors"
                  >
                    {bt.changeBtn}
                  </button>
                </div>
              )}

              {/* Date Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  {bt.selectDate}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                  {availableDates.map((date) => {
                    const dateStr = formatDateForInput(date);
                    const isSelected = selectedDate === dateStr;

                    return (
                      <button
                        key={dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`
                          p-3 rounded-lg text-center transition-all duration-300
                          ${isSelected
                            ? 'bg-gold text-black font-bold'
                            : 'bg-white/5 text-stone-400 hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="text-xs">{formatDate(date)}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    {bt.selectTime}
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {availableTimeSlots.map((time) => {
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            p-3 rounded-lg text-center transition-all duration-300
                            ${isSelected
                              ? 'bg-gold text-black font-bold'
                              : 'bg-white/5 text-stone-400 hover:bg-white/10'
                            }
                          `}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-sm font-mono font-bold uppercase text-sm tracking-wider text-stone-400 hover:text-white transition-colors"
                >
                  {bt.backBtn}
                </button>
                <button
                  onClick={() => {
                    if (selectedDate && selectedTime) {
                      setFormData({
                        ...formData,
                        date: selectedDate,
                        time: selectedTime
                      });
                      setStep(3);
                    }
                  }}
                  disabled={!selectedDate || !selectedTime}
                  className={`
                    px-6 py-3 rounded-sm font-mono font-bold uppercase text-sm tracking-wider
                    flex items-center gap-2 transition-all duration-300
                    ${selectedDate && selectedTime
                      ? 'bg-gold hover:bg-gold-hover text-black cursor-pointer'
                      : 'bg-white/5 text-stone-500 cursor-not-allowed'
                    }
                  `}
                >
                  {bt.nextBtn}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Information */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white">{bt.step3Title}</h3>
                <p className="text-sm text-stone-400">{bt.step3Subtitle}</p>
              </div>

              {/* Booking Summary */}
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">{lang === 'es' ? 'Servicio' : 'Service'}</span>
                  <span className="font-bold text-white">
                    {selectedService && (
                      lang === 'es'
                        ? SERVICES[selectedService as keyof typeof SERVICES].es.name
                        : SERVICES[selectedService as keyof typeof SERVICES].en.name
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">{lang === 'es' ? 'Fecha' : 'Date'}</span>
                  <span className="font-bold text-white">
                    {selectedDate && formatDate(parseLocalDate(selectedDate))}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">{lang === 'es' ? 'Hora' : 'Time'}</span>
                  <span className="font-bold text-white">{selectedTime}</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="booking-name" className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gold" />
                    {bt.nameLabel}
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.nameLabel}
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-gold" />
                    {bt.emailLabel}
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.emailLabel}
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-gold" />
                    {bt.phoneLabel}
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.phoneLabel}
                  />
                </div>

                <div>
                  <label htmlFor="booking-notes" className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    {bt.notesLabel}
                  </label>
                  <textarea
                    id="booking-notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder={bt.notesPlaceholder}
                  />
                </div>
              </div>

              {/* Error de envío: nunca se muestra "reserva confirmada" si no se registró */}
              {submitError && (
                <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-3">
                    <p className="text-sm text-amber-200 leading-relaxed">{submitError}</p>
                    {sentBooking && (
                      <a
                        href={whatsappBookingUrl(sentBooking)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => PortfolioEvents.bookingWhatsapp(serviceLabel(sentBooking.service))}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1eb855] text-black font-bold rounded-sm text-xs uppercase tracking-widest transition-all duration-300"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        {bt.whatsappCta}
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-sm font-mono font-bold uppercase text-sm tracking-wider text-stone-400 hover:text-white transition-colors"
                >
                  {bt.backBtn}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    px-6 py-3 rounded-sm font-mono font-bold uppercase text-sm tracking-wider
                    flex items-center gap-2 transition-all duration-300
                    ${isSubmitting
                      ? 'bg-white/10 text-stone-400 cursor-wait'
                      : 'bg-gold hover:bg-gold-hover text-black cursor-pointer'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">{lang === 'es' ? 'Procesando...' : 'Processing...'}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {bt.submitBtn}
                    </>
                  )}
                </button>
              </div>

              {/* Escape: si el formulario falla, WhatsApp siempre funciona */}
              <p className="text-center text-xs text-stone-500 pt-2">
                {lang === 'es' ? '¿Problemas con el formulario? ' : 'Trouble with the form? '}
                <a
                  href={whatsappBookingUrl({
                    ...formData,
                    service: formData.service || selectedService,
                    date: formData.date || selectedDate,
                    time: formData.time || selectedTime
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => PortfolioEvents.bookingWhatsapp(serviceLabel(formData.service || selectedService))}
                  className="text-gold hover:text-gold-hover underline underline-offset-2 font-bold"
                >
                  {lang === 'es' ? 'Escríbeme por WhatsApp' : 'Message me on WhatsApp'}
                </a>
              </p>
            </form>
          )}
        </motion.div>
      )}
    </div>
  );
}
