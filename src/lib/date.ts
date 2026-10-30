/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * date.ts — Utilidades de fecha para el contenido editorial.
 *
 * Las fechas de los artículos se guardan como 'YYYY-MM-DD'. `new Date('2026-10-26')`
 * se interpreta como medianoche UTC y, al formatear en Bolivia (UTC-4), retrocede
 * un día. Aquí se construyen siempre a mediodía local para evitar ese salto.
 */

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Convierte una fecha 'YYYY-MM-DD' (o ISO completa) a un Date local seguro.
 * @param date fecha en formato ISO
 * @returns Date a mediodía local, o `null` si no se puede interpretar
 */
export function parsePostDate(date?: string | null): Date | null {
  if (!date) return null;

  const iso = ISO_DATE.exec(date);
  if (iso) {
    return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]), 12, 0, 0);
  }

  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Formatea la fecha de un artículo respetando el día calendario original.
 */
export function formatPostDate(
  date: string | undefined | null,
  locale: string,
  options: Intl.DateTimeFormatOptions,
): string {
  const parsed = parsePostDate(date);
  if (!parsed) return '';
  return parsed.toLocaleDateString(locale, options);
}

/**
 * Indica si la fecha está dentro de las últimas `hours` horas.
 */
export function isRecentPostDate(date: string | undefined | null, hours = 48): boolean {
  const parsed = parsePostDate(date);
  if (!parsed) return false;
  return (Date.now() - parsed.getTime()) / (1000 * 60 * 60) < hours;
}

/**
 * Marca temporal para ordenar artículos por fecha (los inválidos van al final).
 */
export function postDateTimestamp(date?: string | null): number {
  return parsePostDate(date)?.getTime() ?? 0;
}
