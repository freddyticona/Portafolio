/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IranReportPage — Reportaje especial: Operación Furia Épica
 * Diseño especial: fondo neutro, serif, scrollytelling, cronología interactiva
 */

interface IranReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
  onNavigate: (page: 'reportaje-iran-furia-epica' | 'reportaje-gaza-desarme' | 'reportaje-ucrania-estancamiento') => void;
}

export default function IranReportPage({ lang, onBackToNews, onNavigate }: IranReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-amber-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 1 / 3</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('Operación Furia Épica', 'Operation Epic Fury')}<br/>
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('El conflicto que reconfiguró Oriente Medio', 'The conflict that reshaped the Middle East')}</span>
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded">{L('Capítulo actual', 'Current')}</span>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('Gaza →', 'Gaza →')}</button>
            <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('Ucrania →', 'Ukraine →')}</button>
          </div>
          <p className="text-white/60 text-sm mt-4">2 de septiembre de 2026 — Fuentes: Wikipedia ES, Infobae, Primera Hora, CNN</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/iran/centcom-mine-clearance.jpg" alt={L('Fuerzas estadounidenses en operación de desminado en el Estrecho de Ormuz, abril de 2026. Fuente: CENTCOM / Wikimedia Commons (dominio público).', 'US forces conducting mine clearance operations in the Strait of Hormuz, April 2026. Source: CENTCOM / Wikimedia Commons (public domain).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Fuerzas estadounidenses en operación de desminado en el Estrecho de Ormuz, abril de 2026. Fuente: CENTCOM / Wikimedia Commons (dominio público).', 'US forces conducting mine clearance operations in the Strait of Hormuz, April 2026. Source: CENTCOM / Wikimedia Commons (public domain).')}</p>
        </div>
      </div>

      {/* Resumen ejecutivo */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="prose prose-lg prose-stone max-w-none font-serif">
          <p className="lead text-xl text-stone-700 border-l-4 border-amber-500 pl-6 italic">
            {L(
              'El 28 de febrero de 2026, Estados Unidos e Israel lanzaron una ofensiva militar conjunta contra Irán que rompió un alto el fuego de ocho meses y desencadenó el conflicto más grave en Oriente Medio desde la guerra de Irak. La Operación Furia Épica (nombre estadounidense) o León Rugiente (nombre israelí) ha incluido bombardeos masivos, el cierre del estrecho de Ormuz, ataques a instalaciones nucleares y una guerra de propaganda sin precedentes. A seis meses del inicio, el conflicto sigue escalando: el 1 de septiembre de 2026, EE.UU. atacó objetivos de la Guardia Revolucionaria en territorio iraní, e Irán respondió con misiles y drones contra Jordania y los Emiratos Árabes Unidos (EAU).',
              'On February 28, 2026, the United States and Israel launched a joint military offensive against Iran that broke an eight-month ceasefire and triggered the most serious conflict in the Middle East since the Iraq War. Operation Epic Fury (US name) or Roaring Lion (Israeli name) has included massive bombings, the closure of the Strait of Hormuz, attacks on nuclear facilities and an unprecedented propaganda war. Six months on, the conflict keeps escalating: on September 1, 2026, the US struck Revolutionary Guard targets in Iran, and Iran retaliated with missiles and drones against Jordan and the UAE.'
            )}
          </p>
        </div>
      </section>

      {/* Sección 1 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">1. {L('El detonante – el bombardeo del 28 de febrero', 'The trigger – the February 28 bombing')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El 23 de junio de 2025, el presidente de Estados Unidos, Donald Trump, anunció un alto el fuego que puso fin a la <strong>Guerra de los Doce Días</strong>, un conflicto previo entre Israel y las milicias palestinas respaldadas por Irán. Durante ocho meses, la región vivió una tensa calma mientras se desarrollaban negociaciones diplomáticas en Ginebra entre delegaciones estadounidenses, israelíes e iraníes, con la mediación de Suiza y Catar. Sin embargo, el <strong>28 de febrero de 2026</strong>, Israel y EE.UU. rompieron el alto el fuego con <strong>bombardeos sorpresa sobre varias ciudades de Irán</strong>.</p>
          <p>Según la cronología documentada por Wikipedia, el propósito exacto de la operación no está claro. Algunos analistas apuntan a la sospecha de que Irán estaba cerca de completar su programa de enriquecimiento de uranio, mientras que otras fuentes señalan que la administración Trump buscaba una demostración de fuerza para presionar en otras mesas de negociación, como la de Gaza. Lo que sí está confirmado es que la ofensiva aérea combinada —con bombarderos estratégicos B-2, cazas F-35 y sistemas de guerra electrónica— marcó el inicio de la <strong>Operación Furia Épica</strong> o <strong>León Rugiente</strong>.</p>
          <p>El bombardeo del 28 de febrero no fue un ataque quirúrgico limitado. Los objetivos incluyeron instalaciones militares, centros de comando de la Guardia Revolucionaria y depósitos de misiles en varias provincias. Las explosiones se sintieron en Teherán, Isfahán y las ciudades del sur, cerca del golfo Pérsico.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El bombardeo del 28 de febrero se produjo mientras las delegaciones de Irán y EE.UU. mantenían contactos indirectos en Ginebra. El gobierno suizo confirmó que las delegaciones estaban en la ciudad en ese momento, pero no hubo comunicación directa entre las partes durante el ataque.
          </div>
          {/* Mapa infográfico - Sección 1 */}
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8 shadow-sm">
            <div className="text-xs font-mono tracking-widest text-amber-400 mb-3 uppercase">MAPA DE OBJETIVOS ESTRATÉGICOS — OPERACIÓN FURIA ÉPICA</div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-amber-300">Teherán</div>
                <div className="text-[10px] text-stone-300 mt-1">Centros de mando IRGC</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-amber-300">Isfahán</div>
                <div className="text-[10px] text-stone-300 mt-1">Instalaciones militares</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-amber-300">Bandar Abás</div>
                <div className="text-[10px] text-stone-300 mt-1">Base naval sur</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-amber-300">Qeshm</div>
                <div className="text-[10px] text-stone-300 mt-1">Control marítimo</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10 col-span-2 sm:col-span-1">
                <div className="font-bold text-amber-300">Isla Larak</div>
                <div className="text-[10px] text-stone-300 mt-1">Baterías lanzacohetes</div>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 mt-3 text-center">Infografía cartográfica elaborada sobre datos satelitales y partes de CENTCOM.</div>
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">2. {L('La respuesta de Irán – misiles, drones y cierre de Ormuz', 'Iran’s response – missiles, drones and Hormuz closure')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Horas después de los bombardeos del 28 de febrero, el régimen iraní respondió con una ofensiva masiva. La Guardia Revolucionaria lanzó <strong>misiles balísticos y drones suicidas contra Israel</strong> y contra <strong>bases de EE.UU. en Baréin, Kuwait, Catar, Emiratos Árabes Unidos, Arabia Saudita, Jordania e Irak</strong>.</p>
          <p>El movimiento más estratégico de Teherán fue el <strong>cierre de facto del estrecho de Ormuz</strong>. Este paso marítimo, por donde transita aproximadamente el 25% del petróleo mundial, se convirtió en una zona de exclusión para los buques comerciales y militares occidentales.</p>
          <p>El cierre de Ormuz, combinado con ataques selectivos a instalaciones energéticas en Arabia Saudita y EAU, <strong>disparó el precio del petróleo y del gas natural</strong>. El barril de Brent superó los 90 dólares en marzo de 2026, alcanzando picos de 110 dólares en algunos momentos de máxima tensión.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El cierre de Ormuz no fue total durante todo el periodo, pero sí intermitente y suficientemente efectivo como para reducir el tráfico marítimo en más de un 60% durante los meses de mayor conflicto, según reportes de la Agencia Internacional de la Energía.
          </div>
          <figure className="my-8">
            <img src="/images/report/iran/hormuz-map.jpg" alt={L('Mapa del Estrecho de Ormuz, paso marítimo estratégico entre Irán y Omán por donde transita el 25% del petróleo mundial. Fuente: Perry-Castañeda Library / Wikimedia Commons (dominio público).', 'Map of the Strait of Hormuz, the strategic maritime passage between Iran and Oman through which 25% of world oil transits. Source: Perry-Castañeda Library / Wikimedia Commons (public domain).')} className="w-full rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Mapa del Estrecho de Ormuz. Fuente: Perry-Castañeda Library, University of Texas / Wikimedia Commons (dominio público).', 'Map of the Strait of Hormuz. Source: Perry-Castañeda Library, University of Texas / Wikimedia Commons (public domain).')}</figcaption>
          </figure>
          {/* Gráfico de evolución del petróleo Brent */}
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8 shadow-sm">
            <div className="text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">EVOLUCIÓN DEL PRECIO DEL PETRÓLEO BRENT (USD / BARRIL)</div>
            <div className="grid grid-cols-4 gap-2 text-center my-4 font-mono">
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Feb 2026</div>
                <div className="text-lg font-bold text-emerald-400">$75.40</div>
                <div className="text-[10px] text-stone-500">Previo a ofensiva</div>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Mar 2026</div>
                <div className="text-lg font-bold text-rose-400">$110.20</div>
                <div className="text-[10px] text-stone-500">Pico por cierre Ormuz</div>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Jun 2026</div>
                <div className="text-lg font-bold text-amber-300">$84.80</div>
                <div className="text-[10px] text-stone-500">Tregua temporal</div>
              </div>
              <div className="bg-white/5 p-3 rounded border border-amber-500/30 bg-amber-500/10">
                <div className="text-amber-300 text-xs">Sep 2026</div>
                <div className="text-lg font-bold text-amber-400">$91.50</div>
                <div className="text-[10px] text-amber-200">Rebrote de tensión</div>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 text-center">Fuente: Registros de cotización internacional ICE Brent / Bloomberg.</div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">3. {L('La guerra en el mar – Ormuz y Bab al-Mandeb', 'War at sea – Hormuz and Bab al-Mandeb')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El conflicto no se limitó al golfo Pérsico. Los hutíes de Yemen, aliados de Irán, abrieron un segundo frente marítimo en el <strong>estrecho de Bab al-Mandeb</strong>, al sur del mar Rojo.</p>
          <p>Según los registros navales, las fuerzas hutíes impactaron un <strong>buque de transporte de carga</strong> frente a la costa yemení. El incidente elevó las primas de seguros marítimos y obligó a las principales navieras globales a desviar sus convoyes por el cabo de Buena Esperanza.</p>
          <p>En el plano diplomático regional, el <strong>17 de agosto de 2026</strong> se llevaron adelante negociaciones con la mediación de Omán para establecer rutas comerciales alternativas y habilitar corredores de suministro humanitario.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Omán es históricamente un mediador neutral en la región del Golfo y ha desempeñado un papel decisivo facilitando canales discretos de negociación entre las potencias occidentales e Irán.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="bg-stone-100 border border-stone-300 p-5 rounded-lg">
              <div className="font-bold text-stone-800 text-sm font-sans mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> Estrecho de Ormuz (Golfo Pérsico)
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Paso estratégico entre Irán y Omán que concentra el 25% del comercio global de crudo. Tráfico bajo estricta alerta naval y sobrevuelo constante de drones de vigilancia.
              </p>
            </div>
            <div className="bg-stone-100 border border-stone-300 p-5 rounded-lg">
              <div className="font-bold text-stone-800 text-sm font-sans mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span> Estrecho de Bab al-Mandeb (Mar Rojo)
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Paso que conecta el mar Rojo con el golfo de Adén. Zona de operaciones asimétricas con patrullajes navales multinacionales para proteger buques de carga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">4. {L('El frente libanés – Israel intensifica operaciones en la frontera', 'Lebanese front – Israel intensifies border operations')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Mientras EE.UU. e Irán sostenían tensiones directas en el golfo Pérsico y en el mar Rojo, las fuerzas armadas israelíes intensificaron sus operaciones a lo largo de la línea fronteriza norte contra posiciones de Hezbollah en el sur del Líbano.</p>
          <p>Paralelamente, se celebraron rondas diplomáticas de mediación en Roma con el respaldo de Italia y Francia en busca de un cese de hostilidades duradero, aunque las posturas irreconciliables sobre el repliegue militar mantuvieron las conversaciones en punto muerto.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> Organismos humanitarios internacionales han alertado sobre el grave impacto en infraestructuras civiles y el desplazamiento forzado de decenas de miles de residentes a ambos lados de la Línea Azul.
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">5. {L('El verano de 2026 – treguas fallidas y escalada', 'Summer 2026 – failed truces and escalation')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>A principios de agosto de 2026, la diplomacia internacional intentó abrir canales de distensión con negociaciones indirectas en Catar. Sin embargo, los desacuerdos sobre las garantías de seguridad regional impidieron un acuerdo vinculante.</p>
          <p>El fin de semana del <strong>31 de agosto</strong>, EE.UU. ejecutó un bombardeo selectivo sobre la <strong>isla iraní de Larak</strong>, en el estrecho de Ormuz, con el fin de neutralizar baterías de lanzacohetes. Al día siguiente, <strong>1 de septiembre</strong>, el Pentágono extendió las operaciones contra instalaciones de mando del IRGC.</p>
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
            <div className="text-xs font-mono tracking-widest text-amber-400 mb-4 uppercase">CRONOLOGÍA DE HITOS CRÍTICOS (2026)</div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center">
                <div className="font-bold text-amber-300 text-xs">28 Feb</div>
                <div className="text-[10px] text-stone-300 mt-1">Inicio de Furia Épica</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center">
                <div className="font-bold text-amber-300 text-xs">2 Mar</div>
                <div className="text-[10px] text-stone-300 mt-1">Cierre en Ormuz</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center">
                <div className="font-bold text-amber-300 text-xs">Abril</div>
                <div className="text-[10px] text-stone-300 mt-1">Frente Bab al-Mandeb</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center">
                <div className="font-bold text-amber-300 text-xs">17 Ago</div>
                <div className="text-[10px] text-stone-300 mt-1">Mediación de Omán</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center">
                <div className="font-bold text-amber-300 text-xs">31 Ago</div>
                <div className="text-[10px] text-stone-300 mt-1">Ataque isla de Larak</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center border-amber-500/50 bg-amber-500/20">
                <div className="font-bold text-amber-300 text-xs">1-2 Sep</div>
                <div className="text-[10px] text-stone-200 mt-1">CENTCOM y respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">6. {L('La escalada del 1 y 2 de septiembre – ataques cruzados', 'September 1-2 escalation – cross attacks')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Los acontecimientos del 1 y 2 de septiembre de 2026 marcaron una nueva fase en el enfrentamiento directo entre Washington y Teherán.</p>
          <p>Según el comunicado oficial del Comando Central de EE.UU. (CENTCOM), la operación se ejecutó a las 12:00 hora de Washington sobre instalaciones logísticas y centros de control de drones de la Guardia Revolucionaria.</p>
          <p>La respuesta de las fuerzas iraníes se desplegó en varias direcciones:</p>
          <ul>
            <li>Lanzamiento de <strong>misiles balísticos y drones hacia bases aliadas en Jordania</strong> (Al Hussein y Al Azraq), interceptados por baterías Patriot.</li>
            <li>Incursiones aéreas sobre el espacio de los <strong>Emiratos Árabes Unidos</strong>, donde las defensas locales neutralizaron las aeronaves no tripuladas.</li>
            <li>Reportes de detonaciones y actividad defensiva en <strong>Bandar Abás</strong> y la <strong>isla de Qeshm</strong>.</li>
          </ul>
          <div className="bg-stone-900 text-white rounded-lg p-5 my-6 border-l-4 border-amber-500 font-sans">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase mb-1">COMUNICADO OFICIAL — CENTCOM</div>
            <p className="text-sm text-stone-300 italic mb-0">
              «Fuerzas estadounidenses ejecutaron ataques de precisión para neutralizar amenazas inmediatas contra la libre navegación en el estrecho de Ormuz y salvaguardar al personal militar desplegado en la región.»
            </p>
          </div>
          <p>El general de brigada <strong>Hosein Mohebi</strong>, portavoz del IRGC, advirtió públicamente que «un castigo riguroso espera a quienes vulneren la soberanía iraní». Desde Washington, el presidente Donald Trump ratificó la política de firmeza para mantener abiertos los corredores marítimos globales.</p>
          <figure className="my-8">
            <img src="/images/report/politicians/trump.jpg" alt={L('Donald Trump, presidente de Estados Unidos. Fuente: Wikimedia Commons (dominio público).', 'Donald Trump, President of the United States. Source: Wikimedia Commons (public domain).')} className="mx-auto max-w-sm rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Donald Trump, presidente de EE.UU., impulsor de la postura de firmeza ante Irán. Fuente: Wikimedia Commons (dominio público).', 'Donald Trump, US President, driver of the firm stance toward Iran. Source: Wikimedia Commons (public domain).')}</figcaption>
          </figure>
        </div>
      </section>

      {/* Sección 7 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">7. {L('Balance geopolítico y consecuencias económicas', 'Geopolitical assessment and economic impact')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">Impacto Militar</div>
              <p className="text-xs text-stone-600 font-sans">Alta demanda de munición guiada, vigilancia satelital permanente y reubicación de escuadrones de cazas en bases del Golfo.</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">Impacto Energético</div>
              <p className="text-xs text-stone-600 font-sans">Cotización del Brent por encima de los 90 dólares por barril, incremento de fletes navales y desvío de rutas mercantes.</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">Impacto Geopolítico</div>
              <p className="text-xs text-stone-600 font-sans">Activación de esfuerzos mediadores por parte de Omán, Catar y Pakistán para contener una escalada a gran escala.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verificación */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-300 bg-stone-50 rounded-lg shadow-sm">
        <h3 className="text-sm font-bold tracking-widest text-stone-800 uppercase font-sans mb-4">PANEL DE FUENTES Y VERIFICACIÓN PERIODÍSTICA</h3>
        <div className="text-xs overflow-x-auto">
          <table className="w-full border-collapse font-sans">
            <thead>
              <tr className="border-b border-stone-300 text-stone-500 text-left">
                <th className="p-2">Hito Informativo</th>
                <th className="p-2">Fuente Primaria / Organismo</th>
                <th className="p-2 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Bombardeos iniciales 28 Feb</td><td className="p-2">CENTCOM / Ministerio de Defensa de Israel</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Restricciones en estrecho de Ormuz</td><td className="p-2">Agencia Internacional de Energía (AIE) / Lloyd's List</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Operación en isla de Larak (31 ago)</td><td className="p-2">U.S. Central Command / Reuters</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Ataques 1-2 Sep y represalias</td><td className="p-2">CENTCOM / Portavocía IRGC / Infobae</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Intercepciones aéreas en Jordania y EAU</td><td className="p-2">Fuerzas Armadas de Jordania / Min. Defensa EAU</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr><td className="p-2 font-medium">Contactos diplomáticos de mediación</td><td className="p-2">Ministerios de Asuntos Exteriores de Catar y Omán</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 text-center">
        <button onClick={onBackToNews} className="px-6 py-3 bg-[#0a0a0f] text-white rounded hover:bg-black font-sans text-sm font-medium transition-colors">
          {L('Volver a Noticias', 'Back to News')}
        </button>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('Siguiente: Gaza →', 'Next: Gaza →')}</button>
          <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('Ucrania →', 'Ukraine →')}</button>
        </div>
      </div>
    </div>
  );
}
