/**
 * Tipado y helpers de la tienda digital.
 * La fuente única de datos es `src/data/storeProducts.json` (la leen también
 * los scripts de build para el sitemap y el HTML prerenderizado).
 */

import rawProducts from './storeProducts.json';

export interface StoreProduct {
  id: string;
  slug: string;
  nameEs: string;
  nameEn: string;
  descriptionEs: string;
  descriptionEn: string;
  priceUsd: number;
  priceBob: number;
  deliverablesEs: string[];
  deliverablesEn: string[];
  preview: string;
  ogImage: string;
  checkoutEnv: string;
  checkoutPlaceholder: string;
  badgeEs?: string;
  badgeEn?: string;
}

export const STORE_PRODUCTS: StoreProduct[] = rawProducts as StoreProduct[];

/**
 * true solo cuando hay una URL real configurada (no vacía ni placeholder).
 * Evita enlaces rotos en producción mientras se configuran los cobros.
 */
export function checkoutConfigured(product: StoreProduct): boolean {
  const value = (import.meta.env as unknown as Record<string, string | undefined>)[product.checkoutEnv]?.trim();
  return Boolean(value && !value.includes('REPLACE_WITH_PRODUCT_ID'));
}

/** Devuelve el enlace de checkout configurado o el placeholder documentado. */
export function checkoutUrl(product: StoreProduct): string {
  const value = (import.meta.env as unknown as Record<string, string | undefined>)[product.checkoutEnv]?.trim();
  return value && !value.includes('REPLACE_WITH_PRODUCT_ID') ? value : product.checkoutPlaceholder;
}

export function whatsappUrl(product: StoreProduct, lang: 'es' | 'en'): string {
  const price = lang === 'es' ? `Bs. ${product.priceBob}` : `USD ${product.priceUsd}`;
  const text = lang === 'es'
    ? `Hola Freddy, quiero comprar "${product.nameEs}" (${price}). ¿Cómo hago el pago en Bolivia?`
    : `Hi Freddy, I want to buy "${product.nameEn}" (${price}). How can I pay in Bolivia?`;
  return `https://wa.me/59162408420?text=${encodeURIComponent(text)}`;
}
