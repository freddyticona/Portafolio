/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * UkraineReportPage — Reportaje especial: Ucrania en 2026
 * Análisis de desgaste, gasto militar, elecciones de EE.UU., factor China y energía
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
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
            {L('Ucrania en 2026: asimetría militar, calendario electoral, el rol de Pekín y el precio del gas', 'Ukraine in 2026: military asymmetry, the electoral calendar, the role of Beijing and the price of gas')}
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Irán', '← Iran')}</button>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Gaza', '← Gaza')}</button>
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded">{L('Capítulo actual', 'Current')}</span>
          </div>
          <p className="text-white/60 text-sm mt-4">2 de septiembre de 2026 — Datos: Instituto Kiel, SIPRI, IISS, FMI, BCE, AIE, Bloomberg</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/ukraine/kyiv-wide-destruction.jpg" alt={L('Plano general de un bloque de viviendas dañado en Kiev tras un ataque con misiles rusos, 14 de enero de 2023. Fuente: Wikimedia Commons (CC BY 4.0).', 'Wide shot of a residential block damaged in Kyiv after a Russian missile attack, January 14, 2023. Source: Wikimedia Commons (CC BY 4.0).')} className="w-full h-72 md:h-96 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Plano general de viviendas destruidas en Kiev tras un ataque ruso con misiles. Fuente: Wikimedia Commons (CC BY 4.0).', 'Wide shot of destroyed residential buildings in Kyiv after a Russian missile attack. Source: Wikimedia Commons (CC BY 4.0).')}</p>
        </div>
      </div>

      {/* TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-5 font-sans">
          <div className="text-xs font-bold tracking-widest text-sky-700 mb-3 uppercase">TL;DR — {L('Resumen ejecutivo', 'Executive summary')}</div>
          <ul className="text-sm text-stone-700 space-y-2 list-disc pl-5">
            <li>{L('Las negociaciones están congeladas desde la ronda de Estambul (28 feb 2026); Peskov solo contempla una cumbre para firmar, no para negociar.', 'Talks are frozen since the Istanbul round (Feb 28, 2026); Peskov only contemplates a summit to sign, not to negotiate.')}</li>
            <li>{L('Rusia lanzó <strong>1.500 drones en 4 días</strong> sobre Kiev; la asimetría de costes (dron ~50.000 USD vs. interceptor ~500.000 USD) agota la defensa aérea ucraniana.', 'Russia launched <strong>1,500 drones in 4 days</strong> over Kyiv; the cost asymmetry (drone ~US$50,000 vs. interceptor ~US$500,000) is draining Ukraine\'s air defense.')}</li>
            <li>{L('Europa amplió su gasto militar del 1,3% al 2,1% del PIB desde 2022, pero la brecha de producción de munición sigue sin cubrir el consumo ucraniano.', 'Europe raised its military spending from 1.3% to 2.1% of GDP since 2022, but the ammunition production gap still fails to cover Ukrainian demand.')}</li>
            <li>{L('Las elecciones del 3 de noviembre de 2026 definen la trayectoria del conflicto; Pekín y los precios de la energía condicionan el balance logístico.', 'The November 3, 2026 elections define the conflict\'s trajectory; Beijing and energy prices condition the logistical balance.')}</li>
          </ul>
        </div>
      </section>

      {/* El diálogo congelado */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El diálogo congelado en números', 'A dialogue frozen in numbers')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'La última ronda de negociación directa entre Kiev y Moscú se celebró el 28 de febrero de 2026 en Estambul. No produjo ningún instrumento firmado. El 30 de agosto, el portavoz del Kremlin, Dmitri Peskov, eliminó cualquier ambigüedad:',
            'The last direct negotiation round between Kyiv and Moscow took place on February 28, 2026, in Istanbul. It produced no signed instrument. On August 30, Kremlin spokesman Dmitry Peskov removed all ambiguity:'
          )}</p>
          <blockquote className="border-l-4 border-sky-400 pl-4 italic text-stone-700 my-4">«{L('El proceso de paz está totalmente estancado. No hay nuevas ideas.', 'The peace process is totally stalled. There are no new ideas.')}»</blockquote>
          <p>{L(
            'La declaración no describe un fracaso táctico, sino una posición estratégica. Peskov condicionó cualquier cumbre a la firma de un acuerdo final, no a su negociación. En términos de teoría de juegos, Moscú anuncia una estrategia de compromiso mínimo: no negociará hasta que el coste de continuar el conflicto supere el de ceder territorio. Ucrania mantiene como líneas rojas las fronteras de 1991 y garantías de seguridad colectiva. Ninguna posición admite intersección. La suma es un equilibrio no cooperativo que solo cambia con el coste marginal de cada bando.',
            'The statement describes not a tactical failure but a strategic position. Peskov conditioned any summit on the signing of a final deal, not on negotiating it. In game-theory terms, Moscow signals a strategy of minimal commitment: it will not negotiate until the cost of continuing the conflict exceeds the cost of ceding territory. Ukraine holds the 1991 borders and collective security guarantees as red lines. No position admits intersection. The sum is a non-cooperative equilibrium that only shifts with each side\'s marginal cost.'
          )}</p>
        </div>
      </section>

      {/* Drones */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La economía de la guerra de los drones', 'The economics of the drone war')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'El 31 de agosto, Kiev informó que Rusia lanzó <strong>1.500 drones en 4 días</strong> sobre la capital, con decenas de víctimas civiles y daños en la red eléctrica. El dato relevante no es el volumen, sino el coste unitario. Un dron Geran, derivado del iraní Shahed, cuesta unos <strong>50.000 dólares</strong>. Cada intercepción ucraniana consume un misil valorado en unos <strong>500.000 dólares</strong>. La relación es de 1 a 10: el esfuerzo defensivo de Kiev drena su arsenal a un ritmo diez veces superior al coste ruso de provocar ese desgaste.',
            'On August 31, Kyiv reported that Russia launched <strong>1,500 drones in 4 days</strong> over the capital, with dozens of civilian casualties and damage to the power grid. The relevant figure is not volume but unit cost. A Geran drone, derived from the Iranian Shahed, costs roughly <strong>US$50,000</strong>. Each Ukrainian interception consumes a missile valued at about <strong>US$500,000</strong>. The ratio is 1 to 10: Kyiv\'s defensive effort drains its arsenal at a rate ten times higher than the Russian cost of provoking that attrition.'
          )}</p>
          <p>{L(
            'Peskov justificó la campaña como respuesta a los ataques ucranianos contra la retaguardia rusa. La justificación importa menos que el cálculo: la defensa aérea no es infinitamente reposicionable, y cada oleada satura los sistemas Patriot y SAMP/T. Ucrania reportó avances rusos escasos en el frente, con pérdidas elevadas para Moscú. El gasto militar ruso supera ya el 6 por ciento de su PIB, un nivel que condiciona la sostenibilidad de la campaña.',
            'Peskov justified the campaign as a response to Ukrainian strikes on Russia\'s rear. The justification matters less than the calculation: air defense is not infinitely repositionable, and each wave saturates the Patriot and SAMP/T systems. Ukraine reported scarce Russian advances on the front, at heavy cost to Moscow. Russia\'s military spending already exceeds 6 percent of its GDP, a level that constrains the sustainability of the campaign.'
          )}</p>
          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4 text-center font-sans">GRÁFICO SUGERIDO — DRONES DE ATAQUE RUSOS SOBRE UCRANIA (ESCALA RELATIVA)</div>
            <div className="flex items-end justify-center gap-4 sm:gap-8 h-56">
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-stone-600 font-sans">base</div>
                <div className="w-14 sm:w-20 bg-stone-300 rounded-t" style={{height: '30%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2024</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-stone-600 font-sans">x2</div>
                <div className="w-14 sm:w-20 bg-amber-400 rounded-t" style={{height: '60%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2025</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-rose-600 font-sans">1.500 / 4d</div>
                <div className="w-14 sm:w-20 bg-rose-500 rounded-t" style={{height: '100%'}}></div>
                <div className="text-xs text-stone-500 font-sans">2026</div>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-4 text-center font-sans">{L('Gráfico sugerido: evolución mensual de ataques con drones frente al coste estimado de interceptación, con dos series: nº de vuelos nocturnos y dólares de munición defensiva consumida. Barras en escala relativa (ilustrativo).', 'Suggested chart: monthly evolution of drone attacks versus estimated interception cost, with two series: nightly flights and dollars of defensive ammunition consumed. Bars in relative scale (illustrative).')}</p>
          </div>
          <figure className="my-8">
            <img src="/images/report/ukraine/shahed-drone.jpg" alt={L('Drones iraníes Shahed-136, el modelo usado por Rusia bajo la denominación «Geran». Fuente: Wikimedia Commons (CC BY-SA).', 'Iranian Shahed-136 drones, the model Russia uses under the name «Geran». Source: Wikimedia Commons (CC BY-SA).')} className="w-full rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Drones Shahed-136 recuperados (el tipo que Rusia emplea como «Geran-2»). Fuente: Wikimedia Commons (CC BY-SA).', 'Recovered Shahed-136 drones (the type Russia uses as «Geran-2»). Source: Wikimedia Commons (CC BY-SA).')}</figcaption>
          </figure>
        </div>
      </section>

      {/* Ecuación europea */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La ecuación europea: gasto militar y brecha de munición', 'The European equation: military spending and the ammunition gap')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'Europa ha reaccionado de forma asimétrica respecto a su peso económico. Alemania pasó de un gasto militar del <strong>1,3% del PIB</strong> en 2022 a superar el <strong>2,1%</strong> en 2026, tras su fondo especial de <strong>100.000 millones de euros</strong>. Francia alcanzó el <strong>2%</strong>, el Reino Unido el <strong>2,3%</strong> y Polonia lidera con más del <strong>4%</strong>. Europa aporta, según el Instituto Kiel, el grueso de la ayuda militar a Ucrania en 2026, en torno a <strong>60.000 millones de euros anuales</strong>, por encima del flujo estadounidense.',
            'Europe has reacted asymmetrically relative to its economic weight. Germany went from <strong>1.3% of GDP</strong> in military spending in 2022 to over <strong>2.1%</strong> in 2026, after its special <strong>€100 billion</strong> defense fund. France reached <strong>2%</strong>, the <strong>UK 2.3%</strong>, and Poland leads with over <strong>4%</strong>. Europe now provides, per the Kiel Institute, the bulk of military aid to Ukraine in 2026 — around <strong>€60 billion a year</strong>, above the US flow.'
          )}</p>
          <p>{L(
            'El cuello de botella no es el dinero, sino la producción. Europa fabrica alrededor de un millón de proyectiles de artillería al año, frente a una demanda ucraniana superior a los dos millones. La brecha obliga a Kiev a racionar el fuego. La UE ha respondido con compras conjuntas y un fondo de defensa, pero la escalada industrial tarda entre 18 y 24 meses, un retraso que coincide con el calendario electoral estadounidense.',
            'The bottleneck is not money but production. Europe manufactures around one million artillery shells a year, against Ukrainian demand exceeding two million. The gap forces Kyiv to ration fire. The EU has responded with joint procurement and a defense fund, but industrial scale-up takes 18 to 24 months — a delay that coincides with the US electoral calendar.'
          )}</p>
        </div>
      </section>

      {/* Washington / escenarios */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El aliado incómodo: Washington y el factor electoral', 'The awkward ally: Washington and the electoral factor')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'Estados Unidos es el mayor donante histórico de Ucrania, aunque Europa ya lo supera en flujo corriente. Esa dependencia convierte a la Casa Blanca en el determinante estructural del desenlace. El 31 de agosto, Zelenski mantuvo una videollamada «detallada y constructiva» con los enviados Steve Witkoff y Jared Kushner:',
            'The United States is Ukraine\'s largest historical donor, though Europe already exceeds it in current flow. That dependence makes the White House the structural determinant of the outcome. On August 31, Zelensky held a "detailed and constructive" video call with envoys Steve Witkoff and Jared Kushner:'
          )}</p>
          <blockquote className="border-l-4 border-sky-400 pl-4 italic text-stone-700 my-4">«{L('El diálogo entre los equipos negociadores de Estados Unidos y Ucrania se mantiene de forma continua y actualmente se está trabajando para fijar las fechas de la visita a Ucrania.', 'The dialogue between the negotiating teams of the United States and Ukraine continues, and work is underway to set dates for a visit to Ukraine.')}»</blockquote>
          <p>{L(
            'Washington desea un enviado de alto nivel en Kiev antes del ciclo electoral. La administración Trump está dividida entre el ala que sostiene la presión militar y la que busca un acuerdo rápido. Marco Rubio, secretario de Estado, representa la línea dura; Moscú espera sus propuestas concretas.',
            'Washington wants a high-level envoy in Kyiv before the electoral cycle. The Trump administration is split between the wing that sustains military pressure and the one seeking a quick deal. Marco Rubio, Secretary of State, represents the hard line; Moscow awaits his concrete proposals.'
          )}</p>
          <div className="bg-stone-100 rounded-lg p-5 my-6 border border-stone-200">
            <p className="font-sans font-bold text-stone-800 text-sm mb-2">{L('Escenario A — Reelección de Trump', 'Scenario A — Trump re-election')}</p>
            <p className="text-sm text-stone-600 font-sans">{L('La ayuda quedaría sujeta a condicionamiento. Washington exigiría a Zelenski avances verificables hacia la negociación a cambio de armamento. Un segundo mandato liberaría a Trump para imponer un acuerdo territorial parcial. Moscú leería la continuidad como una ventana de oportunidad.', 'Aid would be subject to conditionality. Washington would demand verifiable progress toward negotiations from Zelensky in exchange for arms. A second term would free Trump to impose a partial territorial deal. Moscow would read continuity as a window of opportunity.')}</p>
          </div>
          <div className="bg-sky-50 rounded-lg p-5 my-6 border border-sky-200">
            <p className="font-sans font-bold text-sky-800 text-sm mb-2">{L('Escenario B — Victoria demócrata', 'Scenario B — Democratic victory')}</p>
            <p className="text-sm text-sky-700 font-sans">{L('Incremento del presupuesto de defensa para Ucrania, paquetes plurianuales y sanciones secundarias más duras sobre la logística rusa. El Pentágono expandiría la producción de munición. Moscú perdería el incentivo de una victoria negociada rápida y prolongaría el conflicto.', 'A rise in the defense budget for Ukraine, multi-year packages and tougher secondary sanctions on Russian logistics. The Pentagon would expand ammunition production. Moscow would lose the incentive of a fast negotiated victory and prolong the conflict.')}</p>
          </div>
          <p>{L(
            'Ambos bandos ajustan sus estrategias al calendario del 3 de noviembre. Kiev acelera la reposición de arsenales; Moscú intensifica los ataques a la infraestructura energética. El resultado de las urnas cambia menos el número de soldados que el flujo de dólares que los sostiene.',
            'Both sides calibrate their strategies to the November 3 calendar. Kyiv accelerates arsenal replenishment; Moscow intensifies strikes on energy infrastructure. The ballot outcome changes fewer soldiers than the dollar flow that sustains them.'
          )}</p>
        </div>
      </section>

      {/* China */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El socio silencioso: Pekín y sus exportaciones', 'The silent partner: Beijing and its exports')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'China no figura en el frente, pero condiciona el balance logístico y diplomático. Las exportaciones de Pekín a Rusia superaron los <strong>100.000 millones de dólares</strong> en 2025, frente a menos de <strong>70.000 millones</strong> en 2021. La composición es reveladora: semiconductores, componentes electrónicos, maquinaria, vehículos y bienes de doble uso que Europa y EE.UU. han sancionado pero que transitan canales alternativos.',
            'China does not appear on the front, but it conditions the logistical and diplomatic balance. Beijing\'s exports to Russia exceeded <strong>US$100 billion</strong> in 2025, up from under <strong>US$70 billion</strong> in 2021. The composition is telling: semiconductors, electronic components, machinery, vehicles and dual-use goods that Europe and the US have sanctioned but which flow through alternative channels.'
          )}</p>
          <p>{L(
            'La dependencia rusa de componentes chinos es estructural: parte de los sistemas de comunicación, la óptica y la electrónica adaptada a uso militar proviene de China. La inteligencia occidental documenta rutas que evitan las sanciones: puertos del Báltico, el ferrocarril transiberiano y reexportaciones vía Kazajistán.',
            'Russia\'s dependence on Chinese components is structural: part of its communications systems, optics and consumer electronics adapted for military use comes from China. Western intelligence documents routes that dodge sanctions: Baltic ports, the Trans-Siberian railway and re-exports via Kazakhstan.'
          )}</p>
          <p>{L(
            'En la ONU, China se alinea con Moscú en las votaciones clave y bloquea resoluciones que condenan la guerra. Su interés es selectivo: una paz estabilizaría los precios de la energía y el comercio que Pekín necesita; un conflicto prolongado desgasta a EE.UU. y Europa, redistribuyendo recursos hacia el Pacífico. Pekín importa además hidrocarburos rusos con descuento, lo que sostiene ingresos fiscales clave para el esfuerzo bélico. La evidencia sugiere que prioriza el segundo cálculo: cada año de conflicto desplaza capital y atención occidental, tiempo que China aprovecha en Taiwán y el mar de China Meridional.',
            'At the UN, China aligns with Moscow on key votes and blocks resolutions that condemn the war. Its interest is selective: a peace would stabilize the energy and trade prices Beijing needs; a prolonged conflict wears down the US and Europe, redirecting resources toward the Pacific. Beijing also imports discounted Russian hydrocarbons, sustaining key fiscal revenue for the war effort. The evidence suggests it favors the second calculation: each year of conflict shifts Western capital and attention, time China uses in Taiwan and the South China Sea.'
          )}</p>
        </div>
      </section>

      {/* Energía */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La variable energética: el precio de la guerra', 'The energy variable: the price of war')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'El conflicto ha reconfigurado el mercado europeo de gas. El TTF holandés pasó de unos <strong>20 euros por megavatio-hora</strong> en 2021 a un pico superior a los <strong>300 euros</strong> en 2022. En 2026, el precio se ha estabilizado en torno a los <strong>40 euros</strong>, el doble del nivel de 2021. El Brent cotiza cerca de <strong>90 dólares</strong> el barril, frente a unos 65 en 2021.',
            'The conflict has redrawn the European gas market. The Dutch TTF went from about <strong>€20 per megawatt-hour</strong> in 2021 to a peak above <strong>€300</strong> in 2022. In 2026 the price has stabilized around <strong>€40</strong>, double the 2021 level. Brent trades near <strong>US$90</strong> a barrel, against about US$65 in 2021.'
          )}</p>
          <p>{L(
            'El FMI y el BCE estiman que la crisis energética restó entre <strong>0,5 y 1 punto porcentual</strong> al PIB de la UE desde 2022, con cierres de fábricas intensivas en energía en Alemania e inflación superior al 10 por ciento. Rusia usa el suministro energético como arma negociadora, alternando cortes y flujos según el estado de las conversaciones.',
            'The IMF and ECB estimate the energy crisis stripped between <strong>0.5 and 1 percentage point</strong> off EU GDP since 2022, with closures of energy-intensive German factories and inflation above 10 percent. Russia uses energy supply as a negotiating weapon, alternating cuts and flows according to the state of the talks.'
          )}</p>
          <p>{L(
            'Las reservas de gas de la UE están en torno al <strong>85% de su capacidad</strong> en septiembre, por debajo del llenado pleno. Una ola de frío o un nuevo corte forzaría un aumento de precios y racionamiento industrial. China compra gas y crudo ruso con descuento, aliviando a Moscú pero distorsionando el mercado global.',
            'EU gas reserves sit around <strong>85% of capacity</strong> in September, below full filling. A cold snap or a new cutoff would force price rises and industrial rationing. China buys discounted Russian gas and crude, relieving Moscow but distorting the global market.'
          )}</p>
          <div className="bg-stone-100 rounded-lg p-5 my-6 border border-stone-200 font-sans">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div><div className="text-[10px] text-stone-500 uppercase">TTF 2021</div><div className="text-lg font-bold text-stone-700">€20</div><div className="text-[10px] text-stone-400">/MWh</div></div>
              <div><div className="text-[10px] text-stone-500 uppercase">TTF 2022 peak</div><div className="text-lg font-bold text-rose-600">€300</div><div className="text-[10px] text-stone-400">/MWh</div></div>
              <div><div className="text-[10px] text-stone-500 uppercase">TTF 2026</div><div className="text-lg font-bold text-amber-600">€40</div><div className="text-[10px] text-stone-400">/MWh</div></div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center mt-4 border-t border-stone-200 pt-3">
              <div><div className="text-[10px] text-stone-500 uppercase">{L('Brent 2026', 'Brent 2026')}</div><div className="text-lg font-bold text-stone-700">~$90</div></div>
              <div><div className="text-[10px] text-stone-500 uppercase">{L('Reservas gas UE', 'EU gas storage')}</div><div className="text-lg font-bold text-stone-700">~85%</div></div>
            </div>
            <p className="text-[11px] text-stone-400 mt-3 text-center">Fuente: ICE, Bloomberg, AIE, GIE.</p>
          </div>
        </div>
      </section>

      {/* Quién es quién */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Quién es quién', 'Who\'s who')}</h2>
        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full text-sm font-sans">
            <thead>
              <tr className="bg-stone-100 text-left text-xs text-stone-600">
                <th className="p-3">{L('Nombre', 'Name')}</th>
                <th className="p-3">{L('Cargo', 'Role')}</th>
                <th className="p-3">{L('Postura / Objetivo', 'Stance / Goal')}</th>
                <th className="p-3">{L('Relevancia en 2026', 'Relevance in 2026')}</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 text-xs">
              {[
                { n:L('Vladimir Putin','Vladimir Putin'), c:L('Presidente de Rusia','Russian President'), p:L('Exige retirada de Donbás; solo firma un acuerdo final','Demands Donbas withdrawal; only signs a final deal'), r:L('Define el calendario de la presión militar','Sets the pace of military pressure') },
                { n:L('Volodímir Zelenski','Volodymyr Zelensky'), c:L('Presidente de Ucrania','Ukrainian President'), p:L('Exige fronteras de 1991 y garantías de seguridad','Demands 1991 borders and security guarantees'), r:L('Negocia el sostén financiero de EE.UU.','Negotiates the US financial lifeline') },
                { n:L('Donald Trump','Donald Trump'), c:L('Presidente de EE.UU.','US President'), p:L('Mediador dividido entre halcones y pragmáticos','A mediator split between hawks and pragmatists'), r:L('Su reelección condiciona la ayuda','His re-election conditions the aid') },
                { n:L('Dmitri Peskov','Dmitry Peskov'), c:L('Portavoz del Kremlin','Kremlin spokesman'), p:L('Descarta negociar; exige cumbre de firma','Rules out negotiating; demands a signing summit'), r:L('Anuncia la posición de Moscú','Announces Moscow\'s position') },
                { n:L('Marco Rubio','Marco Rubio'), c:L('Secretario de Estado','Secretary of State'), p:L('Línea dura del ala diplomática','Hard line of the diplomatic wing'), r:L('Moscú espera sus propuestas','Moscow awaits his proposals') },
                { n:L('Ursula von der Leyen','Ursula von der Leyen'), c:L('Presidenta de la Comisión Europea','European Commission President'), p:L('Impulsa compras conjuntas y fondo de defensa','Drives joint procurement and a defense fund'), r:L('Gestiona la brecha de producción de la UE','Manages the EU production gap') },
                { n:L('Xi Jinping','Xi Jinping'), c:L('Presidente de China','Chinese President'), p:L('Alinea con Moscú en la ONU; tolera el doble uso','Aligns with Moscow at the UN; tolerates dual use'), r:L('Condiciona el balance logístico ruso','Conditions the Russian logistical balance') },
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-white' : 'bg-stone-50'}>
                  <td className="p-3 font-medium">{row.n}</td>
                  <td className="p-3">{row.c}</td>
                  <td className="p-3">{row.p}</td>
                  <td className="p-3">{row.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Cronología crítica 2022-2026', 'Critical timeline 2022-2026')}</h2>
        <div className="bg-stone-900 text-white rounded-lg p-6 my-4">
          <div className="text-xs font-mono tracking-widest text-sky-400 mb-6 uppercase">CRONOLOGÍA — GUERRA Y NEGOCIACIONES 2022-2026</div>
          <div className="space-y-0 relative">
            {[
              {f:'24 FEB 2022', r:'🇷🇺', t:L('Invasión rusa a gran escala','Full-scale Russian invasion'), d:L('Rusia ataca Ucrania desde tres frentes; se inicia el mayor conflicto armado en Europa desde la II Guerra Mundial.','Russia attacks on three fronts; the largest armed conflict in Europe since WWII begins.'), c:'bg-rose-500'},
              {f:'2022', r:'⚡', t:L('Pico del precio del gas','Gas price spike'), d:L('El TTF de gas supera los 300 euros/MWh tras el corte del suministro ruso.','The TTF gas price exceeds €300/MWh after the cutoff of Russian supply.'), c:'bg-amber-500'},
              {f:'JUN 2023', r:'🛡️', t:L('Contraofensiva ucraniana','Ukrainian counteroffensive'), d:L('Ucrania lanza contraofensiva en Zaporiyia y el sur; avances limitados frente a las defensas rusas.','Ukraine launches a counteroffensive in Zaporizhzhia and the south; limited gains against Russian defenses.'), c:'bg-sky-500'},
              {f:'2024', r:'💥', t:L('Incursión de Kursk','Kursk incursion'), d:L('Ucrania cruza hacia la región rusa de Kursk y cambia la dinámica del frente.','Ukraine crosses into Russia\'s Kursk region, shifting front dynamics.'), c:'bg-sky-500'},
              {f:'2025', r:'🇺🇸', t:L('Cumbre de Anchorage','Anchorage Summit'), d:L('EE.UU. intenta acercar posturas; la cumbre de alto nivel con mediación estadounidense no logra un acuerdo.','The US tries to bridge positions; the high-level US-mediated summit fails to reach a deal.'), c:'bg-amber-500'},
              {f:'28 FEB 2026', r:'🤝', t:L('Última ronda en Estambul','Last round in Istanbul'), d:L('Ronda directa mediada por EE.UU. que concluye sin acuerdo firmado; inicia el estancamiento diplomático.','A direct US-mediated round ends without a signed deal; diplomatic stalemate begins.'), c:'bg-amber-500'},
              {f:'30 AGO 2026', r:'🗣️', t:L('Peskov: «totalmente estancado»','Peskov: "totally stalled"'), d:L('El Kremlin asegura que no hay nuevas ideas y que Putin solo firmará un acuerdo final.','The Kremlin says there are no new ideas and Putin will only sign a final deal.'), c:'bg-rose-500'},
              {f:'31 AGO 2026', r:'📞', t:L('Zelenski y enviados de EE.UU.','Zelensky and US envoys'), d:L('Conversación con Witkoff y Kushner; se prepara una visita de alto nivel a Ucrania.','A call with Witkoff and Kushner; a high-level visit to Ukraine is being prepared.'), c:'bg-sky-500'},
              {f:'3 NOV 2026', r:'🗳️', t:L('Elecciones en EE.UU.','US elections'), d:L('Los comicios pueden redefinir la política de Washington respecto a Ucrania.','The elections could redefine Washington\'s policy toward Ukraine.'), c:'bg-amber-500'},
            ].map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full ${item.c} ring-4 ring-white/10 shrink-0 z-10`}></div>
                  {i < 8 && <div className="w-0.5 flex-1 bg-white/15"></div>}
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-sky-300 font-bold">{item.f}</span>
                    <span className="text-lg">{item.r}</span>
                  </div>
                  <p className="font-sans font-bold text-white text-sm mt-1">{item.t}</p>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Proyección: el invierno como variable logística', 'Outlook: winter as a logistical variable')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>{L(
            'El calendario climático añade una restricción técnica. El invierno de 2026 convierte la infraestructura energética ucraniana en el objetivo de mayor valor: Rusia busca imponer costes civiles antes de la reposición primaveral de arsenales. Ucrania necesita interconexiones eléctricas con Europa y defensa aérea para proteger las subestaciones: un problema de asignación de recursos limitados.',
            'The climatic calendar adds a technical constraint. Winter 2026 turns Ukrainian energy infrastructure into the highest-value target: Russia seeks to impose civilian costs before the spring replenishment of arsenals. Ukraine needs power interconnections with Europe and air defense to protect substations: a problem of allocating scarce resources.'
          )}</p>
          <p>{L(
            'El conflicto se reduce a una ecuación de sostenibilidad: quién mantiene el coste marginal de la guerra durante más tiempo. Estados Unidos aporta el capital, Europa la producción en expansión, China la tolerancia comercial y los precios energéticos el aguante de cada economía. La variable que rompe el equilibrio no es militar: es el resultado electoral de noviembre de 2026 y la paciencia fiscal de cada contribuyente. El desenlace se escribirá en los presupuestos de defensa posteriores al 3 de noviembre.',
            'The conflict reduces to a sustainability equation: who can sustain the marginal cost of war longer. The US provides the capital, Europe the expanding production, China the commercial tolerance, and energy prices the endurance of each economy. The variable that breaks the equilibrium is not military: it is the November 2026 election result and the fiscal patience of each taxpayer. The outcome will be written in the defense budgets passed after November 3.'
          )}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 text-center border-t border-stone-200">
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
