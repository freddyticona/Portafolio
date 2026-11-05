/**
 * Helpers de maquetación para las guías nacionales 2026.
 * Mantienen los componentes canónicos del sitio: report-figure, stat-grid,
 * expert-quote, doc-card y report-chapter.
 */

export const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

export const stats = (items) =>
  `<div class="stat-grid">${items
    .map(
      ([value, label]) =>
        `<div class="stat-card"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`
    )
    .join('')}</div>`;

export const quote = (text, initials, name, role) =>
  `<div class="expert-quote"><p class="expert-quote-text">&ldquo;${text}&rdquo;</p><div class="expert-quote-author"><div class="expert-quote-initial">${initials}</div><div><div class="expert-quote-name">${name}</div><div class="expert-quote-role">${role}</div></div></div></div>`;

export const doc = (href, icon, title, desc) =>
  `<a class="doc-card" href="${href}" target="_blank" rel="noopener noreferrer"><div class="doc-card-icon blue">${icon}</div><div><div class="doc-card-title">${title}</div><div class="doc-card-desc">${desc}</div></div></a>`;

export const CAT_ES = 'Guías y Trámites';
export const CAT_EN = 'Guides & Procedures';
export const IMG = '/images/guia';
