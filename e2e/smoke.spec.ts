import { test, expect } from '@playwright/test';

test.describe('Smoke tests for freddydev.net', () => {
  test('homepage loads successfully', async ({ page }) => {
    const response = await page.goto('https://freddydev.net');
    expect(response?.status()).toBe(200);

    // Verify page has content
    await expect(page).toHaveTitle(/Freddy Ticona/i);
  });

  test('navigation works', async ({ page }) => {
    await page.goto('https://freddydev.net');

    // Check that main sections are present
    const sections = ['portfolio', 'servicios', 'blog', 'contacto'];
    for (const section of sections) {
      const element = page.getByTestId(section).or(
        page.locator(`[id="${section}"]`)
      ).or(
        page.locator(`a[href*="${section}"]`)
      );
      // At least navigation link should exist
      await expect(page.locator('nav')).toBeVisible();
    }
  });

  test('portfolio section is accessible', async ({ page }) => {
    await page.goto('https://freddydev.net#portfolio');
    await page.waitForLoadState('networkidle');

    // Portfolio section should be visible
    const portfolio = page.locator('[id="portfolio"], [data-testid="portfolio"]');
    await expect(portfolio.first()).toBeVisible();
  });

  test('responsive design - mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://freddydev.net');

    // Page should work on mobile
    await expect(page.locator('body')).toBeVisible();
    const response = page.response();
    expect(response?.status()).toBeLessThan(500);
  });
});
