import { defineConfig } from '@playwright/test';

/**
 * En CI: arrancamos `vite preview` (sirve el build de dist/) en el puerto 4173.
 * En local: reutilizamos `npm run dev` en :3000 si ya está corriendo.
 * El baseURL se puede sobreescribir con BASE_URL (ej. staging o prod).
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  retries: process.env.CI ? 2 : 1,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: process.env.BASE_URL || (process.env.CI ? 'http://localhost:4173' : 'http://localhost:3000'),
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: process.env.CI
    ? {
        command: 'npx vite preview --port=4173',
        port: 4173,
        timeout: 120_000,
        reuseExistingServer: false,
      }
    : {
        command: 'npm run dev',
        port: 3000,
        reuseExistingServer: true,
        timeout: 30_000,
      },
});
