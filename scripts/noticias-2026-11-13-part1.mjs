/**
 * Noticias verificadas del 13 y 14 de noviembre de 2026 (IDs 1440-1444).
 * Fuentes: ANF/Noticias Fides, eju.tv, La RazÃ³n, Red Uno, El Deber/EFE,
 * La RazÃ³n (COP31), CasosDeUsoIA e iaparahoy/TechCrunch.
 * Cada objeto incluye metadatos, cuerpo ES/EN y atribuciÃ³n de fuente.
 */

const IMG = '/images/news/2026-11-13';

const figure = (src, alt, caption) =>
  `<figure class="report-figure"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const quote = (text, cite) =>
  `<blockquote class="expert-quote">&ldquo;${text}&rdquo;<cite>${cite}</cite></blockquote>`;

const source = (label, url) =>
  `<p>Con informaci&oacute;n de <a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>.</p>`;

export const noticiasPart1 = [
  {
    id: '1440',
    slug: 'bcb-levanta-restricciones-dolares-transferencias-exterior',
    publishedAt: '2026-11-13T18:55:00-04:00',
    date: '2026-11-13',
    titleEs: 'El Banco Central levanta las restricciones a las operaciones en dÃ³lares entre bancos y las transferencias al exterior',
    titleEn: 'Central Bank lifts restrictions on dollar transactions between banks and transfers abroad',
    excerptEs:
      'El BCB creÃ³ Cuentas Auxiliares de Liquidez para todas las entidades financieras y dispuso que las nuevas operaciones en dÃ³lares â€”transferencias al exterior, movimientos de efectivo y operaciones entre bancosâ€” se efectÃºen sin restricciÃ³n alguna. TambiÃ©n iniciÃ³ la devoluciÃ³n de 438 millones de dÃ³lares que las entidades mantenÃ­an en el ente emisor.',
    excerptEn:
      'The BCB created Auxiliary Liquidity Accounts for all financial institutions and ruled that new dollar operations â€”transfers abroad, cash movements and interbank transactionsâ€” be carried out without any restriction. It also began returning 438 million dollars the institutions held at the central bank.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/bcb-levanta-restricciones-dolares-transferencias-exterior.jpg`,
    imageCaption: 'El Banco Central de Bolivia dispuso la libre operaciÃ³n en dÃ³lares del sistema financiero. Foto: ANF',
    categoryEs: 'EconomÃ­a',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'ANF / Noticias Fides',
    sourceUrl:
      'https://www.noticiasfides.com/economia/el-banco-central-levanta-restricciones-a-las-operaciones-entre-bancos-y-transferencias-al-exterior-en-dolares',
    contentEs: `<h1>El Banco Central levanta las restricciones a las operaciones en dÃ³lares entre bancos y las transferencias al exterior</h1>
<p class="lead"><em>El Banco Central de Bolivia (BCB) levantÃ³ este viernes 13 de noviembre las restricciones que regÃ­an para las nuevas operaciones en dÃ³lares entre entidades financieras, los movimientos de efectivo y las transferencias al exterior, en una medida que avanza hacia la normalizaciÃ³n del sistema financiero tras aÃ±os de controles cambiarios.</em></p>
${figure(
  `${IMG}/bcb-levanta-restricciones-dolares-transferencias-exterior.jpg`,
  'Sede del Banco Central de Bolivia en La Paz',
  'El BCB creÃ³ Cuentas Auxiliares de Liquidez para el sistema financiero. Foto: ANF'
)}
<h2 class="report-chapter">Cuentas Auxiliares de Liquidez</h2>
<p>La disposiciÃ³n establece la creaciÃ³n de Cuentas Auxiliares de Liquidez para todas las entidades de intermediaciÃ³n financiera (EIF), segÃºn un comunicado del ente emisor difundido por la agencia ANF. Ese mecanismo permitirÃ¡ que las nuevas operaciones en dÃ³lares estadounidenses se efectÃºen sin ninguna restricciÃ³n, algo que habÃ­a estado limitado durante los Ãºltimos aÃ±os de escasez de divisas.</p>
${quote(
  'Todas las nuevas operaciones en dÃ³lares estadounidenses (USD) referidas a transferencias al exterior, movimientos de efectivo o entre entidades financieras en dicha moneda se efectÃºen sin ninguna restricciÃ³n.',
  'Comunicado del Banco Central de Bolivia, citado por ANF'
)}
<h2 class="report-chapter">Transparencia sobre los saldos</h2>
<p>El BCB informÃ³ ademÃ¡s que publicarÃ¡ en su pÃ¡gina web los saldos globales de estas nuevas cuentas, con el propÃ³sito de ofrecer mayor transparencia y dar certeza a las entidades financieras y sus clientes sobre la disponibilidad de los recursos depositados en el ente emisor. La medida llega en un contexto de flotaciÃ³n cambiaria plena: este viernes el dÃ³lar oficial se cotizÃ³ en 11,67 bolivianos, tres centavos por debajo del registro del jueves, segÃºn el reporte diario del BCB.</p>
<h2 class="report-chapter">DevoluciÃ³n de 438 millones de dÃ³lares</h2>
<p>La resoluciÃ³n tambiÃ©n contempla la devoluciÃ³n de 438 millones de dÃ³lares en efectivo que las entidades financieras mantenÃ­an en sus cuentas corrientes y de encaje en el Banco Central al 10 de noviembre. El proceso comenzÃ³ este viernes con un primer abono de 11 millones de dÃ³lares a 35 entidades financieras.</p>
<p>El segundo desembolso, previsto para el 18 de diciembre, serÃ¡ de 43 millones de dÃ³lares y beneficiarÃ¡ a otras 18 entidades, mientras que los restantes 384 millones serÃ¡n devueltos en dos entregas programadas para el 30 de abril y el 30 de septiembre de 2027, destinadas a las ocho entidades financieras restantes.</p>
${source('ANF / Noticias Fides', 'https://www.noticiasfides.com/economia/el-banco-central-levanta-restricciones-a-las-operaciones-entre-bancos-y-transferencias-al-exterior-en-dolares')}`,
    contentEn: `<h1>Central Bank lifts restrictions on dollar transactions between banks and transfers abroad</h1>
<p class="lead"><em>The Central Bank of Bolivia (BCB) lifted this Friday, November 13, the restrictions governing new dollar transactions between financial institutions, cash movements and transfers abroad, in a measure that advances toward normalizing the financial system after years of currency controls.</em></p>
${figure(
  `${IMG}/bcb-levanta-restricciones-dolares-transferencias-exterior.jpg`,
  'Headquarters of the Central Bank of Bolivia in La Paz',
  'The BCB created Auxiliary Liquidity Accounts for the financial system. Photo: ANF'
)}
<h2 class="report-chapter">Auxiliary Liquidity Accounts</h2>
<p>The ruling establishes the creation of Auxiliary Liquidity Accounts for all financial intermediation institutions, according to a statement from the central bank reported by the ANF agency. The mechanism will allow new US dollar operations to be carried out without any restriction, something that had been limited during the last years of dollar scarcity.</p>
${quote(
  'All new US dollar (USD) transactions related to transfers abroad, cash movements or between financial institutions in that currency shall be carried out without any restriction.',
  'Central Bank of Bolivia statement, quoted by ANF'
)}
<h2 class="report-chapter">Transparency on balances</h2>
<p>The BCB also announced it will publish the global balances of these new accounts on its website, to offer greater transparency and give financial institutions and their clients certainty about the availability of resources deposited at the central bank. The measure comes in a context of full currency flotation: on Friday the official dollar traded at 11.67 bolivianos, three cents below Thursday\u2019s rate, according to the BCB daily report.</p>
<h2 class="report-chapter">Returning 438 million dollars</h2>
<p>The resolution also provides for the return of 438 million dollars in cash that financial institutions held in their checking and reserve accounts at the Central Bank as of November 10. The process began on Friday with an initial deposit of 11 million dollars to 35 financial institutions.</p>
<p>The second disbursement, scheduled for December 18, will be 43 million dollars and will benefit 18 other institutions, while the remaining 384 million will be returned in two installments scheduled for April 30 and September 30, 2027, for the remaining eight financial institutions.</p>
${source('ANF / Noticias Fides', 'https://www.noticiasfides.com/economia/el-banco-central-levanta-restricciones-a-las-operaciones-entre-bancos-y-transferencias-al-exterior-en-dolares')}`,
  },
  {
    id: '1441',
    slug: 'certificacion-reservas-gas-23-tcf',
    publishedAt: '2026-11-13T10:30:00-04:00',
    date: '2026-11-13',
    titleEs: 'Bolivia certifica reservas de gas de 2,3 TCF y 57 millones de barriles de crudo: la antesala de una crisis energÃ©tica',
    titleEn: 'Bolivia certifies gas reserves of 2.3 TCF and 57 million barrels of crude: the prelude to an energy crisis',
    excerptEs:
      'El Gobierno presentÃ³ en Santa Cruz la nueva certificaciÃ³n de reservas de gas natural, que confirma la caÃ­da a 2,3 trillones de pies cÃºbicos frente a los 3,7 TCF reportados en marzo por YPFB. La RazÃ³n advierte que los datos son la antesala de una crisis energÃ©tica y estima una renta petrolera de 1.000 millones de dÃ³lares con 57 millones de barriles de crudo.',
    excerptEn:
      'The Government presented the new natural gas reserves certification in Santa Cruz, confirming the drop to 2.3 trillion cubic feet from the 3.7 TCF reported by YPFB in March. La RazÃ³n warns the figures are the prelude to an energy crisis and estimates oil rent of 1 billion dollars with 57 million barrels of crude.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/certificacion-reservas-gas-23-tcf.jpg`,
    imageCaption: 'El Gobierno presentÃ³ la nueva certificaciÃ³n de reservas de gas en Santa Cruz. Foto: archivo',
    categoryEs: 'EconomÃ­a',
    categoryEn: 'Economy',
    region: 'Bolivia',
    location: 'Santa Cruz de la Sierra, Bolivia',
    source: 'eju.tv / La RazÃ³n',
    sourceUrl:
      'https://eju.tv/2026/11/agenda-informativa-el-magisterio-define-nuevas-medidas-y-el-gobierno-presenta-las-reservas-de-gas-este-viernes/',
    contentEs: `<h1>Bolivia certifica reservas de gas de 2,3 TCF y 57 millones de barriles de crudo: la antesala de una crisis energÃ©tica</h1>
<p class="lead"><em>El Ministerio de Hidrocarburos y EnergÃ­as presentÃ³ este viernes 13 de noviembre, en un acto en Santa Cruz de la Sierra, la nueva certificaciÃ³n de reservas de gas natural de Bolivia. SegÃºn la portada de La RazÃ³n del sÃ¡bado 14, el paÃ­s cuenta con 2,3 trillones de pies cÃºbicos (TCF) de gas y 57 millones de barriles de crudo, con una renta petrolera estimada de 1.000 millones de dÃ³lares: datos que el diario describe como la antesala de una crisis energÃ©tica.</em></p>
${figure(
  `${IMG}/certificacion-reservas-gas-23-tcf.jpg`,
  'PresentaciÃ³n de la certificaciÃ³n de reservas de gas natural en Santa Cruz',
  'YPFB presentÃ³ la certificaciÃ³n oficial de reservas al 2025. Foto: archivo'
)}
<h2 class="report-chapter">La caÃ­da continÃºa</h2>
<p>En marzo de este aÃ±o, Yacimientos PetrolÃ­feros Fiscales Bolivianos (YPFB) reportÃ³ en su Audiencia de RendiciÃ³n PÃºblica de Cuentas Final 2025 que las reservas del paÃ­s habÃ­an caÃ­do a 3,7 trillones de pies cÃºbicos. La nueva certificaciÃ³n al 2025 confirma que la tendencia no se revirtiÃ³: los 2,3 TCF certificados representan una nueva contracciÃ³n del recurso que sostuvo las exportaciones bolivianas durante dos dÃ©cadas.</p>
<p>El ministro de Hidrocarburos y EnergÃ­as, Marcelo Blanco, habÃ­a anticipado el 28 de octubre que los datos finales se conocerÃ­an en un plazo mÃ¡ximo de diez dÃ­as y advirtiÃ³ que las reservas actuales no son suficientes, por lo que anunciÃ³ medidas para ampliar la exploraciÃ³n, perforar nuevos pozos e impulsar energÃ­as renovables.</p>
${quote(
  'Las reservas actuales no son suficientes: es necesario ampliar la exploraciÃ³n, perforar nuevos pozos e impulsar las energÃ­as renovables.',
  'Marcelo Blanco, ministro de Hidrocarburos y EnergÃ­as'
)}
<h2 class="report-chapter">Disputa polÃ­tica por los nÃºmeros</h2>
<p>La presentaciÃ³n de la certificaciÃ³n se enmarca en una disputa polÃ­tica: segÃºn la portada de La RazÃ³n, el Ejecutivo culpa al MAS por la caÃ­da de las reservas, mientras la oposiciÃ³n sostiene que la disminuciÃ³n es el resultado de una dÃ©cada sin exploraciÃ³n significativa. El estudio permitirÃ¡ dimensionar el margen real de Bolivia para sostener exportaciones de gas a Argentina y Brasil, que cayeron drÃ¡sticamente en los Ãºltimos aÃ±os.</p>
<h2 class="report-chapter">Cartera internacional para el sector</h2>
<p>En su presentaciÃ³n de gestiÃ³n, el ministro Blanco informÃ³ que la cartera de Hidrocarburos gestionÃ³ mÃ¡s de 756 millones de dÃ³lares comprometidos en proyectos y asistencia tÃ©cnica con organismos internacionales como el BID, el Banco Mundial, la AFD, la CAF, la GIZ y la UniÃ³n Europea, e indicÃ³ que como parte del proceso de ordenamiento del sector se destrabÃ³ la ejecuciÃ³n de recursos internacionales, con un monto ejecutado superior a 119 millones de dÃ³lares.</p>
${source('eju.tv', 'https://eju.tv/2026/11/agenda-informativa-el-magisterio-define-nuevas-medidas-y-el-gobierno-presenta-las-reservas-de-gas-este-viernes/')}
${source('La RazÃ³n (ediciÃ³n impresa 14/11/2026)', 'https://epaper.la-razon.com/2026/epaper/files/basic-html/page1.html')}`,
    contentEn: `<h1>Bolivia certifies gas reserves of 2.3 TCF and 57 million barrels of crude: the prelude to an energy crisis</h1>
<p class="lead"><em>The Ministry of Hydrocarbons and Energy presented on Friday, November 13, at a ceremony in Santa Cruz de la Sierra, the new certification of Bolivia\u2019s natural gas reserves. According to the front page of La RazÃ³n on Saturday 14, the country holds 2.3 trillion cubic feet (TCF) of gas and 57 million barrels of crude, with an estimated oil rent of 1 billion dollars: figures the paper describes as the prelude to an energy crisis.</em></p>
${figure(
  `${IMG}/certificacion-reservas-gas-23-tcf.jpg`,
  'Presentation of the natural gas reserves certification in Santa Cruz',
  'YPFB presented the official reserves certification for 2025. Photo: archive'
)}
<h2 class="report-chapter">The decline continues</h2>
<p>In March this year, Yacimientos PetrolÃ­feros Fiscales Bolivianos (YPFB) reported at its Final 2025 Public Accounts Hearing that the country\u2019s reserves had fallen to 3.7 trillion cubic feet. The new certification for 2025 confirms the trend did not reverse: the certified 2.3 TCF represents a further contraction of the resource that sustained Bolivian exports for two decades.</p>
<p>Minister of Hydrocarbons and Energy Marcelo Blanco had anticipated on October 28 that the final figures would be known within a maximum of ten days and warned that current reserves are not sufficient, announcing measures to expand exploration, drill new wells and promote renewable energy.</p>
${quote(
  'Current reserves are not enough: we must expand exploration, drill new wells and push renewable energy forward.',
  'Marcelo Blanco, Minister of Hydrocarbons and Energy'
)}
<h2 class="report-chapter">Political dispute over the numbers</h2>
<p>The certification presentation is framed within a political dispute: according to La RazÃ³n\u2019s front page, the Executive blames the MAS for the fall in reserves, while the opposition maintains the decline results from a decade without significant exploration. The study will measure Bolivia\u2019s real margin to sustain gas exports to Argentina and Brazil, which fell drastically in recent years.</p>
<h2 class="report-chapter">International portfolio for the sector</h2>
<p>In his management report, Minister Blanco informed that the Hydrocarbons portfolio managed over 756 million dollars committed to projects and technical assistance with international organizations such as the IDB, the World Bank, AFD, CAF, GIZ and the European Union, and stated that as part of the sector\u2019s ordering process, the execution of international resources was unblocked, with over 119 million dollars executed.</p>
${source('eju.tv', 'https://eju.tv/2026/11/agenda-informativa-el-magisterio-define-nuevas-medidas-y-el-gobierno-presenta-las-reservas-de-gas-este-viernes/')}
${source('La RazÃ³n (print edition 11/14/2026)', 'https://epaper.la-razon.com/2026/epaper/files/basic-html/page1.html')}`,
  },
  {
    id: '1442',
    slug: 'magisterio-urbano-rompe-mesa-dialogo-descentralizacion',
    publishedAt: '2026-11-13T19:41:00-04:00',
    date: '2026-11-13',
    titleEs: 'El magisterio urbano rompe la mesa de diÃ¡logo y el ministro de EducaciÃ³n insiste en negociar la descentralizaciÃ³n',
    titleEn: 'Urban teachers walk out of dialogue table and Education Minister insists on negotiating decentralization',
    excerptEs:
      'La dirigencia de las 31 federaciones del magisterio urbano decidiÃ³ romper la mesa de diÃ¡logo instalada con mediaciÃ³n de la DefensorÃ­a del Pueblo, sin soluciÃ³n al conflicto por la descentralizaciÃ³n de los institutos tÃ©cnicos. El ministro Erick SanjinÃ©s anunciÃ³ una nueva convocatoria, aunque advirtiÃ³ que el Gobierno no puede desconocer el acuerdo firmado con el magisterio rural.',
    excerptEn:
      'The leadership of the 31 urban teachers\u2019 federations decided to walk out of the dialogue table mediated by the Ombudsman\u2019s Office, with no solution to the conflict over decentralizing technical institutes. Minister Erick SanjinÃ©s announced a new call for talks, though he warned the Government cannot ignore the agreement signed with rural teachers.',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/magisterio-urbano-rompe-mesa-dialogo-descentralizacion.jpg`,
    imageCaption: 'El ministro de EducaciÃ³n, Erick SanjinÃ©s, tras la mesa de diÃ¡logo del viernes 13. Foto: Red Uno',
    categoryEs: 'Nacional',
    categoryEn: 'National',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'Red Uno / La RazÃ³n',
    sourceUrl:
      'https://www.reduno.com.bo/noticias/tras-fracasar-dialogo-con-maestros-urbanos-gobierno-insiste-en-el-dialogo-20261113193721',
    contentEs: `<h1>El magisterio urbano rompe la mesa de diÃ¡logo y el ministro de EducaciÃ³n insiste en negociar la descentralizaciÃ³n</h1>
<p class="lead"><em>La mesa de diÃ¡logo entre el Ministerio de EducaciÃ³n y la ConfederaciÃ³n de Trabajadores de EducaciÃ³n Urbana de Bolivia (CTEUB), facilitada este viernes 13 por la DefensorÃ­a del Pueblo, terminÃ³ sin acuerdo: la dirigencia de las 31 federaciones decidiÃ³ levantarse de la negociaciÃ³n sobre la descentralizaciÃ³n de los institutos tÃ©cnicos y tecnolÃ³gicos. El ministro Erick SanjinÃ©s anunciÃ³ que buscarÃ¡ una nueva convocatoria, en medio de anuncios de nuevas medidas de presiÃ³n.</em></p>
${figure(
  `${IMG}/magisterio-urbano-rompe-mesa-dialogo-descentralizacion.jpg`,
  'El ministro de EducaciÃ³n, Erick SanjinÃ©s, en conferencia tras la mesa de diÃ¡logo',
  'La reuniÃ³n durÃ³ aproximadamente tres horas con mediaciÃ³n de la DefensorÃ­a del Pueblo. Foto: Red Uno'
)}
<h2 class="report-chapter">Tres horas y sin consensos</h2>
<p>La reuniÃ³n se desarrollÃ³ durante aproximadamente tres horas en La Paz, con la mediaciÃ³n de la DefensorÃ­a del Pueblo, que actuÃ³ en cumplimiento de su mandato constitucional de facilitar espacios de diÃ¡logo. En un comunicado, la instituciÃ³n defensorial reconociÃ³ que, pese a que las partes avanzaron en puntos de entendimiento, no se pudo alcanzar consensos que posibiliten una soluciÃ³n inmediata al conflicto, e instÃ³ a retomar las conversaciones sin condicionamientos.</p>
<p>Tras el encuentro, el ministro SanjinÃ©s asegurÃ³ que mantiene su disposiciÃ³n de continuar las negociaciones y que el Gobierno elaborarÃ¡ un diagnÃ³stico participativo del sistema educativo. El punto de bloqueo sigue siendo la exigencia docente de retirar el anteproyecto de ley que transfiere la administraciÃ³n de los institutos tÃ©cnicos a las gobernaciones y municipios como condiciÃ³n para negociar.</p>
${quote(
  'Nosotros tenemos un acuerdo ya firmado con los maestros rurales. Tenemos que ser tambiÃ©n coherentes, tenemos que seguir por lo menos la lÃ­nea del acuerdo firmado.',
  'Erick SanjinÃ©s, ministro de EducaciÃ³n'
)}
<h2 class="report-chapter">El acuerdo con el magisterio rural condiciona la negociaciÃ³n</h2>
<p>SanjinÃ©s explicÃ³ que el Gobierno no puede desconocer el acuerdo suscrito el miÃ©rcoles 11 de noviembre con la ConfederaciÃ³n Nacional de Maestros de EducaciÃ³n Rural de Bolivia, que establece la suspensiÃ³n del anteproyecto y la instalaciÃ³n de mesas tÃ©cnicas regionales. Los dirigentes urbanos consideran que ese entendimiento representa apenas un cuarto intermedio y descartaron aceptar un tratamiento distinto al del sector rural.</p>
<h2 class="report-chapter">Las medidas que se vienen</h2>
<p>Al dÃ­a siguiente, en declaraciones a Red Uno recogidas por La RazÃ³n, el ministro descartÃ³ renunciar y ratificÃ³ su propuesta: "Yo estoy firme con mis convicciones", respondiÃ³ al ser consultado sobre su continuidad, y advirtiÃ³ que si el magisterio concreta el paro de 72 horas anunciado, se aplicarÃ¡ la normativa vigente: "DÃ­a no trabajado es igual a dÃ­a no pagado".</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/tras-fracasar-dialogo-con-maestros-urbanos-gobierno-insiste-en-el-dialogo-20261113193721')}
${source('DefensorÃ­a del Pueblo', 'https://www.defensoria.gob.bo/noticias/comunicadosobre-la-facilitacion-al-dialogo-entre-el-magisterio-urbano-y-el-ministerio-de-educacion')}
${source('La RazÃ³n', 'https://larazon.bo/nacional/2026/11/14/ministro-de-educacion-descarta-renunciar-y-mantiene-propuesta-de-descentralizacion/')}`,
    contentEn: `<h1>Urban teachers walk out of dialogue table and Education Minister insists on negotiating decentralization</h1>
<p class="lead"><em>The dialogue table between the Ministry of Education and the Confederation of Urban Education Workers of Bolivia (CTEUB), facilitated on Friday, November 13 by the Ombudsman\u2019s Office, ended without agreement: the leadership of the 31 federations decided to leave the negotiation on decentralizing technical and technological institutes. Minister Erick SanjinÃ©s announced he will seek a new call for talks, amid announcements of new pressure measures.</em></p>
${figure(
  `${IMG}/magisterio-urbano-rompe-mesa-dialogo-descentralizacion.jpg`,
  'Education Minister Erick SanjinÃ©s at a press conference after the dialogue table',
  'The meeting lasted about three hours with mediation by the Ombudsman\u2019s Office. Photo: Red Uno'
)}
<h2 class="report-chapter">Three hours and no consensus</h2>
<p>The meeting took place over approximately three hours in La Paz, mediated by the Ombudsman\u2019s Office acting under its constitutional mandate to facilitate dialogue spaces. In a statement, the institution acknowledged that although the parties advanced on points of understanding, no consensus enabling an immediate solution to the conflict was reached, and urged resuming talks without conditions.</p>
<p>After the meeting, Minister SanjinÃ©s said he remains willing to continue negotiations and that the Government will prepare a participatory diagnosis of the education system. The blocking point remains the teachers\u2019 demand to withdraw the draft bill transferring administration of technical institutes to regional and municipal governments as a condition for negotiating.</p>
${quote(
  'We have an agreement already signed with rural teachers. We must also be coherent, at least follow the line of the signed agreement.',
  'Erick SanjinÃ©s, Minister of Education'
)}
<h2 class="report-chapter">The rural teachers\u2019 agreement conditions the negotiation</h2>
<p>SanjinÃ©s explained that the Government cannot ignore the agreement signed on Wednesday, November 11, with the National Confederation of Rural Teachers of Bolivia, which establishes the suspension of the draft bill and the creation of regional technical tables. Urban leaders consider that agreement merely an intermission and rejected any different treatment from the rural sector\u2019s.</p>
<h2 class="report-chapter">The measures ahead</h2>
<p>The following day, in statements to Red Uno picked up by La RazÃ³n, the minister ruled out resigning and ratified his proposal: "I stand firm with my convictions," he replied when asked about his continuity, warning that if teachers carry out the announced 72-hour strike, current regulations will apply: "A day not worked equals a day not paid."</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/tras-fracasar-dialogo-con-maestros-urbanos-gobierno-insiste-en-el-dialogo-20261113193721')}
${source('DefensorÃ­a del Pueblo', 'https://www.defensoria.gob.bo/noticias/comunicadosobre-la-facilitacion-al-dialogo-entre-el-magisterio-urbano-y-el-ministerio-de-educacion')}
${source('La RazÃ³n', 'https://larazon.bo/nacional/2026/11/14/ministro-de-educacion-descarta-renunciar-y-mantiene-propuesta-de-descentralizacion/')}`,
  },
  {
    id: '1443',
    slug: 'huelga-hambre-maestros-12-dias-la-paz',
    publishedAt: '2026-11-14T14:41:00-04:00',
    date: '2026-11-14',
    titleEs: 'Maestros de La Paz cumplen 12 dÃ­as de huelga de hambre en tres piquetes contra el traspaso de institutos',
    titleEn: 'La Paz teachers reach 12 days of hunger strike in three camps against institute transfer',
    excerptEs:
      'MÃ¡s de 15 educadores del magisterio urbano de La Paz sostienen tres piquetes de huelga de hambre en la sede de gobierno, en rechazo al anteproyecto que transfiere los institutos tÃ©cnicos, tecnolÃ³gicos y artÃ­sticos a las gobernaciones. Tras casi dos semanas de ayuno reportan agotamiento extremo y responsabilizan al ministro SanjinÃ©s por su salud.',
    excerptEn:
      'More than 15 urban teachers in La Paz are keeping three hunger strike camps at the seat of government, rejecting the draft bill transferring technical, technological and artistic institutes to regional governments. After nearly two weeks of fasting they report extreme exhaustion and hold Minister SanjinÃ©s responsible for their health.',
    readTimeEs: '4 min',
    readTimeEn: '4 min',
    imageUrl: `${IMG}/huelga-hambre-maestros-12-dias-la-paz.jpg`,
    imageCaption: 'Los maestros mantienen tres piquetes de huelga de hambre en la sede de gobierno. Foto: Red Uno',
    categoryEs: 'Nacional',
    categoryEn: 'National',
    region: 'Bolivia',
    location: 'La Paz, Bolivia',
    source: 'Red Uno de Bolivia',
    sourceUrl:
      'https://www.reduno.com.bo/noticias/maestros-de-la-paz-cumplen-12-dias-de-huelga-de-hambre-en-tres-piquetes-20261114143537',
    contentEs: `<h1>Maestros de La Paz cumplen 12 dÃ­as de huelga de hambre en tres piquetes contra el traspaso de institutos</h1>
<p class="lead"><em>El magisterio urbano de La Paz cumple este sÃ¡bado 14 de noviembre doce dÃ­as de huelga de hambre en tres piquetes instalados en la sede de gobierno, en rechazo al anteproyecto de ley que busca transferir la administraciÃ³n y contrataciÃ³n docente de los institutos tÃ©cnicos, tecnolÃ³gicos y artÃ­sticos a las gobernaciones.</em></p>
${figure(
  `${IMG}/huelga-hambre-maestros-12-dias-la-paz.jpg`,
  'Maestros en huelga de hambre en la sede de gobierno de La Paz',
  'MÃ¡s de 15 educadores sostienen la medida extrema desde hace 12 dÃ­as. Foto: Red Uno'
)}
<h2 class="report-chapter">MÃ¡s de 15 educadores en ayuno</h2>
<p>SegÃºn Red Uno, mÃ¡s de 15 educadores sostienen la extrema medida, organizados en tres piquetes. Una de las profesoras movilizadas exigiÃ³ directamente al ministro de EducaciÃ³n: "Nosotros le decimos al ministro, cumpla sus acuerdos, seÃ±or ministro", en referencia a los entendimientos previos suscritos con el sector.</p>
<p>Los docentes recuerdan que en mayo se pactÃ³ frenar cualquier iniciativa de traspaso administrativo, por lo que cuestionan las actuales reuniones del Ejecutivo con autoridades departamentales, directivos de institutos y padres de familia. AdemÃ¡s, cuestionaron el fondo financiero del conflicto: "DÃ­gale a la poblaciÃ³n por quÃ© ha reducido el 50% del presupuesto para la gestiÃ³n 2027 y que por eso pretende descentralizar la educaciÃ³n", cuestionÃ³ la representante de los huelguistas.</p>
${quote(
  'AsÃ­ estÃ© nuestra salud en riesgo, nosotros vamos a continuar y mÃ¡s bien hacemos responsable al ministro sobre nuestra salud y nuestra integridad.',
  'Docente en huelga de hambre, a Red Uno'
)}
<h2 class="report-chapter">Agotamiento extremo a casi dos semanas</h2>
<p>Tras casi dos semanas de ayuno, los maestros reportan sÃ­ntomas de agotamiento extremo, aunque ratifican que sostendrÃ¡n la protesta hasta recibir respuestas concretas. El conflicto por la descentralizaciÃ³n educativa sumÃ³ este viernes un nuevo revÃ©s con la ruptura de la mesa de diÃ¡logo facilitada por la DefensorÃ­a del Pueblo, y el magisterio urbano anunciÃ³ un paro de 72 horas, marchas y nuevos piquetes de huelga para la prÃ³xima semana.</p>
<h2 class="report-chapter">La posiciÃ³n del Gobierno</h2>
<p>El Ministro de EducaciÃ³n, Erick SanjinÃ©s, descartÃ³ renunciar y mantuvo la propuesta de descentralizaciÃ³n, argumentando que los salarios serÃ­an transferidos desde el presupuesto nacional a las gobernaciones con obligaciÃ³n legal de destinarlos exclusivamente a ese fin y con respaldo anual de una ley. El diÃ¡logo, por ahora, sigue abierto pero sin fechas concretas de reencuentro.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/maestros-de-la-paz-cumplen-12-dias-de-huelga-de-hambre-en-tres-piquetes-20261114143537')}
${source('La RazÃ³n', 'https://larazon.bo/nacional/2026/11/14/ministro-de-educacion-descarta-renunciar-y-mantiene-propuesta-de-descentralizacion/')}`,
    contentEn: `<h1>La Paz teachers reach 12 days of hunger strike in three camps against institute transfer</h1>
<p class="lead"><em>Urban teachers of La Paz reach this Saturday, November 14, twelve days of hunger strike in three camps set up at the seat of government, rejecting the draft bill seeking to transfer administration and teacher hiring of technical, technological and artistic institutes to regional governments.</em></p>
${figure(
  `${IMG}/huelga-hambre-maestros-12-dias-la-paz.jpg`,
  'Teachers on hunger strike at the seat of government in La Paz',
  'More than 15 educators have sustained the extreme measure for 12 days. Photo: Red Uno'
)}
<h2 class="report-chapter">More than 15 educators fasting</h2>
<p>According to Red Uno, more than 15 educators sustain the extreme measure, organized in three camps. One of the mobilized teachers made a direct demand to the Minister of Education: "We tell the minister, honor your agreements, Mr. Minister," referring to previous understandings signed with the sector.</p>
<p>Teachers recall that in May an agreement was reached to halt any transfer initiative, which is why they question the current meetings between the Executive and regional authorities, institute directors and parents. They also questioned the financial background of the conflict: "Tell the population why you cut 50% of the 2027 budget and that is why you want to decentralize education," the strikers\u2019 representative charged.</p>
${quote(
  'Even with our health at risk, we will continue, and we hold the minister responsible for our health and our integrity.',
  'Teacher on hunger strike, to Red Uno'
)}
<h2 class="report-chapter">Extreme exhaustion at nearly two weeks</h2>
<p>After nearly two weeks of fasting, teachers report symptoms of extreme exhaustion, though they ratify they will sustain the protest until they receive concrete answers. The conflict over education decentralization suffered a new setback on Friday with the breakdown of the dialogue table facilitated by the Ombudsman\u2019s Office, and the urban teachers announced a 72-hour strike, marches and new picket lines for next week.</p>
<h2 class="report-chapter">The Government\u2019s position</h2>
<p>Education Minister Erick SanjinÃ©s ruled out resigning and kept the decentralization proposal, arguing that salaries would be transferred from the national budget to regional governments with a legal obligation to use them exclusively for that purpose and annual backing by law. Dialogue, for now, remains open but without concrete dates for a new meeting.</p>
${source('Red Uno de Bolivia', 'https://www.reduno.com.bo/noticias/maestros-de-la-paz-cumplen-12-dias-de-huelga-de-hambre-en-tres-piquetes-20261114143537')}
${source('La RazÃ³n', 'https://larazon.bo/nacional/2026/11/14/ministro-de-educacion-descarta-renunciar-y-mantiene-propuesta-de-descentralizacion/')}`,
  },
  {
    id: '1444',
    slug: 'rodrigo-paz-erdogan-estambul-reformas-inversion',
    publishedAt: '2026-11-14T16:05:00-04:00',
    date: '2026-11-14',
    titleEs: 'Rodrigo Paz se reÃºne con Erdogan en Estambul y anuncia reformas de inversiÃ³n, minerÃ­a e hidrocarburos para este aÃ±o',
    titleEn: 'Rodrigo Paz meets Erdogan in Istanbul and announces investment, mining and hydrocarbons reforms for this year',
    excerptEs:
      'El presidente Rodrigo Paz sostuvo en el Palacio DolmabahÃ§e un encuentro con su homÃ³logo turco Recep Tayyip Erdogan y presentÃ³ ante mÃ¡s de 160 empresarios turcos su plan de reformas: "Este aÃ±o completaremos todas las reformas necesarias de nuestras leyes de inversiÃ³n, minerÃ­a e hidrocarburos, ofreciendo garantÃ­as jurÃ­dicas a los inversores internacionales".',
    excerptEn:
      'President Rodrigo Paz met his Turkish counterpart Recep Tayyip Erdogan at DolmabahÃ§e Palace and presented to over 160 Turkish businesspeople his reform plan: "This year we will complete all the necessary reforms to our investment, mining and hydrocarbons laws, offering legal guarantees to international investors."',
    readTimeEs: '5 min',
    readTimeEn: '5 min',
    imageUrl: `${IMG}/rodrigo-paz-erdogan-estambul-reformas-inversion.jpg`,
    imageCaption: 'El presidente Rodrigo Paz y el presidente turco Recep Tayyip Erdogan se reunieron en Estambul. Foto: El Deber',
    categoryEs: 'PolÃ­tica',
    categoryEn: 'Politics',
    region: 'International',
    location: 'Estambul, TurquÃ­a',
    source: 'El Deber / EFE',
    sourceUrl:
      'https://eldeber.com.bo/pais/rodrigo-paz-reune-erdogan-turquia-busca-fortalecer-vinculos-economicos-comerciales-bolivia_1794666336',
    contentEs: `<h1>Rodrigo Paz se reÃºne con Erdogan en Estambul y anuncia reformas de inversiÃ³n, minerÃ­a e hidrocarburos para este aÃ±o</h1>
<p class="lead"><em>El presidente de Bolivia, Rodrigo Paz, se reuniÃ³ este sÃ¡bado 14 de noviembre en Estambul con el mandatario turco Recep Tayyip Erdogan, en el cierre de una visita que incluyÃ³ la cumbre climÃ¡tica COP31 en Antalya y encuentros con mÃ¡s de 160 empresarios turcos. En la Mesa Redonda TurquÃ­a-Bolivia, el mandatario anunciÃ³ reformas legislativas inmediatas para atraer inversiÃ³n extranjera.</em></p>
${figure(
  `${IMG}/rodrigo-paz-erdogan-estambul-reformas-inversion.jpg`,
  'El presidente Rodrigo Paz y el presidente turco Recep Tayyip Erdogan durante su reuniÃ³n en Estambul',
  'El encuentro se realizÃ³ en la Oficina Presidencial de DolmabahÃ§e. Foto: El Deber'
)}
<h2 class="report-chapter">La reuniÃ³n en DolmabahÃ§e</h2>
<p>SegÃºn la DirecciÃ³n de Comunicaciones de la Presidencia turca, Erdogan recibiÃ³ a Paz con una ceremonia oficial fuera de la Oficina Presidencial de DolmabahÃ§e, en Estambul. Tras la presentaciÃ³n de las delegaciones, los mandatarios sostuvieron una reuniÃ³n a solas y posteriormente una reuniÃ³n entre delegaciones, con la participaciÃ³n del ministro de Defensa Nacional turco, YaÅŸar GÃ¼ler.</p>
<p>El jefe de Estado turco definiÃ³ a Bolivia como un socio importante de TurquÃ­a en AmÃ©rica Latina y manifestÃ³ su interÃ©s en ampliar la cooperaciÃ³n, con Ã©nfasis en la minerÃ­a y la industria de defensa. En un comunicado, la Presidencia turca seÃ±alÃ³ que los acuerdos deberÃ¡n consolidar la relaciÃ³n bajo un enfoque de "beneficio mutuo".</p>
${quote(
  'Este aÃ±o completaremos todas las reformas necesarias de nuestras leyes de inversiÃ³n, minerÃ­a e hidrocarburos, ofreciendo garantÃ­as jurÃ­dicas a los inversores internacionales.',
  'Rodrigo Paz, presidente de Bolivia, en la Mesa Redonda TurquÃ­a-Bolivia (DEÄ°K)'
)}
<h2 class="report-chapter">Ante 160 empresarios turcos</h2>
<p>Ante la Mesa Redonda TurquÃ­a-Bolivia organizada por el Consejo de Relaciones EconÃ³micas Exteriores de TurquÃ­a (DEÄ°K), Paz presentÃ³ las oportunidades de inversiÃ³n boliviana y planteÃ³ acuerdos de transferencia tecnolÃ³gica, programas de formaciÃ³n para profesionales y alianzas que incorporen valor agregado a la producciÃ³n nacional, buscando inversiones que combinen financiamiento, tecnologÃ­a y capacitaciÃ³n.</p>
<p>Los sectores abordados con los empresarios incluyeron minerÃ­a, energÃ­a, industria, defensa, construcciÃ³n, turismo, textiles, inteligencia artificial, tecnologÃ­a y comunicaciones, segÃºn BrÃºjula Digital. El mandatario tambiÃ©n visitÃ³ una compaÃ±Ã­a tecnolÃ³gica de defensa en Ankara y dijo buscar "concretar las inversiones por las que tanto luchamos, con algunos de los empresarios mÃ¡s grandes del mundo que confÃ­an en Bolivia".</p>
<h2 class="report-chapter">De la COP31 al puente Europa-Asia</h2>
<p>La visita se desarrollÃ³ tras la participaciÃ³n de Paz en la COP31, celebrada esta semana en Antalya, donde el presidente pidiÃ³ acceso a financiamiento climÃ¡tico y anunciÃ³ el interÃ©s boliviano en el Fondo Bosques Tropicales para Siempre (TFFF) impulsado por Brasil. El Gobierno plantea que una asociaciÃ³n con TurquÃ­a, ubicada entre Europa y Asia, amplÃ­e el acceso de productos bolivianos a ambos continentes.</p>
<p>Las reformas anunciadas abarcan tres Ã¡reas de la normativa econÃ³mica: inversiÃ³n, con el objetivo de ofrecer certezas jurÃ­dicas a compaÃ±Ã­as internacionales, y minerÃ­a e hidrocarburos, donde el Gobierno prevÃ© completar los cambios legislativos durante este aÃ±o, de acuerdo con EFE.</p>
${source('El Deber', 'https://eldeber.com.bo/pais/rodrigo-paz-reune-erdogan-turquia-busca-fortalecer-vinculos-economicos-comerciales-bolivia_1794666336')}
${source('EFE (vÃ­a Infobae)', 'https://www.infobae.com/america/agencias/2026/11/14/paz-se-reune-con-el-presidente-turco-y-anuncia-mas-reformas-para-inversion-y-mineria/')}
${source('BrÃºjula Digital', 'https://brujuladigital.net/economia/2026/11/14/paz-se-reune-con-homologo-erdoan-en-estambul-y-busca-atraer-inversiones-turcas-a-bolivia-69149')}`,
    contentEn: `<h1>Rodrigo Paz meets Erdogan in Istanbul and announces investment, mining and hydrocarbons reforms for this year</h1>
<p class="lead"><em>President of Bolivia Rodrigo Paz met this Saturday, November 14 in Istanbul with Turkish President Recep Tayyip Erdogan, capping a visit that included the COP31 climate summit in Antalya and meetings with more than 160 Turkish businesspeople. At the Turkey-Bolivia Roundtable, the president announced immediate legislative reforms to attract foreign investment.</em></p>
${figure(
  `${IMG}/rodrigo-paz-erdogan-estambul-reformas-inversion.jpg`,
  'President Rodrigo Paz and Turkish President Recep Tayyip Erdogan during their meeting in Istanbul',
  'The meeting took place at the DolmabahÃ§e Presidential Office. Photo: El Deber'
)}
<h2 class="report-chapter">The DolmabahÃ§e meeting</h2>
<p>According to the Turkish Presidency\u2019s Directorate of Communications, Erdogan welcomed Paz with an official ceremony outside the DolmabahÃ§e Presidential Office in Istanbul. After the introduction of delegations, the two leaders held a tÃªte-Ã -tÃªte and then a meeting between delegations, with Turkish Minister of National Defense YaÅŸar GÃ¼ler in attendance.</p>
<p>The Turkish head of state described Bolivia as an important partner for TÃ¼rkiye in Latin America and expressed interest in expanding cooperation, with emphasis on mining and the defense industry. In a statement, the Turkish Presidency said agreements must consolidate the relationship under a "mutual benefit" approach.</p>
${quote(
  'This year we will complete all the necessary reforms to our investment, mining and hydrocarbons laws, offering legal guarantees to international investors.',
  'Rodrigo Paz, President of Bolivia, at the Turkey-Bolivia Roundtable (DEÄ°K)'
)}
<h2 class="report-chapter">Before 160 Turkish businesspeople</h2>
<p>At the Turkey-Bolivia Roundtable organized by the Foreign Economic Relations Board of TÃ¼rkiye (DEÄ°K), Paz presented Bolivia\u2019s investment opportunities and proposed technology transfer agreements, training programs for Bolivian professionals and partnerships that add value to national production, seeking investments that combine financing, technology and training.</p>
<p>Sectors discussed with businesspeople included mining, energy, industry, defense, construction, tourism, textiles, artificial intelligence, technology and communications, according to BrÃºjula Digital. The president also visited a defense technology company in Ankara and said he seeks "to secure the investments we fought so hard for, with some of the largest businesspeople in the world who trust Bolivia."</p>
<h2 class="report-chapter">From COP31 to the Europe-Asia bridge</h2>
<p>The visit followed Paz\u2019s participation in COP31, held this week in Antalya, where the president requested access to climate financing and announced Bolivia\u2019s interest in the Tropical Forest Forever Facility (TFFF) promoted by Brazil. The Government argues that a partnership with TÃ¼rkiye, located between Europe and Asia, would expand access for Bolivian products to both continents.</p>
<p>The announced reforms cover three areas of economic regulation: investment, aiming to provide legal certainty to international companies, and mining and hydrocarbons, where the Government expects to complete the legislative changes within this year, according to EFE.</p>
${source('El Deber', 'https://eldeber.com.bo/pais/rodrigo-paz-reune-erdogan-turquia-busca-fortalecer-vinculos-economicos-comerciales-bolivia_1794666336')}
${source('EFE (via Infobae)', 'https://www.infobae.com/america/agencias/2026/11/14/paz-se-reune-con-el-presidente-turco-y-anuncia-mas-reformas-para-inversion-y-mineria/')}
${source('BrÃºjula Digital', 'https://brujuladigital.net/economia/2026/11/14/paz-se-reune-con-homologo-erdoan-en-estambul-y-busca-atraer-inversiones-turcas-a-bolivia-69149')}`,
  },
];
