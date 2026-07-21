/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Bot,
  User,
  Camera,
  Video,
  Calendar,
  Phone,
  Mail,
  Award,
  Clock
} from 'lucide-react';

// ==========================================
// TYPES
// ==========================================

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  action?: {
    label: string;
    action: string;
  };
}

interface ChatbotProps {
  lang: 'es' | 'en';
  t: any;
}

// ==========================================
// KNOWLEDGE BASE / RESPONSES
// ==========================================

const KNOWLEDGE_BASE = {
  es: {
    greeting: [
      '¡Hola! 👋 Soy el asistente virtual de Freddy Ticona.',
      '¿En qué puedo ayudarte hoy?'
    ],

    // Services
    services: {
      keywords: ['servicio', 'servicios', 'ofreces', 'haces', 'que', 'qué', 'realizas'],
      response: 'Ofrezco los siguientes servicios:\n\n📹 **Filmación de Eventos** - Cobertura completa con cámara 4K\n\n🎬 **Edición de Video** - Post-producción profesional\n\n🎥 **Documentales/Reportajes** - Producción de contenido largo\n\n📋 **Consultoría** - Asesoría en proyectos audiovisuales\n\n¿Te gustaría agendar una cita?',
      action: { label: '📅 Agendar Cita', action: 'booking' }
    },

    // Pricing
    pricing: {
      keywords: ['precio', 'costo', 'cuanto', 'cuánto', 'tarifa', 'cobras', 'vale'],
      response: 'Los precios varían según el tipo y duración del proyecto:\n\n• Filmación de eventos: desde $50/hora\n• Edición de video: desde $30/hora\n• Documentales: según proyecto\n• Consultoría: $40/hora\n\n¿Te gustaría recibir un cotización personalized?',
      action: { label: '💬 Solicitar Cotización', action: 'contact' }
    },

    // Availability
    availability: {
      keywords: ['disponible', 'disponibilidad', 'cuando', 'cuándo', 'agenda', 'horario', 'libre'],
      response: 'Tengo disponibilidad de lunes a sábado, de 9:00 AM a 7:00 PM.\n\n📍 Ubicación: La Paz, Bolivia\n📱 También disponible para viajes nacionales.\n\n¿Qué fecha tienes en mente?',
      action: { label: '📅 Ver Disponibilidad', action: 'booking' }
    },

    // Experience
    experience: {
      keywords: ['experiencia', 'años', 'trayectoria', 'tiempo', 'antiguedad'],
      response: 'Tengo más de **15 años de experiencia** en el ámbito audiovisual:\n\n🏆 Premio Nacional Eduardo Abaroa 2017\n📺 Trabajé en Bolivia TV, Red Uno, RTP\n🎬 30+ documentales producidos\n\n¿Sobre qué aspecto te gustaría saber más?',
      action: { label: '📄 Ver Portafolio', action: 'portfolio' }
    },

    // Equipment
    equipment: {
      keywords: ['equipo', 'cámara', 'camara', 'equipo', 'tecnología', 'material'],
      response: 'Trabajo con equipo profesional:\n\n📹 Cámaras 4K (Sony, Canon)\n💡 Iluminación profesional\n🎙️ Audio de alta calidad\n🖥️ Suite de edición completa\n\n¿Necesitas cobertura para algún evento?',
      action: { label: '📹 Filmación', action: 'booking' }
    },

    // Location
    location: {
      keywords: ['donde', 'dónde', 'ubicacion', 'ubicación', 'dirección', 'pais', 'país', 'ciudad'],
      response: '📍 **La Paz, Bolivia**\n\nEstoy disponible para:\n• Cobertura en todo el departamento\n• Viajes a otras ciudades (Oruro, Cochabamba, Sucre, Santa Cruz)\n• Locaciones remotas\n\n¿En qué ubicación necesitas servicios?',
      action: { label: '📍 Ver Mapa de Coberturas', action: 'locations' }
    },

    // Contact
    contact: {
      keywords: ['contacto', 'telefono', 'teléfono', 'whatsapp', 'email', 'correo', 'llamar', 'escribir'],
      response: 'Aquí tienes mis datos de contacto:\n\n📱 **WhatsApp:** +591 62408420\n\n📧 **Email:** freddyticona62@gmail.com\n\n💼 **LinkedIn:** linkedin.com/in/freddy-ticona-guzman\n\n¿Prefieres que te contacte yo?',
      action: { label: '📱 Ir a Contacto', action: 'contact' }
    },

    // Portfolio
    portfolio: {
      keywords: ['portafolio', 'trabajos', 'proyectos', 'ejemplos', 'muestra', 'ver'],
      response: 'Puedes ver mi portafolio completo en la sección "Portafolio" del sitio.\n\nIncluye proyectos de:\n• Documentales\n• Cobertura periodística\n• Eventos sociales\n• Producción institucional\n\n¿Qué tipo de proyecto te interesa?',
      action: { label: '🎬 Ver Portafolio', action: 'portfolio' }
    },

    // Awards
    awards: {
      keywords: ['premio', 'reconocimiento', 'abaroa', 'eduardo', 'logro'],
      response: 'Mi mayor reconocimiento es:\n\n🏆 **Premio Nacional Eduardo Abaroa 2017**\nCategoría: Periodismo Cultural\n\nFui reconocido por mi documental "La Estrella del Sur".\n\n¿Te gustaría ver más sobre mi trayectoria?',
      action: { label: '📄 Ver CV', action: 'cv' }
    }
  },

  en: {
    greeting: [
      'Hello! 👋 I am Freddy Ticona\'s virtual assistant.',
      'How can I help you today?'
    ],

    services: {
      keywords: ['service', 'services', 'offer', 'do', 'what', 'provide'],
      response: 'I offer the following services:\n\n📹 **Event Filming** - Full coverage with 4K camera\n\n🎬 **Video Editing** - Professional post-production\n\n🎥 **Documentaries** - Long-form production\n\n📋 **Consultation** - Audiovisual project advice\n\nWould you like to book an appointment?',
      action: { label: '📅 Book Appointment', action: 'booking' }
    },

    pricing: {
      keywords: ['price', 'cost', 'how much', 'rate', 'charge', 'fee'],
      response: 'Prices vary based on project type and duration:\n\n• Event filming: from $50/hour\n• Video editing: from $30/hour\n• Documentaries: project-based\n• Consultation: $40/hour\n\nWould you like a personalized quote?',
      action: { label: '💬 Request Quote', action: 'contact' }
    },

    availability: {
      keywords: ['available', 'availability', 'when', 'schedule', 'hours', 'free'],
      response: 'I am available Monday to Saturday, 9:00 AM to 7:00 PM.\n\n📍 Location: La Paz, Bolivia\n📱 Also available for national travel.\n\nWhat date do you have in mind?',
      action: { label: '📅 Check Availability', action: 'booking' }
    },

    experience: {
      keywords: ['experience', 'years', 'career', 'time', 'background'],
      response: 'I have **15+ years of experience** in audiovisual production:\n\n🏆 National Eduardo Abaroa Award 2017\n📺 Worked at Bolivia TV, Red Uno, RTP\n🎬 30+ documentaries produced\n\nWhat aspect would you like to know more about?',
      action: { label: '📄 View Portfolio', action: 'portfolio' }
    },

    equipment: {
      keywords: ['equipment', 'camera', 'gear', 'technology', 'kit'],
      response: 'I work with professional equipment:\n\n📹 4K Cameras (Sony, Canon)\n💡 Professional lighting\n🎙️ High-quality audio\n🖥️ Full editing suite\n\nDo you need coverage for an event?',
      action: { label: '📹 Filming', action: 'booking' }
    },

    location: {
      keywords: ['where', 'location', 'address', 'country', 'city'],
      response: '📍 **La Paz, Bolivia**\n\nAvailable for:\n• Department-wide coverage\n• Travel to other cities (Oruro, Cochabamba, Sucre, Santa Cruz)\n• Remote locations\n\nWhere do you need services?',
      action: { label: '📍 View Coverage Map', action: 'locations' }
    },

    contact: {
      keywords: ['contact', 'phone', 'whatsapp', 'email', 'call', 'write'],
      response: 'Here is my contact information:\n\n📱 **WhatsApp:** +591 62408420\n\n📧 **Email:** freddyticona62@gmail.com\n\n💼 **LinkedIn:** linkedin.com/in/freddy-ticona-guzman\n\nWould you prefer I contact you?',
      action: { label: '📱 Go to Contact', action: 'contact' }
    },

    portfolio: {
      keywords: ['portfolio', 'work', 'projects', 'examples', 'see'],
      response: 'You can view my complete portfolio in the "Portfolio" section.\n\nIt includes:\n• Documentaries\n• News coverage\n• Social events\n• Corporate production\n\nWhat type of project interests you?',
      action: { label: '🎬 View Portfolio', action: 'portfolio' }
    },

    awards: {
      keywords: ['award', 'recognition', 'abaroa', 'eduardo', 'achievement'],
      response: 'My main recognition is:\n\n🏆 **National Eduardo Abaroa Award 2017**\nCategory: Cultural Journalism\n\nRecognized for my documentary "La Estrella del Sur".\n\nWould you like to see more about my career?',
      action: { label: '📄 View CV', action: 'cv' }
    }
  }
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

const findResponse = (message: string, lang: 'es' | 'en'): { text: string; action?: { label: string; action: string } } | null => {
  const lowerMessage = message.toLowerCase().trim();
  const kb = KNOWLEDGE_BASE[lang];

  // Check each category
  for (const [key, data] of Object.entries(kb)) {
    if (key === 'greeting') continue;

    const category = data as { keywords: string[]; response: string; action?: { label: string; action: string } };

    for (const keyword of category.keywords) {
      if (lowerMessage.includes(keyword)) {
        return {
          text: category.response,
          action: category.action
        };
      }
    }
  }

  // Default response
  return {
    text: lang === 'es'
      ? 'No estoy seguro de entender. ¿Podrías reformular tu pregunta? Puedes preguntarme sobre:\n\n• Mis servicios\n• Precios\n• Disponibilidad\n• Mi experiencia\n• Cómo contactarme'
      : 'I\'m not sure I understand. Could you rephrase? You can ask me about:\n\n• My services\n• Pricing\n• Availability\n• My experience\n• How to contact me'
  };
};

// ==========================================
// COMPONENT
// ==========================================

export default function Chatbot({ lang, t }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Initialize with greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const kb = KNOWLEDGE_BASE[lang];
      kb.greeting.forEach((greeting, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + index,
            type: 'bot',
            text: greeting,
            timestamp: new Date()
          }]);
        }, index * 500);
      });
    }
  }, [isOpen, lang]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = findResponse(inputValue, lang);

      if (response) {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          type: 'bot',
          text: response.text,
          timestamp: new Date(),
          action: response.action
        }]);
      }

      setIsTyping(false);
    }, 1000);
  };

  const handleActionClick = (action: string) => {
    // Handle action button clicks
    switch (action) {
      case 'booking':
        window.location.hash = 'contacto';
        break;
      case 'contact':
        window.location.hash = 'contacto';
        break;
      case 'portfolio':
        window.location.hash = 'portafolio';
        break;
      case 'cv':
        window.location.hash = 'cv';
        break;
      case 'locations':
        window.location.hash = 'sobre-mi';
        break;
    }

    // Add user message about the action
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text: lang === 'es' ? `Quiero ver: ${action}` : `I want to see: ${action}`,
      timestamp: new Date()
    }]);
  };

  const chatbotText = {
    title: lang === 'es' ? 'Asistente Virtual' : 'Virtual Assistant',
    placeholder: lang === 'es' ? 'Escribe tu mensaje...' : 'Type your message...',
    startConversation: lang === 'es' ? 'Iniciar conversación' : 'Start conversation',
    typing: lang === 'es' ? 'Escribiendo...' : 'Typing...'
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gold hover:bg-gold-hover text-black rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors"
          aria-label={chatbotText.title}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`
              fixed bottom-24 right-6 z-50 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl
              ${isMinimized ? 'w-80 h-16' : 'w-80 h-[500px] md:w-96 md:h-[600px]'}
              transition-all duration-300
            `}
          >
            {/* Header */}
            <div className="bg-gold/10 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{chatbotText.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {lang === 'es' ? 'En línea' : 'Online'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 text-stone-400 hover:text-white transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-140px)]">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`
                        flex gap-3
                        ${message.type === 'user' ? 'justify-end' : 'justify-start'}
                      `}
                    >
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4 text-gold" />
                        </div>
                      )}

                      <div className={`
                        max-w-[80%] p-3 rounded-lg text-sm
                        ${message.type === 'user'
                          ? 'bg-gold text-black'
                          : 'bg-white/5 text-stone-300 border border-white/10'
                        }
                      `}>
                        {/* Parse markdown-like text */}
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {message.text.split('\n').map((line, i) => (
                            <p key={i} className={line.startsWith('•') || line.startsWith('📹') || line.startsWith('🎬') || line.startsWith('🎥') || line.startsWith('📋') || line.startsWith('🏆') || line.startsWith('📺') ? 'font-bold' : ''}>
                              {line || ' '}
                            </p>
                          ))}
                        </div>

                        {/* Action Button */}
                        {message.action && (
                          <button
                            onClick={() => handleActionClick(message.action!.action)}
                            className="mt-3 w-full px-3 py-2 bg-gold/20 hover:bg-gold/30 border border-gold/30 rounded text-xs font-bold text-gold transition-colors"
                          >
                            {message.action.label}
                          </button>
                        )}

                        {/* Timestamp */}
                        <div className={`
                          text-[10px] mt-1 opacity-70
                          ${message.type === 'user' ? 'text-black/70' : 'text-stone-500'}
                        `}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-stone-400" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-gold" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-white/10 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={chatbotText.placeholder}
                      className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2.5 bg-gold hover:bg-gold-hover text-black rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
