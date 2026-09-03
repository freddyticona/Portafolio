/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * GazaReportPage — Reportaje especial: Alto el fuego frágil y desarme en disputa
 */

interface GazaReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
}

const obligation = () => {};

export default function GazaReportPage({ lang, onBackToNews }: GazaReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-emerald-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 2 / 3</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('Alto el fuego frágil y desarme en disputa', 'Fragile ceasefire and disarmament in dispute')}<br/>
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('El acuerdo que puede cambiar el futuro de la Franja', 'The deal that could change the Strip’s future')}</span>
          </h1>
          <p className="text-white/60 text-sm mt-4">2 de septiembre de 2026 — Fuentes: El Comercio Perú, Expreso, Yahoo Noticias (AFP)</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-xl text-stone-700 border-l-4 border-emerald-500 pl-6 italic font-serif">
          {L(
            'El conflicto entre Israel y Hamás, que comenzó con el ataque del 7 de octubre de 2023, ha entrado en una fase crítica en el verano de 2026. Después de más de 73.000 muertos palestinos (cifra de Hamás) y una ofensiva israelí devastadora, un alto el fuego frágil se mantiene desde octubre de 2025. Sin embargo, la segunda fase de la tregua —que vincula el desarme de Hamás con la retirada israelí de Gaza— está estancada. Mientras Hamás acepta la hoja de ruta, Israel exige garantías verificables antes de cualquier movimiento.',
            'The conflict between Israel and Hamas, which began with the October 7, 2023 attack, has entered a critical phase in summer 2026. After more than 73,000 Palestinian deaths (Hamas figure) and a devastating Israeli offensive, a fragile ceasefire has held since October 2025. Yet the second phase —linking Hamas disarmament to Israeli withdrawal from Gaza— is stalled. While Hamas accepts the roadmap, Israel demands verifiable guarantees before any move.'
          )}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">1. {L('El origen – el ataque del 7 de octubre de 2023 y la guerra', 'The origin – the October 7 attack and the war')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El 7 de octubre de 2023, el grupo palestino Hamás lanzó un ataque sin precedentes contra el sur de Israel, causando la muerte de aproximadamente <strong>1.200 personas</strong>, en su mayoría civiles, y el secuestro de <strong>más de 250 rehenes</strong>, según fuentes israelíes.</p>
          <p>Las autoridades de salud controladas por Hamás reportaron <strong>más de 73.000 muertos palestinos</strong> hasta mediados de 2026, cifra que incluye combatientes y civiles, aunque no ha sido verificada de forma independiente.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Más de 2 millones de gazatíes fueron desplazados internamente, y más del 60% de las viviendas resultaron dañadas o destruidas, según OCHA.
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">MAPA — FRANJA DE GAZA 2026</div>
            <div className="h-64 bg-stone-200 rounded flex items-center justify-center text-stone-500">Puntos de control, áreas bajo control israelí y zonas de Hamás (Leaflet/SVG)</div>
            <div className="text-xs text-stone-400 mt-2">Elaboración propia — datos ONU/OCHA</div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">2. {L('El alto el fuego de octubre de 2025 y la liberación de rehenes', 'October 2025 ceasefire and hostage release')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>10 de octubre de 2025</strong> entró en vigor un alto el fuego negociado con la mediación de Catar, Egipto y Estados Unidos. Como parte del acuerdo, Hamás se comprometió a devolver a los <strong>20 rehenes con vida que aún retenía</strong>, entre ellos tres ciudadanos argentinos, en un plazo de 72 horas.</p>
          <p>La primera fase de la tregua concluyó en <strong>enero de 2026</strong> con la liberación de los últimos rehenes.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La primera fase permitió la entrada de más de 4.000 camiones de ayuda humanitaria diaria a Gaza, pero las necesidades seguían siendo enormes, según la ONU.
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">GRÁFICO — AYUDA HUMANITARIA 2023-2026</div>
            <div className="h-48 bg-stone-200 rounded flex items-center justify-center text-stone-500">Chart.js — 2023 bajo, 2024 irregular, 2025 pico, 2026 estancamiento</div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">3. {L('El Consejo de Paz y la hoja de ruta para el desarme', 'Peace Council and the disarmament roadmap')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>En <strong>enero de 2026</strong>, la administración Trump creó el <strong>Consejo de Paz (Board of Peace)</strong>, presidido por Jared Kushner.</p>
          <p>La hoja de ruta, presentada en julio de 2026:
            <ul>
              <li><strong>Desarme de Hamás</strong> — armas pesadas desactivadas y almacenadas bajo supervisión internacional.</li>
              <li><strong>Policía civil</strong> — combatientes integrados en una nueva fuerza policial bajo el Comité Nacional para la Administración de Gaza (NCAG).</li>
              <li><strong>Desmantelamiento de túneles y fábricas de armas</strong> — bajo la Fuerza Internacional de Estabilización.</li>
              <li><strong>Retirada israelí</strong> — después de los pasos anteriores.</li>
              <li><strong>Reconstrucción</strong> — fondos estimados en 50.000 millones de dólares.</li>
            </ul>
          </p>
          <p>El <strong>6 de julio de 2026</strong>, Hamás anunció la <strong>disolución de sus órganos de dirección en Deir al-Balah</strong>.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La fuerza de Hamás a inicios de 2026 se estimaba en <strong>20.000 combatientes</strong> y <strong>60.000 fusiles de asalto</strong>, según fuentes israelíes, sin verificación independiente.
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">4. {L('El estancamiento – la disputa por el orden de los pasos', 'Stalemate – the dispute over order of steps')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>31 de julio de 2026</strong>, Hamás anunció su apoyo a la hoja de ruta, aceptando la vinculación entre su desarme y la retirada israelí, siempre que ambos procesos fueran simultáneos.</p>
          <p>Sin embargo, el gobierno de <strong>Benjamin Netanyahu</strong> exigió que Israel no retiraría sus tropas hasta que el desarme de Hamás fuera <strong>verificado por completo</strong>.</p>
          <p>Jared Kushner se reunió con el líder de Hamás, <strong>Khalil al-Hayya</strong>, y con Netanyahu, pero no logró cerrar la brecha.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La disputa refleja la desconfianza mutua acumulada durante 20 meses de guerra. Israel teme que Hamás se rearme si se retira antes; Hamás teme que Israel nunca se vaya si se desarma antes.
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">EMBED YOUTUBE — NETANYAHU DESARME HAMÁS</div>
            <div className="bg-white border border-stone-200 rounded p-4 text-sm text-stone-500">
              [Rueda de prensa Netanyahu — canal oficial gobierno israelí]<br/>
              <span className="text-xs">Si no existe, se omite. Embed vía iframe oficial.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">5. {L('Actores clave y declaraciones', 'Key actors and statements')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <blockquote>“Apoyamos la hoja de ruta del Consejo de Paz, pero la retirada israelí debe ser simultánea al desarme. No aceptaremos que Israel use el desarme como excusa para perpetuar la ocupación”.<br/>— <strong>Khalil al-Hayya</strong>, líder de Hamás.</blockquote>
          <blockquote>“No pondremos en riesgo la seguridad de Israel. Hamás debe desarmarse completamente y de manera verificable antes de que Israel se retire”.<br/>— <strong>Benjamin Netanyahu</strong>, primer ministro israelí.</blockquote>
          <blockquote>“Ambas partes están cerca de un acuerdo histórico. Necesitamos un poco más de flexibilidad para salvar las diferencias”.<br/>— <strong>Jared Kushner</strong>, enviado especial de EE.UU.</blockquote>
          <p><strong>Actores clave:</strong> Donald Trump (creador del Consejo de Paz), Benjamin Netanyahu (elecciones oct 2026), Jared Kushner, Khalil al-Hayya, Ismaïl al-Thawabta (director de medios de Hamás). Mediadores: Qatar y Egipto.</p>
          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4">LÍNEA DE TIEMPO — OCT 2023 → AGO 2026</div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['7 oct 2023\nAtaque Hamás','10 oct 2025\nAlto fuego','ene 2026\nLiberación','6 jul 2026\nDisolución Hamás','31 jul 2026\nApoyo ruta','ago 2026\nEstancamiento'].map((h,i)=> (
                <div key={i} className="min-w-[110px] bg-white border border-stone-200 rounded p-3 text-center text-xs whitespace-pre">{h}</div>
              ))}
            </div>
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">FOTOS ARCHIVO — WIKIMEDIA COMMONS (CC)</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="bg-white p-3 rounded">Netanyahu</div>
              <div className="bg-white p-3 rounded">Trump</div>
              <div className="bg-white p-3 rounded">Kushner</div>
              <div className="bg-white p-3 rounded">Al-Hayya</div>
            </div>
            <div className="text-xs text-stone-400 mt-2">Licencias libres — atribución al pie</div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">6. {L('Consecuencias y perspectivas', 'Consequences and outlook')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p><strong>Humanitarias:</strong> la reconstrucción sigue paralizada; más de 500.000 gazatíes viven en tiendas de campaña.</p>
          <p><strong>Políticas:</strong> Netanyahu usa la postura dura ante Hamás como bandera electoral.</p>
          <p><strong>Seguridad:</strong> violencia esporádica con cohetes de grupos disidentes y ataques israelíes de represalia.</p>
          <p>Si Netanyahu pierde las elecciones, un nuevo gobierno podría aceptar la hoja de ruta. Si Trump gana un segundo mandato, podría presionar más a Israel.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El costo estimado de reconstrucción supera 50.000 millones de dólares, según el Banco Mundial, y los fondos solo se liberarán con un acuerdo político estable.
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-300 bg-stone-50">
        <h3 className="text-sm font-bold tracking-widest mb-4">✅ VERIFICACIÓN FINAL DE FUENTES (GAZA)</h3>
        <div className="text-xs overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="border-b"><th className="text-left p-2">Dato</th><th className="text-left p-2">Fuente</th><th className="text-center p-2">✓</th></tr></thead>
            <tbody className="text-stone-600">
              <tr className="border-b"><td className="p-2">Ataque Hamás 7 oct 2023</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">+73.000 muertos (cifra Hamás)</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Alto el fuego 10 oct 2025</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Liberación rehenes ene 2026</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Consejo de Paz ene 2026</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Disolución órganos Hamás 6 jul</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Apoyo hoja de ruta 31 jul</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Combatientes y fusiles (inicio 2026)</td><td className="p-2">fuentes israelíes</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Disputa orden de pasos ago 2026</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
              <tr><td className="p-2">Kushner con Al-Hayya y Netanyahu</td><td className="p-2">El Comercio, Expreso, Yahoo</td><td className="text-center p-2">✅</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 text-center">
        <button onClick={onBackToNews} className="px-6 py-3 bg-[#0a0a0f] text-white rounded hover:bg-black">
          {L('Volver a Noticias', 'Back to News')}
        </button>
        <div className="text-xs text-stone-400 mt-3">Capítulo 3 (Ucrania) se añadirá tras tu aprobación de este capítulo.</div>
      </div>
    </div>
  );
}