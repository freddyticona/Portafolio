/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * UkraineReportPage — Reportaje especial: Negociaciones estancadas, escalada militar
 */

interface UkraineReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
  onNavigate: (page: 'reportaje-iran-furia-epica' | 'reportaje-gaza-desarme' | 'reportaje-ucrania-estancamiento') => void;
}

export default function UkraineReportPage({ lang, onBackToNews, onNavigate }: UkraineReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-sky-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 3 / 3</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('Negociaciones estancadas, escalada militar', 'Stalled talks, military escalation')}<br/>
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('Dos años y medio de guerra sin fin a la vista', 'Two and a half years of war with no end in sight')}</span>
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Irán', '← Iran')}</button>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Gaza', '← Gaza')}</button>
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded">{L('Capítulo actual', 'Current')}</span>
          </div>
          <p className="text-white/60 text-sm mt-4">2 de septiembre de 2026 — Fuentes: El Comercio Perú (EFE), Infobae</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/ukraine/kyiv-damage-2024.jpg" alt={L('Destrucciones en Kiev tras un ataque con drones rusos en la noche del 29 de agosto de 2024. Fuente: Policía Nacional de Ucrania / Wikimedia Commons (CC BY 4.0).', 'Destruction in Kyiv following a Russian drone attack on the night of August 29, 2024. Source: National Police of Ukraine / Wikimedia Commons (CC BY 4.0).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Destrucciones en Kiev tras un ataque con drones rusos en la noche del 29 de agosto de 2024. Fuente: Policía Nacional de Ucrania / Wikimedia Commons (CC BY 4.0).', 'Destruction in Kyiv following a Russian drone attack on the night of August 29, 2024. Source: National Police of Ukraine / Wikimedia Commons (CC BY 4.0).')}</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-xl text-stone-700 border-l-4 border-sky-500 pl-6 italic font-serif">
          {L(
            'La guerra entre Rusia y Ucrania, que comenzó en febrero de 2022, entró en una nueva fase de estancamiento diplomático y escalada militar en el verano de 2026. A pesar de los esfuerzos de mediación de Estados Unidos, las negociaciones de paz están completamente bloqueadas. El portavoz del Kremlin, Dmitri Peskov, ha declarado que Putin solo se reunirá con Trump y Zelenski para firmar un acuerdo final, no para negociar. Mientras tanto, Rusia intensifica sus ataques con drones contra Kiev, y Ucrania afirma que los avances rusos en el frente han sido "escasos".',
            'The war between Russia and Ukraine, which began in February 2022, entered a new phase of diplomatic stalemate and military escalation in summer 2026. Despite US mediation, peace talks are completely blocked. Kremlin spokesman Dmitry Peskov has stated Putin will only meet Trump and Zelensky to sign a final deal, not to negotiate. Meanwhile Russia intensifies drone strikes on Kyiv, and Ukraine says Russian advances on the front have been "scarce".'
          )}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">1. {L('El estancamiento diplomático – "No hay nuevas ideas"', 'Diplomatic stalemate – "No new ideas"')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Según declaraciones del portavoz del Kremlin, Dmitri Peskov, del <strong>30 de agosto de 2026</strong>, la última ronda de negociaciones con mediación de Estados Unidos fue en febrero de 2026, y desde entonces no ha habido avances.</p>
          <p>Peskov declaró textualmente: <em>"El proceso de paz está totalmente estancado. No hay nuevas ideas"</em>. Además, dejó claro que Putin solo aceptaría reunirse para <strong>firmar un acuerdo final</strong>: <em>"Esta reunión solo es posible para firmar los acuerdos. Y los acuerdos no serán un trato primitivo"</em>.</p>
          <p>Rusia mantiene su condición principal: <strong>Ucrania debe retirar sus tropas de todo el Donbás</strong>. La cumbre de Anchorage de 2025 ha perdido vigencia, según Peskov.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La última ronda de negociaciones directas entre Rusia y Ucrania tuvo lugar en febrero de 2026, en Estambul, pero no se firmó ningún acuerdo.
          </div>
          <figure className="my-8">
            <img src="/images/report/ukraine/kyiv-tv-tower-2022.jpg" alt={L('Bombardeo ruso de antenas de telecomunicaciones en Kiev, 1 de marzo de 2022. Fuente: Ministerio del Interior de Ucrania / Wikimedia Commons (CC BY 4.0).', 'Russian bombardment of telecommunications antennas in Kyiv, March 1, 2022. Source: Ministry of Internal Affairs of Ukraine / Wikimedia Commons (CC BY 4.0).')} className="w-full rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Bombardeo ruso de la torre de telecomunicaciones en Kiev, marzo de 2022. Fuente: MVS de Ucrania / Wikimedia Commons (CC BY 4.0).', 'Russian bombardment of the Kyiv TV Tower, March 2022. Source: MVS Ukraine / Wikimedia Commons (CC BY 4.0).')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">2. {L('La escalada militar – ataques con drones y contraofensiva ucraniana', 'Military escalation – drone attacks and Ukrainian counteroffensive')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Rusia ha lanzado una campaña masiva de <strong>ataques con drones de reacción</strong> (modelos Geran-4 y Geran-5) contra la capital ucraniana. Según Zelenski del <strong>31 de agosto de 2026</strong>, Rusia lanzó <strong>1.500 drones en 4 días</strong> contra Kiev, causando "decenas de víctimas civiles" y daños en infraestructura energética.</p>
          <p>Peskov justificó la escalada como <strong>respuesta a ataques ucranianos contra la retaguardia rusa</strong>.</p>
          <p>Ucrania afirma que los <strong>avances rusos en el frente han sido escasos</strong> y han costado "enormes pérdidas" a Moscú (declaración unilateral ucraniana, atribuida como tal).</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Los drones Geran son baratos y difíciles de interceptar, lo que ha convertido esta táctica en una de las más efectivas de Rusia para desgastar la defensa aérea ucraniana.
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">MAPA — LÍNEAS DEL FRENTE SEP 2026</div>
            <div className="h-64 bg-stone-200 rounded flex items-center justify-center text-stone-500">Donbás, Crimea, Zaporiyia, Jersón — avances ucranianos (Leaflet/SVG)</div>
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">GRÁFICO — DRONES RUSOS 2024-2026</div>
            <div className="h-48 bg-stone-200 rounded flex items-center justify-center text-stone-500">Chart.js — 2024 inicio, 2025 pico, 2026 intensificación</div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">3. {L('El papel de Estados Unidos – conversaciones con Zelenski y enviados', 'US role – talks with Zelensky and envoys')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>31 de agosto de 2026</strong>, Zelenski mantuvo una conversación con los enviados especiales de EE.UU., <strong>Steve Witkoff</strong> y <strong>Jared Kushner</strong>, calificada de "detallada y constructiva".</p>
          <p>Zelenski declaró: <em>"El diálogo entre los equipos negociadores de Estados Unidos y Ucrania se mantiene de forma continua y actualmente se está trabajando para fijar las fechas de la visita a Ucrania"</em>.</p>
          <p>El secretario de Estado Marco Rubio está involucrado; Moscú espera nuevas propuestas de Rubio.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La visita de Witkoff y Kushner a Ucrania, si se confirma, sería la primera de alto nivel desde la cumbre de Anchorage en 2025.
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">4. {L('Actores clave y declaraciones', 'Key actors and statements')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <blockquote>“El proceso de paz está totalmente estancado. No hay nuevas ideas. Putin solo se reunirá con Trump y Zelenski para firmar un acuerdo final, no para negociar”.<br/>— <strong>Dmitri Peskov</strong>, portavoz del Kremlin, 30 ago 2026.</blockquote>
          <blockquote>“El diálogo entre los equipos negociadores de Estados Unidos y Ucrania se mantiene de forma continua y actualmente se está trabajando para fijar las fechas de la visita a Ucrania”.<br/>— <strong>Volodímir Zelenski</strong>, 31 ago 2026.</blockquote>
          <p><strong>Actores:</strong> Vladimir Putin, Volodímir Zelenski, Donald Trump, Dmitri Peskov, Marco Rubio, Steve Witkoff y Jared Kushner.</p>
          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4">LÍNEA DE TIEMPO — NEGOCIACIONES 2025-2026</div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['feb 2025\nÚltima ronda','ago 2026\nPeskov estancado','ago 2026\nZelenski y enviados'].map((h,i)=> (
                <div key={i} className="min-w-[120px] bg-white border border-stone-200 rounded p-3 text-center text-xs whitespace-pre">{h}</div>
              ))}
            </div>
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8 text-center">
            <div className="text-xs tracking-widest text-stone-500 mb-2">FOTOS ARCHIVO — WIKIMEDIA COMMONS (CC)</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
              <div className="bg-white p-3 rounded">Putin</div>
              <div className="bg-white p-3 rounded">Zelenski</div>
              <div className="bg-white p-3 rounded">Trump</div>
              <div className="bg-white p-3 rounded">Rubio</div>
              <div className="bg-white p-3 rounded">Kushner</div>
            </div>
            <div className="text-xs text-stone-400 mt-2">Licencias libres — atribución al pie</div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">5. {L('Condiciones de Rusia y perspectivas de futuro', 'Russian conditions and outlook')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La principal condición de Rusia sigue siendo la <strong>retirada de las tropas ucranianas de Donbás</strong>. Además, Moscú exige reconocer la anexión de Crimea y garantizar la neutralidad perpetua (sin OTAN).</p>
          <p>Ucrania rechaza estas condiciones y exige la restauración de su integridad territorial en fronteras de 1991.</p>
          <p>La guerra de desgaste continúa; la mediación de EE.UU. es clave, pero la administración Trump está dividida entre halcones y buscadores de acuerdo rápido. Las elecciones en EE.UU. (nov 2026) podrían cambiar la posición de Washington.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Más de 14 millones de ucranianos desplazados; economía ucraniana contraída más del 30%, según la ONU.
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-300 bg-stone-50">
        <h3 className="text-sm font-bold tracking-widest mb-4">✅ VERIFICACIÓN FINAL DE FUENTES (UCRANIA)</h3>
        <div className="text-xs overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="border-b"><th className="text-left p-2">Dato</th><th className="text-left p-2">Fuente</th><th className="text-center p-2">✓</th></tr></thead>
            <tbody className="text-stone-600">
              <tr className="border-b"><td className="p-2">Peskov: "totalmente estancado"</td><td className="p-2">El Comercio 30 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Putin solo firmará acuerdo final</td><td className="p-2">El Comercio 30 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Anchorage perdió vigencia</td><td className="p-2">El Comercio 30 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Condición: retirada de Donbás</td><td className="p-2">El Comercio 30 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Zelenski conversación con Witkoff/Kushner</td><td className="p-2">Infobae 31 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">Avances rusos "escasos"</td><td className="p-2">Infobae 31 ago</td><td className="text-center p-2">✅</td></tr>
              <tr className="border-b"><td className="p-2">1.500 drones en 4 días</td><td className="p-2">Infobae 31 ago</td><td className="text-center p-2">✅</td></tr>
              <tr><td className="p-2">Peskov justifica como respuesta</td><td className="p-2">El Comercio 30 ago</td><td className="text-center p-2">✅</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 text-center">
        <button onClick={onBackToNews} className="px-6 py-3 bg-[#0a0a0f] text-white rounded hover:bg-black">
          {L('Volver a Noticias', 'Back to News')}
        </button>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Irán', '← Iran')}</button>
          <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Gaza', '← Gaza')}</button>
        </div>
        <div className="text-xs text-stone-400 mt-3">Reportaje especial completo — capítulos 1 (Irán), 2 (Gaza) y 3 (Ucrania).</div>
      </div>
    </div>
  );
}