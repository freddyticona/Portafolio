import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
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
            // Animation library
            if (id.includes('node_modules/motion')) {
              return 'motion';
            }
            // Icons
            if (id.includes('node_modules/lucide-react')) {
              return 'icons';
            }
            // PDF generation
            if (id.includes('node_modules/jspdf') || id.includes('node_modules/html2pdf')) {
              return 'pdf';
            }
            // Firebase
            if (id.includes('node_modules/firebase')) {
              return 'firebase';
            }
          },
        },
      },
      // Límite de advertencia de chunk size (aumentado temporalmente)
      chunkSizeWarningLimit: 600,
      // Optimización de CSS
      cssCodeSplit: true,
      // Minificación habilitada por defecto
      minify: true,
    },
    // Compresión con Brotli (Vercel lo hace automáticamente)
    reportCompressedSize: true,
  };
});
