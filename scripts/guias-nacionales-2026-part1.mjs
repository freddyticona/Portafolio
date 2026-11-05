/**
 * Guías nacionales de Bolivia 2026 — parte 1.
 * IDs 1390–1394: Re-IVA, certificado de aportes, carnet de discapacidad,
 * corrección de acta de nacimiento y matrimonio civil.
 */

import { figure, stats, quote, doc, CAT_ES, CAT_EN, IMG } from './guias-nacionales-2026-helpers.mjs';

export const part1 = [
  {
    id: '1390',
    slug: 're-iva-2026-renovacion-devolucion-5-por-ciento-compras',
    publishedAt: '2026-09-09T07:30:00-04:00',
    titleEs: 'Re-IVA 2026: cómo renovar y recuperar el 5% de tus compras con factura',
    titleEn: 'Re-IVA 2026: how to renew and recover 5% of your receipted purchases',
    excerptEs:
      'El Re-IVA devuelve el 5% de las compras facturadas a las personas con ingresos de hasta Bs 9.000 al mes. La renovación 2026 se hace en el SIAT, exige una cuenta bancaria actualizada y permite elegir entre el registro automático o el manual con Formulario 111.',
    excerptEn:
      'Re-IVA refunds 5% of receipted purchases to people earning up to Bs 9,000 a month. The 2026 renewal is done in SIAT, requires an updated bank account and lets you choose between automatic registration or manual filing with Form 111.',
    date: '2026-09-09',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/re-iva-2026.jpg`,
    imageCaption: 'Factura electrónica, billetes y dispositivos móviles. Imagen: SIN',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Re-IVA 2026: cómo renovar y recuperar el 5% de tus compras con factura</h1>
<p class="lead"><em>El Régimen de Reintegro en Efectivo del IVA no es un bono ni una devolución automática para todo el mundo: es un beneficio tributario que devuelve el 5% de las compras respaldadas con factura, siempre que el beneficiario tenga ingresos mensuales de hasta Bs 9.000 y mantenga actualizado su registro y su cuenta bancaria. En 2026 la renovación se hace exclusivamente por el SIAT.</em></p>
${figure(
  `${IMG}/re-iva-2026.jpg`,
  'Factura electrónica, billetes de bolivianos y dispositivos móviles',
  'Factura electrónica, billetes y dispositivos móviles. Imagen: SIN'
)}
${stats([
  ['5%', 'de las compras facturadas'],
  ['Bs 9.000', 'ingreso mensual máximo'],
  ['2', 'modalidades de registro'],
  ['1', 'renovación por gestión'],
])}
<h2 class="report-chapter">Qué es el Re-IVA y quién puede cobrarlo</h2>
<p>El Re-IVA nace de la Ley N° 1355 y se reglamenta con el Decreto Supremo N° 4435. Su lógica es sencilla: cada vez que compras en un negocio formal y pides factura con tu cédula de identidad, el Estado te devuelve el 5% de ese gasto. El dinero no llega en efectivo ni por ventanilla; se deposita en la cuenta bancaria que registraste.</p>
<p>Pueden acceder las personas bolivianas que estén dentro de tres categorías: <strong>trabajadores asalariados</strong>, <strong>trabajadores independientes o por cuenta propia</strong> y <strong>rentistas</strong>. El requisito económico es que los ingresos mensuales no superen los Bs 9.000. Si estás por encima de ese techo, el sistema no habilita el reintegro.</p>
<p>El beneficio no funciona como un descuento en la caja. Primero pagas el IVA incluido en el precio; después, el SIN calcula el 5% de las facturas válidas y lo transfiere a tu cuenta. Por eso la factura debe estar emitida a tu nombre y con tu número de cédula. Una factura sin ese dato no entra al cálculo.</p>
<h2 class="report-chapter">Requisitos y renovación 2026, paso a paso</h2>
<p>La renovación es anual. Para la gestión 2026 el SIN la habilitó en el portal <strong>www.impuestos.gob.bo</strong>, dentro del Sistema Integrado de Administración Tributaria (SIAT). El recorrido es este:</p>
<ol>
<li>Ingresa al portal del SIN y abre el SIAT con tus credenciales.</li>
<li>Selecciona <strong>Registro de Beneficiarios Re-IVA</strong>.</li>
<li>Haz clic en <strong>Renovación Gestión 2026</strong>.</li>
<li>Revisa tus datos personales, tu categoría y la cuenta bancaria registrada.</li>
<li>Confirma la modalidad de registro y guarda el comprobante.</li>
</ol>
<p>Antes de empezar ten a mano tu cédula de identidad, el número de cuenta bancaria a nombre propio y una estimación de tus ingresos mensuales. Si la cuenta está cerrada, mal registrada o pertenece a otra persona, el depósito no llega. Ese es el error más frecuente y también el más fácil de corregir.</p>
<p>La renovación no se hace en oficinas del SIN ni por ventanilla bancaria. El canal es digital. Si tienes problemas de acceso, la línea gratuita <strong>800-10-3444</strong> atiende consultas sobre el trámite y el portal.</p>
<h2 class="report-chapter">Modalidad automática o manual: cuál te conviene</h2>
<p>El Re-IVA tiene dos formas de alimentar el registro de facturas. En la <strong>modalidad automática</strong>, el SIN identifica las facturas que los comercios emiten con tu cédula y las incorpora sin que tengas que subirlas una por una. Es la opción cómoda para quien compra en supermercados, farmacias, restaurantes y tiendas que facturan en línea.</p>
<p>En la <strong>modalidad manual</strong>, tú registras cada factura mediante el Formulario 111. Sirve cuando el comercio no incluyó tu cédula, cuando la factura se emitió en papel o cuando detectas que una compra no apareció. La desventaja es el trabajo: si no registras, no recuperas.</p>
<table class="spec-table">
<thead><tr><th>Aspecto</th><th>Automática</th><th>Manual</th></tr></thead>
<tbody>
<tr><td>Cómo se cargan las facturas</td><td>El SIN las detecta por tu cédula</td><td>Las ingresas con el Formulario 111</td></tr>
<tr><td>Esfuerzo</td><td>Bajo</td><td>Medio o alto, según el volumen</td></tr>
<tr><td>Cuándo conviene</td><td>Compras habituales en comercios formales</td><td>Facturas omitidas o emitidas sin cédula</td></tr>
<tr><td>Qué revisar</td><td>Que la cuenta bancaria esté vigente</td><td>Que cada factura tenga los datos correctos</td></tr>
</tbody>
</table>
<h2 class="report-chapter">Cuánto puedes recuperar y qué no cuenta</h2>
<p>El reintegro es proporcional al gasto facturado. Si en un mes acumulas Bs 2.000 en compras válidas, el 5% son Bs 100. Si acumulas Bs 500, el reintegro es Bs 25. No hay un monto fijo ni un pago único: el beneficio se calcula sobre lo que efectivamente registres y se abona según el calendario del SIN.</p>
<p>No cuentan las facturas sin cédula, las que corresponden a compras de empresas o actividades que no son consumo final, las emitidas a nombre de otra persona y las que están anuladas. Tampoco conviene confiar en tickets o notas de venta: el documento válido es la factura.</p>
<p>El Re-IVA premia la formalidad. Cada factura que pides deja rastro de una venta que, de otro modo, podría quedar fuera del sistema. Por eso el beneficio tiene un componente pedagógico: no se trata solo de recuperar unos bolivianos, sino de exigir comprobante en cada compra.</p>
${quote(
  'El beneficiario recibe mensualmente el 5% del valor de sus compras facturadas directamente en su cuenta bancaria registrada.',
  'SIN',
  'Servicio de Impuestos Nacionales',
  'Nota de prensa del 21 de enero de 2026'
)}
<h2 class="report-chapter">Errores que retrasan el reintegro</h2>
<ul>
<li><strong>No renovar:</strong> el registro de la gestión anterior no se prorroga solo.</li>
<li><strong>Cambiar de cuenta y no actualizarla:</strong> el depósito se rechaza o se devuelve.</li>
<li><strong>Pasar el techo de Bs 9.000:</strong> si tus ingresos superan el límite, pierdes el beneficio.</li>
<li><strong>No pedir factura con cédula:</strong> sin ese dato, la compra no se puede atribuir.</li>
<li><strong>Registrar facturas de terceros:</strong> el sistema cruza datos y puede observar el registro.</li>
</ul>
<p>Si detectas que una factura válida no aparece, revisa primero la modalidad elegida y luego carga el comprobante por la vía manual. Guarda una copia digital de tus facturas mientras dure la gestión: son tu respaldo si necesitas reclamar.</p>
${doc(
  'https://www.impuestos.gob.bo/',
  'SIN',
  'Servicio de Impuestos Nacionales',
  'Portal principal, SIAT, calendario tributario y oficinas.'
)}
${doc(
  'https://www.impuestos.gob.bo/index.php/nota_prensa/el-sin-devuelve-el-5-de-compras-con-facturas',
  '5%',
  'Nota oficial del Re-IVA 2026',
  'Requisitos, categorías y pasos de la renovación.'
)}
${doc(
  'https://fiva.impuestos.gob.bo/',
  'WEB',
  'Portal FIVA',
  'Acceso al registro de beneficiarios y consulta del Re-IVA.'
)}`,
    contentEn: `<h1>Re-IVA 2026: how to renew and recover 5% of your receipted purchases</h1>
<p class="lead"><em>Re-IVA is not a universal bonus or an automatic refund: it is a tax benefit that returns 5% of purchases backed by an invoice, as long as the beneficiary earns no more than Bs 9,000 a month and keeps both the registration and the bank account up to date. In 2026 the renewal is done exclusively through SIAT.</em></p>
${figure(
  `${IMG}/re-iva-2026.jpg`,
  'Official Re-IVA graphic showing the refund rate and the income ceiling',
  'Electronic invoice, banknotes and mobile devices. Image: SIN'
)}
${stats([
  ['5%', 'of receipted purchases'],
  ['Bs 9,000', 'maximum monthly income'],
  ['2', 'registration methods'],
  ['1', 'renewal per year'],
])}
<h2 class="report-chapter">What Re-IVA is and who can claim it</h2>
<p>Re-IVA comes from Law 1355 and is regulated by Supreme Decree 4435. The logic is simple: every time you buy from a formal business and ask for an invoice with your ID number, the State returns 5% of that expense. The money does not arrive in cash or over a counter; it is deposited into the bank account you registered.</p>
<p>Bolivian citizens in three categories can apply: <strong>employees</strong>, <strong>self-employed or independent workers</strong> and <strong>rentiers</strong>. The economic requirement is a monthly income of no more than Bs 9,000. Above that ceiling, the system does not enable the refund.</p>
<p>The benefit is not a discount at the till. You pay the VAT included in the price first; then SIN calculates 5% of the valid invoices and transfers it to your account. That is why the invoice must be issued in your name and with your ID number. An invoice without that data does not enter the calculation.</p>
<h2 class="report-chapter">Requirements and the 2026 renewal, step by step</h2>
<p>The renewal is annual. For 2026, SIN enabled it on <strong>www.impuestos.gob.bo</strong>, inside the Integrated Tax Administration System (SIAT). The path is:</p>
<ol>
<li>Enter the SIN portal and open SIAT with your credentials.</li>
<li>Select <strong>Registro de Beneficiarios Re-IVA</strong>.</li>
<li>Click <strong>Renovación Gestión 2026</strong>.</li>
<li>Review your personal data, category and registered bank account.</li>
<li>Confirm the registration method and save the receipt.</li>
</ol>
<p>Before you start, have your ID card, the bank account number in your own name and an estimate of your monthly income at hand. If the account is closed, wrongly registered or belongs to someone else, the deposit will not arrive. That is the most common mistake and also the easiest to fix.</p>
<p>The renewal is not done at SIN offices or at a bank counter. The channel is digital. If you have access problems, the free line <strong>800-10-3444</strong> handles questions about the procedure and the portal.</p>
<h2 class="report-chapter">Automatic or manual: which one suits you</h2>
<p>Re-IVA has two ways to feed the invoice record. In the <strong>automatic method</strong>, SIN identifies invoices that businesses issue with your ID and adds them without you uploading them one by one. It is the convenient option for supermarkets, pharmacies, restaurants and stores that invoice online.</p>
<p>In the <strong>manual method</strong>, you register each invoice using Form 111. It is useful when the business did not include your ID, when the invoice was issued on paper or when you notice that a purchase did not appear. The downside is the work: if you do not register it, you do not recover it.</p>
<table class="spec-table">
<thead><tr><th>Aspect</th><th>Automatic</th><th>Manual</th></tr></thead>
<tbody>
<tr><td>How invoices are loaded</td><td>SIN detects them through your ID</td><td>You enter them with Form 111</td></tr>
<tr><td>Effort</td><td>Low</td><td>Medium or high, depending on volume</td></tr>
<tr><td>When it fits</td><td>Regular purchases at formal businesses</td><td>Missing invoices or invoices issued without ID</td></tr>
<tr><td>What to check</td><td>That the bank account is active</td><td>That each invoice has the right data</td></tr>
</tbody>
</table>
<h2 class="report-chapter">How much you can recover and what does not count</h2>
<p>The refund is proportional to receipted spending. If you accumulate Bs 2,000 in valid purchases in a month, 5% is Bs 100. If you accumulate Bs 500, the refund is Bs 25. There is no fixed amount or single payment: the benefit is calculated on what you actually register and is paid according to SIN's schedule.</p>
<p>Invoices without an ID do not count, nor do invoices for company purchases or activities that are not final consumption, invoices issued to someone else, or cancelled invoices. Do not rely on receipts or sales notes either: the valid document is the invoice.</p>
<p>Re-IVA rewards formality. Every invoice you request leaves a trace of a sale that might otherwise stay outside the system. That is why the benefit has an educational side: it is not only about recovering a few bolivianos, but about demanding a receipt on every purchase.</p>
${quote(
  'Beneficiaries receive 5% of the value of their receipted purchases every month, directly in their registered bank account.',
  'SIN',
  'National Tax Service',
  'Press release, January 21, 2026'
)}
<h2 class="report-chapter">Mistakes that delay the refund</h2>
<ul>
<li><strong>Not renewing:</strong> the previous year's registration does not renew itself.</li>
<li><strong>Changing banks without updating:</strong> the deposit is rejected or returned.</li>
<li><strong>Exceeding Bs 9,000:</strong> if your income is above the limit, you lose the benefit.</li>
<li><strong>Not asking for an invoice with your ID:</strong> without that data, the purchase cannot be attributed to you.</li>
<li><strong>Registering third-party invoices:</strong> the system cross-checks data and may flag the record.</li>
</ul>
<p>If a valid invoice does not appear, first check the method you chose and then upload the receipt manually. Keep a digital copy of your invoices for the whole year: they are your evidence if you need to file a claim.</p>
${doc(
  'https://www.impuestos.gob.bo/',
  'SIN',
  'National Tax Service',
  'Main portal, SIAT, tax calendar and offices.'
)}
${doc(
  'https://www.impuestos.gob.bo/index.php/nota_prensa/el-sin-devuelve-el-5-de-compras-con-facturas',
  '5%',
  'Official 2026 Re-IVA note',
  'Requirements, categories and renewal steps.'
)}
${doc(
  'https://fiva.impuestos.gob.bo/',
  'WEB',
  'FIVA portal',
  'Access the beneficiary registry and check Re-IVA.'
)}`,
  },
  {
    id: '1391',
    slug: 'certificado-aportes-gestora-publica-2026-estado-ahorro',
    publishedAt: '2026-09-18T08:00:00-04:00',
    titleEs: 'Certificado de aportes y estado de ahorro en la Gestora Pública: cómo descargarlo gratis',
    titleEn: 'Gestora Pública contribution certificate and savings statement: how to download them free',
    excerptEs:
      'La Gestora Pública emite gratis el certificado de registro y el estado de ahorro previsional. El trámite se hace en la Oficina Virtual con la CUA habilitada, al menos un aporte registrado y credenciales de asegurado. También hay atención en oficinas, kioscos y aplicación móvil.',
    excerptEn:
      'Gestora Pública issues the registration certificate and the pension savings statement free of charge. The process runs through the Virtual Office with an enabled CUA, at least one recorded contribution and insured-person credentials. Offices, kiosks and the mobile app are also available.',
    date: '2026-09-18',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: `${IMG}/certificado-aportes-gestora-2026.jpg`,
    imageCaption: 'Asegurados durante una actividad de la Gestora Pública. Foto: ABI',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Certificado de aportes y estado de ahorro en la Gestora Pública: cómo descargarlo gratis</h1>
<p class="lead"><em>El certificado de registro dice que estás afiliado al Sistema Integral de Pensiones. El estado de ahorro previsional muestra, mes a mes, cuánto se aportó y cómo se movió tu Cuenta Personal Previsional. Son dos documentos distintos, ambos gratuitos, y se descargan desde la misma Oficina Virtual de la Gestora.</em></p>
${figure(
  `${IMG}/certificado-aportes-gestora-2026.jpg`,
  'Acceso a la Oficina Virtual de la Gestora Pública desde el portal institucional',
  'Asegurados durante una actividad de la Gestora Pública. Foto: ABI'
)}
${stats([
  ['Bs 0', 'costo de los certificados'],
  ['3', 'canales de atención'],
  ['1', 'aporte mínimo registrado'],
  ['PDF', 'formato de descarga'],
])}
<h2 class="report-chapter">Qué documentos puedes descargar</h2>
<p>La Gestora Pública administra el Sistema Integral de Pensiones (SIP) y emite varios comprobantes. Los más útiles para trámites personales son:</p>
<ul>
<li><strong>Certificado de registro del asegurado:</strong> acredita que estás inscrito en el SIP.</li>
<li><strong>Estado de ahorro previsional:</strong> detalla los movimientos de tu Cuenta Personal Previsional, incluidos los aportes.</li>
<li><strong>Certificado de no registro:</strong> se usa cuando una persona no aparece como asegurada.</li>
<li><strong>Certificado de no adeudo:</strong> está dirigido a empresas y acredita que no tienen deudas con el SIP.</li>
</ul>
<p>El certificado de registro y el estado de ahorro no son lo mismo. El primero es una constancia de afiliación; el segundo es el historial económico. Si un banco, una embajada o una entidad financiera te pide “certificado de aportes”, normalmente quiere el estado de ahorro o una constancia de los períodos cotizados.</p>
<h2 class="report-chapter">Quién puede solicitarlo</h2>
<p>El trámite está pensado para personas aseguradas. La propia ficha oficial fija tres condiciones: estar registrado en el SIP y tener la Cuenta Única de Asegurado (CUA), haber realizado al menos un aporte y contar con las credenciales de la Gestora obtenidas por la Oficina Virtual.</p>
<p>Si nunca aportaste, el sistema no puede generar un estado de ahorro con movimientos. En ese caso corresponde el certificado de no registro, que también se emite en línea. Si aportaste antes de abril de 2023, esos períodos pueden aparecer en el histórico de la extinta AFP; desde esa fecha, la administración corresponde a la Gestora.</p>
<h2 class="report-chapter">Paso a paso en la Oficina Virtual</h2>
<ol>
<li>Ingresa a <strong>www.gestora.bo</strong> y pulsa <strong>Oficina Virtual</strong>.</li>
<li>Selecciona <strong>Asegurado</strong> y, si es tu primera vez, <strong>Registrarse aquí</strong>.</li>
<li>Completa tipo y número de documento, fecha de nacimiento, celular y correo.</li>
<li>Resuelve el captcha y confirma el código enviado a tu correo o teléfono.</li>
<li>Inicia sesión, cambia la contraseña temporal y entra a <strong>Certificados</strong>.</li>
<li>Elige el documento, genera el PDF y descárgalo o envíalo a tu correo.</li>
</ol>
<p>La contraseña debe tener al menos ocho caracteres, combinar mayúsculas, minúsculas, números y un carácter especial. Si ya tienes credenciales pero olvidaste la clave, usa la recuperación del portal o acude a una oficina con tu cédula.</p>
<h2 class="report-chapter">Canales alternativos y atención presencial</h2>
<p>Además de la web, la Gestora habilitó la aplicación móvil, kioscos digitales y las plataformas de atención de sus oficinas. El estado de ahorro también puede solicitarse para recibirlo por correo electrónico. Para consultas, la línea gratuita es <strong>800-10-1610</strong> y el WhatsApp <strong>67195524</strong>.</p>
<p>Si el sistema no muestra un aporte que sí descontaron de tu salario, reúne tu contrato, boletas de pago y el detalle del período. Primero revisa el reporte de movimientos; si la inconsistencia continúa, presenta el reclamo en la plataforma de atención con esos respaldos. No dejes pasar mucho tiempo: los empleadores y las planillas tienen plazos de declaración.</p>
<table class="spec-table">
<thead><tr><th>Documento</th><th>Para qué sirve</th><th>Dónde se obtiene</th></tr></thead>
<tbody>
<tr><td>Certificado de registro</td><td>Acreditar afiliación al SIP</td><td>Oficina Virtual, app u oficina</td></tr>
<tr><td>Estado de ahorro previsional</td><td>Ver aportes y movimientos de la cuenta</td><td>Oficina Virtual, app, kiosco u oficina</td></tr>
<tr><td>Certificado de no registro</td><td>Demostrar que no hay afiliación</td><td>Oficina Virtual</td></tr>
<tr><td>Certificado de no adeudo</td><td>Acreditar que una empresa no debe al SIP</td><td>Trámite de empresa</td></tr>
</tbody>
</table>
${quote(
  'Es el documento que consigna todos los movimientos de la Cuenta Personal Previsional del Asegurado, entre los cuales están los aportes ahorrados como resultado de sus contribuciones realizadas al Sistema Integral de Pensiones.',
  'GP',
  'Gestora Pública',
  'Ficha oficial del estado de ahorro previsional'
)}
<h2 class="report-chapter">Cuándo necesitas estos documentos</h2>
<p>El estado de ahorro se pide para trámites de jubilación, solicitudes de visa, créditos hipotecarios, procesos de repatriación de aportes y verificaciones laborales. También sirve para comprobar que un empleador declaró y pagó tus contribuciones. El certificado de registro, en cambio, se usa para demostrar que estás dentro del sistema cuando aún no tienes muchos períodos acumulados.</p>
<p>Antes de imprimir, revisa que el PDF tenga tu nombre completo, documento, CUA y el sello o código de verificación. Si el documento se presenta ante una entidad extranjera, consulta si requiere apostilla; la Gestora emite el certificado, pero la apostilla se tramita por la Cancillería.</p>
${doc(
  'https://www.gestora.bo/',
  'GP',
  'Gestora Pública',
  'Oficina Virtual, certificados y estado de ahorro.'
)}
${doc(
  'https://www.gob.bo/tramites/emision-de-estado-de-ahorro-previsional',
  'PDF',
  'Estado de ahorro previsional',
  'Requisitos, canales y procedimiento oficial.'
)}
${doc(
  'https://www.gob.bo/tramites/obtencion-de-credenciales-para-el-asegurado',
  'ID',
  'Credenciales del asegurado',
  'Cómo registrar tu usuario en la Oficina Virtual.'
)}`,
    contentEn: `<h1>Gestora Pública contribution certificate and savings statement: how to download them free</h1>
<p class="lead"><em>The registration certificate proves that you are affiliated with the Integral Pension System. The pension savings statement shows, month by month, how much was contributed and how your Personal Pension Account moved. They are two different documents, both free, and both are downloaded from the same Gestora Virtual Office.</em></p>
${figure(
  `${IMG}/certificado-aportes-gestora-2026.jpg`,
  'Asegurados en una actividad de la Gestora Pública',
  'Insured people during a Gestora Pública event. Photo: ABI'
)}
${stats([
  ['Bs 0', 'cost of the certificates'],
  ['3', 'service channels'],
  ['1', 'minimum recorded contribution'],
  ['PDF', 'download format'],
])}
<h2 class="report-chapter">Which documents you can download</h2>
<p>Gestora Pública manages the Integral Pension System (SIP) and issues several records. The most useful for personal procedures are:</p>
<ul>
<li><strong>Insured registration certificate:</strong> proves that you are enrolled in the SIP.</li>
<li><strong>Pension savings statement:</strong> details the movements of your Personal Pension Account, including contributions.</li>
<li><strong>Non-registration certificate:</strong> used when a person does not appear as insured.</li>
<li><strong>No-debt certificate:</strong> aimed at companies and certifying that they owe nothing to the SIP.</li>
</ul>
<p>The registration certificate and the savings statement are not the same. The first is proof of affiliation; the second is the financial history. If a bank, an embassy or a financial institution asks for a “contribution certificate”, it usually wants the savings statement or a record of contribution periods.</p>
<h2 class="report-chapter">Who can request it</h2>
<p>The procedure is designed for insured people. The official file sets three conditions: being registered in the SIP and having a Single Insured Account (CUA), having made at least one contribution and holding Gestora credentials obtained through the Virtual Office.</p>
<p>If you have never contributed, the system cannot generate a statement with movements. In that case the non-registration certificate applies, which is also issued online. If you contributed before April 2023, those periods may appear in the historical record of the former AFP; since that date, administration belongs to Gestora.</p>
<h2 class="report-chapter">Step by step in the Virtual Office</h2>
<ol>
<li>Go to <strong>www.gestora.bo</strong> and click <strong>Oficina Virtual</strong>.</li>
<li>Select <strong>Asegurado</strong> and, if it is your first time, <strong>Registrarse aquí</strong>.</li>
<li>Complete document type and number, date of birth, mobile phone and email.</li>
<li>Solve the captcha and confirm the code sent to your email or phone.</li>
<li>Log in, change the temporary password and open <strong>Certificados</strong>.</li>
<li>Choose the document, generate the PDF and download it or send it to your email.</li>
</ol>
<p>The password must have at least eight characters and combine uppercase and lowercase letters, numbers and a special character. If you already have credentials but forgot the password, use the portal recovery or visit an office with your ID card.</p>
<h2 class="report-chapter">Alternative channels and in-person service</h2>
<p>In addition to the website, Gestora offers a mobile app, digital kiosks and service desks at its offices. The savings statement can also be requested by email. For questions, the free line is <strong>800-10-1610</strong> and WhatsApp is <strong>67195524</strong>.</p>
<p>If the system does not show a contribution that was deducted from your salary, gather your contract, pay slips and the period detail. First check the movements report; if the inconsistency continues, file a claim through the service platform with that evidence. Do not wait too long: employers and payroll filings have reporting deadlines.</p>
<table class="spec-table">
<thead><tr><th>Document</th><th>What it is for</th><th>Where to get it</th></tr></thead>
<tbody>
<tr><td>Registration certificate</td><td>Prove SIP affiliation</td><td>Virtual Office, app or office</td></tr>
<tr><td>Pension savings statement</td><td>Check contributions and account movements</td><td>Virtual Office, app, kiosk or office</td></tr>
<tr><td>Non-registration certificate</td><td>Show that there is no affiliation</td><td>Virtual Office</td></tr>
<tr><td>No-debt certificate</td><td>Prove a company owes nothing to SIP</td><td>Company procedure</td></tr>
</tbody>
</table>
${quote(
  'It is the document that records all movements of the Personal Pension Account of the insured person, including the savings contributed to the Integral Pension System.',
  'GP',
  'Gestora Pública',
  'Official savings statement file'
)}
<h2 class="report-chapter">When you need these documents</h2>
<p>The savings statement is requested for retirement procedures, visa applications, mortgage loans, contribution repatriation processes and employment checks. It also helps verify that an employer declared and paid your contributions. The registration certificate, by contrast, is used to prove that you are in the system when you do not yet have many accumulated periods.</p>
<p>Before printing, check that the PDF shows your full name, document, CUA and the verification seal or code. If the document will be presented to a foreign entity, ask whether it needs an apostille; Gestora issues the certificate, but the apostille is processed through the Foreign Ministry.</p>
${doc(
  'https://www.gestora.bo/',
  'GP',
  'Gestora Pública',
  'Virtual Office, certificates and savings statement.'
)}
${doc(
  'https://www.gob.bo/tramites/emision-de-estado-de-ahorro-previsional',
  'PDF',
  'Pension savings statement',
  'Requirements, channels and official procedure.'
)}
${doc(
  'https://www.gob.bo/tramites/obtencion-de-credenciales-para-el-asegurado',
  'ID',
  'Insured credentials',
  'How to register your Virtual Office user.'
)}`,
  },
  {
    id: '1392',
    slug: 'carnet-discapacidad-bolivia-2026-requisitos-calificacion-renovacion',
    publishedAt: '2026-09-27T09:00:00-04:00',
    titleEs: 'Carnet de discapacidad en Bolivia 2026: requisitos, calificación y renovación',
    titleEn: 'Disability card in Bolivia 2026: requirements, assessment and renewal',
    excerptEs:
      'El carnet de discapacidad acredita el tipo y grado de discapacidad y abre el acceso a salud, bonos y atención preferencial. No se tramita en línea: exige una calificación médica ante la comisión correspondiente, el registro en el SIPRUNPCD y la entrega del carnet por la UMADIS o el CODEPEDIS.',
    excerptEn:
      'The disability card certifies the type and degree of disability and opens access to health care, bonuses and priority attention. It is not an online procedure: it requires a medical assessment before the relevant commission, registration in SIPRUNPCD and delivery of the card by UMADIS or CODEPEDIS.',
    date: '2026-09-27',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/carnet-discapacidad-2026.jpg`,
    imageCaption: 'Anuncio del Ministerio de Salud sobre la vigencia del carnet de discapacidad. Foto: Ministerio de Salud',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Carnet de discapacidad en Bolivia 2026: requisitos, calificación y renovación</h1>
<p class="lead"><em>El carnet de discapacidad no es un certificado médico ni una constancia que se compre en ventanilla. Es el documento oficial que resulta de una calificación hecha por una comisión de especialistas, que determina el tipo y el grado de discapacidad y registra a la persona en el sistema nacional. Sin esa evaluación no hay carnet.</em></p>
${figure(
  `${IMG}/carnet-discapacidad-2026.jpg`,
  'Anuncio oficial sobre la vigencia del carnet de discapacidad en Bolivia',
  'La norma nacional fijó criterios de calificación y una vigencia de seis años para discapacidad moderada y grave. Imagen: Ministerio de Salud'
)}
${stats([
  ['6 años', 'vigencia para moderada y grave'],
  ['5', 'pasos del proceso'],
  ['1', 'comisión calificadora'],
  ['3x3', 'foto con fondo rojo'],
])}
<h2 class="report-chapter">Qué acredita y para qué sirve</h2>
<p>El carnet identifica a la persona con discapacidad y su grado. Con él se accede a los derechos y beneficios que reconoce la Ley N° 223, entre ellos la atención médica preferencial, el acceso gratuito a servicios de salud y los programas de apoyo que administra el Estado. También es la llave para el bono solidario y para trámites de inclusión laboral y educativa.</p>
<p>El marco legal incluye la Ley N° 223, su reglamento (Decreto Supremo N° 1893), la Norma Nacional para la Calificación, Registro y Carnetización de Discapacidad y el Decreto Supremo N° 4961. En 2025, el Decreto Supremo N° 5305 amplió la vigencia de los carnets de discapacidad moderada y grave a seis años.</p>
<h2 class="report-chapter">Requisitos: qué llevar a la evaluación</h2>
<p>Los requisitos pueden variar ligeramente según el departamento y la entidad que recibe la solicitud, pero el paquete base es este:</p>
<ul>
<li>Cédula de identidad del solicitante, original y fotocopia.</li>
<li>Informe médico actual y detallado, emitido por un especialista según el tipo de discapacidad, con diagnóstico, funcionalidad y secuelas.</li>
<li>Exámenes complementarios que respalden el diagnóstico: radiografías, audiometrías, análisis o estudios especializados.</li>
<li>Carnet anterior si es renovación, o certificado de nacimiento si es la primera vez, especialmente para menores.</li>
<li>Certificado de antecedentes penales, cuando la oficina lo exija para mayores de edad.</li>
<li>Fotografía 3x3 con fondo rojo.</li>
<li>Para menores: cédula del padre, madre o tutor y certificado de nacimiento del menor.</li>
</ul>
<p>La persona debe estar presente para la calificación. Si no puede desplazarse o no puede tomar decisiones por sí misma, se admite la intervención de un tutor o representante con la documentación que acredite esa condición.</p>
<h2 class="report-chapter">Paso a paso del trámite</h2>
<ol>
<li><strong>Acude a la UMADIS o a la oficina de discapacidad de tu municipio o gobernación.</strong> Allí revisan la documentación y te orientan sobre la calificación.</li>
<li><strong>Se programa la cita con la Comisión Calificadora.</strong> La comisión está formada por médicos especialistas.</li>
<li><strong>Asiste a la evaluación.</strong> Se determina el tipo y el grado de discapacidad conforme a la norma nacional.</li>
<li><strong>El resultado se registra en el SIPRUNPCD.</strong> Ese registro es el que respalda el carnet.</li>
<li><strong>Recibe el carnet.</strong> La entrega se hace en la oficina donde iniciaste el trámite o en el CODEPEDIS.</li>
</ol>
<p>El tiempo total depende de la agenda de la comisión y de la calidad del informe médico. Un informe incompleto es la causa más común de retraso: si el especialista no describe la funcionalidad y las secuelas, la comisión puede devolver el caso.</p>
<h2 class="report-chapter">Vigencia, renovación y cambios</h2>
<p>La vigencia no es idéntica para todos los casos. La norma amplió a seis años el carnet de discapacidad moderada y grave, mientras que otros grados o situaciones pueden requerir una actualización antes. Revisa la fecha impresa en tu carnet y empieza la renovación con dos meses de anticipación.</p>
<p>Para renovar suelen pedir el carnet vencido, un informe médico actualizado, la cédula y las fotografías. Si cambió el tutor, también se presenta el documento que acredite el cambio. Si la persona falleció o ya no reside en el país, el carnet debe actualizarse o cancelarse según corresponda.</p>
<table class="spec-table">
<thead><tr><th>Situación</th><th>Documento clave</th><th>Qué revisar</th></tr></thead>
<tbody>
<tr><td>Primera vez</td><td>Informe médico y exámenes</td><td>Que el informe describa funcionalidad y secuelas</td></tr>
<tr><td>Renovación</td><td>Carnet vencido</td><td>Iniciar dos meses antes del vencimiento</td></tr>
<tr><td>Menor de edad</td><td>Cédula del tutor y certificado de nacimiento</td><td>Presencia del tutor en la evaluación</td></tr>
<tr><td>Cambio de tutor</td><td>Documento de tutela o custodia</td><td>Actualizar el registro en SIPRUNPCD</td></tr>
</tbody>
</table>
${quote(
  'Todas las personas que posean el carnet de discapacidad están registradas de forma oficial en el Sistema de Información del Registro Único de Personas con Discapacidad y, por tanto, están habilitadas para el cobro del bono mensual y el acceso gratuito a salud.',
  'MS',
  'Ministerio de Salud y Deportes',
  'Declaración citada en la ficha oficial del trámite'
)}
<h2 class="report-chapter">Errores frecuentes y recomendaciones</h2>
<p>El primer error es confundir el carnet con un certificado de discapacidad emitido por un hospital. El segundo es presentar un informe médico antiguo o genérico. El tercero es acudir sin la cédula original o sin el tutor cuando el caso lo requiere. Ninguno de esos papeles se puede reemplazar con una declaración jurada.</p>
<p>Guarda una copia digital del carnet y del informe de calificación. Si un empleador, una escuela o un banco pide una constancia, presenta el carnet y, si necesitas acreditar el grado, el informe de la comisión. Para consultas sobre el registro, la línea gratuita del Ministerio de Salud y el sistema SIPRUNPCD son los canales oficiales.</p>
${doc(
  'https://www.gob.bo/tramites/carnet-de-discapacidad',
  'ID',
  'Carnet de discapacidad',
  'Requisitos, procedimiento y marco legal del trámite.'
)}
${doc(
  'https://www.minsalud.gob.bo/8452-gobierno-establece-vigencia-del-carnet-de-discapacidad-por-seis-anos-y-alista-normativa-para-desburocratizar-procedimientos',
  'SALUD',
  'Vigencia de seis años',
  'Explicación oficial de la ampliación y de la nueva normativa.'
)}
${doc(
  'http://siprunpcd.minsalud.gob.bo',
  'SIS',
  'SIPRUNPCD',
  'Sistema de registro único de personas con discapacidad.'
)}`,
    contentEn: `<h1>Disability card in Bolivia 2026: requirements, assessment and renewal</h1>
<p class="lead"><em>The disability card is not a medical certificate or a document you buy at a counter. It is the official card that results from an assessment by a committee of specialists, which determines the type and degree of disability and registers the person in the national system. Without that assessment, there is no card.</em></p>
${figure(
  `${IMG}/carnet-discapacidad-2026.jpg`,
  'Official announcement on the validity of the disability card in Bolivia',
  'The national standard set assessment criteria and a six-year validity for moderate and severe disability. Photo: Ministry of Health'
)}
${stats([
  ['6 years', 'validity for moderate and severe'],
  ['5', 'steps in the process'],
  ['1', 'assessment committee'],
  ['3x3', 'red-background photo'],
])}
<h2 class="report-chapter">What it certifies and what it is for</h2>
<p>The card identifies the person with a disability and its degree. It provides access to the rights and benefits recognized by Law 223, including priority medical care, free access to health services and the support programs run by the State. It is also the key to the solidarity bonus and to labor and educational inclusion procedures.</p>
<p>The legal framework includes Law 223, its regulation (Supreme Decree 1893), the National Standard for the Assessment, Registration and Issuance of Disability Cards and Supreme Decree 4961. In 2025, Supreme Decree 5305 extended the validity of moderate and severe disability cards to six years.</p>
<h2 class="report-chapter">Requirements: what to bring to the assessment</h2>
<p>Requirements may vary slightly by department and by the office receiving the application, but the basic package is:</p>
<ul>
<li>Applicant's ID card, original and photocopy.</li>
<li>Current, detailed medical report issued by a specialist according to the type of disability, with diagnosis, functionality and sequelae.</li>
<li>Complementary tests supporting the diagnosis: X-rays, audiometry, laboratory work or specialized studies.</li>
<li>Previous card for a renewal, or birth certificate for a first application, especially for minors.</li>
<li>Criminal record certificate, when the office requires it for adults.</li>
<li>3x3 photograph with a red background.</li>
<li>For minors: the parent's or guardian's ID and the minor's birth certificate.</li>
</ul>
<p>The person must be present for the assessment. If they cannot travel or cannot make decisions for themselves, a guardian or representative may act with documentation proving that condition.</p>
<h2 class="report-chapter">Step by step</h2>
<ol>
<li><strong>Go to UMADIS or your municipal or departmental disability office.</strong> Staff review the documents and explain the assessment.</li>
<li><strong>A date is scheduled with the Assessment Committee.</strong> The committee is made up of medical specialists.</li>
<li><strong>Attend the assessment.</strong> The type and degree of disability are determined under the national standard.</li>
<li><strong>The result is recorded in SIPRUNPCD.</strong> That registry supports the card.</li>
<li><strong>Receive the card.</strong> It is delivered at the office where you started the process or at CODEPEDIS.</li>
</ol>
<p>Total time depends on the committee's schedule and the quality of the medical report. An incomplete report is the most common cause of delay: if the specialist does not describe functionality and sequelae, the committee may return the case.</p>
<h2 class="report-chapter">Validity, renewal and changes</h2>
<p>Validity is not the same for every case. The standard extended moderate and severe disability cards to six years, while other degrees or situations may require an earlier update. Check the date printed on your card and start the renewal two months in advance.</p>
<p>Renewals usually require the expired card, an updated medical report, the ID and photographs. If the guardian changed, submit the document proving the change. If the person died or no longer lives in the country, the card must be updated or cancelled as applicable.</p>
<table class="spec-table">
<thead><tr><th>Situation</th><th>Key document</th><th>What to check</th></tr></thead>
<tbody>
<tr><td>First time</td><td>Medical report and tests</td><td>That the report describes functionality and sequelae</td></tr>
<tr><td>Renewal</td><td>Expired card</td><td>Start two months before expiry</td></tr>
<tr><td>Minor</td><td>Guardian's ID and birth certificate</td><td>Guardian present at the assessment</td></tr>
<tr><td>Guardian change</td><td>Guardianship or custody document</td><td>Update the SIPRUNPCD record</td></tr>
</tbody>
</table>
${quote(
  'All people who hold a disability card are officially registered in the Information System of the National Registry of Persons with Disabilities and are therefore enabled to receive the monthly bonus and free health care.',
  'MS',
  'Ministry of Health and Sports',
  'Statement cited in the official procedure file'
)}
<h2 class="report-chapter">Common mistakes and recommendations</h2>
<p>The first mistake is confusing the card with a disability certificate issued by a hospital. The second is presenting an old or generic medical report. The third is arriving without the original ID or without the guardian when the case requires one. None of those documents can be replaced by a sworn statement.</p>
<p>Keep a digital copy of the card and the assessment report. If an employer, school or bank asks for proof, present the card and, if you need to prove the degree, the committee's report. For questions about registration, the Ministry of Health's free line and the SIPRUNPCD system are the official channels.</p>
${doc(
  'https://www.gob.bo/tramites/carnet-de-discapacidad',
  'ID',
  'Disability card',
  'Requirements, procedure and legal framework.'
)}
${doc(
  'https://www.minsalud.gob.bo/8452-gobierno-establece-vigencia-del-carnet-de-discapacidad-por-seis-anos-y-alista-normativa-para-desburocratizar-procedimientos',
  'HEALTH',
  'Six-year validity',
  'Official explanation of the extension and the new standard.'
)}
${doc(
  'http://siprunpcd.minsalud.gob.bo',
  'SIS',
  'SIPRUNPCD',
  'National registry of persons with disabilities.'
)}`,
  },
  {
    id: '1393',
    slug: 'correccion-acta-nacimiento-sereci-2026-requisitos-costo',
    publishedAt: '2026-10-06T07:45:00-04:00',
    titleEs: 'Corrección de acta de nacimiento en SERECÍ 2026: requisitos, costo y pasos',
    titleEn: 'Birth record correction at SERECÍ 2026: requirements, cost and steps',
    excerptEs:
      'Corregir un nombre mal escrito, una fecha o un lugar en la partida de nacimiento es un trámite administrativo que no cobra arancel de rectificación en el SERECÍ; los certificados o duplicados pueden tener su propio costo. Solo cuando el cambio afecta la identidad o la filiación se necesita una orden judicial. Esta guía explica qué documentos llevan y cómo evitar que el expediente se devuelva.',
    excerptEn:
      'Correcting a misspelled name, a date or a place in a birth record is an administrative procedure that does not charge a rectification fee at SERECÍ; certificates or duplicates may have their own cost. Only when the change affects identity or filiation is a court order required. This guide explains which documents to bring and how to avoid a rejected file.',
    date: '2026-10-06',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: `${IMG}/correccion-acta-nacimiento-2026.jpg`,
    imageCaption: 'Certificado de nacimiento y documentos de identidad. Imagen referencial: archivo',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Corrección de acta de nacimiento en SERECÍ 2026: requisitos, costo y pasos</h1>
<p class="lead"><em>Un error en la partida de nacimiento no se arregla tachando el certificado ni pidiendo un duplicado. Se corrige en la partida original, mediante una solicitud de rectificación en el SERECÍ. Si el error es de escritura, letras o números, la vía es administrativa y no cobra arancel por la rectificación; los certificados o duplicados se pagan aparte. Si cambia la identidad o la filiación, hace falta una resolución judicial.</em></p>
${figure(
  `${IMG}/correccion-acta-nacimiento-2026.jpg`,
  'Certificado de nacimiento boliviano junto a una cédula de identidad',
  'La corrección se hace sobre la partida original, no sobre una copia del certificado. Imagen referencial: archivo'
)}
${stats([
  ['Bs 0', 'arancel de la rectificación (certificados aparte)'],
  ['2', 'vías: administrativa y judicial'],
  ['1', 'partida original'],
  ['3+', 'documentos de respaldo'],
])}
<h2 class="report-chapter">Qué errores se pueden corregir</h2>
<p>La rectificación administrativa está pensada para errores que no alteran la identidad de la persona: una letra cambiada en el apellido, un acento omitido, un nombre mal escrito, una fecha o un lugar de nacimiento que no coincide con los documentos de respaldo, tachaduras, sobrescritos o falta de firma y sello del funcionario.</p>
<p>También se puede complementar un dato que no fue registrado, reponer una partida extraviada o cancelar una doble inscripción. En cambio, el cambio de nombre, la modificación de la filiación o la sustitución de un dato que define la identidad suelen requerir una sentencia judicial y la posterior inscripción en el registro.</p>
<h2 class="report-chapter">Requisitos y documentos de respaldo</h2>
<p>La base es simple: estar empadronado y presentar una copia de la cédula de identidad. Pero el expediente se sostiene con la prueba del dato correcto. Lleva:</p>
<ul>
<li>Solicitud de rectificación con la descripción exacta del error.</li>
<li>Certificado o partida de nacimiento actual.</li>
<li>Cédula de identidad original y fotocopia.</li>
<li>Documentos que prueben el dato correcto: certificado de bautismo, carnet escolar, libreta de familia, documentos de los padres, registros hospitalarios u otros.</li>
<li>Si el trámite lo hace un apoderado, poder notarial con facultades específicas.</li>
</ul>
<p>No sirve llevar solo el certificado equivocado. La oficina necesita ver por qué el dato correcto es otro. Si el error está en el certificado pero no en la partida, lo que corresponde es pedir un duplicado o una nueva emisión, no una rectificación.</p>
<h2 class="report-chapter">Paso a paso en la oficina</h2>
<ol>
<li>Identifica si el error está en la partida o solo en el certificado.</li>
<li>Reúne los documentos que prueban el dato correcto.</li>
<li>Acude a la oficialía de registro civil donde se inscribió el nacimiento o a la sede del SERECÍ que corresponda.</li>
<li>Presenta la solicitud y el expediente; pide el número de trámite o comprobante.</li>
<li>Espera la revisión. Si falta un documento, te darán un plazo para completarlo.</li>
<li>Recoge la partida corregida y solicita un certificado actualizado.</li>
</ol>
<p>El trámite es presencial en la mayoría de los casos. Antes de ir, confirma el horario y si la oficina atiende con cita. En algunas ciudades el SERECÍ habilitó sistemas de reserva; en otras, la atención es por orden de llegada.</p>
<h2 class="report-chapter">Rectificación administrativa o juicio</h2>
<p>La diferencia no es burocrática: define el tiempo y el costo. La vía administrativa resuelve errores materiales y suele ser gratuita. La vía judicial se reserva para cambios que afectan la identidad, la filiación o derechos de terceros, y requiere abogado, demanda y sentencia.</p>
<table class="spec-table">
<thead><tr><th>Caso</th><th>Vía</th><th>Qué se presenta</th></tr></thead>
<tbody>
<tr><td>Apellido con una letra cambiada</td><td>Administrativa</td><td>Partida, cédula y documento que muestre la grafía correcta</td></tr>
<tr><td>Fecha o lugar de nacimiento erróneo</td><td>Administrativa</td><td>Partida y prueba del dato correcto</td></tr>
<tr><td>Cambio de nombre</td><td>Judicial</td><td>Sentencia y documentos personales</td></tr>
<tr><td>Reconocimiento o cambio de filiación</td><td>Judicial</td><td>Resolución judicial e inscripción</td></tr>
</tbody>
</table>
${quote(
  'El interesado debe presentar toda la documentación que avale que llena unos datos y no otros en su partida, sea de nacimiento, matrimonio o defunción.',
  'MRE',
  'Ministerio de Relaciones Exteriores',
  'Guía oficial de rectificación de partidas'
)}
<h2 class="report-chapter">Después de corregir la partida</h2>
<p>La partida corregida no actualiza automáticamente todos tus documentos. Si el error también está en la cédula, pide la rectificación en el SEGIP con la nueva partida. Revisa después tus cuentas bancarias, títulos académicos, contratos y registros de salud para que coincidan con el dato corregido.</p>
<p>Guarda el certificado nuevo y una copia digital del trámite. Si el documento se usará en el exterior, consulta si necesita apostilla. Y si la oficina te pide un pago por la rectificación administrativa, solicita la base legal y el comprobante: el arancel de referencia de la rectificación es cero; los certificados o duplicados pueden cobrarse aparte.</p>
${doc(
  'https://www.gob.bo/entidades/direccion-nacional-servicio-de-registro-civico',
  'SRC',
  'SERECÍ',
  'Entidad, servicios y oficinas de registro civil.'
)}
${doc(
  'https://consulados.cancilleria.gob.bo/la-plata/registro-civil',
  'MRE',
  'Rectificación de partidas',
  'Requisitos y criterios explicados por el servicio consular.'
)}
${doc(
  'https://www.oep.org.bo/',
  'TSE',
  'Órgano Electoral Plurinacional',
  'Información institucional y enlaces al registro cívico.'
)}`,
    contentEn: `<h1>Birth record correction at SERECÍ 2026: requirements, cost and steps</h1>
<p class="lead"><em>A mistake in a birth record cannot be fixed by crossing out the certificate or requesting a duplicate. It is corrected in the original record through a rectification request at SERECÍ. If the error involves spelling, letters or numbers, the route is administrative and does not charge a rectification fee; certificates or duplicates are paid separately. If it changes identity or filiation, a court order is required.</em></p>
${figure(
  `${IMG}/correccion-acta-nacimiento-2026.jpg`,
  'Bolivian birth certificate next to an identity card',
  'The correction is made to the original record, not to a copy of the certificate. Reference image: archive'
)}
${stats([
  ['Bs 0', 'rectification fee (certificates separate)'],
  ['2', 'routes: administrative and judicial'],
  ['1', 'original record'],
  ['3+', 'supporting documents'],
])}
<h2 class="report-chapter">Which errors can be corrected</h2>
<p>Administrative rectification is designed for errors that do not alter a person's identity: a changed letter in a surname, a missing accent, a misspelled name, a birth date or place that does not match the supporting documents, crossings out, overwriting or a missing signature and seal from the official.</p>
<p>It can also complete a missing piece of data, restore a lost record or cancel a double registration. By contrast, changing a name, modifying filiation or replacing a defining identity datum usually requires a court judgment and subsequent registration.</p>
<h2 class="report-chapter">Requirements and supporting documents</h2>
<p>The base is simple: be registered in the electoral roll and present a copy of your ID card. But the file is built on proof of the correct data. Bring:</p>
<ul>
<li>Rectification request describing the exact error.</li>
<li>Current birth certificate or record.</li>
<li>Original ID card and photocopy.</li>
<li>Documents proving the correct data: baptism certificate, school card, family book, parents' documents, hospital records or others.</li>
<li>If a representative files the request, a notarized power of attorney with specific powers.</li>
</ul>
<p>Bringing only the wrong certificate is not enough. The office needs to see why the correct data is different. If the error is in the certificate but not in the record, the right step is to request a duplicate or a new issuance, not a rectification.</p>
<h2 class="report-chapter">Step by step at the office</h2>
<ol>
<li>Determine whether the error is in the record or only in the certificate.</li>
<li>Gather the documents that prove the correct data.</li>
<li>Go to the civil registry office where the birth was registered or to the corresponding SERECÍ office.</li>
<li>Submit the request and the file; ask for a case number or receipt.</li>
<li>Wait for review. If a document is missing, you will be given a deadline to complete it.</li>
<li>Collect the corrected record and request an updated certificate.</li>
</ol>
<p>The procedure is in person in most cases. Before going, confirm the opening hours and whether the office works by appointment. Some cities have booking systems; in others, service is on a first-come, first-served basis.</p>
<h2 class="report-chapter">Administrative rectification or court case</h2>
<p>The difference is not bureaucratic: it defines time and cost. The administrative route resolves material errors and is usually free. The judicial route is reserved for changes affecting identity, filiation or third-party rights, and requires a lawyer, a lawsuit and a judgment.</p>
<table class="spec-table">
<thead><tr><th>Case</th><th>Route</th><th>What to submit</th></tr></thead>
<tbody>
<tr><td>Surname with one changed letter</td><td>Administrative</td><td>Record, ID and document showing the correct spelling</td></tr>
<tr><td>Wrong birth date or place</td><td>Administrative</td><td>Record and proof of the correct data</td></tr>
<tr><td>Name change</td><td>Judicial</td><td>Judgment and personal documents</td></tr>
<tr><td>Recognition or change of filiation</td><td>Judicial</td><td>Court decision and registration</td></tr>
</tbody>
</table>
${quote(
  'The interested party must present all the documentation that proves some data and not others in their record, whether birth, marriage or death.',
  'MFA',
  'Ministry of Foreign Affairs',
  'Official guide to record rectification'
)}
<h2 class="report-chapter">After correcting the record</h2>
<p>The corrected record does not automatically update all your documents. If the error is also on your ID card, request rectification at SEGIP with the new record. Then check your bank accounts, academic titles, contracts and health records so they match the corrected data.</p>
<p>Keep the new certificate and a digital copy of the procedure. If the document will be used abroad, ask whether it needs an apostille. And if the office asks for a payment for administrative rectification, request the legal basis and a receipt: the reference fee for the rectification is zero; certificates or duplicates may be charged separately.</p>
${doc(
  'https://www.gob.bo/entidades/direccion-nacional-servicio-de-registro-civico',
  'SRC',
  'SERECÍ',
  'Entity, services and civil registry offices.'
)}
${doc(
  'https://consulados.cancilleria.gob.bo/la-plata/registro-civil',
  'MFA',
  'Record rectification',
  'Requirements and criteria explained by the consular service.'
)}
${doc(
  'https://www.oep.org.bo/',
  'TSE',
  'Supreme Electoral Tribunal',
  'Institutional information and links to the civil registry.'
)}`,
  },
  {
    id: '1394',
    slug: 'matrimonio-civil-bolivia-2026-requisitos-testigos-costo',
    publishedAt: '2026-10-15T08:15:00-04:00',
    titleEs: 'Matrimonio civil en Bolivia 2026: requisitos, testigos, edicto y costo',
    titleEn: 'Civil marriage in Bolivia 2026: requirements, witnesses, banns and cost',
    excerptEs:
      'Casarse por civil en Bolivia exige partidas de nacimiento actualizadas, cédulas vigentes, certificado de estado civil y dos testigos mayores de edad. El expediente se presenta en la oficialía, se publica el edicto y la ceremonia se registra en el SERECÍ. El arancel de referencia 2026 es de Bs 401.',
    excerptEn:
      'Getting married in Bolivia requires updated birth records, valid ID cards, a civil status certificate and two adult witnesses. The file is filed at the registry office, the banns are published and the ceremony is recorded at SERECÍ. The 2026 reference fee is Bs 401.',
    date: '2026-10-15',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: `${IMG}/matrimonio-civil-2026.jpg`,
    imageCaption: 'Anillos de matrimonio. Imagen referencial: archivo',
    categoryEs: CAT_ES,
    categoryEn: CAT_EN,
    contentEs: `<h1>Matrimonio civil en Bolivia 2026: requisitos, testigos, edicto y costo</h1>
<p class="lead"><em>El matrimonio civil no empieza el día de la ceremonia: empieza cuando la pareja presenta su expediente en la oficialía de registro civil. Si falta una partida actualizada, una cédula o el certificado de estado civil, la fecha se cae. Esta guía ordena los documentos, explica el papel de los testigos y aclara cuánto cuesta casarse por civil en 2026.</em></p>
${figure(
  `${IMG}/matrimonio-civil-2026.jpg`,
  'Dos anillos de matrimonio sobre una superficie clara',
  'La ceremonia se celebra ante el oficial de registro civil y queda inscrita en el SERECÍ. Imagen referencial: archivo'
)}
${stats([
  ['2', 'testigos mayores de edad'],
  ['Bs 401', 'arancel de referencia 2026'],
  ['1', 'edicto publicado'],
  ['3+', 'documentos por contrayente'],
])}
<h2 class="report-chapter">Requisitos para dos contrayentes bolivianos</h2>
<p>La lista base que exige el registro civil es esta:</p>
<ul>
<li>Certificado de nacimiento original y actualizado de ambos contrayentes.</li>
<li>Cédula de identidad original y fotocopia vigente.</li>
<li>Certificado de libertad de estado civil o de soltería.</li>
<li>Si alguno tuvo un matrimonio anterior, certificado de matrimonio con la partida cancelada.</li>
<li>Si enviudó, certificado de defunción del cónyuge anterior.</li>
<li>Dos testigos, uno por contrayente, mayores de edad y que no sean familiares.</li>
</ul>
<p>Los testigos deben estar presentes al momento del registro y portar su documento de identidad. No sirve llevar los nombres escritos: la oficialía verifica identidad y comparecencia. Si un testigo no puede asistir, se puede reemplazar antes de la ceremonia, pero conviene confirmarlo con la oficina.</p>
<h2 class="report-chapter">Si hubo matrimonio anterior o viudez</h2>
<p>El registro civil no acepta una declaración verbal de soltería. Si la persona estuvo casada antes, debe demostrar que ese vínculo terminó. En caso de divorcio, se presenta el certificado de matrimonio con la partida cancelada o la sentencia de divorcio debidamente registrada. En caso de viudez, el certificado de defunción del cónyuge anterior.</p>
<p>Para los matrimonios celebrados en el exterior, el certificado debe estar legalizado o apostillado y, si está en otro idioma, traducido al español. La homologación se tramita ante el registro civil y puede requerir la presencia de ambos cónyuges.</p>
<h2 class="report-chapter">Matrimonio con una persona extranjera</h2>
<p>Cuando uno de los contrayentes es extranjero, se suma documentación específica: pasaporte vigente, certificado de nacimiento legalizado o apostillado, certificado de soltería emitido por el país de origen y, si corresponde, prueba de la disolución del matrimonio anterior. Las traducciones también deben estar legalizadas.</p>
<p>La oficina consular boliviana puede celebrar matrimonios entre bolivianos o entre un boliviano y un extranjero en el exterior. Los requisitos son similares, pero el costo y los plazos se rigen por el arancel consular. Si la boda se celebra en Bolivia, el expediente se presenta en la oficialía del domicilio o residencia de cualquiera de los contrayentes.</p>
<h2 class="report-chapter">Paso a paso</h2>
<ol>
<li><strong>Reúne los documentos</strong> de ambos contrayentes y verifica que las partidas estén actualizadas.</li>
<li><strong>Acude a la oficialía de registro civil</strong> del domicilio o residencia de cualquiera de los dos.</li>
<li><strong>Presenta la solicitud y el expediente</strong>; la oficina revisa nombres, fechas y estado civil.</li>
<li><strong>Se publica el edicto</strong> para que terceros puedan oponerse si existe un impedimento.</li>
<li><strong>Se fija la fecha de la ceremonia</strong> y se confirman los testigos.</li>
<li><strong>Se celebra el matrimonio</strong> ante el oficial y se firma el acta.</li>
<li><strong>Se inscribe en el SERECÍ</strong> y se entrega la libreta de familia o el certificado.</li>
</ol>
<p>Los plazos varían según la oficina y la carga de trabajo. Pregunta desde el primer día cuánto tarda la publicación del edicto y si la ceremonia se hace en la misma sede o en un salón habilitado. Si planeas casarte en una fecha especial, reserva con anticipación.</p>
<h2 class="report-chapter">Cuánto cuesta y qué errores evitar</h2>
<p>El arancel de referencia para la celebración del matrimonio civil en 2026 es de <strong>Bs 401</strong>. Ese monto cubre el servicio del registro civil; no incluye fotos, traje, banquete ni trámites adicionales. Algunas oficinas cobran aparte la libreta de familia o los certificados duplicados. Pide el detalle antes de pagar.</p>
<p>Los errores más comunes son presentar partidas vencidas, llevar un testigo que es familiar directo, no acreditar la disolución de un matrimonio anterior o escribir mal el nombre en la solicitud. También es frecuente confundir la ceremonia religiosa con el matrimonio civil: solo la inscripción ante el oficial produce efectos legales.</p>
<table class="spec-table">
<thead><tr><th>Documento</th><th>Quién lo presenta</th><th>Observación</th></tr></thead>
<tbody>
<tr><td>Partida de nacimiento</td><td>Ambos contrayentes</td><td>Original y actualizada</td></tr>
<tr><td>Cédula de identidad</td><td>Ambos contrayentes</td><td>Vigente, original y copia</td></tr>
<tr><td>Certificado de soltería</td><td>Ambos contrayentes</td><td>Emitido por el SERECÍ</td></tr>
<tr><td>Testigos</td><td>Uno por contrayente</td><td>Mayores de edad, no familiares</td></tr>
<tr><td>Partida cancelada o defunción</td><td>Quien tuvo matrimonio previo</td><td>Solo si corresponde</td></tr>
</tbody>
</table>
${quote(
  'La celebración del matrimonio es la unión libre, voluntaria, legal y pública de un varón y una mujer ante la sociedad, cumpliendo con los requisitos exigidos por ley. Lo celebra únicamente el Oficial de Registro Civil.',
  'MRE',
  'Ministerio de Relaciones Exteriores',
  'Guía oficial de registro civil'
)}
<h2 class="report-chapter">Después de la ceremonia</h2>
<p>Verifica que el acta tenga los nombres completos, los números de documento, la fecha y el lugar correctos. Solicita una copia del certificado de matrimonio y revisa que la inscripción aparezca en el sistema. Con ese documento puedes actualizar tu estado civil en el SEGIP, el banco, el seguro de salud y los registros laborales.</p>
<p>Si el matrimonio se celebró en el exterior, el plazo para inscribirlo en Bolivia depende del consulado y del registro civil. No dejes pasar meses: la homologación protege derechos sucesorios, pensiones y trámites migratorios. Para cualquier duda, consulta directamente en la oficialía donde presentaste el expediente.</p>
${doc(
  'https://consulados.cancilleria.gob.bo/la-plata/registro-civil',
  'MRE',
  'Requisitos del matrimonio civil',
  'Lista oficial para bolivianos y para matrimonios con extranjeros.'
)}
${doc(
  'https://www.gob.bo/entidades/direccion-nacional-servicio-de-registro-civico',
  'SRC',
  'SERECÍ',
  'Oficinas, servicios y certificados de registro civil.'
)}
${doc(
  'https://www.oep.org.bo/',
  'TSE',
  'Órgano Electoral Plurinacional',
  'Información institucional del registro cívico.'
)}`,
    contentEn: `<h1>Civil marriage in Bolivia 2026: requirements, witnesses, banns and cost</h1>
<p class="lead"><em>A civil marriage does not start on the wedding day: it starts when the couple files the paperwork at the civil registry office. If an updated birth record, an ID card or the civil status certificate is missing, the date falls through. This guide organizes the documents, explains the role of witnesses and clarifies what it costs to marry in 2026.</em></p>
${figure(
  `${IMG}/matrimonio-civil-2026.jpg`,
  'Two wedding rings on a light surface',
  'The ceremony is held before the civil registry official and recorded at SERECÍ. Reference image: archive'
)}
${stats([
  ['2', 'adult witnesses'],
  ['Bs 401', '2026 reference fee'],
  ['1', 'published bann'],
  ['3+', 'documents per spouse'],
])}
<h2 class="report-chapter">Requirements for two Bolivian spouses</h2>
<p>The basic list required by the civil registry is:</p>
<ul>
<li>Original and updated birth certificate for both spouses.</li>
<li>Original ID card and a valid photocopy.</li>
<li>Certificate of freedom of civil status or single status.</li>
<li>If either had a previous marriage, a marriage certificate with the record cancelled.</li>
<li>If widowed, the previous spouse's death certificate.</li>
<li>Two witnesses, one per spouse, adults and not relatives.</li>
</ul>
<p>Witnesses must be present at registration and carry their ID. Written names are not enough: the office verifies identity and appearance. If a witness cannot attend, a replacement can be arranged before the ceremony, but confirm it with the office.</p>
<h2 class="report-chapter">If there was a previous marriage or widowhood</h2>
<p>The civil registry does not accept a verbal statement of single status. If the person was married before, they must prove that the union ended. In the case of divorce, submit the marriage certificate with the record cancelled or the duly registered divorce decree. In the case of widowhood, submit the previous spouse's death certificate.</p>
<p>For marriages celebrated abroad, the certificate must be legalized or apostilled and, if in another language, translated into Spanish. Homologation is processed at the civil registry and may require both spouses to be present.</p>
<h2 class="report-chapter">Marriage to a foreign national</h2>
<p>When one spouse is foreign, additional documents are required: a valid passport, a legalized or apostilled birth certificate, a single-status certificate issued by the country of origin and, if applicable, proof of dissolution of a previous marriage. Translations must also be legalized.</p>
<p>A Bolivian consulate can celebrate marriages between Bolivians or between a Bolivian and a foreign national abroad. Requirements are similar, but cost and deadlines follow the consular fee schedule. If the wedding takes place in Bolivia, the file is filed at the registry office of either spouse's domicile or residence.</p>
<h2 class="report-chapter">Step by step</h2>
<ol>
<li><strong>Gather the documents</strong> for both spouses and check that the birth records are updated.</li>
<li><strong>Go to the civil registry office</strong> of either spouse's domicile or residence.</li>
<li><strong>File the application and the file</strong>; the office reviews names, dates and civil status.</li>
<li><strong>The bann is published</strong> so third parties can object if an impediment exists.</li>
<li><strong>The ceremony date is set</strong> and witnesses are confirmed.</li>
<li><strong>The marriage is celebrated</strong> before the official and the record is signed.</li>
<li><strong>It is registered at SERECÍ</strong> and the family book or certificate is delivered.</li>
</ol>
<p>Deadlines vary by office and workload. Ask from the first day how long bann publication takes and whether the ceremony is held at the same location or at an authorized hall. If you plan to marry on a special date, book early.</p>
<h2 class="report-chapter">What it costs and which mistakes to avoid</h2>
<p>The reference fee for a civil marriage ceremony in 2026 is <strong>Bs 401</strong>. That amount covers the civil registry service; it does not include photos, clothing, catering or additional procedures. Some offices charge separately for the family book or duplicate certificates. Ask for the breakdown before paying.</p>
<p>The most common mistakes are presenting expired birth records, bringing a witness who is a direct relative, failing to prove the dissolution of a previous marriage or misspelling a name on the application. It is also common to confuse the religious ceremony with the civil marriage: only registration before the official produces legal effects.</p>
<table class="spec-table">
<thead><tr><th>Document</th><th>Who submits it</th><th>Note</th></tr></thead>
<tbody>
<tr><td>Birth record</td><td>Both spouses</td><td>Original and updated</td></tr>
<tr><td>ID card</td><td>Both spouses</td><td>Valid, original and copy</td></tr>
<tr><td>Single-status certificate</td><td>Both spouses</td><td>Issued by SERECÍ</td></tr>
<tr><td>Witnesses</td><td>One per spouse</td><td>Adults, not relatives</td></tr>
<tr><td>Cancelled record or death certificate</td><td>Anyone previously married</td><td>Only when applicable</td></tr>
</tbody>
</table>
${quote(
  'Marriage is the free, voluntary, legal and public union of a man and a woman before society, complying with the requirements established by law. It is celebrated only by the Civil Registry Official.',
  'MFA',
  'Ministry of Foreign Affairs',
  'Official civil registry guide'
)}
<h2 class="report-chapter">After the ceremony</h2>
<p>Check that the record contains the full names, document numbers, date and place correctly. Request a copy of the marriage certificate and confirm that the registration appears in the system. With that document you can update your civil status at SEGIP, your bank, health insurance and employment records.</p>
<p>If the marriage took place abroad, the deadline to register it in Bolivia depends on the consulate and the civil registry. Do not wait months: homologation protects inheritance rights, pensions and immigration procedures. For any question, consult the office where you filed the file.</p>
${doc(
  'https://consulados.cancilleria.gob.bo/la-plata/registro-civil',
  'MFA',
  'Civil marriage requirements',
  'Official list for Bolivians and for marriages with foreign nationals.'
)}
${doc(
  'https://www.gob.bo/entidades/direccion-nacional-servicio-de-registro-civico',
  'SRC',
  'SERECÍ',
  'Offices, services and civil registry certificates.'
)}
${doc(
  'https://www.oep.org.bo/',
  'TSE',
  'Supreme Electoral Tribunal',
  'Institutional information on the civil registry.'
)}`,
  },
];
