import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {sentryVitePlugin} from '@sentry/vite-plugin';
import type { Plugin, HtmlTagDescriptor } from 'vite';

function makeCssNonBlocking(): Plugin {
  return {
    name: 'make-css-non-blocking',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html: string): string | HtmlTagDescriptor[] {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/g,
          '<link rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin href="$1"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
        );
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      makeCssNonBlocking(),
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Optimización de chunk splitting
      rollupOptions: {
        output: {
          // Dividir el código en chunks más pequeños
          manualChunks(id) {
            // Vendor chunk: React y librerías principales
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
            // PDF generation - solo cargar cuando se necesite
            if (id.includes('node_modules/jspdf') || id.includes('node_modules/html2pdf')) {
              return 'pdf';
            }
            // Firebase - separar para mejor caching
            if (id.includes('node_modules/firebase')) {
              return 'firebase';
            }
            // Sentry - vendor separado
            if (id.includes('node_modules/@sentry')) {
              return 'sentry';
            }
          },
          // Optimizar nombres de chunks para mejor caching
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
      // No precargar chunks lazy (reduces TBT)
      modulePreload: false,
      // Límite de advertencia de chunk size (reducido para mantener bundles pequeños)
      chunkSizeWarningLimit: 300,
      // Optimización de CSS
      cssCodeSplit: true,
      // Minificación habilitada por defecto
      minify: 'esbuild',
      // Eliminar console.log en producción
      esbuildOptions: {
        drop: process.env.NODE_ENV !== 'development' ? ['console', 'debugger'] : [],
      },
      // Source maps: desactivado en producción (seguridad, no exponer source code)
      sourcemap: process.env.NODE_ENV === 'development' ? true : false,
    },
    // Compresión con Brotli (Vercel lo hace automáticamente)
    reportCompressedSize: true,
    test: {
      exclude: ['e2e/**', 'node_modules/**'],
    },
  };
});
