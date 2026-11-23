import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA } from './lib/analytics';
import { initSentry } from './lib/sentry';
import { initRUM } from './lib/rum';

initSentry();
initGA();
initRUM();

// Marca que JavaScript está activo: el bloque estático de /guias
// (#prerender-guias) se oculta para no duplicar contenido al montar React.
// Los crawlers sin JS no añaden esta clase y siguen viendo el HTML útil.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
