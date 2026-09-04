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
            <span className="text-2xl md:text-3xl font-normal text-white/80">{L('¿Puede la diplomacia lograr lo que las armas no pudieron?', 'Can diplomacy achieve what the weapons could not?')}</span>
          </h1>
          <div className="flex gap-2 mt-6 text-xs">
            <button onClick={() => onNavigate('reportaje-iran-furia-epica')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Irán', '← Iran')}</button>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Gaza', '← Gaza')}</button>
            <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('← Ucrania', '← Ukraine')}</button>
            <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded">{L('Capítulo actual', 'Current')}</span>
          </div>
          <p className="text-white/60 text-sm mt-4">4 de septiembre de 2026 — Reportaje de análisis internacional</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/malvinas/stanley-falklands.jpg" alt={L('Vista de Puerto Stanley, Islas Malvinas. Fuente: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).', 'View of Port Stanley, Falkland Islands. Source: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Vista de Puerto Stanley, capital de las Islas Malvinas. Fuente: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).', 'View of Port Stanley, capital of the Falkland Islands. Source: Liam Quinn / Wikimedia Commons (CC BY-SA 2.0).')}</p>
        </div>
      </div>

      {/* TL;DR */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 font-sans">
          <div className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-3">TL;DR — Resumen ejecutivo</div>
          <ul className="space-y-2 text-sm text-stone-800">
            <li className="flex gap-2"><span className="text-emerald-600">▸</span>{L('El 3 de septiembre de 2026, Milei anunció una base naval en Tierra del Fuego y sanciones a petroleras que operan en Malvinas, tras las señales de Trump de "revisar" la neutralidad de EE.UU.', 'On September 3, 2026, Milei announced a naval base in Tierra del Fuego and sanctions on oil companies operating in the Falklands, after Trump\'s signals of "reviewing" US neutrality.')}</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span>{L('La disputa arrastra 192 años: la ocupación británica de 1833, la guerra de 1982 (649 muertos argentinos, 255 británicos) y una larga posguerra.', 'The dispute spans 192 years: the 1833 British occupation, the 1982 war (649 Argentine and 255 British dead) and a long post-war.')}</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span>{L('El proyecto petrolero Sea Lion (~300 millones de barriles) explica por qué Londres no cede un centímetro en el Atlántico Sur.', 'The Sea Lion oil project (~300 million barrels) explains why London refuses to yield an inch in the South Atlantic.')}</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span>{L('Las elecciones de noviembre de 2026 en EE.UU. pueden ser más decisivas para el archipiélago que cualquier gesto argentino.', 'The November 2026 US elections may prove more decisive for the archipelago than any Argentine gesture.')}</li>
          </ul>
        </div>
      </section>

      {/* Lead */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="prose prose-lg prose-stone max-w-none font-serif">
          <p className="lead text-xl text-stone-700 border-l-4 border-sky-500 pl-6 italic">
            {L(
              'El 3 de enero de 1833, una corbeta británica cambió para siempre la historia de Argentina. Casi dos siglos después, un presidente libertario promete deshacer ese agravio con una base naval y sanciones. El tablero ha cambiado, pero la pregunta es la misma: ¿puede la diplomacia lograr lo que las armas no pudieron?',
              'On January 3, 1833, a British corvette changed Argentine history forever. Almost two centuries later, a libertarian president promises to undo that grievance with a naval base and sanctions. The board has changed, but the question is the same: can diplomacy achieve what the weapons could not?'
            )}
          </p>
        </div>
      </section>

      {/* Sección 1 — El origen */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El día que Argentina perdió las islas', 'The day Argentina lost the islands')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El <strong>3 de enero de 1833</strong>, una corbeta británica cambió para siempre la historia de Argentina. La HMS Clio, al mando del capitán John James Onslow, llegó a Puerto Soledad y exigió la rendición del gobernador argentino, el coronel José María Pinedo. La guarnición, superada en número y armamento, se retiró sin resistencia.</p>
          <p>Desde 1829, las Provincias Unidas habían ejercido actos de soberanía: gobernadores, concesiones de pesca, población civil. La expulsión de aquel día es, para Argentina, un <strong>acto de fuerza ilegítimo</strong> en tiempos de paz. Londres sostiene que su reclamo se remonta a 1765 y que la presencia argentina era precaria.</p>
          <p>Lo importante no es quién "tenía razón" en 1833, sino que ese despojo no se revirtió jamás por las armas. Argentina ocupó las islas sin disparar y las perdió sin disparar. Esa herida fundacional quedó guardada en la memoria nacional, esperando su momento.</p>
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

      {/* Sección 2 — La guerra */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('74 días que marcaron a una generación', '74 days that marked a generation')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La guerra terminó, pero las heridas no se cerraron. Y los intereses que la habían desencadenado —el petróleo y la pesca— seguían bajo el agua, esperando su momento.</p>
          <figure className="my-8">
            <img src="/images/report/maps/falklands-location.png" alt={L('Mapa de ubicación de las Islas Malvinas en el Atlántico Sur. Fuente: Wikimedia Commons (CC BY-SA 3.0).', 'Location map of the Falkland Islands in the South Atlantic. Source: Wikimedia Commons (CC BY-SA 3.0).')} className="mx-auto max-w-sm rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Ubicación de las Islas Malvinas en el Atlántico Sur. Fuente: Wikimedia Commons (CC BY-SA 3.0).', 'Location of the Falkland Islands in the South Atlantic. Source: Wikimedia Commons (CC BY-SA 3.0).')}</figcaption>
          </figure>
          <p>El <strong>2 de abril de 1982</strong>, la Junta Militar argentina ordenó el desembarco en Puerto Argentino. Durante 74 días, una fuerza argentina con escasa logística y equipamiento inferior enfrentó a una de las flotas más poderosas del mundo.</p>
          <p>El <strong>14 de junio</strong>, el general Mario Menéndez firmó la rendición. El saldo fue devastador: <strong>649 soldados argentinos y 255 británicos fallecieron</strong>, miles quedaron heridos y 11.300 argentinos fueron hechos prisioneros. En Argentina, la derrota precipitó la caída de la dictadura y el retorno de la democracia en 1983. En Reino Unido, consolidó a Margaret Thatcher. Dos países salieron de la guerra con problemas opuestos, pero ninguno resolvió el fondo del asunto.</p>
          <blockquote className="border-l-4 border-sky-500 pl-4 italic text-stone-600 my-6">
            Para un veterano, aquel invierno del 82 sigue abierto. "Malvinas no fue una guerra; fue una herida que me acompaña todos los días", resume un excombatiente en los foros de veteranos. Para un kelper, es distinto: el referéndum de 2013 lo dejó claro, con un <strong>99,8%</strong> votando por seguir británicos.
          </blockquote>
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

      {/* Sección 3 — La posguerra */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Petróleo, pesca y la larga posguerra', 'Oil, fishing and the long post-war')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La guerra dejó de sangrar, pero el conflicto mutó de forma. El Reino Unido blindó su presencia: construyó la <strong>base aérea de Monte Agradable</strong> en 1985 y estableció una zona de exclusión pesquera de 200 millas. En 1990, ambos países restablecieron relaciones (Fórmula Madrid), acordando separar la soberanía de la cooperación práctica. El problema es que lo que está debajo del agua no se presta a separaciones.</p>
          <p>El yacimiento <strong>Sea Lion contiene unos 300 millones de barriles de petróleo</strong>, una cifra que explica por qué el Reino Unido no está dispuesto a ceder un centímetro de soberanía. Operado por Navitas y rodeado de otros hallazgos (Isobel Deep, Caspi, Anna), representa el mayor activo económico de la disputa. Argentina lo considera ilegal y ha advertido que perseguirá judicialmente a sus accionistas.</p>
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

      {/* Sección 4 — Trump */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El giro de Trump: cuando Washington cambia de bando', 'Trump\'s pivot: when Washington changes sides')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>De la larga posguerra hay que saltar a agosto de 2026 para encontrar el detonante del órdago. Donald Trump se mostró dispuesto a <strong>"revisar" la neutralidad histórica</strong> de EE.UU. en la disputa, evocando la falta de apoyo británico en operaciones recientes (una alusión implícita a Irán). Es un cambio de tono histórico: desde 1982, Washington reconoció la administración británica de facto pero nunca se pronunció sobre la soberanía.</p>
          <p>Milei leyó el gesto como una puerta. En la radio El Observador calificó las declaraciones de Trump como <em>"algo muy fuerte respecto a la causa más importante y sagrada de los argentinos"</em>.</p>
          <div className="bg-stone-900 text-white rounded-lg p-5 my-8 border-l-4 border-sky-500 font-sans">
            <div className="text-xs font-mono text-sky-400 font-bold uppercase mb-1">DECLARACIONES CLAVE — AGOSTO 2026</div>
            <p className="text-sm text-stone-300 italic mb-1">Trump: <em>"Estamos revisando nuestra posición. Los británicos no estuvieron con nosotros cuando los necesitábamos."</em></p>
          </div>
        </div>
      </section>

      {/* Sección 5 — Anuncio Milei */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Milei contra el imperio: base naval y sanciones', 'Milei vs. the empire: naval base and sanctions')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <figure className="my-8">
            <img src="/images/report/politicians/milei.jpg" alt={L('Javier Milei, presidente de Argentina. Fuente: Wikimedia Commons (CC BY 4.0).', 'Javier Milei, President of Argentina. Source: Wikimedia Commons (CC BY 4.0).')} className="mx-auto max-w-sm rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Javier Milei, presidente de Argentina, autor del anuncio del 3 de septiembre de 2026. Fuente: Wikimedia Commons (CC BY 4.0).', 'Javier Milei, President of Argentina, author of the September 3, 2026 announcement. Source: Wikimedia Commons (CC BY 4.0).')}</figcaption>
          </figure>
          <p>El <strong>3 de septiembre de 2026</strong>, en su cuarta cadena nacional del año, Milei convirtió el gesto en medidas. Anunció <strong>sanciones a las petroleras</strong> que operen en Malvinas —incluidos accionistas, directivos y proveedores, con juicios en ausencia—, un <strong>proyecto de ley al Congreso</strong> para endurecer las penas y la construcción de una <strong>base naval integrada en Tierra del Fuego</strong>, que complementaría la de Ushuaia y proyectaría hacia el Atlántico Sur y la Antártida.</p>
          <blockquote className="border-l-4 border-sky-500 pl-4 italic text-stone-600 my-6">
            "Esta base nos convertirá en el polo logístico más importante del Atlántico Sur y será fundamental para la proyección geopolítica de la Argentina."
          </blockquote>
          <p>Las reacciones no se hicieron esperar. La senadora oficialista Patricia Bullrich lo celebró como <em>"el paso más importante de nuestra historia"</em>; la oposición lo comparó con un <em>"Galtieri devaluado"</em>. El Foreign Office británico reiteró que la soberanía <em>"no está en discusión"</em>.</p>
        </div>
      </section>

      {/* Sección 6 — Quién es quién */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Quién es quién', 'Who\'s who')}</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse font-sans text-sm">
            <thead>
              <tr className="border-b-2 border-stone-400 text-left text-stone-600">
                <th className="p-2">{L('Actor', 'Actor')}</th>
                <th className="p-2">{L('Cargo', 'Role')}</th>
                <th className="p-2">{L('Postura en 2026', 'Position in 2026')}</th>
                <th className="p-2">{L('Relevancia', 'Relevance')}</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Javier Milei</td><td className="p-2">Presidente de Argentina</td><td className="p-2">Anuncia base naval y sanciones a petroleras</td><td className="p-2">Define la nueva estrategia ofensiva</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Donald Trump</td><td className="p-2">Presidente de EE.UU.</td><td className="p-2">Ofrece "revisar" la neutralidad; decepcionado con Londres</td><td className="p-2">Puede cambiar el equilibrio de poder regional</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Reino Unido</td><td className="p-2">Gobierno británico</td><td className="p-2">Rechaza discutir soberanía; defiende autodeterminación</td><td className="p-2">Defiende los recursos y la administración</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Patricia Bullrich</td><td className="p-2">Senadora oficialista</td><td className="p-2">Apoya y difunde el anuncio de Milei</td><td className="p-2">Apuntala el consenso transversal</td></tr>
              <tr><td className="p-2 font-medium">Kelpers</td><td className="p-2">Población de las islas</td><td className="p-2">99,8% votaron seguir británicos</td><td className="p-2">Factor humano y jurídico clave</td></tr>
            </tbody>
          </table>
        </div>
        <div className="my-8">
          <div className="text-xs tracking-widest text-stone-500 mb-4 font-sans">ACTORES CLAVE — FOTOS ARCHIVO (WIKIMEDIA COMMONS)</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <figure className="text-center">
              <img src="/images/report/politicians/milei.jpg" alt="Javier Milei" className="w-full h-40 object-cover rounded-lg shadow-sm" loading="lazy" />
              <figcaption className="text-xs text-stone-500 mt-1 font-sans">Javier Milei<br/><span className="text-stone-400">Presidente de Argentina</span></figcaption>
            </figure>
            <figure className="text-center">
              <img src="/images/report/politicians/trump.jpg" alt="Donald Trump" className="w-full h-40 object-cover rounded-lg shadow-sm" loading="lazy" />
              <figcaption className="text-xs text-stone-500 mt-1 font-sans">Donald Trump<br/><span className="text-stone-400">Presidente de EE.UU.</span></figcaption>
            </figure>
            <figure className="text-center">
              <img src="/images/report/politicians/bullrich.jpg" alt="Patricia Bullrich" className="w-full h-40 object-cover rounded-lg shadow-sm" loading="lazy" />
              <figcaption className="text-xs text-stone-500 mt-1 font-sans">Patricia Bullrich<br/><span className="text-stone-400">Senadora oficialista</span></figcaption>
            </figure>
          </div>
          <p className="text-xs text-stone-400 mt-2 text-center font-sans">{L('Fotos: Wikimedia Commons — licencias libres (CC / dominio público).', 'Photos: Wikimedia Commons — free licenses (CC / public domain).')}</p>
        </div>
      </section>

      {/* Sección 7 — Escenarios */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Los cuatro escenarios que se abren', 'The four scenarios ahead')}</h2>
        <div className="space-y-4">
          <div className="bg-stone-100 border border-stone-200 p-5 rounded-lg">
            <div className="font-bold text-stone-900 text-sm font-sans mb-2">{L('Escenario A — Escalada diplomática', 'Scenario A — Diplomatic escalation')} <span className="text-xs font-normal text-stone-500 ml-1">({L('probabilidad alta', 'high probability')})</span></div>
            <p className="text-sm text-stone-700 font-sans leading-relaxed">{L('Argentina lleva el caso a la ONU o a tribunales internacionales. Pero la posición británica es sólida jurídicamente: la autodeterminación de los isleños pesa más que los reclamos históricos en el derecho internacional actual. Posibilidades reales: pocas, salvo que la presión cambie de terreno.', 'Argentina takes the case to the UN or international courts. But the British position is legally solid: the islanders\' self-determination outweighs historical claims in current international law. Real chances: few, unless the pressure shifts ground.')}</p>
          </div>
          <div className="bg-stone-100 border border-stone-200 p-5 rounded-lg">
            <div className="font-bold text-stone-900 text-sm font-sans mb-2">{L('Escenario B — Respuesta británica', 'Scenario B — British response')} <span className="text-xs font-normal text-stone-500 ml-1">({L('probabilidad media', 'medium probability')})</span></div>
            <p className="text-sm text-stone-700 font-sans leading-relaxed">{L('Londres puede reforzar su presencia militar o responder con represalias comerciales. Para la economía argentina, el riesgo real no son las islas, sino que una escalada aleje la inversión y los mercados internacionales que Milei necesita para su plan económico.', 'London may reinforce its military presence or respond with trade retaliation. For the Argentine economy, the real risk is not the islands but that an escalation scares away the investment and international markets Milei needs for his economic plan.')}</p>
          </div>
          <div className="bg-stone-100 border border-stone-200 p-5 rounded-lg">
            <div className="font-bold text-stone-900 text-sm font-sans mb-2">{L('Escenario C — Estancamiento', 'Scenario C — Stalemate')} <span className="text-xs font-normal text-stone-500 ml-1">({L('probabilidad media-alta', 'medium-high probability')})</span></div>
            <p className="text-sm text-stone-700 font-sans leading-relaxed">{L('Las medidas quedan en papel: el decreto se firma, la ley duerme en el Congreso y la base no sale de los planos. El costo es interno: Milei arriesga el desgaste de una promesa sin resultados en una causa cargada de memoria.', 'The measures remain on paper: the decree is signed, the bill sleeps in Congress and the base never leaves the plans. The cost is internal: Milei risks the wear of a promise without results in a cause loaded with memory.')}</p>
          </div>
          <div className="bg-stone-100 border border-stone-200 p-5 rounded-lg">
            <div className="font-bold text-stone-900 text-sm font-sans mb-2">{L('Escenario D — Cambio en EE.UU.', 'Scenario D — Change in the US')} <span className="text-xs font-normal text-stone-500 ml-1">({L('probabilidad incierta', 'uncertain probability')})</span></div>
            <p className="text-sm text-stone-700 font-sans leading-relaxed">{L('Si Trump gana, puede sostener la presión sobre Londres y dar impulso a la postura argentina. Si gana un demócrata, lo más probable es que la neutralidad se restablezca. La Casa Blanca, más que Buenos Aires o Londres, tendrá la última palabra.', 'If Trump wins, he can keep pressure on London and boost the Argentine position. If a Democrat wins, US neutrality will most likely be restored. The White House, more than Buenos Aires or London, will have the last word.')}</p>
          </div>
        </div>
        <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 text-sm font-sans">
          <strong>{L('Gráficos sugeridos:', 'Suggested charts:')}</strong> {L('línea de tiempo visual del conflicto (1833-2026); mapa de la plataforma continental y los yacimientos; evolución de la postura de EE.UU. (1982-2026); comparativa de gasto militar Argentina vs. Reino Unido.', 'visual timeline of the conflict (1833-2026); map of the continental shelf and oil fields; evolution of the US stance (1982-2026); Argentina vs. UK military spending comparison.')}
        </div>
      </section>

      {/* Sección 8 — Humanización */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Lo que significa para la gente', 'What it means for the people')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Mientras los gobiernos intercambian gestos, el conflicto vive de otra manera. Para un veterano de Malvinas, el anuncio de Milei no es solo política: es el reconocimiento tardío de una herida que nunca cicatrizó. Para un kelper, es la amenaza de un futuro incierto: su identidad, su tierra y su forma de vida están en juego en una disputa que no pidieron. Para el argentino promedio, Malvinas sigue siendo una bandera que une —o divide— en asados y escuelas, un sentimiento que ningún gobierno puede ignorar por completo.</p>
        </div>
      </section>

      {/* Sección 9 — Cierre */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La cuenta larga de la historia', 'The long count of history')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La base naval de Milei y las sanciones a las petroleras son un órdago. Pero la historia de las Malvinas está llena de gestos que no llevaron a ningún lado. La pregunta no es si Argentina puede recuperar las islas por la fuerza —eso es imposible—, sino si puede ganarlas en la mesa de negociaciones, con el apoyo de un EE.UU. que ya no mira hacia otro lado.</p>
          <p>El 3 de noviembre puede ser más decisivo para las Malvinas que el 3 de enero de 1833.</p>
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
