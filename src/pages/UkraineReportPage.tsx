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
        <img src="/images/report/ukraine/kyiv-wide-destruction.jpg" alt={L('Plano general de un bloque de viviendas dañado en Kiev tras un ataque con misiles rusos, 14 de enero de 2023. Fuente: Wikimedia Commons (CC BY 4.0).', 'Wide shot of a residential block damaged in Kyiv after a Russian missile attack, January 14, 2023. Source: Wikimedia Commons (CC BY 4.0).')} className="w-full h-72 md:h-96 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Plano general de viviendas destruidas en Kiev tras un ataque ruso con misiles. Fuente: Wikimedia Commons (CC BY 4.0).', 'Wide shot of destroyed residential buildings in Kyiv after a Russian missile attack. Source: Wikimedia Commons (CC BY 4.0).')}</p>
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
          <figure className="my-8">
            <img src="/images/report/maps/ukraine-orthographic.png" alt={L('Mapa de Ucrania. Fuente: Wikimedia Commons (dominio público).', 'Map of Ukraine. Source: Wikimedia Commons (public domain).')} className="mx-auto max-w-sm rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Mapa de Ucrania. Fuente: Wikimedia Commons (dominio público).', 'Map of Ukraine. Source: Wikimedia Commons (public domain).')}</figcaption>
          </figure>
          <div className="bg-stone-100 rounded-lg p-6 my-8">
            <div className="text-xs tracking-widest text-stone-500 mb-4 text-center font-sans">GRÁFICO — DRONES DE ATAQUE RUSOS SOBRE UCRANIA (ESCALA RELATIVA)</div>
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
            <p className="text-xs text-stone-400 mt-4 text-center font-sans">{L('Según Zelenski (31 ago 2026), Rusia lanzó 1.500 drones en 4 días sobre Kiev, marcando una intensificación sin precedentes respecto a los años anteriores. Barras en escala relativa (ilustrativo).', 'Per Zelensky (Aug 31, 2026), Russia launched 1,500 drones in 4 days over Kyiv, marking an unprecedented escalation over previous years. Bars in relative scale (illustrative).')}</p>
          </div>
          <figure className="my-8">
            <img src="/images/report/ukraine/shahed-drone.jpg" alt={L('Drones iraníes Shahed-136, el modelo usado por Rusia bajo la denominación «Geran» (Geranio) en sus ataques contra Ucrania. Fuente: Wikimedia Commons (CC BY-SA).', 'Iranian Shahed-136 drones, the model used by Russia under the name «Geran» (Geranium) in its attacks on Ukraine. Source: Wikimedia Commons (CC BY-SA).')} className="w-full rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Drones Shahed-136 recuperados (el tipo que Rusia emplea como «Geran-2»). Fuente: Wikimedia Commons (CC BY-SA).', 'Recovered Shahed-136 drones (the type Russia uses as «Geran-2»). Source: Wikimedia Commons (CC BY-SA).')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">3. {L('El papel de Estados Unidos – conversaciones con Zelenski y enviados', 'US role – talks with Zelensky and envoys')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El papel de Washington es el más decisivo del conflicto: sin el flujo de armamento, inteligencia y apoyo financiero de EE.UU., Ucrania no habría podido sostener la defensa contra la invasión rusa desde 2022. Según el Kremlin (Instituto Kiel), Estados Unidos es el principal donante de ayuda militar a Kiev, seguido de la Unión Europea. Esta dependencia convierte a la Casa Blanca en el garante (y potencial freno) de la capacidad bélica ucraniana.</p>
          <p>El <strong>31 de agosto de 2026</strong>, Zelenski mantuvo una conversación por videoconferencia con los enviados especiales de EE.UU., <strong>Steve Witkoff</strong> y <strong>Jared Kushner</strong>, calificada por la presidencia ucraniana de "detallada y constructiva". Witkoff, histórico emisario de la administración para Oriente Medio, y Kushner, yerno y consejero del presidente Trump, actuarían como puente directo entre Kiev y la Casa Blanca, al margen del aparato diplomático formal del Departamento de Estado.</p>
          <p>Zelenski declaró: <em>"El diálogo entre los equipos negociadores de Estados Unidos y Ucrania se mantiene de forma continua y actualmente se está trabajando para fijar las fechas de la visita a Ucrania"</em>. La inminente visita sugiere que Washington busca reactivar el contacto directo de alto nivel, congelado desde la cumbre de Anchorage de 2025.</p>
          <p>El secretario de Estado <strong>Marco Rubio</strong> está involucrado en el expediente; Moscú espera nuevas propuestas concretas de Rubio, a quien el Kremlin percibe como la voz dura del ala diplomática. Según El Comercio (EFE), la división interna en la administración Trump entre "halcones" (que abogan por mantener la presión militar sobre Moscú) y "buscadores de acuerdo rápido" (que presionan por un cese negociado inmediato) complica cualquier negociación.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La visita de Witkoff y Kushner a Ucrania, si se confirma, sería la primera visita oficial de alto nivel estadounidense desde la cumbre de Anchorage de 2025 — un gesto que Moscú leería como señal de que Washington vuelve a apostar por la diplomacia directa por encima de los canales de la ONU o de la Unión Europea.
          </div>
          <p className="text-xs text-stone-500 font-sans">Fuentes: presidencia ucraniana (31 ago 2026), Infobae (31 ago 2026), El Comercio Perú – EFE (30 ago 2026), Instituto Kiel para la Economía Mundial (datos de asistencia militar), Wikipedia ES.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">4. {L('Actores clave y declaraciones', 'Key actors and statements')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p className="text-stone-600">{L(
            'La guerra de desgaste en Ucrania no se libra solo en el frente, sino también en las mesas de negociación y en las decisiones de un puñado de líderes mundiales. Estas son las voces y posiciones públicas de los principales actores, desde el Kremlin hasta la Casa Blanca y Kiev.',
            'The war of attrition in Ukraine is fought not only on the front but also at the negotiating table and in the decisions of a handful of world leaders. These are the voices and public positions of the main actors, from the Kremlin to the White House and Kyiv.'
          )}</p>

          <div className="grid grid-cols-1 gap-6 my-8">
            {/* Peskov */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-40 shrink-0 flex items-center justify-center bg-stone-100">
                <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-3xl font-serif font-bold text-sky-700">P</div>
              </div>
              <div className="p-5">
                <p className="font-sans font-bold text-stone-900">Dmitri Peskov</p>
                <p className="font-sans text-xs text-stone-500 mb-3">Portavoz del Kremlin — 30 ago 2026</p>
                <p className="text-stone-700 italic border-l-4 border-stone-400 pl-3 font-serif">“El proceso de paz está totalmente estancado. No hay nuevas ideas. Putin solo se reunirá con Trump y Zelenski para firmar un acuerdo final, no para negociar”.</p>
              </div>
            </div>

            {/* Zelensky */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
              <div className="sm:w-40 shrink-0">
                <img src="/images/report/politicians/zelenski.jpg" alt="Volodímir Zelenski" className="w-full h-44 sm:h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-sans font-bold text-stone-900">Volodímir Zelenski</p>
                <p className="font-sans text-xs text-sky-600 mb-3">Presidente de Ucrania — 31 ago 2026</p>
                <p className="text-stone-700 italic border-l-4 border-sky-400 pl-3 font-serif">“El diálogo entre los equipos negociadores de Estados Unidos y Ucrania se mantiene de forma continua y actualmente se está trabajando para fijar las fechas de la visita a Ucrania”.</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 rounded-lg p-6 my-8 border border-stone-200">
            <div className="text-xs tracking-widest text-stone-500 mb-4 font-sans">QUIÉN ES QUIÉN EN LAS NEGOCIACIONES</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/putin.jpg" alt="Vladimir Putin" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">Vladimir Putin</p>
                <p className="text-xs text-stone-500 font-sans">{L('Presidente de Rusia — exige retirada de Donbás', 'Russian President — demands Donbas withdrawal')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/zelenski.jpg" alt="Volodímir Zelenski" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">Volodímir Zelenski</p>
                <p className="text-xs text-stone-500 font-sans">{L('Presidente de Ucrania — exige fronteras de 1991', 'Ukrainian President — demands 1991 borders')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/trump.jpg" alt="Donald Trump" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">Donald Trump</p>
                <p className="text-xs text-stone-500 font-sans">{L('Presidente de EE.UU. — mediador con dividida interna', 'US President — mediator with internal split')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-stone-200 flex items-center justify-center text-stone-400 font-sans text-xl">P</div>
                <p className="text-sm font-bold text-stone-800 font-sans">Dmitri Peskov</p>
                <p className="text-xs text-stone-500 font-sans">{L('Portavoz del Kremlin', 'Kremlin spokesman')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/rubio.jpg" alt="Marco Rubio" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">Marco Rubio</p>
                <p className="text-xs text-stone-500 font-sans">{L('Secretario de Estado — Moscú espera nuevas propuestas', 'Secretary of State — Moscow awaits new proposals')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-amber-100 flex items-center justify-center text-amber-600 font-sans text-xl">W</div>
                <p className="text-sm font-bold text-stone-800 font-sans">Steve Witkoff</p>
                <p className="text-xs text-stone-500 font-sans">{L('Enviado especial de EE.UU.', 'US special envoy')}</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <img src="/images/report/politicians/kushner.jpg" alt="Jared Kushner" className="w-24 h-24 object-cover rounded-full mx-auto mb-2" loading="lazy" />
                <p className="text-sm font-bold text-stone-800 font-sans">Jared Kushner</p>
                <p className="text-xs text-stone-500 font-sans">{L('Asesor y enviado — puente con la Casa Blanca', 'Adviser and envoy — White House bridge')}</p>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-3 text-center font-sans">{L('Fotos: Wikimedia Commons — licencias libres (CC / dominio público). Avatares con iniciales cuando no se dispone de fotografía.', 'Photos: Wikimedia Commons — free licenses (CC / public domain). Initial avatars used where no photo is available.')}</p>
          </div>

          {/* Timeline infographic */}
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
            <div className="text-xs font-mono tracking-widest text-sky-400 mb-6 uppercase">CRONOLOGÍA COMPLETA — GUERRA Y NEGOCIACIONES 2022-2026</div>
            <div className="space-y-0 relative">
              {[
                {f:'24 FEB 2022', r:'🇷🇺', t:L('Invasión rusa a gran escala','Full-scale Russian invasion'), d:L('Rusia ataca Ucrania desde tres frentes; se inicia el mayor conflicto armado en Europa desde la II Guerra Mundial.','Russia attacks on three fronts; the largest armed conflict in Europe since WWII begins.'), c:'bg-rose-500', flag:'rusia'},
                {f:'ABR 2022', r:'⚔️', t:L('Batalla de Kiev / Bucha','Battle of Kyiv / Bucha'), d:L('Rusia se retira del norte; evidencias de crímenes de guerra en Bucha. Ucrania resiste la toma de la capital.','Russia withdraws from the north; evidence of war crimes in Bucha. Ukraine resists capture of the capital.'), c:'bg-sky-500', flag:'ucrania'},
                {f:'SEP 2022', r:'🗺️', t:L('Anexión de Crimea y Donbás (referéndums)','Annexation of Crimea and Donbas (referendums)'), d:L('Rusia anexiona formalmente 4 regiones ucranianas tras referéndums no reconocidos internacionalmente.','Russia formally annexes 4 Ukrainian regions after unrecognized referendums.'), c:'bg-rose-500', flag:'rusia'},
                {f:'2022-2023', r:'✈️', t:L('Guerra de drones y misiles','Drone and missile war'), d:L('Campañas masivas de drones iraníes Shahed «Geran» y misiles de crucero sobre infraestructura energética ucraniana.','Massive campaigns of Iranian Shahed «Geran» drones and cruise missiles against Ukrainian energy infrastructure.'), c:'bg-sky-500', flag:'ucrania'},
                {f:'JUN 2023', r:'🛡️', t:L('Contraofensiva ucraniana','Ukrainian counteroffensive'), d:L('Ucrania lanza contraofensiva en Zaporiyia y el sur; avances limitados frente a las defensas rusas en profundidad.','Ukraine launches counteroffensive in Zaporizhzhia and the south; limited gains against deep Russian defenses.'), c:'bg-sky-500', flag:'ucrania'},
                {f:'2024', r:'💥', t:L('Incursión de Kursk','Kursk incursion'), d:L('Ucrania cruza la frontera hacia la región rusa de Kursk, cambiando la dinámica del frente y obligando a Moscú a reagrupar tropas.','Ukraine crosses into Russia\'s Kursk region, shifting front dynamics and forcing Moscow to regroup.'), c:'bg-sky-500', flag:'ucrania'},
                {f:'2025', r:'🇺🇸', t:L('Cumbre de Anchorage','Anchorage Summit'), d:L('EE.UU. intenta acercar posturas entre Rusia y Ucrania; una cumbre de alto nivel con mediación estadounidense que no logra un acuerdo.','US attempts to bring Russia and Ukraine together; a high-level summit with US mediation that fails to reach a deal.'), c:'bg-amber-500', flag:'eeuu'},
                {f:'FEB 2026', r:'🤝', t:L('Última ronda en Estambul','Last round in Istanbul'), d:L('Ronda de negociación directa mediada por EE.UU. que concluye sin acuerdo firmado; inicia un año de estancamiento diplomático.','Direct negotiation round mediated by the US ends without a signed deal; a year of diplomatic stalemate begins.'), c:'bg-amber-500', flag:'eeuu'},
                {f:'30 AGO 2026', r:'🗣️', t:L('Peskov: «totalmente estancado»','Peskov: "totally stalled"'), d:L('El Kremlin asegura que no hay nuevas ideas y que Putin solo firmará un acuerdo final, no negociará.','The Kremlin says there are no new ideas and Putin will only sign a final deal, not negotiate.'), c:'bg-rose-500', flag:'rusia'},
                {f:'31 AGO 2026', r:'📞', t:L('Zelenski y enviados de EE.UU.','Zelensky and US envoys'), d:L('Conversación «detallada y constructiva» con Witkoff y Kushner; se prepara una visita de alto nivel a Ucrania.','A "detailed and constructive" call with Witkoff and Kushner; a high-level visit to Ukraine is being prepared.'), c:'bg-sky-500', flag:'ucrania'},
                {f:'NOV 2026', r:'🗳️', t:L('Elecciones en EE.UU.','US elections'), d:L('Los comicios presidenciales estadounidenses podrían redefinir la política de Washington respecto a Ucrania.','US presidential elections could redefine Washington\'s policy toward Ukraine.'), c:'bg-amber-500', flag:'eeuu'},
              ].map((item, i) => (
                <div key={i} className="flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-5 h-5 rounded-full ${item.c} ring-4 ring-white/10 shrink-0 z-10`}></div>
                    {i < 10 && <div className="w-0.5 flex-1 bg-white/15"></div>}
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
            <p className="text-xs text-stone-400 mt-4 font-sans">{L('Elaboración propia sobre cronología pública (Wikipedia ES/EN) y reportes de El Comercio Perú, Infobae y Reuters. Iconos ilustrativos, no a escala.', 'Own compilation based on public chronology (Wikipedia ES/EN) and reports from El Comercio Perú, Infobae and Reuters. Icons illustrative, not to scale.')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">5. {L('Condiciones de Rusia y perspectivas de futuro', 'Russian conditions and outlook')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La posición negociadora de Moscú se ha mantenido prácticamente sin cambios desde los primeros intentos de diálogo. El <strong>podio de exigencias ruso</strong> incluye tres puntos centrales, según declaraciones del Kremlin recogidas por El Comercio (EFE) e Infobae:</p>
          <ul>
            <li><strong>Retirada ucraniana de todo el Donbás</strong> — con las repúblicas de Dombás ocupadas reconocidas como territorio ruso.</li>
            <li><strong>Reconocimiento de la anexión de Crimea</strong> — la península, anexionada en 2014, sería aceptada como parte de Rusia.</li>
            <li><strong>Neutralidad perpetua de Ucrania</strong> — sin ingreso en la OTAN y con limitaciones a la presencia militar extranjera.</li>
          </ul>
          <p>Por el contrario, <strong>Ucrania rechaza estas condiciones de plano</strong> y exige la restauración de su integridad territorial en las <strong>fronteras de 1991</strong> (que incluyen Crimea y todo el Donbás), así como garantías de seguridad internacionales que Washington y la OTAN han apoyado retóricamente sin comprometerse a una protección formal.</p>
          <p>Este choque de demandas inconciliables explica por qué las negociaciones llevan meses estancadas: <strong>ninguna de las partes está dispuesta a ceder en sus líneas rojas territoriales</strong>. Según el Instituto Internacional de Estudios Estratégicos (IISS), en un conflicto de desgaste como este, quien tiene más capacidad de sostener el esfuerzo bélico a largo plazo suele imponer sus términos —y ahí Rusia lleva ventaja en número de efectivos, aunque Ucrania cuenta con el respaldo de Occidente en tecnología y moral de combate.</p>
          <p>El contexto internacional añade presión: las <strong>elecciones presidenciales de EE.UU. en noviembre de 2026</strong> podrían alterar drásticamente la posición de Washington. Mientras la administración Trump está dividida entre halcones y quienes buscan un acuerdo rápido, una victoria de una administración más escéptica con la ayuda militar a Ucrania podría forzar a Kiev a aceptar concesiones territoriales. En paralelo, Rusia sigue dependiendo del apoyo de China, Corea del Norte e Irán para mantener su esfuerzo bélico, según reportes de inteligencia occidental (Reuters).</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Más de 14 millones de ucranianos han sido desplazados (ACNUR) y la economía ucraniana se ha contraído más del 30% desde 2022, según la ONU. En Rusia, más de 1,5 millones de personas han huido del país desde el inicio de la guerra, y el bloqueo económico occidental ha golpeado su economía a largo plazo.
          </div>
          <p className="text-xs text-stone-500 font-sans">Fuentes: El Comercio Perú – EFE (30 ago 2026), Infobae (31 ago 2026), ACNUR (datos de desplazados), ONU, Instituto Internacional de Estudios Estratégicos (IISS), Reuters, Wikipedia ES/EN.</p>
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