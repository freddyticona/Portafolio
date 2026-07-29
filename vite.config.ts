import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin, type PluginOption} from 'vite';
import {sentryVitePlugin} from '@sentry/vite-plugin';

/** Hace que la CSS no sea render-blocking: preload + onload upgrade */
function makeCssNonBlocking(): Plugin {
  return {
    name: 'make-css-non-blocking',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        '<link rel="stylesheet" crossorigin href="/assets/',
        '<link rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin href="/assets/'
      );
    },
  };
}

export default defineConfig(() => {
  const plugins: PluginOption[] = [react(), tailwindcss(), makeCssNonBlocking()];

  // Sentry plugin solo se activa si hay auth token (evita warnings en builds locales)
  if (process.env.SENTRY_AUTH_TOKEN && process.env.SENTRY_ORG && process.env.SENTRY_PROJECT) {
    plugins.push(
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
      })
    );
  }

  return {
    plugins,
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
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/firebase')) {
              return 'firebase';
            }
            if (id.includes('node_modules/@sentry')) {
              return 'sentry';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'lucide-icons';
            }
            if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
              return 'motion';
            }
            if (id.includes('node_modules/marked')) {
              return 'marked';
            }
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
      modulePreload: true,
      chunkSizeWarningLimit: 300,
      cssCodeSplit: true,
      minify: 'esbuild',
      esbuildOptions: {
        drop: process.env.NODE_ENV !== 'development' ? ['console', 'debugger'] : [],
      },
      sourcemap: process.env.NODE_ENV === 'development' ? true : false,
    },
    reportCompressedSize: true,
    test: {
      exclude: ['e2e/**', 'node_modules/**'],
    },
  };
});
