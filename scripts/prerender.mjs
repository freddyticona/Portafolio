/**
 * Puppeteer prerender — renderiza rutas principales con Chrome headless.
 * Las páginas prerenderizadas contienen HTML completo (no solo shell)
 * para que Googlebot indexe el contenido real sin ejecutar JS.
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const ROUTES = ['/', '/sobre-mi', '/portafolio', '/cv', '/blog', '/noticias', '/guias', '/galeria', '/contacto', '/reservas', '/servicios', '/admin'];
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;

function waitForServer(url, timeout) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      http.get(url, res => { res.resume(); resolve(); })
        .on('error', () => {
          if (Date.now() - start > timeout) reject(new Error('Timeout'));
          else setTimeout(check, 500);
        });
    };
    check();
  });
}

function startPreview() {
  const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: join(__dirname, '..'), stdio: 'pipe', shell: true,
  });
  proc.stderr.on('data', () => {});
  return proc;
}

async function prerender() {
  if (!existsSync(distDir)) { console.log('⚠ dist/ no encontrado, saltando.'); return; }

  let puppeteer;
  try { puppeteer = (await import('puppeteer')).default; } catch { console.log('⚠ Puppeteer no instalado, saltando.'); return; }

  let preview = null;
  let serverRunning = false;
  try { await waitForServer(BASE, 2000); serverRunning = true; } catch {}

  if (!serverRunning) {
    console.log('  Iniciando servidor de preview...');
    preview = startPreview();
    try { await waitForServer(BASE, 20000); } catch {
      console.log('⚠ No se pudo iniciar preview, saltando.');
      if (preview) preview.kill();
      return;
    }
  }

  console.log(`\n🚀 Prerenderizando ${ROUTES.length} rutas...\n`);

  let browser;
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(20000);

    let ok = 0;
    for (const route of ROUTES) {
      try {
        await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await new Promise(r => setTimeout(r, 2000));
        const html = await page.content();
        const out = join(distDir, route === '/' ? 'index.html' : `${route.slice(1)}/index.html`);
        mkdirSync(dirname(out), { recursive: true });
        writeFileSync(out, html);
        ok++;
        console.log(`  ✓ ${route}`);
      } catch (e) {
        console.log(`  ⚠ ${route}: ${e.message}`);
      }
    }
    console.log(`\n✅ ${ok}/${ROUTES.length} páginas prerenderizadas.\n`);
  } catch (err) {
    console.warn('⚠ Error de Puppeteer:', err.message);
  } finally {
    if (browser) await browser.close();
    if (preview) preview.kill();
  }
}

prerender();
