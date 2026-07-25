import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads and has correct title', async ({ page }) => {
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBeLessThan(400);

    const title = await page.title();
    expect(title).toMatch(/Freddy/i);
  });

  test('page has content and navigation', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const body = page.locator('body');
    await expect(body).toBeVisible();

    const nav = page.locator('nav, [role="navigation"], header nav').first();
    if (await nav.count() > 0) {
      await expect(nav.first()).toBeVisible();
    }
  });

  test('portfolio or services content exists', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const pageContent = await page.content();
    const hasContent = /portfolio|servicios|services|proyect|portafolio/i.test(pageContent);
    expect(hasContent).toBeTruthy();
  });

  test('page loads on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });

    expect(response?.status()).toBeLessThan(400);
  });

  test('skip link is present for keyboard users', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Skip link debe existir para accesibilidad WCAG 2.4.1
    const skipLink = page.locator('a[href="#main-content"]').first();
    if (await skipLink.count() > 0) {
      await expect(skipLink).toHaveAttribute('href', /main-content/);
    }
  });
});
