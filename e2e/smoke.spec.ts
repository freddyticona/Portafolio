import { test, expect } from '@playwright/test';

test.describe('Smoke tests for freddydev.net', () => {
  test('homepage loads and has correct title', async ({ page }) => {
    const response = await page.goto('https://freddydev.net', {
      waitUntil: 'domcontentloaded'
    });
    expect(response?.status()).toBeLessThan(400);

    // Verify page has content
    const title = await page.title();
    expect(title).toMatch(/Freddy/i);
  });

  test('page has content and navigation', async ({ page }) => {
    await page.goto('https://freddydev.net', {
      waitUntil: 'domcontentloaded'
    });

    // Check that page has body content
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Check for any navigation element
    const nav = page.locator('nav, [role="navigation"], header nav').first();
    if (await nav.count() > 0) {
      await expect(nav.first()).toBeVisible();
    }
  });

  test('portfolio or services content exists', async ({ page }) => {
    await page.goto('https://freddydev.net', {
      waitUntil: 'domcontentloaded'
    });

    // Check for portfolio or services related content
    const pageContent = await page.content();
    const hasContent = /portfolio|servicios|services|project|proyect/i.test(pageContent);
    expect(hasContent).toBeTruthy();
  });

  test('page loads on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const response = await page.goto('https://freddydev.net', {
      waitUntil: 'domcontentloaded'
    });

    expect(response?.status()).toBeLessThan(400);
  });
});
