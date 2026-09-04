/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IranReportPage — Reportaje especial: Operación Furia Épica
 * Análisis geopolítico, defensa y tecnología (estilo Ars Technica / MIT Tech Review)
 */

import { useState } from 'react';

interface IranReportPageProps {
  lang: 'es' | 'en';
  onBackToNews: () => void;
  onNavigate: (page: 'reportaje-iran-furia-epica' | 'reportaje-gaza-desarme' | 'reportaje-ucrania-estancamiento') => void;
}

export default function IranReportPage({ lang, onBackToNews, onNavigate }: IranReportPageProps) {
  const L = (es: string, en: string) => lang === 'es' ? es : en;
  const [active, setActive] = useState<string | null>(null);

  const targetDetails: Record<string, { name: string; role: string; detail: string }> = {
    tehran: { name: L('Teherán', 'Tehran'), role: L('Capital y centros de mando del IRGC', 'Capital and IRGC command centers'), detail: L('Objetivo prioritario desde el primer bombardeo: centros de mando de la Guardia Revolucionaria, ministerio de Defensa y redes de comando de las fuerzas de misiles.', 'Priority target from the first bombing: Revolutionary Guard command centers, the Defense Ministry and the missile force command networks.') },
    isfahan: { name: L('Isfahán', 'Isfahan'), role: L('Instalaciones militares y nucleares', 'Military and nuclear facilities'), detail: L('Sede de programas militares clave. Los analistas apuntan a que el riesgo de un programa de enriquecimiento de uranio activo fue uno de los motivos de la ofensiva.', 'Home to key military programs. Analysts point to the risk of an active uranium enrichment program as one of the reasons for the offensive.') },
    bandar: { name: L('Bandar Abás', 'Bandar Abbas'), role: L('Base naval del sur', 'Southern naval base'), detail: L('Principal puerto naval de la Armada iraní en el golfo Pérsico, base del cierre de facto del estrecho de Ormuz y de la protección de rutas de la Guardia Revolucionaria.', 'Main Iranian Navy port in the Persian Gulf, base of the de facto closure of the Strait of Hormuz and of Revolutionary Guard route protection.') },
    qeshm: { name: L('Qeshm', 'Qeshm'), role: L('Control marítimo del estrecho', 'Maritime control of the strait'), detail: L('La mayor isla del golfo Pérsico, usada para desplegar baterías y tropas que controlan el tránsito marítimo hacia y desde el estrecho de Ormuz.', 'The largest island in the Persian Gulf, used to deploy batteries and troops controlling maritime transit to and from the Strait of Hormuz.') },
    larak: { name: L('Isla Larak', 'Larak Island'), role: L('Baterías lanzacohetes', 'Rocket launcher batteries'), detail: L('Objetivo del bombardeo selectivo del 31 de agosto de 2026, ejecutado para neutralizar baterías de lanzacohetes que amenazaban la navegación en el estrecho.', 'Target of the selective August 31, 2026 bombing, carried out to neutralize rocket launcher batteries threatening navigation in the strait.') },
  };

  const ACTIVE_LABEL = active && targetDetails[active] ? (
    <div className="bg-white/5 border border-amber-500/40 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
        <div>
          <div className="font-bold text-white font-sans text-sm">{targetDetails[active].name}</div>
          <div className="text-[11px] text-amber-300 font-sans">{targetDetails[active].role}</div>
        </div>
      </div>
      <p className="text-xs text-stone-300 mt-2 leading-relaxed">{targetDetails[active].detail}</p>
    </div>
  ) : (
    <div className="text-center text-xs text-stone-400 font-sans">{L('Haz clic en un punto del mapa para ver el detalle del objetivo.', 'Click a point on the map to see the target details.')}</div>
  );

  return (
    <div className="bg-[#fafaf8] text-[#1a1a1a] min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0a0f] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBackToNews} className="text-sm text-white/60 hover:text-white mb-6 flex items-center gap-2">
            ← {L('Volver a Noticias', 'Back to News')}
          </button>
          <div className="text-xs tracking-widest text-amber-400 mb-3">REPORTAJE ESPECIAL — CAPÍTULO 1 / 3</div>
          <p className="text-[11px] font-mono text-amber-500/80 tracking-widest uppercase mb-3">{L('Análisis · Geopolítica, defensa y tecnología', 'Analysis · Geopolitics, defense and technology')}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {L('El ensayo general de un nuevo orden mundial', 'The dress rehearsal for a new world order')}
          </h1>
          <p className="text-lg font-serif text-white/80 leading-relaxed">
            {L('Operación Furia Épica: el ataque de EE.UU. e Israel a Irán y sus consecuencias', 'Operation Epic Fury: the US and Israeli attack on Iran and its consequences')}
          </p>
          <div className="flex gap-2 mt-6 text-xs">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded">{L('Capítulo actual', 'Current')}</span>
            <button onClick={() => onNavigate('reportaje-gaza-desarme')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('Gaza →', 'Gaza →')}</button>
            <button onClick={() => onNavigate('reportaje-ucrania-estancamiento')} className="px-3 py-1 bg-white/10 text-white/80 rounded hover:bg-white/20">{L('Ucrania →', 'Ukraine →')}</button>
          </div>
          <p className="text-white/50 text-sm mt-5">{L('Freddy Ticona — 2 de septiembre de 2026 · Análisis de datos militares, energéticos y geopolíticos', 'Freddy Ticona — September 2, 2026 · An analysis of military, energy and geopolitical data')}</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative">
        <img src="/images/report/iran/tehran-destruction.jpg" alt={L('Destrucción tras los bombardeos de la Operación Furia Épica en las áreas al norte de Teherán, marzo de 2026. Fuente: Avash / Wikimedia Commons (CC BY 4.0).', 'Destruction after Operation Epic Fury airstrikes in the areas north of Tehran, March 2026. Source: Avash / Wikimedia Commons (CC BY 4.0).')} className="w-full h-64 md:h-80 object-cover" loading="eager" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <p className="text-white/80 text-xs max-w-3xl mx-auto font-sans">{L('Destrucción en las áreas al norte de Teherán tras los bombardeos de la Operación Furia Épica, marzo de 2026. Fuente: Avash / Wikimedia Commons (CC BY 4.0).', 'Destruction in the areas north of Tehran after Operation Epic Fury airstrikes, March 2026. Source: Avash / Wikimedia Commons (CC BY 4.0).')}</p>
        </div>
      </div>

      {/* TL;DR */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="bg-stone-900 text-white rounded-lg p-6 border-l-4 border-amber-500">
          <div className="text-xs font-mono tracking-widest text-amber-400 mb-3 uppercase">TL;DR — {L('Resumen Ejecutivo', 'Executive Summary')}</div>
          <ul className="space-y-2 text-sm text-stone-200 list-none">
            <li className="flex gap-2"><span className="text-amber-400">▸</span>{L('El 28 de febrero de 2026, Washington y Tel Aviv lanzaron la Operación Furia Épica contra Irán, rompiendo un alto el fuego de ocho meses con B-2, F-35 y guerra electrónica.', 'On February 28, 2026, Washington and Tel Aviv launched Operation Epic Fury against Iran, breaking an eight-month ceasefire with B-2s, F-35s and electronic warfare.')}</li>
            <li className="flex gap-2"><span className="text-amber-400">▸</span>{L('La respuesta iraní cerró de facto el estrecho de Ormuz (25% del crudo mundial) y disparó el Brent a 110 dólares.', 'Iran\'s response closed the Strait of Hormuz de facto (25% of world crude) and pushed Brent to US$110.')}</li>
            <li className="flex gap-2"><span className="text-amber-400">▸</span>{L('Drones y misiles definieron el conflicto: una guerra de saturación contra Patriot, SAMP/T e Iron Dome.', 'Drones and missiles defined the conflict: a saturation war against Patriot, SAMP/T and Iron Dome.')}</li>
            <li className="flex gap-2"><span className="text-amber-400">▸</span>{L('La escalada del 1-2 de septiembre extendió el frente a Jordania y los EAU; el control de las rutas energéticas reconfigura hoy la balanza de poder.', 'The September 1-2 escalation extended the front to Jordan and the UAE; control of energy routes is reshaping the balance of power.')}</li>
          </ul>
        </div>
      </div>

      {/* Lead */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="prose prose-lg prose-stone max-w-none font-serif">
          <p className="text-xs tracking-widest text-stone-400 uppercase font-sans mb-3">{L('Apertura', 'Opening')}</p>
          <p className="lead text-xl text-stone-700 border-l-4 border-amber-500 pl-6">
            {L(
              'El 28 de febrero de 2026, el mundo despertó con un estruendo que no venía de Ucrania. El estrecho de Ormuz, la arteria del petróleo global, se convertía en un campo de batalla. La Operación Furia Épica no solo reconfiguró Oriente Medio: puso a prueba la fragilidad de la economía global.',
              'On February 28, 2026, the world woke to a roar that did not come from Ukraine. The Strait of Hormuz, the artery of global oil, was becoming a battlefield. Operation Epic Fury did not merely reshape the Middle East: it tested the fragility of the global economy.'
            )}
          </p>
          <p className="mt-4 text-stone-700">
            {L(
              'Este reportaje sostiene una tesis: no fue un conflicto más, sino el ensayo general de un nuevo orden donde el control de las rutas energéticas y la guerra con drones redefinen el poder militar.',
              'This report holds a thesis: it was not one more conflict, but the dress rehearsal for a new order where the control of energy routes and drone warfare redefine military power.'
            )}
          </p>
        </div>
      </section>

      {/* Sección 1: El día que el mundo dejó de mirar a Ucrania */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El día que el mundo dejó de mirar a Ucrania', 'The day the world stopped watching Ukraine')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>La ofensiva rompió un alto el fuego firmado el <strong>23 de junio de 2025</strong>, que había puesto fin a la <strong>Guerra de los Doce Días</strong>. Durante ocho meses, delegados estadounidenses, israelíes e iraníes negociaron en Ginebra con mediación suiza y catarí. El resultado fue un bombardeo masivo sobre Teherán, Isfahán y Bandar Abás, ejecutado con bombarderos <strong>B-2</strong> y cazas <strong>F-35</strong>.</p>

          <div className="my-8">
            <h3 className="text-lg font-serif font-bold mb-3">{L('El cálculo detrás del primer misil', 'The calculation behind the first missile')}</h3>
            <p>El propósito de la ofensiva sigue generando debate. La hipótesis más sostenida: Irán estaba cerca de completar un programa de enriquecimiento de uranio. La alternativa: una demostración de fuerza de Washington para presionar en otras mesas, como Gaza. Sea cual fuere el motivo, el ángulo militar importa más. Los objetivos incluyeron centros de mando del Cuerpo de la Guardia Revolucionaria Islámica (IRGC), depósitos de misiles e instalaciones nucleares. La campaña combinó bombardeos estratégicos con guerra electrónica, una combinación que Ucrania no había visto en esa escala.</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm font-sans">
              <strong>Dato clave:</strong> El bombardeo del 28 de febrero se produjo mientras las delegaciones de Irán y EE.UU. mantenían contactos indirectos en Ginebra. El gobierno suizo confirmó que las delegaciones estaban en la ciudad en ese momento, sin comunicación directa durante el ataque.
            </div>
          </div>
        </div>
      </section>

      {/* Mapa interactivo — mantenido */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="bg-stone-900 text-white rounded-lg p-6 my-4 shadow-sm">
          <div className="text-xs font-mono tracking-widest text-amber-400 mb-4 uppercase">{L('MAPA DE OBJETIVOS ESTRATÉGICOS — OPERACIÓN FURIA ÉPICA', 'STRATEGIC TARGETS MAP — OPERATION EPIC FURY')}</div>
          <div className="relative rounded-lg overflow-hidden select-none">
            <img src="/images/report/iran/iran-provinces-blank.png" alt={L('Mapa de contorno de las provincias de Irán con localización de los objetivos estratégicos de la Operación Furia Épica (Teherán, Isfahán, Bandar Abás, Qeshm e isla Larak). Fuente: Wikimedia Commons (dominio público).', 'Outline map of the provinces of Iran with the location of Operation Epic Fury strategic targets (Tehran, Isfahan, Bandar Abbas, Qeshm and Larak island). Source: Wikimedia Commons (public domain).')} className="w-full h-auto opacity-80" loading="lazy" />
            {[
              { id:'tehran', name:L('Teherán','Tehran'), sub:L('Centros de mando IRGC','IRGC command centers'), x:71, y:20 },
              { id:'isfahan', name:L('Isfahán','Isfahan'), sub:L('Instalaciones militares y nucleares','Military and nuclear facilities'), x:66, y:45 },
              { id:'bandar', name:L('Bandar Abás','Bandar Abbas'), sub:L('Base naval del sur','Southern naval base'), x:60, y:74 },
              { id:'qeshm', name:L('Qeshm','Qeshm'), sub:L('Control marítimo del estrecho','Maritime control of the strait'), x:53, y:78 },
              { id:'larak', name:L('Isla Larak','Larak Island'), sub:L('Baterías lanzacohetes','Rocket launcher batteries'), x:63, y:77 },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id === active ? null : t.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                style={{ left: `${t.x}%`, top: `${t.y}%` }}
                aria-label={t.name}
              >
                <span className={`block w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${active === t.id ? 'bg-amber-400 border-black' : 'bg-rose-600 border-white'} group-hover:scale-125 transition-transform`} style={{ boxShadow: '0 0 0 4px rgba(251,191,36,0.35)' }} />
              </button>
            ))}
          </div>
          <div className="mt-4">{ACTIVE_LABEL}</div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-white/5 border border-white/10 rounded p-2.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-600 shrink-0"></span>
              <span className="text-stone-300">{L('Objetivo militar alcanzado (feb–mar 2026)', 'Military target hit (Feb–Mar 2026)')}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded p-2.5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0"></span>
              <span className="text-stone-300">{L('Objetivo seleccionado / en evaluación', 'Target selected / under assessment')}</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-3 text-center">{L('Fondo: mapa mudo de provincias de Irán (Wikimedia Commons, dominio público). Posiciones esquemáticas a partir de datos satelitales y partes de CENTCOM.', 'Background: blank provinces map of Iran (Wikimedia Commons, public domain). Positions schematic, drawn from satellite data and CENTCOM reports.')}</p>
        </div>
      </section>

      {/* Sección: La guerra de los drones y misiles */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La guerra de los drones y misiles', 'The drone and missile war')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>Horas después del bombardeo, la Guardia Revolucionaria respondió con misiles balísticos y drones suicidas contra Israel y contra bases de Estados Unidos en Baréin, Kuwait, Catar, EAU, Arabia Saudita, Jordania e Irak. La estrategia fue clara: saturación. En esta guerra, la cantidad importa tanto como la precisión, y el coste lo decide todo.</p>

          <div className="my-6 font-sans text-sm">
            <div className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-2">{L('Comparativa de misiles y drones', 'Missile and drone comparison')}</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-stone-300 text-left text-stone-500 text-xs">
                    <th className="p-2">{L('Plataforma', 'Platform')}</th>
                    <th className="p-2">{L('Origen', 'Origin')}</th>
                    <th className="p-2">{L('Tipo', 'Type')}</th>
                    <th className="p-2 text-right">{L('Alcance', 'Range')}</th>
                    <th className="p-2 text-right">{L('Coste unit.', 'Unit cost')}</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="border-b border-stone-200"><td className="p-2 font-medium">B-2 Spirit</td><td className="p-2">EE.UU.</td><td className="p-2">{L('Bombardero estratégico', 'Strategic bomber')}</td><td className="text-right p-2">11.000 km</td><td className="text-right p-2">&gt;1.000 M$</td></tr>
                  <tr className="border-b border-stone-200"><td className="p-2 font-medium">F-35</td><td className="p-2">EE.UU.</td><td className="p-2">{L('Caza furtivo', 'Stealth fighter')}</td><td className="text-right p-2">2.200 km</td><td className="text-right p-2">~85 M$</td></tr>
                  <tr className="border-b border-stone-200"><td className="p-2 font-medium">Tomahawk</td><td className="p-2">EE.UU.</td><td className="p-2">{L('Misil crucero', 'Cruise missile')}</td><td className="text-right p-2">1.600 km</td><td className="text-right p-2">~2 M$</td></tr>
                  <tr className="border-b border-stone-200"><td className="p-2 font-medium">Shahed/Geran</td><td className="p-2">{L('Irán/Rusia', 'Iran/Russia')}</td><td className="p-2">{L('Dron kamikaze', 'Kamikaze drone')}</td><td className="text-right p-2">2.500 km</td><td className="text-right p-2">~50 k$</td></tr>
                  <tr className="border-b border-stone-200"><td className="p-2 font-medium">Fateh</td><td className="p-2">Irán</td><td className="p-2">{L('Misil balístico', 'Ballistic missile')}</td><td className="text-right p-2">500 km</td><td className="text-right p-2">~1 M$</td></tr>
                  <tr><td className="p-2 font-medium">Sejjil</td><td className="p-2">Irán</td><td className="p-2">{L('Misil balístico', 'Ballistic missile')}</td><td className="text-right p-2">2.000 km</td><td className="text-right p-2">~1 M$</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>La defensa se sostiene sobre una cadena de sistemas interconectados: <strong>Patriot</strong> y <strong>SAMP/T</strong> en el lado occidental, <strong>Iron Dome</strong> y <strong>David's Sling</strong> en Israel, y <strong>S-300/S-400</strong> en el lado iraní. La tasa de intercepción real no está publicada, pero la lógica del desgaste es idéntica a la de Ucrania: un dron de <strong>50.000 dólares</strong> agota un interceptor que cuesta entre <strong>500.000 y 1,5 millones de dólares</strong>. Cada ofensiva de saturación drena, por tanto, el arsenal defensivo del oponente a una tasa económica imposible de sostener a largo plazo.</p>

          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-stone-700 my-6">
            {L('"Si Irán cruza la línea, Israel y Estados Unidos responderán con una fuerza que no ha visto la región en décadas."', '"If Iran crosses the line, Israel and the United States will respond with force the region has not seen in decades."')}
            <div className="text-xs font-sans text-stone-500 mt-2 not-italic">— Donald Trump, {L('presidente de EE.UU.', 'US President')}</div>
          </blockquote>
        </div>
      </section>

      {/* Sección: El cierre de una arteria */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El cierre de una arteria', 'The closure of an artery')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El movimiento más estratégico de Teherán fue el cierre de facto del estrecho de Ormuz. Por esta vía transita el <strong>25% del petróleo mundial</strong>; al convertirse la zona en una restricción de exclusión para el tráfico occidental, el mercado reaccionó al instante. El Brent pasó de <strong>75,40 dólares</strong> antes del ataque a un pico de <strong>110 dólares</strong> en marzo, y los estancamientos puntuales dispararon el coste de los fletes. Este estrecho no fue bloqueado por completo, pero su tráfico cayó más de un 60% durante los meses de mayor conflicto, según la Agencia Internacional de la Energía.</p>

          <figure className="my-8">
            <img src="/images/report/iran/hormuz-map.jpg" alt={L('Mapa del Estrecho de Ormuz, paso marítimo estratégico entre Irán y Omán por donde transita el 25% del petróleo mundial. Fuente: Perry-Castañeda Library / Wikimedia Commons (dominio público).', 'Map of the Strait of Hormuz, the strategic maritime passage between Iran and Oman through which 25% of world oil transits. Source: Perry-Castañeda Library / Wikimedia Commons (public domain).')} className="w-full rounded-lg shadow-sm" loading="lazy" />
            <figcaption className="text-xs text-stone-500 mt-2 text-center font-sans">{L('Mapa del Estrecho de Ormuz. Fuente: Perry-Castañeda Library, University of Texas / Wikimedia Commons (dominio público).', 'Map of the Strait of Hormuz. Source: Perry-Castañeda Library, University of Texas / Wikimedia Commons (public domain).')}</figcaption>
          </figure>

          <div className="bg-stone-900 text-white rounded-lg p-6 my-8 shadow-sm">
            <div className="text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">{L('EVOLUCIÓN DEL PRECIO DEL PETRÓLEO BRENT (USD / BARRIL)', 'BRENT OIL PRICE TREND (USD / BARREL)')}</div>
            <div className="grid grid-cols-4 gap-2 text-center my-4 font-mono">
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Feb 2026</div>
                <div className="text-lg font-bold text-emerald-400">$75.40</div>
                <div className="text-[10px] text-stone-500">{L('Previo a ofensiva', 'Pre-offensive')}</div>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Mar 2026</div>
                <div className="text-lg font-bold text-rose-400">$110.20</div>
                <div className="text-[10px] text-stone-500">{L('Pico por cierre Ormuz', 'Peak from Hormuz closure')}</div>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <div className="text-stone-400 text-xs">Jun 2026</div>
                <div className="text-lg font-bold text-amber-300">$84.80</div>
                <div className="text-[10px] text-stone-500">{L('Tregua temporal', 'Temporary truce')}</div>
              </div>
              <div className="bg-white/5 p-3 rounded border border-amber-500/30 bg-amber-500/10">
                <div className="text-amber-300 text-xs">Sep 2026</div>
                <div className="text-lg font-bold text-amber-400">$91.50</div>
                <div className="text-[10px] text-amber-200">{L('Rebrote de tensión', 'Tension resurging')}</div>
              </div>
            </div>
            <div className="text-[11px] text-stone-400 text-center">Fuente: ICE Brent / Bloomberg.</div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 text-sm font-sans">
            <strong>Gráficos sugeridos:</strong> {L('evolución del Brent y WTI (feb–sep 2026) con los hitos de la ofensiva; dependencia de Ormuz por país (China, India, Japón, Corea del Sur y Europa); comparativa de sistemas de defensa aérea por coste de intercepción.', 'Brent and WTI trend (Feb–Sep 2026) with offensive milestones; Hormuz dependence by country (China, India, Japan, South Korea, Europe); air defense systems compared by interception cost.')}
          </div>
        </div>
      </section>

      {/* Sección: El precio de la guerra */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('El precio de la guerra: petróleo, gas y economía global', 'The price of war: oil, gas and the global economy')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El efecto fue directo. El cierre de Ormuz, sumado a ataques contra instalaciones energéticas en Arabia Saudita y los EAU, disparó el Brent a más de 90 dólares y a picos de 110. El gas natural escaló igualmente, presionando la inflación en Europa y Asia. La <strong>AIE</strong> estima que el encarecimiento restó alrededor de <strong>medio punto al PIB de la Eurozona</strong> y elevó el coste de los combustibles en América Latina. Los bancos centrales, que ya venían de una inflación post-pandémica, mantuvieron los tipos altos, con el consiguiente freno al crédito y al crecimiento.</p>

          <p>El comercio marítimo sufrió la mayor disrupción desde la crisis de los portacontenedores de 2021. Las navieras que dependían de Ormuz debieron recalcular rutas hacia el cabo de Buena Esperanza, añadiendo semanas de tránsito; las primas de seguro subieron tras el impacto de un buque de carga en Bab al-Mandeb. El impacto no fue homogéneo: Europa, dependiente del gas licuado, encaró el encarecimiento del gas; Asia, y en particular India y China, absorbieron el choque del crudo; América Latina, importadora de combustibles refinados, pagó la factura en forma de inflación interna.</p>

          <p>China, India, Japón, Corea del Sur y Europa son los mayores dependientes de la ruta de Ormuz. Su exposición explica por qué ninguna potencia importante ha presionado por una escalada total que congelara por completo el suministro.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 font-sans">
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">{L('Brent', 'Brent')}</div>
              <p className="text-xs text-stone-600">75,40 → <strong>110</strong> USD</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">{L('PIB Eurozona', 'Eurozone GDP')}</div>
              <p className="text-xs text-stone-600">−0,5 p.p. {L('por la AIE', 'per IEA')}</p>
            </div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">{L('Tráfico de Ormuz', 'Hormuz traffic')}</div>
              <p className="text-xs text-stone-600">−60% {L('en meses pico', 'at peak months')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Moscú y Pekín */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Moscú y Pekín: los jugadores laterales', 'Moscow and Beijing: the side players')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <h3 className="text-lg font-serif font-bold">{L('Rusia', 'Russia')}</h3>
          <p>Rusia vio una oportunidad estratégica. Teherán es socio militar de Moscú, y la crisis distrajo la atención mediática de Ucrania justo cuando Rusia intensificaba sus ataques con drones. El encarecimiento energético favoreció además los intereses comerciales rusos, que venden crudo y gas con descuento. Moscú ofreció a Irán una cobertura diplomática limitada, sin romper del todo con la comunidad energética occidental: el margen para apoyar abiertamente a un país sancionado que ya compra tecnología rusa es estrecho.</p>

          <h3 className="text-lg font-serif font-bold mt-6">{L('China', 'China')}</h3>
          <p>China tiene un interés estructural en la estabilidad del Golfo: importa por Ormuz una parte crítica de su crudo y sostiene inversiones en infraestructura regional dentro de su ruta comercial. Pekín reaccionó con una posición ambigua: condenó la escalada pero evitó un alineamiento pleno con Irán, para preservar sus intercambios con ambas partes. La crisis tensó las relaciones chino-estadounidenses, ya degradadas por el frente comercial y tecnológico, y reforzó en Pekín la lectura de que debe acelerar su independencia energética y su presencia en el Pacífico.</p>
        </div>
      </section>

      {/* Sección: La escalada de septiembre */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('La escalada del 1 y 2 de septiembre', 'The September 1-2 escalation')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El fin de semana del <strong>31 de agosto</strong>, EE.UU. ejecutó un bombardeo selectivo sobre la <strong>isla iraní de Larak</strong>, en el estrecho de Ormuz, con el fin de neutralizar baterías de lanzacohetes. Al día siguiente, <strong>1 de septiembre</strong>, el Pentágono extendió las operaciones contra instalaciones de mando del IRGC y centros de control de drones, ejecutadas a las 12:00 hora de Washington.</p>

          <p>La respuesta de las fuerzas iraníes se desplegó en varias direcciones:</p>
          <ul>
            <li>Lanzamiento de <strong>misiles balísticos y drones hacia bases aliadas en Jordania</strong> (Al Hussein y Al Azraq), interceptados por baterías Patriot.</li>
            <li>Incursiones aéreas sobre el espacio de los <strong>Emiratos Árabes Unidos</strong>, donde las defensas locales neutralizaron las aeronaves no tripuladas.</li>
            <li>Reportes de detonaciones y actividad defensiva en <strong>Bandar Abás</strong> y la <strong>isla de Qeshm</strong>.</li>
          </ul>

          <div className="bg-stone-900 text-white rounded-lg p-5 my-6 border-l-4 border-amber-500 font-sans">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase mb-1">COMUNICADO OFICIAL — CENTCOM</div>
            <p className="text-sm text-stone-300 italic mb-0">«Fuerzas estadounidenses ejecutaron ataques de precisión para neutralizar amenazas inmediatas contra la libre navegación en el estrecho de Ormuz y salvaguardar al personal militar desplegado en la región.»</p>
          </div>

          <div className="bg-stone-900 text-white rounded-lg p-6 my-8">
            <div className="text-xs font-mono tracking-widest text-amber-400 mb-4 uppercase">{L('CRONOLOGÍA DE HITOS CRÍTICOS (2026)', 'CRITICAL MILESTONES TIMELINE (2026)')}</div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center"><div className="font-bold text-amber-300 text-xs">28 Feb</div><div className="text-[10px] text-stone-300 mt-1">{L('Inicio Furia Épica', 'Epic Fury starts')}</div></div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center"><div className="font-bold text-amber-300 text-xs">2 Mar</div><div className="text-[10px] text-stone-300 mt-1">{L('Cierre Ormuz', 'Hormuz closure')}</div></div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center"><div className="font-bold text-amber-300 text-xs">Abril</div><div className="text-[10px] text-stone-300 mt-1">{L('Frente Bab al-Mandeb', 'Bab al-Mandeb front')}</div></div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center"><div className="font-bold text-amber-300 text-xs">17 Ago</div><div className="text-[10px] text-stone-300 mt-1">{L('Mediación Omán', 'Oman mediation')}</div></div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center"><div className="font-bold text-amber-300 text-xs">31 Ago</div><div className="text-[10px] text-stone-300 mt-1">{L('Ataque Larak', 'Larak attack')}</div></div>
              <div className="bg-white/10 border border-white/10 rounded p-2.5 text-center border-amber-500/50 bg-amber-500/20"><div className="font-bold text-amber-300 text-xs">1-2 Sep</div><div className="text-[10px] text-stone-200 mt-1">{L('CENTCOM y respuesta', 'CENTCOM response')}</div></div>
            </div>
          </div>

          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-stone-700 my-6">
            {L('"Cualquier país que vulnere nuestra soberanía recibirá un castigo que no imaginan."', '"Any country that violates our sovereignty will receive a punishment they cannot imagine."')}
            <div className="text-xs font-sans text-stone-500 mt-2 not-italic">— Hosein Mohebi, {L('portavoz del IRGC', 'IRGC spokesman')}</div>
          </blockquote>
        </div>
      </section>

      {/* Tabla de actores */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('Los actores y su lectura estratégica', 'The actors and their strategic reading')}</h2>
        <div className="overflow-x-auto font-sans text-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-stone-300 text-left text-stone-500 text-xs">
                <th className="p-2">{L('Nombre', 'Name')}</th>
                <th className="p-2">{L('Cargo', 'Role')}</th>
                <th className="p-2">{L('Postura / Acción', 'Stance / Action')}</th>
                <th className="p-2">{L('Relevancia', 'Relevance')}</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Donald Trump</td><td className="p-2">{L('Presidente de EE.UU.', 'US President')}</td><td className="p-2">{L('Ordenó la ofensiva; ratifica la política de firmeza', 'Ordered the offensive; maintains the firm-policy stance')}</td><td className="p-2">{L('Define la presión sobre Irán', 'Sets pressure policy toward Iran')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Líder supremo de Irán', 'Supreme Leader of Iran')}</td><td className="p-2">{L('Autoridad máxima', 'Supreme authority')}</td><td className="p-2">{L('Autoriza el cierre de Ormuz y la respuesta de misiles', 'Authorizes Hormuz closure and missile response')}</td><td className="p-2">{L('Define estrategia nuclear y naval', 'Sets nuclear and naval strategy')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Guardia Revolucionaria (IRGC)', 'Revolutionary Guard (IRGC)')}</td><td className="p-2">{L('Fuerzas de élite', 'Elite forces')}</td><td className="p-2">{L('Lanza misiles y drones a aliados de EE.UU.', 'Fires missiles and drones at US allies')}</td><td className="p-2">{L('Ejecuta la saturación', 'Executes saturation warfare')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Hosein Mohebi</td><td className="p-2">{L('Portavoz del IRGC', 'IRGC spokesman')}</td><td className="p-2">{L('Amenaza con castigo a quien vulnere la soberanía', 'Threatens reprisal for sovereignty violations')}</td><td className="p-2">{L('Vocero de la respuesta iraní', 'Voice of the Iranian response')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">Benjamín Netanyahu</td><td className="p-2">{L('Primer ministro de Israel', 'Prime Minister of Israel')}</td><td className="p-2">{L('Ejecuta la vertiente aérea conjunta', 'Leads the joint aerial component')}</td><td className="p-2">{L('Bloque agresivo occidental', 'Aggressive Western bloc')}</td></tr>
              <tr><td className="p-2 font-medium">Omán / Catar</td><td className="p-2">{L('Mediadores', 'Mediators')}</td><td className="p-2">{L('Canales discretos de negociación y corredores humanitarios', 'Discreet negotiation channels and humanitarian corridors')}</td><td className="p-2">{L('Freno a la escalada total', 'Brake on full escalation')}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sección: ¿Qué viene después? */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-200">
        <h2 className="text-2xl font-serif font-bold mb-6">{L('¿Qué viene después?', 'What comes next?')}</h2>
        <div className="prose prose-stone max-w-none font-serif">
          <p>El futuro inmediato se juega entre tres escenarios. <strong>Escalada</strong>: una expansión del ataque estadounidense a instalaciones nucleares iraníes desencadenaría una respuesta regional en cadena. <strong>Negociación</strong>: la dependencia energética de China, India y Europa actúa como freno, y la mediación de Omán y Catar ya abre canales. <strong>Guerra de desgaste</strong>: la más probable a seis meses del inicio, con ataques intermitentes que mantienen la presión sin cruzar la línea roja nuclear.</p>

          <p>Furia Épica deja tres lecciones. Para la <strong>OTAN</strong>: la defensa concentrada en interceptores caros es vulnerable a la saturación con drones baratos, y exige repensar la relación coste-eficacia. Para los <strong>aliados de Estados Unidos</strong>: el control de los estrechos y de las rutas energéticas es el nuevo campo de la disuasión, más decisivo que la superioridad aérea tradicional. Para la <strong>seguridad energética global</strong>: ninguna economía puede asumir la fragilidad de Ormuz sin acelerar reservas estratégicas, diversificación de proveedores y transición hacia renovables.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 font-sans">
            <div className="bg-stone-100 p-4 rounded border border-stone-200"><div className="font-bold text-stone-900 text-sm mb-1">{L('Escalada', 'Escalation')}</div><p className="text-xs text-stone-600">{L('Ataque a nucleares iraníes → respuesta regional', 'Strike on Iranian nuclear sites → regional response')}</p></div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200"><div className="font-bold text-stone-900 text-sm mb-1">{L('Negociación', 'Negotiation')}</div><p className="text-xs text-stone-600">{L('Mediación de Omán y Catar; freno por energía', 'Oman and Qatar mediation; energy brake')}</p></div>
            <div className="bg-stone-100 p-4 rounded border border-stone-200"><div className="font-bold text-stone-900 text-sm mb-1">{L('Desgaste', 'Attrition')}</div><p className="text-xs text-stone-600">{L('Ataques intermitentes sin línea roja nuclear', 'Intermittent strikes below the nuclear red line')}</p></div>
          </div>
        </div>
      </section>

      {/* Verificación */}
      <section className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-300 bg-stone-50 rounded-lg shadow-sm">
        <h3 className="text-sm font-bold tracking-widest text-stone-800 uppercase font-sans mb-4">{L('PANEL DE FUENTES Y VERIFICACIÓN PERIODÍSTICA', 'SOURCES AND JOURNALISTIC VERIFICATION PANEL')}</h3>
        <div className="text-xs overflow-x-auto">
          <table className="w-full border-collapse font-sans">
            <thead>
              <tr className="border-b border-stone-300 text-stone-500 text-left">
                <th className="p-2">{L('Hito Informativo', 'News Milestone')}</th>
                <th className="p-2">{L('Fuente Primaria / Organismo', 'Primary Source / Body')}</th>
                <th className="p-2 text-center">{L('Estado', 'Status')}</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Bombardeos iniciales 28 Feb', 'Initial February 28 airstrikes')}</td><td className="p-2">CENTCOM / {L('Ministerio de Defensa de Israel', 'Israeli Defense Ministry')}</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Restricciones en estrecho de Ormuz', 'Strait of Hormuz restrictions')}</td><td className="p-2">AIE / Lloyd's List</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Operación en isla de Larak (31 ago)', 'Larak Island operation (Aug 31)')}</td><td className="p-2">U.S. Central Command / Reuters</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Ataques 1-2 Sep y represalias', 'Sep 1-2 attacks and reprisals')}</td><td className="p-2">CENTCOM / Portavocía IRGC / Infobae</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
              <tr className="border-b border-stone-200"><td className="p-2 font-medium">{L('Intercepciones aéreas en Jordania y EAU', 'Aerial interceptions in Jordan & UAE')}</td><td className="p-2">{L('Fuerzas Armadas de Jordania / Min. Defensa EAU', 'Jordanian Armed Forces / UAE Defense Ministry')}</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
              <tr><td className="p-2 font-medium">{L('Contactos diplomáticos de mediación', 'Mediation diplomatic contacts')}</td><td className="p-2">{L('Ministerios de Exteriores de Catar y Omán', 'Qatar and Oman Foreign Ministries')}</td><td className="text-center p-2 text-emerald-600 font-bold">{L('Verificado', 'Verified')}</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-500 font-sans mt-4">{L('Referencias relevantes: Wikipedia ES, Infobae, Primera Hora, CNN, IPCC/AIE.', 'Relevant references: Wikipedia ES, Infobae, Primera Hora, CNN, IPCC/IEA.')}</p>
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
