/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * ServiceDetailPage — ficha individual de servicio (/servicios/<id>).
 * Cada ficha tiene URL propia, precio visible, FAQ en pantalla y JSON-LD
 * Service + Offer + BreadcrumbList + FAQPage (el mismo contenido en el HTML
 * prerenderizado y en la SPA).
 */
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, MessageCircle, FileText } from 'lucide-react';
import { SERVICES_PRICING } from '../config';
import { injectStructuredData, generateServiceDetailStructuredData } from '../lib/structuredData';
import { fitTitle, fitDescription } from '../lib/seo';
import { PortfolioEvents } from '../lib/analytics';
import QuickQuoteForm from '../components/QuickQuoteForm';
import { LocalAITrust } from '../components/LocalAIDemo';

type Service = (typeof SERVICES_PRICING)[number];

interface Props {
  service: Service;
  services: Service[];
  lang: 'es' | 'en';
  onBack: () => void;
  onContact: (context: { serviceId: string; serviceName: string; price: number }) => void;
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

export default function ServiceDetailPage({ service, services, lang, onBack, onContact }: Props) {
  const isEs = lang === 'es';
  const priceLabel = service.currency === 'BOB' ? `Bs. ${service.basePrice}` : `${service.currency} ${service.basePrice}`;
  const url = `https://freddydev.net/servicios/${service.id}`;
  const name = isEs ? service.nameEs : service.nameEn;
  const features = isEs ? service.featuresEs : service.featuresEn;
  const description = isEs ? service.descriptionEs : service.descriptionEn;

  useEffect(() => {
    const title = fitTitle(isEs
      ? `${service.nameEs} en La Paz 2026 | Desde ${priceLabel}`
      : `${service.nameEn} in La Paz 2026 | From ${priceLabel}`);
    const desc = fitDescription(isEs
      ? `${service.nameEs} en La Paz desde ${priceLabel}. ${service.descriptionEs} Cotiza por WhatsApp.`
      : `${service.nameEn} in La Paz from ${priceLabel}. ${service.descriptionEn} Quote on WhatsApp.`);
    document.title = title;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // hreflang: el contenido se sirve en es/en en la misma URL (toggle),
    // sin rutas /en. Igual criterio que el resto del sitio.
    [['es', url], ['en', url], ['x-default', url]].forEach(([code, href]) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${code}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', code);
        document.head.appendChild(link);
      }
      link.href = href;
    });

    injectStructuredData(generateServiceDetailStructuredData(service, url, lang));

    return () => {
      document.getElementById('dynamic-structured-data')?.remove();
    };
  }, [service, lang, name, url, priceLabel]);

  const faq = [
    {
      q: isEs ? `¿Cuánto cuesta ${name}?` : `How much does ${name} cost?`,
      a: isEs
        ? `El precio base de ${name} es ${priceLabel} (${service.duration}). El costo final se confirma según el alcance del proyecto.`
        : `The base price for ${name} is ${priceLabel} (${service.duration}). The final cost depends on the project scope.`,
    },
    {
      q: isEs ? `¿Qué incluye ${name}?` : `What is included in ${name}?`,
      a: features.join('. ') + '.',
    },
    {
      q: isEs ? '¿En qué ciudades ofreces este servicio?' : 'Where is this service available?',
      a: isEs
        ? 'Trabajo en La Paz y El Alto, y viajo a cualquier departamento de Bolivia para proyectos especiales con viáticos aparte.'
        : 'I work in La Paz and El Alto, and travel anywhere in Bolivia for special projects with travel expenses apart.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 animate-fadeIn">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {isEs ? 'Todos los servicios' : 'All services'}
      </button>

      <header className="space-y-4">
        <span className="text-gold font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
          {isEs ? 'Servicio audiovisual en Bolivia' : 'Audiovisual service in Bolivia'}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          {name} {isEs ? 'en La Paz, Bolivia' : 'in La Paz, Bolivia'}
        </h1>
        <p className="text-stone-300 leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="text-2xl font-black text-gold">{priceLabel}</span>
          <span className="text-stone-500">/ {service.duration}</span>
        </div>
      </header>

      <a
        href={`https://wa.me/59162408420?text=${encodeURIComponent(isEs ? `Hola Freddy, me interesa ${name} (desde ${priceLabel}).` : `Hi Freddy, I'm interested in ${name} (from ${priceLabel}).`)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          PortfolioEvents.whatsappClick();
          PortfolioEvents.selectService(name, service.basePrice);
        }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1FB855] text-black font-bold rounded-sm transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        {isEs ? 'Cotizar por WhatsApp' : 'Quote on WhatsApp'}
      </a>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display">
          {isEs ? 'Qué incluye' : 'What is included'}
        </h2>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display">
          {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
        </h2>
        {faq.map((item, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/10 rounded-sm p-5 space-y-2">
            <h3 className="text-sm font-bold text-gold">{item.q}</h3>
            <p className="text-sm text-stone-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </section>

      {['edicion-preexistente', 'reportaje-impacto', 'video-historia-de-vida', 'cobertura-fotografica'].includes(service.id) && (
        <LocalAITrust lang={lang} compact />
      )}

      <section className="pt-4 border-t border-stone-800 space-y-4">
        <QuickQuoteForm lang={lang} serviceName={name} priceLabel={priceLabel} />
        <button
          onClick={() => {
            PortfolioEvents.selectService(name, service.basePrice);
            onContact({ serviceId: service.id, serviceName: name, price: service.basePrice });
          }}
          className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-stone-400 hover:text-gold transition-colors"
        >
          <FileText className="w-4 h-4" />
          {isEs ? '¿Prefieres el formulario completo?' : 'Prefer the full form?'}
        </button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white font-display">
          {isEs ? 'Otros servicios' : 'Other services'}
        </h2>
        <div className="flex flex-wrap gap-2">
          {services.filter(s => s.id !== service.id).map(s => (
            <a
              key={s.id}
              href={`/servicios/${s.id}`}
              className="px-3 py-1.5 text-xs text-stone-400 hover:text-gold border border-white/10 hover:border-gold/40 rounded-sm transition-colors"
            >
              {isEs ? s.nameEs : s.nameEn}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
