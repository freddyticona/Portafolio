/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Tienda digital: listado (/tienda) y ficha (/tienda/<slug>).
 * Sin scripts de publicidad externa (skill monetizacion-hibrida).
 */
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Download, ExternalLink, MessageCircle, ShoppingBag } from 'lucide-react';
import { STORE_PRODUCTS, StoreProduct, checkoutConfigured, checkoutUrl, whatsappUrl } from '../data/storeProducts';
import { injectStructuredData, generateBreadcrumbList } from '../lib/structuredData';
import { fitTitle, fitDescription } from '../lib/seo';
import { PortfolioEvents } from '../lib/analytics';

const SITE = 'https://freddydev.net';
const OG_STORE = `${SITE}/images/OG/OG_TIENDA.webp`;

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

function setCanonicalAndHreflang(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
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
}

export function StorePage({ lang }: { lang: 'es' | 'en' }) {
  const es = lang === 'es';

  useEffect(() => {
    const title = fitTitle(es ? 'Tienda Digital | Recursos para Creadores' : 'Digital Store | Creator Resources');
    const desc = fitDescription(es
      ? 'Compra guiones para Reels, LUTs cinematográficos y el compendio de guías de Bolivia 2026. Descarga inmediata y pago local por WhatsApp.'
      : 'Buy Reels scripts, cinematic LUTs and the Bolivia 2026 procedures compendium. Instant download and local WhatsApp payment.');
    document.title = title;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image', OG_STORE);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', OG_STORE);
    setCanonicalAndHreflang(`${SITE}/tienda`);
    injectStructuredData({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: es ? 'Tienda Digital' : 'Digital Store',
      description: desc,
      url: `${SITE}/tienda`,
    });
    return () => { document.getElementById('dynamic-structured-data')?.remove(); };
  }, [lang, es]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fadeIn">
      <header className="text-center space-y-3">
        <span className="text-gold font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
          {es ? 'Recursos listos para usar' : 'Ready-to-use resources'}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
          {es ? 'Tienda Digital' : 'Digital Store'}
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-stone-400 leading-relaxed">
          {es
            ? 'Herramientas creadas a partir de mi trabajo real en televisión y documentales. Pago internacional o transferencia local en Bolivia.'
            : 'Tools built from my real work in television and documentaries. International checkout or local payment in Bolivia.'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_PRODUCTS.map((product) => {
          const price = es ? `Bs. ${product.priceBob}` : `USD ${product.priceUsd}`;
          return (
            <article key={product.id} className="bg-[#020202] border border-white/10 rounded-lg overflow-hidden hover:border-gold/30 transition-colors flex flex-col">
              <a href={`/tienda/${product.slug}`} className="block aspect-[12/6.3] overflow-hidden bg-[#050505]">
                <img
                  src={product.preview}
                  alt={es ? product.nameEs : product.nameEn}
                  width={1200}
                  height={630}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </a>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-white font-display leading-snug">
                    <a href={`/tienda/${product.slug}`} className="hover:text-gold transition-colors">
                      {es ? product.nameEs : product.nameEn}
                    </a>
                  </h2>
                  {((es && product.badgeEs) || (!es && product.badgeEn)) && (
                    <span className="shrink-0 px-2 py-1 bg-gold/15 border border-gold/30 text-gold text-[9px] font-mono font-bold uppercase rounded-sm">
                      {es ? product.badgeEs : product.badgeEn}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-400 leading-relaxed flex-1">
                  {es ? product.descriptionEs : product.descriptionEn}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-stone-800">
                  <span className="text-xl font-black text-gold">{price}</span>
                  <a
                    href={`/tienda/${product.slug}`}
                    onClick={() => PortfolioEvents.viewItem(es ? product.nameEs : product.nameEn)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
                  >
                    {es ? 'Ver detalles' : 'View details'} →
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="text-center text-xs text-stone-500 flex items-center justify-center gap-2">
        <Download className="w-4 h-4 text-gold" />
        {es ? 'Entrega inmediata después del pago · sin anuncios ni scripts de terceros' : 'Instant delivery after payment · no ads or third-party scripts'}
      </div>
    </div>
  );
}

interface DetailProps {
  product: StoreProduct;
  lang: 'es' | 'en';
  onBack: () => void;
}

export function StoreProductPage({ product, lang, onBack }: DetailProps) {
  const es = lang === 'es';
  const url = `${SITE}/tienda/${product.slug}`;
  const name = es ? product.nameEs : product.nameEn;
  const price = es ? product.priceBob : product.priceUsd;
  const currency = es ? 'BOB' : 'USD';
  const deliverables = es ? product.deliverablesEs : product.deliverablesEn;

  useEffect(() => {
    const title = fitTitle(`${name} | ${es ? 'Tienda Digital' : 'Digital Store'}`);
    const desc = fitDescription(es
      ? `${name} por Bs. ${product.priceBob}. ${product.descriptionEs} Descarga inmediata.`
      : `${name} for USD ${product.priceUsd}. ${product.descriptionEn} Instant download.`);
    document.title = title;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:image', `${SITE}${product.ogImage}`);
    setMeta('property', 'og:type', 'product');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', `${SITE}${product.ogImage}`);
    setCanonicalAndHreflang(url);

    injectStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          '@id': `${url}#product`,
          name,
          description: es ? product.descriptionEs : product.descriptionEn,
          image: `${SITE}${product.preview}`,
          sku: product.id,
          brand: { '@type': 'Brand', name: 'Freddy Ticona' },
          offers: {
            '@type': 'Offer',
            price: String(product.priceUsd),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url,
          },
        },
        generateBreadcrumbList([
          { name: 'Inicio', url: SITE },
          { name: es ? 'Tienda' : 'Store', url: `${SITE}/tienda` },
          { name, url },
        ]),
      ],
    });

    // view_item: interés real en el producto (helper blindado).
    PortfolioEvents.viewItem(name, price);
    return () => { document.getElementById('dynamic-structured-data')?.remove(); };
  }, [product, lang, name, url, es, price]);

  const checkoutReady = checkoutConfigured(product);
  const checkout = checkoutUrl(product);
  const local = whatsappUrl(product, lang);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 animate-fadeIn">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-gold-hover transition-colors">
        <ArrowLeft className="w-4 h-4" />
        {es ? 'Volver a la tienda' : 'Back to store'}
      </button>

      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="aspect-[12/6.3] overflow-hidden rounded-sm border border-white/10 bg-[#050505]">
          <img src={product.preview} alt={name} width={1200} height={630} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 text-gold font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            <ShoppingBag className="w-3.5 h-3.5" />
            {es ? 'Producto digital' : 'Digital product'}
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">{name}</h1>
          <p className="text-sm text-stone-300 leading-relaxed">{es ? product.descriptionEs : product.descriptionEn}</p>
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-black text-gold">{es ? `Bs. ${product.priceBob}` : `USD ${product.priceUsd}`}</span>
            {es && <span className="text-xs text-stone-500">≈ USD {product.priceUsd}</span>}
          </div>

          <div className="space-y-3 pt-2">
            {/* CTA primario: pago local, siempre activo */}
            <a
              href={local}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                PortfolioEvents.beginCheckout(name, price);
                PortfolioEvents.whatsappClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1FB855] text-black font-bold rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {es ? 'Comprar por WhatsApp / QR (Bolivia)' : 'Buy on WhatsApp / QR (Bolivia)'}
            </a>
            {/* CTA secundario: solo si hay URL de checkout real configurada */}
            {checkoutReady ? (
              <a
                href={checkout}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => PortfolioEvents.beginCheckout(name, price)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-hover text-black font-bold rounded-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {es ? 'Pagar con tarjeta (internacional)' : 'Pay by card (international)'}
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-stone-500 text-sm font-bold rounded-sm cursor-not-allowed"
              >
                <ExternalLink className="w-4 h-4" />
                {es ? 'Pago con tarjeta próximamente' : 'Card payment coming soon'}
              </button>
            )}
          </div>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            {es
              ? 'Paga ya por WhatsApp y recibe el archivo de inmediato por transferencia o QR. El pago con tarjeta internacional se activará cuando se configure el checkout.'
              : 'Pay now on WhatsApp and get the file instantly via transfer or QR. International card checkout will be enabled once configured.'}
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display">
          {es ? 'Qué incluye' : 'What is included'}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-stone-300 bg-white/[0.02] border border-white/10 rounded-sm p-4">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
