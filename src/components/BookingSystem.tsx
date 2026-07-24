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
  MapPin
} from 'lucide-react';

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

const SERVICES = {
  filming: {
    id: 'filming',
    icon: Camera,
    duration: '2-8 horas',
    deposit: 50,
    es: { name: 'Filmación de Evento', desc: 'Cobertura completa con cámara profesional' },
    en: { name: 'Event Filming', desc: 'Full coverage with professional camera' }
  },
  editing: {
    id: 'editing',
    icon: Video,
    duration: 'Entrega en 3-5 días',
    deposit: 30,
    es: { name: 'Edición de Video', desc: 'Post-producción profesional' },
    en: { name: 'Video Editing', desc: 'Professional post-production' }
  },
  documentary: {
    id: 'documentary',
    icon: Clapperboard,
    duration: 'Proyecto completo',
    deposit: 40,
    es: { name: 'Documental/Reportaje', desc: 'Producción de contenido largo' },
    en: { name: 'Documentary', desc: 'Long-form production' }
  },
  consultation: {
    id: 'consultation',
    icon: FileText,
    duration: '1 hora',
    deposit: 0,
    es: { name: 'Consultoría', desc: 'Asesoría en proyectos audiovisuales' },
    en: { name: 'Consultation', desc: 'Advice on audiovisual projects' }
  }
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

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    };
    return date.toLocaleDateString(lang === 'es' ? 'es-BO' : 'en-US', options);
  };

  // Format date for input
  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Save to localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = {
      ...formData,
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setIsSubmitting(false);
    setSubmitted(true);

    if (onSuccess) {
      onSuccess(newBooking);
    }

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
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
    }, 5000);
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
    successTitle: lang === 'es' ? '¡Reserva Confirmada!' : 'Booking Confirmed!',
    successMessage: lang === 'es'
      ? 'Te contactaremos pronto para confirmar los detalles finales.'
      : 'We will contact you soon to confirm final details.',

    // Labels
    duration: lang === 'es' ? 'Duración' : 'Duration',
    deposit: lang === 'es' ? 'Depósito' : 'Deposit',
    selectService: lang === 'es' ? 'Seleccionar' : 'Select',
    selectDate: lang === 'es' ? 'Seleccionar fecha' : 'Select date',
    selectTime: lang === 'es' ? 'Seleccionar hora' : 'Select time',
    required: lang === 'es' ? 'Requerido' : 'Required'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
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
            className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-lg p-8 text-center"
          >
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{bt.successTitle}</h3>
            <p className="text-stone-300">{bt.successMessage}</p>
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
                      onClick={() => setSelectedService(service.id)}
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
                          <h4 className="font-bold text-white mb-1">{serviceLang.name}</h4>
                          <p className="text-sm text-stone-400 mb-2">{serviceLang.desc}</p>
                          <div className="flex items-center gap-4 text-xs font-mono text-gold">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </span>
                            {service.deposit > 0 && (
                              <span>{bt.deposit}: {service.deposit}%</span>
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
                    {TIME_SLOTS.map((time) => {
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
                    {selectedDate && formatDate(new Date(selectedDate))}
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
                  <label className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gold" />
                    {bt.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.nameLabel}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-gold" />
                    {bt.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.emailLabel}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-gold" />
                    {bt.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder={bt.phoneLabel}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    {bt.notesLabel}
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder={bt.notesPlaceholder}
                  />
                </div>
              </div>

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
            </form>
          )}
        </motion.div>
      )}
    </div>
  );
}
