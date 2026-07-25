import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Tests de accesibilidad automatizados con axe-core (WCAG 2.1 AA).
 * Corren contra el servidor de preview local servido por Vite en CI,
 * o contra el baseURL configurado en playwright.config.ts en dev.
 *
 * Reglas que validamos:
 * - Sin violaciones críticas ni serias en páginas principales
 * - Contraste de color, navegación por teclado, ARIA roles correctos
 * - Label de inputs, headings ordenados, landmarks (main/nav/header)
 */

const PAGES_TO_TEST = [
  '/',
  '/sobre-mi',
  '/portafolio',
  '/servicios',
  '/contacto',
];

test.describe('Accesibilidad axe-core', () => {
  for (const path of PAGES_TO_TEST) {
    test(` página ${path} no tiene violaciones WCAG AA críticas`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'domcontentloaded' });

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const blocking = results.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious',
      );

      if (blocking.length > 0) {
        const summary = blocking
          .map(
            (v) =>
              `  - [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodos)`,
          )
          .join('\n');
        throw new Error(
          `Violaciones de accesibilidad en ${path}:\n${summary}\nVer: https://dequeuniversity.com/rules/axe`,
        );
      }

      expect(blocking).toEqual([]);
    });
  }
});
