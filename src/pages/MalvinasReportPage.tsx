/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * MalvinasReportPage — Reportaje especial: Historia y soberanía de las Malvinas
 * Diseño especial: fondo neutro, serif, scrollytelling, cronología interactiva
 */

interface MalvinasReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
  onNavigate: (page: 'reportaje-iran-furia-epica' | 'reportaje-gaza-desarme' | 'reportaje-ucrania-estancamiento' | 'reportaje-malvinas-historia') => void;
}

export default function MalvinasReportPage({ lang, onBackToNews, onNavigate }: MalvinasReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-sky-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 4 / 4</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('Malvinas: 192 años de disputa por la soberanía', 'Falklands: 192 years of sovereignty dispute')}<br/>
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('Del despojo de 1833 a la base naval anunciada por Milei', 'From the 1833 dispossession to Milei\'s naval base announcement')}</span>
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Irán', '← Iran')}</button>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Gaza', '← Gaza')}</button>
            <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Ucrania', '← Ukraine')}</button>
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded">{L('Capítulo actual', 'Current')}</span>
          </div>
          <p className="text-white/60 text-sm mt-4">4 de septiembre de 2026 — Fuentes: Infobae, La Patilla, La Nación, Cancillería Argentina, Wikipedia ES/EN</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/malvinas/stanley-falklands.jpg" alt={L('Vista de Puerto Stanley, Islas Malvinas. Fuente: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).', 'View of Port Stanley, Falkland Islands. Source: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Vista de Puerto Stanley, capital de las Islas Malvinas. Fuente: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).', 'View of Port Stanley, capital of the Falkland Islands. Source: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).')}</p>
        </div>
      </div>

      {/* Resumen ejecutivo */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="prose prose-lg prose-stone max-w-none font-serif">
          <p className="lead text-xl text-stone-700 border-l-4 border-sky-500 pl-6 italic">
            {L(
              'El 3 de septiembre de 2026, en su cuarta cadena nacional del año, el presidente argentino Javier Milei anunció la construcción de una base naval integrada en Tierra del Fuego y sanciones a empresas petroleras que operen en las Islas Malvinas bajo control británico. El anuncio responde a las declaraciones de Donald Trump, quien se mostró dispuesto a "revisar" la neutralidad histórica de EE.UU. en la disputa. Este reportaje repasa 192 años de historia: la ocupación británica de 1833, la guerra de 1982, los intentos diplomáticos fallidos y el nuevo capítulo geopolítico abierto por Milei y Trump.',
              'On September 3, 2026, in his fourth national address of the year, Argentine President Javier Milei announced the construction of an integrated naval base in Tierra del Fuego and sanctions on oil companies operating in the Falkland Islands under British control. The announcement responds to Donald Trump\'s remarks expressing willingness to "review" the historic US neutrality in the dispute. This report covers 192 years of history: the 1833 British occupation, the 1982 war, failed diplomatic attempts, and the new geopolitical chapter opened by Milei and Trump.'
            )}
          </p>
        </div>
      </section>

      {/* Sección 1 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">1. {L('El origen del conflicto — 1833: la ocupación británica', 'The origin of the conflict — 1833: British occupation')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>3 de enero de 1833</strong>, la corbeta británica HMS Clio, bajo el mando del capitán John James Onslow, llegó a Puerto Soledad (entonces capital de las islas bajo administración argentina) y exigió la rendición del gobernador argentino, coronel José María Pinedo. La guarnición argentina, superada en número y armamento, se retiró sin resistencia.</p>
          <p>Este hecho marcó el inicio de la <strong>ocupación británica efectiva e ininterrumpida</strong> del archipiélago, que Argentina nunca reconoció. Desde 1829, las Provincias Unidas del Río de la Plata habían designado gobernadores y ejercido actos de soberanía (concesiones de pesca, reglamentos, población civil). La expulsión de 1833 es considerada por Argentina como un <strong>acto de fuerza ilegítimo</strong> que violó el derecho internacional de la época y los tratados de amistad entre ambos países.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El gobierno británico argumentó que la presencia argentina era "precaria" y que las islas habían sido reclamadas por Gran Bretaña desde 1765. Argentina sostiene que la ocupación de 1833 se produjo en tiempo de paz y sin declaración de guerra previa.
          </div>
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8 shadow-sm">
            <div className="text-xs font-mono tracking-widest text-sky-400 mb-3 uppercase">CRONOLOGÍA FUNDACIONAL (1764–1833)</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1764</div>
                <div className="text-[10px] text-stone-300 mt-1">Puerto Luis (Francia)</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1765</div>
                <div className="text-[10px] text-stone-300 mt-1">Reclamo británico Port Egmont</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1767</div>
                <div className="text-[10px] text-stone-300 mt-1">España adquiere Puerto Luis</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1811</div>
                <div className="text-[10px] text-stone-300 mt-1">España abandona islas</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1820</div>
                <div className="text-[10px] text-stone-300 mt-1">Argentina toma posesión</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1829</div>
                <div className="text-[10px] text-stone-300 mt-1">Primer gobernador argentino</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">1831</div>
                <div className="text-[10px] text-stone-300 mt-1">Incidente USS Lexington</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10 border-sky-500/50 bg-sky-500/20">
                <div className="font-bold text-sky-300">1833</div>
                <div className="text-[10px] text-stone-200 mt-1">Ocupación británica</div>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 mt-3 text-center">Elaboración propia sobre datos históricos y Wikipedia ES/EN.</div>
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">2. {L('La guerra de 1982 — 74 días que marcaron a una generación', 'The 1982 war — 74 days that marked a generation')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>2 de abril de 1982</strong>, la Junta Militar argentina ordenó el desembarco anfibio en Puerto Argentino (Port Stanley), iniciando la <strong>Guerra de las Malvinas</strong>. Durante 74 días, las fuerzas argentinas —con escasa preparación logística y equipamiento inferior— enfrentaron a la Fuerza de Tareas británica, una de las flotas más poderosas del momento.</p>
          <p>El <strong>14 de junio de 1982</strong>, el general Mario Menéndez firmó la rendición incondicional. El saldo fue devastador: <strong>649 soldados argentinos y 255 británicos fallecidos</strong>, miles de heridos, y un trauma colectivo que perdura en la memoria argentina.</p>
          <p>La guerra tuvo consecuencias políticas inmediatas: en Argentina, precipitó la caída de la dictadura militar y el retorno a la democracia en 1983; en Reino Unido, consolidó el gobierno de Margaret Thatcher.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La Resolución 502 del Consejo de Seguridad de la ONU (3 de abril de 1982) exigió el cese de hostilidades y la retirada argentina, pero también pidió a ambas partes buscar una solución diplomática —que nunca llegó.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="bg-stone-100 border border-stone-300 p-5 rounded-lg">
              <div className="font-bold text-stone-800 text-sm font-sans mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> {L('Pérdidas argentinas', 'Argentine losses')}
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                649 fallecidos (incluyendo 323 en el ARA General Belgrano), 1.188 heridos, 11.313 prisioneros, 1 crucero, 1 submarino, 4 buques, 75 aviones.
              </p>
            </div>
            <div className="bg-stone-100 border border-stone-300 p-5 rounded-lg">
              <div className="font-bold text-stone-800 text-sm font-sans mb-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> {L('Pérdidas británicas', 'British losses')}
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                255 fallecidos, 777 heridos, 6 buques hundidos, 24 helicópteros, 10 aviones Harrier. Costo económico estimado: £2.778 millones (1982).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">3. {L('La posguerra — diplomacia, petróleo y pesca', 'Post-war — diplomacy, oil and fisheries')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Tras la guerra, el Reino Unido fortaleció su presencia militar: construyó la <strong>base aérea de Monte Agradable (RAF Mount Pleasant)</strong> en 1985, desplegó sistemas de defensa aérea y estableció una zona de exclusión pesquera de 200 millas (FICZ/FOCZ).</p>
          <p>En 1990, Argentina y Reino Unido restablecieron relaciones diplomáticas (Fórmula Madrid I y II), acordando separar la disputa de soberanía de la cooperación práctica. Sin embargo, el descubrimiento de <strong>yacimientos petroleros en la plataforma continental</strong> (cuenca del Mar del Norte, Sea Lion, Isobel Deep) reactivó la tensión.</p>
          <p>Argentina denunció sistemáticamente la <strong>exploración y explotación unilateral de recursos</strong> por empresas británicas (Rockhopper, Premier Oil, Navitas, Harbour Energy) como violación de la Resolución 31/49 de la ONU, que insta a abstenerse de acciones unilaterales.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El proyecto <strong>Sea Lion</strong> (North Falkland Basin), operado por Navitas Petroleum, prevé extraer más de 300 millones de barriles. Argentina lo considera "ilegal" y ha advertido que perseguirá judicialmente a sus accionistas.
          </div>
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8 shadow-sm">
            <div className="text-xs font-mono tracking-widest text-sky-400 mb-3 uppercase">PRINCIPALES YACIMIENTOS EN DISPUTA</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">Sea Lion</div>
                <div className="text-[10px] text-stone-300 mt-1">~300M barriles</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">Isobel Deep</div>
                <div className="text-[10px] text-stone-300 mt-1">Exploración temprana</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">Caspi</div>
                <div className="text-[10px] text-stone-300 mt-1">Descubrimiento 2015</div>
              </div>
              <div className="bg-white/10 p-3 rounded border border-white/10">
                <div className="font-bold text-sky-300">Anna</div>
                <div className="text-[10px] text-stone-300 mt-1">Pendiente desarrollo</div>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 mt-3 text-center">Datos: informes de Navitas Petroleum, Rockhopper Exploration, Harbour Energy.</div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">4. {L('El giro de Trump — "revisar" la neutralidad de EE.UU.', 'Trump\'s pivot — "reviewing" US neutrality')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El detonante inmediato del anuncio de Milei fueron las declaraciones del <strong>presidente estadounidense Donald Trump</strong>, quien en agosto de 2026 se mostró dispuesto a <strong>"revisar" la posición histórica de neutralidad</strong> de su país en la disputa entre Argentina y el Reino Unido.</p>
          <p>Trump evocó la guerra de 1982 mostrando <strong>decepción con Londres</strong> por la falta de apoyo británico en operaciones militares estadounidenses recientes (referencia implícita a operaciones contra Irán). Milei calificó esas declaraciones como <em>"algo muy fuerte respecto a la causa más importante y sagrada de los argentinos"</em>, en entrevista con Luis Gasulla en radio El Observador.</p>
          <p>Este cambio de tono es <strong>histórico</strong>: desde 1982, EE.UU. ha mantenido una neutralidad formal, reconociendo la administración británica <strong>de facto</strong> pero sin pronunciarse sobre la soberanía, y abogando por una solución negociada.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> El apoyo de EE.UU. a Reino Unido en 1982 fue crucial (inteligencia satelital, misiles Sidewinder, reabastecimiento en Ascensión). Trump sugiere que esa "deuda" no fue correspondida en conflictos recientes.
          </div>
          <div className="bg-stone-900 text-white rounded-lg p-5 my-8 border-l-4 border-sky-500 font-sans">
            <div className="text-xs font-mono text-sky-400 font-bold uppercase mb-1">DECLARACIONES CLAVE — AGOSTO 2026</div>
            <p className="text-sm text-stone-300 italic mb-1">Trump: <em>"Estamos revisando nuestra posición. Los británicos no estuvieron con nosotros cuando los necesitábamos."</em></p>
            <p className="text-sm text-stone-300 italic">Milei: <em>"Esta amenaza no es inocua. EE.UU. evalúa ese cambio porque sabe que Argentina tiene un socio confiable, alineado con los valores occidentales."</em></p>
          </div>
        </div>
      </section>

      {/* Sección 5 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">5. {L('El anuncio de Milei — base naval, sanciones y ley al Congreso', 'Milei\'s announcement — naval base, sanctions and bill to Congress')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>En su cadena nacional del <strong>3 de septiembre de 2026</strong>, Milei presentó un paquete de tres medidas concretas:</p>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Decreto de sanciones:</strong> Celeridad para sancionar a empresas que operen en Malvinas —incluidas accionistas, directivos y proveedores— que no podrán operar en territorio continental argentino y enfrentarán juicios en ausencia.</li>
            <li><strong>Proyecto de ley al Congreso:</strong> Endurecimiento de penas, en respuesta directa al avance del proyecto petrolero Sea Lion, que según la Oficina del Presidente explota petróleo "sin autorización de la República Argentina".</li>
            <li><strong>Decreto de base naval:</strong> Ampliación de recursos del Ministerio de Defensa para construir una <strong>base naval integrada en Tierra del Fuego</strong>.</li>
          </ol>
          <p>Milei declaró: <blockquote>"Esta base nos convertirá en el polo logístico más importante del Atlántico sur y será fundamental para la proyección geopolítica de la Argentina"</blockquote> y cerró: <blockquote>"Defender nuestra soberanía requiere pensar en las próximas generaciones y no solamente en la próxima elección"</blockquote>.</p>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm">
            <strong>📌 Dato clave:</strong> La base naval en Tierra del Fuego busca complementar (no reemplazar) a la Base Naval Ushuaia, proyectando capacidad logística hacia el Atlántico Sur y la Antártida.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">{L('Medida 1', 'Measure 1')}</div>
              <p className="text-xs text-stone-600 font-sans">Decreto sanciones a petroleras (inmediato)</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">{L('Medida 2', 'Measure 2')}</div>
              <p className="text-xs text-stone-600 font-sans">Ley al Congreso: endurecer penas</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm font-sans mb-1">{L('Medida 3', 'Measure 3')}</div>
              <p className="text-xs text-stone-600 font-sans">Base naval integrada Tierra del Fuego</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">6. {L('Reacciones políticas y sociales', 'Political and social reactions')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Las reacciones fueron inmediatas y polarizadas:</p>
          <ul>
            <li><strong>Oficialismo:</strong> La senadora Patricia Bullrich escribió en X: <blockquote>"Este es el paso más importante de nuestra historia sobre nuestra soberanía por las Islas Malvinas. Por primera vez, nuestro Gobierno logra resultados concretos en una causa que durante décadas estuvo atrapada en discursos y gestos vacíos"</blockquote>.</li>
            <li><strong>Oposición:</strong> Un dirigente identificado como Solano (La Nación) calificó a Milei de <em>"un Galtieri devaluado"</em>, en referencia al dictador que ordenó la invasión de 1982.</li>
            <li><strong>Internacional:</strong> El Foreign Office británico reiteró que "la soberanía de las islas no está en discusión" y que los isleños "tienen derecho a la autodeterminación" (referéndum 2013: 99,8% votaron por permanecer británicos).</li>
          </ul>
          <p>La convocatoria de Milei al Congreso y a "toda la dirigencia política, económica y social" busca construir un <strong>consenso transversal</strong>, aunque no se precisó cronograma legislativo ni de construcción de la base.</p>
        </div>
      </section>

      {/* Sección 7 */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">7. {L('Cronología completa — 192 años de disputa', 'Complete timeline — 192 years of dispute')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
            <div className="text-xs font-mono tracking-widest text-sky-400 mb-4 uppercase">HITOS HISTÓRICOS DE LA DISPUTA MALVINAS</div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center">
              <div className="bg-white/10 border border-white/10 rounded p-2.5">
                <div className="font-bold text-sky-300 text-xs">1833</div>
                <div className="text-[10px] text-stone-300 mt-1">Ocupación británica</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5">
                <div className="font-bold text-sky-300 text-xs">1965</div>
                <div className="text-[10px] text-stone-300 mt-1">Res. 2065 ONU</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5">
                <div className="font-bold text-sky-300 text-xs">1982</div>
                <div className="text-[10px] text-stone-300 mt-1">Guerra (74 días)</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5">
                <div className="font-bold text-sky-300 text-xs">1990</div>
                <div className="text-[10px] text-stone-300 mt-1">Relaciones diplomáticas</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5">
                <div className="font-bold text-sky-300 text-xs">2013</div>
                <div className="text-[10px] text-stone-300 mt-1">Referéndum isleños</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 border-sky-500/50 bg-sky-500/20">
                <div className="font-bold text-sky-300 text-xs">2026</div>
                <div className="text-[10px] text-stone-200 mt-1">Base naval + sanciones</div>
              </div>
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
                <th className="p-2">Hito Informativo / Histórico</th>
                <th className="p-2">Fuente Primaria / Organismo</th>
                <th className="p-2 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Ocupación británica 1833</td><td className="p-2">Archivos británicos / Cancillería Argentina / Wikipedia ES-EN</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Guerra 1982 — bajas y rendición</td><td className="p-2">Ministerio de Defensa UK / Museo Malvinas / CICR</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Resoluciones ONU (2065, 31/49, 37/9)</td><td className="p-2">Naciones Unidas — documentos oficiales</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Proyecto Sea Lion / yacimientos</td><td className="p-2">Navitas Petroleum / Rockhopper / Harbour Energy reports</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Declaraciones Trump (ago 2026)</td><td className="p-2">Entrevistas / comunicados / Infobae / La Patilla</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Cadena nacional Milei 3 sep 2026</td><td className="p-2">Presidencia Argentina / Infobae / La Nación / La Patilla</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Reacciones Bullrich / Solano</td><td className="p-2">X (Patricia Bullrich) / La Nación (4 sep 2026)</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
              <tr><td className="p-2 font-medium">Posición UK (Foreign Office)</td><td className="p-2">Gobierno Reino Unido / comunicados oficiales 2026</td><td className="text-center p-2 text-emerald-600 font-bold">Verificado</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-8 text-center">
        <button onClick={onBackToNews} className="px-6 py-3 bg-[#0a0a0f] text-white rounded hover:bg-black font-sans text-sm font-medium transition-colors">
          {L('Volver a Noticias', 'Back to News')}
        </button>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Irán', '← Iran')}</button>
          <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Gaza', '← Gaza')}</button>
          <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 text-sm">{L('← Ucrania', '← Ukraine')}</button>
        </div>
      </div>
    </div>
  );
}