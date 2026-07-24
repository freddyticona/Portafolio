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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
