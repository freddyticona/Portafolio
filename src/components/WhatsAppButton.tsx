/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  lang?: 'es' | 'en';
}

export default function WhatsAppButton({
  phoneNumber = '+59162408420',
  message,
  lang = 'es'
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const defaultMessage = lang === 'es'
    ? 'Hola Freddy, vi tu portafolio y me gustaría conversar sobre un proyecto.'
    : 'Hi Freddy, I saw your portfolio and would like to discuss a project.';

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  // Ocultar efecto pulse después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Chat preview (cuando está abierto y no minimizado) */}
      {isOpen && !isMinimized && (
        <div className="mb-2 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl overflow-hidden w-72 animate-scale-in">
          {/* Header */}
          <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">
                {lang === 'es' ? 'Freddy Ticona' : 'Freddy Ticona'}
              </div>
              <div className="text-white/70 text-xs">
                {lang === 'es' ? 'Generalmente responde en 1 hora' : 'Usually replies in 1 hour'}
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 hover:bg-white/10 rounded-sm transition-colors"
            >
              <Minimize2 className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#0a0a0a]">
            <div className="bg-white/5 rounded-sm p-3 mb-3">
              <p className="text-stone-300 text-sm leading-relaxed">
                {lang === 'es'
                  ? '👋 ¡Hola! Estoy disponible para proyectos de video, documentales y cobertura audiovisual.'
                  : '👋 Hi! I\'m available for video projects, documentaries and audiovisual coverage.'}
              </p>
            </div>

            <button
              onClick={handleClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25d366] hover:bg-[#128c7e] text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === 'es' ? 'Iniciar conversación' : 'Start conversation'}
            </button>

            <p className="text-stone-500 text-xs text-center mt-3">
              {lang === 'es' ? 'Powered by WhatsApp' : 'Powered by WhatsApp'}
            </p>
          </div>
        </div>
      )}

      {/* Minimized indicator */}
      {isOpen && isMinimized && (
        <div className="mb-2 px-3 py-1.5 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-lg flex items-center gap-2 animate-scale-in">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-stone-300 text-xs">
            {lang === 'es' ? 'Chat disponible' : 'Chat available'}
          </span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto text-stone-400 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          showPulse ? 'animate-pulse-slow' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Pulse ring */}
        {showPulse && (
          <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping" style={{ animationDuration: '2s' }} />
        )}
      </button>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
