/**
 * validate-html.js
 *
 * Valida HTML de las páginas pre-renderizadas en dist/ usando
 * la API pública del W3C Validator (validator.w3.org/nu/).
 *
 * Uso: node scripts/validate-html.js
 *
 * Requiere: node-fetch o fetch nativo (Node 18+)
 */

const SITE = 'https://freddydev.net';
const VALIDATOR_URL = 'https://validator.w3.org/nu/';

const pages = [
  '/', '/inicio', '/sobre-mi', '/portafolio', '/cv',
  '/blog', '/noticias', '/galeria', '/servicios', '/reservas', '/contacto',
  '/blog/premio-eduardo-abaroa-2026',
  '/noticias/evolucion-televisiva-bolivia-analogo-digital',
];

async function validatePage(url) {
  try {
    const response = await fetch(`${VALIDATOR_URL}?doc=${encodeURIComponent(url)}&out=json`, {
      headers: { 'User-Agent': 'FreddyDev-HTMLValidator/1.0' },
    });
    const data = await response.json();
    return (data.messages || [])
      .filter((m) => m.type === 'error' || m.type === 'warning')
      .map((m) => ({
        type: m.type,
        message: m.message,
        extract: m.extract,
        firstLine: m.firstLine,
      }));
  } catch (err) {
    return [{ type: 'error', message: `Failed to validate: ${err.message}` }];
  }
}

async function main() {
  console.log('🔍 Validando HTML de páginas pre-renderizadas...\n');

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const page of pages) {
    const url = `${SITE}${page}`;
    process.stdout.write(`  📄 ${page}... `);
    const errors = await validatePage(url);

    const pageErrors = errors.filter(e => e.type === 'error').length;
    const pageWarnings = errors.filter(e => e.type === 'warning').length;
    totalErrors += pageErrors;
    totalWarnings += pageWarnings;

    if (errors.length === 0) {
      console.log('✅ OK');
    } else {
      console.log(`⚠️  ${pageErrors} errors, ${pageWarnings} warnings`);
      for (const err of errors.slice(0, 3)) {
        console.log(`     ${err.type}: ${err.message.slice(0, 120)}`);
      }
    }
  }

  console.log(`\n📊 Total: ${totalErrors} errores, ${totalWarnings} warnings en ${pages.length} páginas`);
}

main().catch(console.error);
