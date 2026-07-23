import React from 'react';
import { Shield, X, FileText, Cookie, ExternalLink, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../config';

interface PrivacyModalProps {
  lang: 'es' | 'en';
  onClose: () => void;
}

export default function PrivacyModal({ lang, onClose }: PrivacyModalProps) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            {lang === 'es' ? 'Política de Privacidad y Cookies' : 'Privacy & Cookies Policy'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-sm transition-colors cursor-pointer" aria-label="Cerrar">
            <X className="w-4 h-4 text-stone-400" />
          </button>
        </div>

        <div className="space-y-5 text-sm text-stone-300 leading-relaxed">
          {lang === 'es' ? (
            <>
              <p><strong className="text-white">FreddyDev.net</strong> (en adelante, "el Sitio") se compromete a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tus datos personales, en cumplimiento del <strong className="text-white">Reglamento General de Protección de Datos (GDPR)</strong> de la Unión Europea y la <strong className="text-white">Ley N° 164 de Protección de Datos Personales</strong> del Estado Plurinacional de Bolivia.</p>

              <h3 className="text-base font-bold text-white font-display mt-6">1. Datos que recopilamos</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión (Google Analytics).</li>
                <li><strong className="text-white">Datos de contacto:</strong> solo si completas el formulario de contacto (nombre, correo electrónico, mensaje).</li>
                <li><strong className="text-white">Comentarios:</strong> nombre, correo electrónico y contenido del comentario en artículos del blog.</li>
                <li><strong className="text-white">Cookies técnicas:</strong> necesarias para el funcionamiento del sitio (preferencias de idioma, consentimiento de cookies).</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">2. Base legal del tratamiento</h3>
              <p>El tratamiento de tus datos se basa en:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Consentimiento explícito:</strong> cookies analíticas y de marketing (GDPR Art. 6.1.a).</li>
                <li><strong className="text-white">Interés legítimo:</strong> cookies técnicas necesarias para el funcionamiento del sitio (GDPR Art. 6.1.f).</li>
                <li><strong className="text-white">Relación contractual:</strong> datos de contacto para responder a consultas (Ley N° 164, Art. 14).</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">3. Tus derechos</h3>
              <p>Según el GDPR y la Ley N° 164, tienes derecho a:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Acceder</strong> a tus datos personales almacenados.</li>
                <li><strong className="text-white">Rectificar</strong> datos inexactos o incompletos.</li>
                <li><strong className="text-white">Suprimir</strong> tus datos ("derecho al olvido").</li>
                <li><strong className="text-white">Limitar</strong> el tratamiento de tus datos.</li>
                <li><strong className="text-white">Portabilidad</strong> de tus datos a otro responsable.</li>
                <li><strong className="text-white">Oponerte</strong> al tratamiento con fines de marketing.</li>
                <li><strong className="text-white">Retirar el consentimiento</strong> en cualquier momento.</li>
              </ul>
              <p>Para ejercer estos derechos, contáctanos a: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold hover:underline">{CONTACT_INFO.email}</a></p>

              <h3 className="text-base font-bold text-white font-display mt-6">4. Cookies</h3>
              <div className="bg-white/[0.03] border border-white/5 rounded-sm p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Cookies utilizadas</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-stone-400 font-mono">Cookie</th>
                      <th className="text-left py-2 text-stone-400 font-mono">Propósito</th>
                      <th className="text-left py-2 text-stone-400 font-mono">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white font-mono">cookie-consent</td>
                      <td className="py-2 text-stone-400">Registra tu preferencia de cookies</td>
                      <td className="py-2 text-stone-400">1 año</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white font-mono">_ga / _ga_*</td>
                      <td className="py-2 text-stone-400">Google Analytics (análisis de tráfico)</td>
                      <td className="py-2 text-stone-400">2 años</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white font-mono">fbp</td>
                      <td className="py-2 text-stone-400">Facebook Pixel (si aplica)</td>
                      <td className="py-2 text-stone-400">3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-white font-display mt-6">5. Servicios de terceros</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Google Analytics 4</strong> (G-XRW2HZHB69) — análisis de audiencia.</li>
                <li><strong className="text-white">Firebase Firestore</strong> — almacenamiento de comentarios.</li>
                <li><strong className="text-white">Sentry</strong> — monitoreo de errores técnicos.</li>
                <li><strong className="text-white">Vercel</strong> — hosting del sitio.</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">6. Seguridad de los datos</h3>
              <p>Implementamos medidas técnicas y organizativas para proteger tus datos: cifrado SSL/TLS (HTTPS), acceso restringido a bases de datos, y políticas internas de minimización de datos.</p>

              <h3 className="text-base font-bold text-white font-display mt-6">7. Contacto</h3>
              <p>Para consultas sobre privacidad o ejercer tus derechos, escríbenos a: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold hover:underline">{CONTACT_INFO.email}</a></p>

              <p className="text-stone-500 text-xs mt-6">Última actualización: julio 2026</p>
            </>
          ) : (
            <>
              <p><strong className="text-white">FreddyDev.net</strong> (hereinafter "the Site") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data, in compliance with the <strong className="text-white">EU General Data Protection Regulation (GDPR)</strong> and Bolivia's <strong className="text-white">Law N° 164 on Personal Data Protection</strong>.</p>

              <h3 className="text-base font-bold text-white font-display mt-6">1. Data we collect</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Browsing data:</strong> IP address, browser type, pages visited, session time (Google Analytics).</li>
                <li><strong className="text-white">Contact data:</strong> only if you fill the contact form (name, email, message).</li>
                <li><strong className="text-white">Comments:</strong> name, email, and comment content on blog posts.</li>
                <li><strong className="text-white">Technical cookies:</strong> necessary for site operation (language preference, cookie consent).</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">2. Legal basis for processing</h3>
              <p>Your data is processed based on:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Explicit consent:</strong> analytics and marketing cookies (GDPR Art. 6.1.a).</li>
                <li><strong className="text-white">Legitimate interest:</strong> necessary technical cookies (GDPR Art. 6.1.f).</li>
                <li><strong className="text-white">Contractual relationship:</strong> contact data to respond to inquiries.</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">3. Your rights</h3>
              <p>Under GDPR and Law N° 164, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Access</strong> your stored personal data.</li>
                <li><strong className="text-white">Rectify</strong> inaccurate or incomplete data.</li>
                <li><strong className="text-white">Erase</strong> your data ("right to be forgotten").</li>
                <li><strong className="text-white">Restrict</strong> processing of your data.</li>
                <li><strong className="text-white">Portability</strong> of your data.</li>
                <li><strong className="text-white">Object</strong> to processing for marketing.</li>
                <li><strong className="text-white">Withdraw consent</strong> at any time.</li>
              </ul>
              <p>To exercise these rights, contact us at: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold hover:underline">{CONTACT_INFO.email}</a></p>

              <h3 className="text-base font-bold text-white font-display mt-6">4. Cookies</h3>
              <div className="bg-white/[0.03] border border-white/5 rounded-sm p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Cookies used</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-stone-400 font-mono">Cookie</th>
                      <th className="text-left py-2 text-stone-400 font-mono">Purpose</th>
                      <th className="text-left py-2 text-stone-400 font-mono">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white font-mono">cookie-consent</td>
                      <td className="py-2 text-stone-400">Stores your cookie preference</td>
                      <td className="py-2 text-stone-400">1 year</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white font-mono">_ga / _ga_*</td>
                      <td className="py-2 text-stone-400">Google Analytics (traffic analysis)</td>
                      <td className="py-2 text-stone-400">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white font-mono">fbp</td>
                      <td className="py-2 text-stone-400">Facebook Pixel (if applicable)</td>
                      <td className="py-2 text-stone-400">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-white font-display mt-6">5. Third-party services</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-white">Google Analytics 4</strong> (G-XRW2HZHB69) — audience analysis.</li>
                <li><strong className="text-white">Firebase Firestore</strong> — comment storage.</li>
                <li><strong className="text-white">Sentry</strong> — error monitoring.</li>
                <li><strong className="text-white">Vercel</strong> — site hosting.</li>
              </ul>

              <h3 className="text-base font-bold text-white font-display mt-6">6. Data security</h3>
              <p>We implement technical and organizational measures: SSL/TLS encryption (HTTPS), restricted database access, and data minimization policies.</p>

              <h3 className="text-base font-bold text-white font-display mt-6">7. Contact</h3>
              <p>For privacy inquiries or to exercise your rights, email us at: <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold hover:underline">{CONTACT_INFO.email}</a></p>

              <p className="text-stone-500 text-xs mt-6">Last updated: July 2026</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
