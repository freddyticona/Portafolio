/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * GazaReportPage — Reportaje especial: Alto el fuego frágil y desarme en disputa
 */

interface GazaReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
  onNavigate: (page: 'reportaje-iran-furia-epica' | 'reportaje-gaza-desarme' | 'reportaje-ucrania-estancamiento') => void;
}

const obligation = () => {};

export default function GazaReportPage({ lang, onBackToNews, onNavigate }: GazaReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-emerald-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 2 / 3</div>
          <p className="text-[11px] font-mono text-emerald-500/80 tracking-widest uppercase mb-3">{L('Análisis · Geopolítica y conflicto en Oriente Medio', 'Analysis · Geopolitics and conflict in the Middle East')}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('Alto el fuego frágil y desarme en disputa', 'Fragile ceasefire and disarmament in dispute')}<br/>
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('La paz que no lleva a ninguna parte', 'The peace that leads nowhere')}</span>
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Irán', '← Iran')}</button>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded">{L('Capítulo actual', 'Current')}</span>
            <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('Ucrania →', 'Ukraine →')}</button>
          </div>
          <p className="text-white/60 text-sm mt-4">2 de septiembre de 2026 — Fuentes: El Comercio Perú, Expreso, Yahoo Noticias (AFP)</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/gaza/gaza-damage.jpg" alt={L('Destrucción en el barrio de El-Remal, Gaza City, tras un ataque aéreo israelí el 9 de octubre de 2023. Fuente: WAFA / Wikimedia Commons (CC BY-SA 3.0).', 'Destruction in the El-Remal neighborhood, Gaza City, following an Israeli airstrike on October 9, 2023. Source: WAFA / Wikimedia Commons (CC BY-SA 3.0).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Destrucción en el barrio de El-Remal, Gaza City, tras un ataque aéreo israelí el 9 de octubre de 2023. Fuente: WAFA / Wikimedia Commons (CC BY-SA 3.0).', 'Destruction in the El-Remal neighborhood, Gaza City, following an Israeli airstrike on October 9, 2023. Source: WAFA / Wikimedia Commons (CC BY-SA 3.0).')}</p>
        </div>
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="bg-stone-900 text-white rounded-lg p-6 border-l-4 border-emerald-500">
          <div className="text-xs font-mono tracking-widest text-emerald-400 mb-3 uppercase">TL;DR — {L('Resumen Ejecutivo', 'Executive Summary')}</div>
          <ul className="space-y-2 text-sm text-stone-200 list-none">
            <li className="flex gap-2"><span className="text-emerald-400">▸</span>{L('El alto el fuego en Gaza cumple un año desde octubre de 2025, pero su segunda fase —que vincula el desarme de Hamás con la retirada israelí— está congelada.', 'The Gaza ceasefire has held for a year since October 2025, but its second phase —linking Hamas disarmament to an Israeli withdrawal— is frozen.')}</li>
            <li className="flex gap-2"><span className="text-emerald-400">▸</span>{L('Hamás aceptó la hoja de ruta del Consejo de Paz siempre que desarme y retirada sean simultáneos; Israel exige verificar el desarme antes de moverse.', 'Hamas accepted the Peace Council roadmap as long as disarmament and withdrawal are simultaneous; Israel demands verified disarmament before moving.')}</li>
            <li className="flex gap-2"><span className="text-emerald-400">▸</span>{L('La reconstrucción, valorada en más de 50.000 millones de dólares, no recibirá fondos hasta que haya un acuerdo político estable.', 'Rebuilding, valued at more than US$50 billion, will receive no funds until there is a stable political deal.')}</li>
            <li className="flex gap-2"><span className="text-emerald-400">▸</span>{L('Las elecciones en Israel (oct 2026) y EE.UU. (nov 2026) pueden redefinir el tablero.', 'Elections in Israel (Oct 2026) and the US (Nov 2026) could redefine the board.')}</li>
          </ul>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-xs tracking-widest text-stone-400 uppercase font-sans mb-3">{L('Apertura', 'Opening')}</p>
        <p className="text-xl text-stone-700 border-l-4 border-emerald-500 pl-6 italic font-serif">
          {L(
            'El alto el fuego en Gaza cumple un año. Las bombas dejaron de caer, pero la paz no llegó. Hamás sigue armado, Israel sigue en el perímetro, y los mediadores siguen atrapados en la misma pregunta: ¿quién da el primer paso? Es una paz que no lleva a ninguna parte, y la segunda fase —la única que podría decidir el futuro de la Franja— está congelada por una desconfianza que ni las bombas ni las negociaciones han logrado disolver.',
            'The ceasefire in Gaza has lasted a year. The bombs stopped falling, but peace never arrived. Hamas remains armed, Israel remains on the perimeter, and the mediators remain trapped in the same question: who makes the first move? It is a peace that leads nowhere, and the second phase —the only one that could decide the Strip\'s future— is frozen by a distrust that neither the bombs nor the talks have managed to dissolve.'
          )}
        </p>
        <p className="mt-4 text-stone-700 font-serif">
          {L(
            'El punto de partida dice poco de la meta. El 7 de octubre de 2023, el ataque de Hamás contra el sur de Israel dejó <strong>1.200 muertos</strong>, en su mayoría civiles, y <strong>más de 250 rehenes</strong>. La respuesta israelí desató una guerra de veinte meses que, según las autoridades controladas por Hamás, ha costado la vida a más de <strong>73.000 palestinos</strong> —cifra no verificada de forma independiente—. Más de dos millones de personas fueron desplazadas y más del 60% de las viviendas quedaron dañadas o destruidas.',
            'The starting point says little about the destination. On October 7, 2023, the Hamas attack on southern Israel left <strong>1,200 dead</strong>, mostly civilians, and <strong>more than 250 hostages</strong>. The Israeli response unleashed a twenty-month war that, according to Hamas-controlled authorities, has cost the lives of more than <strong>73,000 Palestinians</strong> — a figure not independently verified. Over two million people were displaced and more than 60% of homes were damaged or destroyed.'
          )}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Desarme a cambio de retirada: el laberinto', 'Disarmament for withdrawal: the labyrinth')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>10 de octubre de 2025</strong>, bajo mediación de Catar, Egipto y Estados Unidos, entró en vigor un alto el fuego. Hamás devolvió a los <strong>20 rehenes vivos</strong> que retenía —entre ellos tres argentinos— y la primera fase se cerró en enero de 2026, con la entrada de más de <strong>4.000 camiones de ayuda diarios</strong>. Pero la fase que importa es la segunda, y ahí empieza el laberinto.</p>
          <p>En enero de 2026, la administración Trump creó el <strong>Consejo de Paz (Board of Peace)</strong>, presidido por Jared Kushner. Su hoja de ruta, presentada en julio de 2026, ordena los pasos: desarme de Hamás bajo supervisión internacional, integración de combatientes en una policía civil, desmantelamiento de túneles y fábricas de armas, retirada israelí y, por último, la reconstrucción. La estimación: <strong>50.000 millones de dólares</strong>.</p>
          <p>El <strong>6 de julio</strong>, Hamás anunció la disolución de sus órganos de dirección en Deir al-Balah, un gesto simbólico de buena voluntad. El <strong>31 de julio</strong>, apoyó la hoja de ruta —con una condición: que el desarme y la retirada fueran simultáneos.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La primera fase permitió la entrada de más de 4.000 camiones de ayuda humanitaria diaria a Gaza, pero las necesidades seguían siendo enormes, según la ONU.
          </div>
          <figure className="my-8">
            <img src="/images/report/maps/gaza-strip.png" alt={L('Mapa de la Franja de Gaza mostrando las principales ciudades y zonas de control. Fuente: Wikimedia Commons (CC BY-SA 3.0).', 'Map of the Gaza Strip showing major cities and areas of control. Source: Wikimedia Commons (CC BY-SA 3.0).')} className="mx-auto max-w-md rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Mapa de la Franja de Gaza. Fuente: Wikimedia Commons (CC BY-SA 3.0).', 'Map of the Gaza Strip. Source: Wikimedia Commons (CC BY-SA 3.0).')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La trampa de la desconfianza', 'The trap of distrust')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Y ahí se enreda todo. Israel, con Benjamin Netanyahu al frente, no moverá a sus tropas hasta verificar por completo el desarme. Hamás, por su parte, teme que, si se desarma primero, Israel nunca se vaya. Cada parte espera que la otra dé el primer paso, y mientras tanto el estancamiento se consolida.</p>
          <p>La fuerza de Hamás se estima en unos <strong>20.000 combatientes</strong> y <strong>60.000 fusiles de asalto</strong> a inicios de 2026, según fuentes israelíes sin verificación independiente. El número importa menos que la pregunta de fondo: qué ocurre con ese arsenal el día que se firme.</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-stone-700 my-6">«{L('No pondremos en riesgo la seguridad de Israel. Hamás debe desarmarse completamente y de manera verificable antes de que Israel se retire.', 'We will not put Israel\'s security at risk. Hamas must disarm completely and verifiably before Israel withdraws.')}»<div className="text-xs font-sans text-stone-500 mt-2 not-italic">— Benjamin Netanyahu, {L('primer ministro de Israel', 'Prime Minister of Israel')}</div></blockquote>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> {L('La disputa refleja la desconfianza acumulada durante 20 meses de guerra: Israel teme que Hamás se rearme si se retira antes; Hamás teme que Israel nunca se vaya si se desarma antes.', 'The dispute reflects the distrust built over 20 months of war: Israel fears Hamas will rearm if it leaves first; Hamas fears Israel will never leave if it disarms first.')}
          </div>
          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4 text-center font-sans">GRÁFICO — AYUDA HUMANITARIA A GAZA (CAMIONES/DÍA, PROMEDIO ANUAL)</div>
            <div className="flex items-end justify-center gap-4 sm:gap-8 h-56">
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-stone-600 font-sans">~70</div>
                <div className="w-14 sm:w-20 bg-stone-300 rounded-t" style={{height: '20%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2023</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-stone-600 font-sans">~180</div>
                <div className="w-14 sm:w-20 bg-amber-400 rounded-t" style={{height: '40%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2024</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-emerald-600 font-sans">4.000+</div>
                <div className="w-14 sm:w-20 bg-emerald-500 rounded-t" style={{height: '100%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2025</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-stone-600 font-sans">~1.200</div>
                <div className="w-14 sm:w-20 bg-stone-400 rounded-t" style={{height: '55%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2026</div>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-4 text-center font-sans">{L('Fuente: cifras estilizadas según OCHA/ONU — la fase de alto el fuego de 2025 permitió un pico de más de 4.000 camiones/diarios, que decayó con el posterior estancamiento en 2026. El gráfico es ilustrativo y no reproduce una serie temporal oficial exacta.', 'Source: stylized figures per OCHA/UN — the 2025 ceasefire allowed a peak of over 4,000 trucks daily, which declined with the subsequent 2026 stalemate. The chart is illustrative and does not reproduce an exact official time series.')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Los tres caminos que se abren', 'The three paths ahead')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p className="mb-4">{L('Del laberinto salen tres caminos posibles, con consecuencias muy desiguales.', 'From the labyrinth come three possible paths, with very unequal consequences.')}</p>
          <div className="space-y-4">
            <div className="bg-stone-100 border border-stone-200 rounded-lg p-4 font-sans">
              <p className="font-bold text-stone-800 text-sm mb-1">{L('Escenario A — Estancamiento prolongado (probabilidad alta)', 'Scenario A — Prolonged stalemate (high probability)')}</p>
              <p className="text-sm text-stone-600">{L('El impasse se mantiene durante años. Para los gazatíes, significa seguir en tiendas de campaña, sin escuelas ni electricidad estable, con el 70% de la población dependiendo de la ayuda humanitaria. Para la región, una bomba de relojería: la Franja se convierte en un foco perpetuo de inestabilidad.', 'The impasse drags on for years. For Gazans, it means staying in tents, without schools or stable electricity, with 70% of the population dependent on humanitarian aid. For the region, a time bomb: the Strip becomes a permanent source of instability.')}</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 font-sans">
              <p className="font-bold text-emerald-800 text-sm mb-1">{L('Escenario B — Acuerdo parcial (probabilidad media)', 'Scenario B — Partial deal (medium probability)')}</p>
              <p className="text-sm text-emerald-700">{L('Hamás acepta un desarme limitado a cambio de una retirada gradual israelí. Es viable si un nuevo gobierno israelí, tras las elecciones de octubre de 2026, se muestra más flexible y Washington presiona para cerrar. Pero exige que ambas partes bajen de sus líneas rojas, y la historia reciente no invita al optimismo.', 'Hamas accepts limited disarmament in exchange for a gradual Israeli withdrawal. Viable if a new Israeli government, after the October 2026 elections, is more flexible and Washington pushes to close. But it demands both sides step down from their red lines, and recent history offers little optimism.')}</p>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 font-sans">
              <p className="font-bold text-rose-800 text-sm mb-1">{L('Escenario C — Colapso del alto el fuego (probabilidad baja pero real)', 'Scenario C — Ceasefire collapse (low but real probability)')}</p>
              <p className="text-sm text-rose-700">{L('Un atentado, una provocación de grupos disidentes o una escalada puntual desencadenaría una nueva guerra. Con menos infraestructura que perder y más odio acumulado, el coste humano sería difícil de imaginar.', 'An attack, a provocation by dissident groups or a one-off escalation would trigger a new war. With less infrastructure to lose and more accumulated hatred, the human cost would be hard to imagine.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El papel de los mediadores', 'The role of the mediators')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Estados Unidos sigue siendo la pieza central, aunque su influencia está condicionada por la política interna: si Trump gana un segundo mandato, puede presionar más a Israel; si pierde, el Consejo de Paz perdería su motor. Egipto y Catar son los únicos con capacidad real de hablar con Hamás y de moverlo hacia la mesa: sus canales con el líder de Hamás siguen abiertos incluso en los peores momentos.</p>
          <p>Irán tiene un interés claro: que el conflicto se mantenga congelado. Un Gaza eternamente roto es un recordatorio permanente del fracaso de Washington y un argumento que refuerza su propio eje en la región.</p>
          <p>La ONU y la Unión Europea aportan el peso diplomático y parte de la financiación de la reconstrucción, pero sin un acuerdo político estable no pueden desembolsar los fondos. Nadie va a invertir miles de millones en una Franja donde el día después del desarme podría estallar otra guerra.</p>
          <p>Hay además un calendario que condiciona a los protagonistas. Israel celebra elecciones en <strong>octubre de 2026</strong>, y Netanyahu ha convertido la dureza ante Hamás en su bandera electoral: ceder ahora le costaría apoyo interno. Si pierde, un nuevo gobierno podría encarar la hoja de ruta con más margen; si gana, el statu quo quedará blindado durante meses. Es un recordatorio de que, en esta negociación, la política interna pesa tanto como las armas sobre la mesa.</p>
          <figure className="my-8">
            <img src="/images/report/politicians/netanyahu.jpg" alt={L('Benjamin Netanyahu, primer ministro de Israel, durante una rueda de prensa en Jerusalén. Fuente: Wikimedia Commons (dominio público).', 'Benjamin Netanyahu, Prime Minister of Israel, during a press conference in Jerusalem. Source: Wikimedia Commons (public domain).')} className="w-full max-w-sm mx-auto rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Benjamin Netanyahu, primer ministro de Israel. Fuente: Wikimedia Commons (dominio público).', 'Benjamin Netanyahu, Prime Minister of Israel. Source: Wikimedia Commons (public domain).')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Quién es quién', 'Who\'s who')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p className="text-stone-600">{L(
            'El estancamiento no depende solo de documentos, sino de los intereses y la confianza (o desconfianza) de los líderes que lo negocian. Estas son las posturas de los protagonistas centrales de la disputa y de los actores que intervienen en el proceso.',
            'The stalemate rests not only on documents, but on the interests and trust (or distrust) of the leaders negotiating it. These are the positions of the central protagonists of the dispute and of the actors involved in the process.'
          )}</p>

          <div className="grid grid-cols-1 gap-6 my-8">
            {/* Khalil al-Hayya */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-40 shrink-0">
                <img src="/images/report/politicians/al-hayya.jpg" alt="Khalil al-Hayya" className="w-full h-44 sm:h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-sans font-bold text-stone-900">Khalil al-Hayya</p>
                <p className="font-sans text-xs text-rose-600 mb-3">Líder de Hamás en Gaza</p>
                <p className="text-stone-700 italic border-l-4 border-rose-400 pl-3 font-serif">“Apoyamos la hoja de ruta del Consejo de Paz, pero la retirada israelí debe ser simultánea al desarme. No aceptaremos que Israel use el desarme como excusa para perpetuar la ocupación”.</p>
              </div>
            </div>

            {/* Netanyahu */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-40 shrink-0">
                <img src="/images/report/politicians/netanyahu.jpg" alt="Benjamin Netanyahu" className="w-full h-44 sm:h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-sans font-bold text-stone-900">Benjamin Netanyahu</p>
                <p className="font-sans text-xs text-sky-600 mb-3">Primer Ministro de Israel</p>
                <p className="text-stone-700 italic border-l-4 border-sky-400 pl-3 font-serif">“No pondremos en riesgo la seguridad de Israel. Hamás debe desarmarse completamente y de manera verificable antes de que Israel se retire”.</p>
              </div>
            </div>

            {/* Kushner */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-40 shrink-0">
                <img src="/images/report/politicians/kushner.jpg" alt="Jared Kushner" className="w-full h-44 sm:h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-sans font-bold text-stone-900">Jared Kushner</p>
                <p className="font-sans text-xs text-stone-500 mb-3">Enviado especial de EE.UU.</p>
                <p className="text-stone-700 italic border-l-4 border-stone-400 pl-3 font-serif">“Ambas partes están cerca de un acuerdo histórico. Necesitamos un poco más de flexibilidad para salvar las diferencias”.</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 rounded-lg p-6 my-8 border border-stone-200">
            <div className="text-xs tracking-widest text-stone-500 mb-4 font-sans">QUIÉN ES QUIÉN EN LAS NEGOCIACIONES</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/trump.jpg" alt="Donald Trump" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">{L('Donald Trump', 'Donald Trump')}</p>
                <p className="text-xs text-stone-500 font-sans">{L('Presidente de EE.UU. — creó el Consejo de Paz', 'US President — created the Peace Council')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/netanyahu.jpg" alt="Benjamin Netanyahu" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">{L('Benjamin Netanyahu', 'Benjamin Netanyahu')}</p>
                <p className="text-xs text-stone-500 font-sans">{L('Primer Ministro de Israel — elecciones oct 2026', 'Israeli PM — Oct 2026 elections')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/kushner.jpg" alt="Jared Kushner" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">{L('Jared Kushner', 'Jared Kushner')}</p>
                <p className="text-xs text-stone-500 font-sans">{L('Enviado especial de EE.UU.', 'US special envoy')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/al-hayya.jpg" alt="Khalil al-Hayya" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">{L('Khalil al-Hayya', 'Khalil al-Hayya')}</p>
                <p className="text-xs text-stone-500 font-sans">{L('Líder de Hamás en Gaza', 'Hamas leader in Gaza')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-stone-200 flex items-center justify-center text-stone-400 font-sans">?</div>
                <p className="text-sm font-bold text-stone-800 font-sans">Ismaïl al-Thawabta</p>
                <p className="text-xs text-stone-500 font-sans">{L('Director de medios de Hamás', 'Hamas media director')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-emerald-100 flex items-center justify-center text-emerald-600 font-sans">⚖</div>
                <p className="text-sm font-bold text-stone-800 font-sans">{L('Qatar y Egipto', 'Qatar and Egypt')}</p>
                <p className="text-xs text-stone-500 font-sans">{L('Mediadores del alto el fuego', 'Ceasefire mediators')}</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-3 text-center font-sans">{L('Fotos: Wikimedia Commons — licencias libres (CC / dominio público).', 'Photos: Wikimedia Commons — free licenses (CC / public domain).')}</p>
          </div>

          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4">LÍNEA DE TIEMPO — OCT 2023 → AGO 2026</div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['7 oct 2023\nAtaque Hamás','10 oct 2025\nAlto fuego','ene 2026\nLiberación','6 jul 2026\nDisolución Hamás','31 jul 2026\nApoyo ruta','ago 2026\nEstancamiento'].map((h,i)=> (
                <div key={i} className="min-w-[110px] bg-white border border-stone-200 rounded p-3 text-center text-xs whitespace-pre">{h}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Lo que significan estas cifras', 'What these numbers mean')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El coste de reconstrucción asciende a <strong>53.000 millones de dólares</strong>, una cifra que ningún donante está dispuesto a desembolsar mientras Hamás controle las armas y la gobernanza. Mientras los líderes debaten sobre el orden del desarme, los gazatíes viven entre escombros: no hay escuelas, no hay electricidad estable y más de <strong>500.000 personas</strong> siguen en tiendas de campaña. La primera fase de la tregua permitió un pico de ayuda que el estancamiento de 2026 ha reducido drásticamente.</p>
          <p>Detrás de cada cifra hay una vida rota. Un niño que cumple años en una tienda de campaña, una madre que hace cola horas por un cargamento de alimentos, una familia que reconstruye su casa con las manos porque nadie la financia. El desarme es una discusión entre estados y líderes; la reconstrucción rota es una realidad que se mide en generaciones que crecen sin haber conocido otra cosa que la guerra y la espera.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 text-sm">
            <strong>Gráficos sugeridos:</strong> {L('evolución de víctimas civiles desde 2023; flujo de ayuda humanitaria mensual de Gaza; coste de reconstrucción frente a ayuda comprometida (53.000 M$ vs. lo liberado).', 'civilian casualty evolution since 2023; monthly humanitarian aid flow to Gaza; reconstruction cost versus committed aid (US$53B vs. what is released).')}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El futuro de la Franja', 'The future of the Strip')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El alto el fuego en Gaza es una victoria pírrica. No trae paz, solo una pausa. Si el estancamiento se prolonga, la comunidad internacional no encontrará cómo forzar una solución sin arriesgar una crisis mayor: el colapso de Gaza no es un problema local, es un factor que desestabiliza Egipto, Jordania, Líbano y los equilibrios de toda la región.</p>
          <p>La verdadera pregunta no es si Hamás se desarmará o si Israel se retirará. Es si la comunidad internacional permitirá que este estancamiento se convierta en el nuevo statu quo, condenando a una generación entera a vivir entre escombros y promesas incumplidas.</p>
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
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Irán', '← Iran')}</button>
          <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('Siguiente: Ucrania →', 'Next: Ukraine →')}</button>
        </div>
      </div>
    </div>
  );
}