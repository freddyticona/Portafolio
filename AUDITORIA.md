# Auditoría de fuentes oficiales — freddydev.net/guias

Fecha de inicio: **2026-11-22**. Alcance: 41 guías de trámites (`categoryEs = "Guías y Trámites"`).

Las guías no son archivos `.md`: viven como HTML en `src/data/blogContent/group-XX.ts` (clave = id del post) y sus metadatos en `src/data/blogPosts.ts`. Los bloques de verificación se añaden al final del cuerpo ES/EN de cada entrada.

## Estado de acceso a fuentes (2026-11-22)

| Fuente | Acceso | Observación |
|---|---|---|
| SEGIP (`segip.gob.bo`) | ✅ | Páginas de trámites con costos y requisitos vigentes 2026 |
| SIN (`impuestos.gob.bo`) | ✅ | Portal accesible; normativa y comunicados 2026 |
| SENAPI (`senapi.gob.bo`) | ✅ | Portal accesible; tasas y trámites |
| Apostilla (`apostilla.rree.gob.bo`) | ⚠️ | Responde solo título «Apostilla electrónica» |
| SERECÍ (`sereci.gob.bo`) | ❌ | Error de transporte / no responde |
| Gestora Pública (`gestora.bo`) | ❌ | HTTP 403 |
| ADSIB (`adsib.gob.bo`) | ❌ | Error de transporte |

Cuando una fuente no esté disponible, el dato se marca **PENDIENTE** y se sustituye por «Consultar costo/plazo vigente en oficina». **No se inventan datos.**

## Resumen de verificaciones

| Guía | Dato | Valor anterior | Valor oficial | Fuente (URL) | Estado |
|---|---|---|---|---|---|
| [79] Cédula de Identidad | Costo primera vez/renovación/duplicado | Bs 17 | Bs 17 (costo único) | https://www.segip.gob.bo/cedula-de-identidad/ | ✅ VERIFICADO |
| [79] Cédula de Identidad | Plazo de entrega | 15 a 30 días hábiles | No publicado en el sitio oficial | — | ⚠️ PENDIENTE (dato retirado) |
| [79] Cédula de Identidad | Vigencia | Indefinida (no vence) | La reposición conserva la fecha de vigencia original | https://www.segip.gob.bo/cedula-de-identidad/ | ⚠️ PENDIENTE (redacción corregida) |
| [79] Cédula de Identidad | Costo CIE (extranjeros) | Bs 100 | Bs 600 regular; Bs 300 estudiantes/discapacidad; multa Bs 10/día tras 25 días hábiles | https://www.segip.gob.bo/cedulas-de-identidad-de-extranjeros/ | ❌ INCORRECTO → CORREGIDO |
| [79] Cédula de Identidad | Certificados SEGIP | (no se indicaba) | Bs 10 | https://www.segip.gob.bo/tramites-cedula-de-identidad/ | ✅ VERIFICADO |
| [79] Cédula de Identidad | Renovación/reposición | Se pedían documentos | Sin presentar documentos | https://www.segip.gob.bo/cedula-de-identidad/ | ✅ VERIFICADO |

## Guía [81] Licencia de Conducir — 2026-11-22

| Guía | Dato | Valor anterior | Valor oficial | Fuente (URL + HTTP) | Estado |
|---|---|---|---|---|---|
| [81] Licencia de Conducir | Costo primera emisión / renovación | Bs 150–600 (A Bs 150–200, B Bs 300–400, C Bs 450–550, D Bs 500–600, E Bs 400–500) | P/A/B/C Bs 225; M/T Bs 80 | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ❌ INCORRECTO → CORREGIDO |
| [81] Licencia de Conducir | Duplicado | No se indicaba | Bs 160 (P, A, B, C, JP, DP, DA); Bs 80 (M, JM, T) | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ✅ AÑADIDO |
| [81] Licencia de Conducir | Categorías | A, B, C, D, E, F | P, M, A, T, B, C + provisionales JP/JM, DP/DA | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ❌ INCORRECTO → CORREGIDO |
| [81] Licencia de Conducir | Edad mínima | A 16, B 18, C 21, etc. | 18 en P y M; 21 en A y T; 16 para provisional M/P | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ❌ INCORRECTO → CORREGIDO |
| [81] Licencia de Conducir | Certificado médico | «Certificado médico» sin costo | Bs 50 en centro acreditado | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ✅ AÑADIDO |
| [81] Licencia de Conducir | Vigencia | 5 años | Renovación a los 5 años y un día con curso de habilidades | https://www.segip.gob.bo/licencia-para-conducir/ (200) | ✅ VERIFICADO |
| [81] Licencia de Conducir | Plazo de entrega | 10–30 días hábiles | No publicado | — | ⚠️ PENDIENTE (aviso visible añadido) |
| [81] Licencia de Conducir | Examen escrito/psicológico en primera vez | Obligatorios | No confirmados por el portal para primera vez | — | ⚠️ PENDIENTE (aviso visible añadido) |

No se encontró PDF de aranceles en la sección de trámites del SEGIP (solo un PDF de Tranca Cero sin relación con costos). Se archivó el HTML oficial completo.

## Guía [80] SOAT 2026 — 2026-11-22

| Guía | Dato | Valor anterior | Valor oficial | Fuente (URL + HTTP) | Estado |
|---|---|---|---|---|---|
| [80] SOAT | Precio automóvil particular | Bs 750–900 | **Bs 90** | https://www.univida.bo/soat/precios (200) | ❌ INCORRECTO → CORREGIDO |
| [80] SOAT | Precio motocicleta | Bs 250–450 | **Bs 200** particular / Bs 155 público | https://www.univida.bo/soat/precios (200) | ❌ INCORRECTO → CORREGIDO |
| [80] SOAT | Precio por departamento | No se indicaba | El uso público varía por departamento; el particular es nacional | https://www.univida.bo/soat/precios (200) | ✅ AÑADIDO |
| [80] SOAT | Cobertura médica | Bs 20.000 | **Bs 24.000** | https://www.aps.gob.bo/faq/seguro-obligatorio-de-transito-soat/ (200) | ❌ INCORRECTO → CORREGIDO |
| [80] SOAT | Muerte / incapacidad | Bs 20.000 | **Bs 22.000** | https://www.aps.gob.bo/faq/seguro-obligatorio-de-transito-soat/ (200) | ❌ INCORRECTO → CORREGIDO |
| [80] SOAT | Gastos funerarios | Bs 4.000 | No publicado por APS para 2026 | — | ⚠️ PENDIENTE |
| [80] SOAT | Vigencia | 1 año | Desde 00:00 del día siguiente de la compra hasta el 31/12/2026 | https://www.univida.bo/soat/precios (200) | ❌ INCORRECTO → CORREGIDO |
| [80] SOAT | Aseguradoras | Unión, BISA, Alianza, etc. | UNIVIDA habilitada para 2026 (RA 1148 y 1168/2025) | https://sireci.aps.gob.bo/api/cartas_resoluciones/descarga/36426 (200) | ⚠️ PARCIAL (otras PENDIENTE) |
| [80] SOAT | Plazo de indemnización | No indicado | 15 días hábiles (Art. 36 DS 27295) | https://www.aps.gob.bo/faq/seguro-obligatorio-de-transito-soat/ (200) | ✅ AÑADIDO |
| [80] SOAT | Entidad reguladora | APS | APS + UNIVIDA como administradora 2026 | https://www.aps.gob.bo/ (200) | ✅ VERIFICADO |

La guía ya mencionaba a la APS; se reforzó con la resolución de habilitación y se añadió enlace cruzado a la guía [1042] de multas de tránsito.

## Guía [177] Apostilla — 2026-11-22

| Guía | Dato | Valor anterior | Valor oficial | Fuente (URL + HTTP) | Estado |
|---|---|---|---|---|---|
| [177] Apostilla | Costo de la apostilla (Cancillería) | Bs 70 «certificados» a Bs 300 «posgrado» (mezclado con valorado) | **Bs 70 por apostilla** | https://apostilla.rree.gob.bo/api/costo (200) | ✅ VERIFICADO (separa conceptos) |
| [177] Apostilla | Valorado (entidad emisora) | No se distinguía | Bs 150–690 según documento (15 fichas consultadas) | https://www.gob.bo/tramites/diploma-de-bachiller-apostilla (200) y otras fichas | ✅ AÑADIDO |
| [177] Apostilla | Apostillar traducción | No se distinguía | Bs 100–340 según ficha (Bs 200 en la mayoría) | https://www.gob.bo/tramites/cert-de-notas-apostilla (200) y otras fichas | ✅ AÑADIDO |
| [177] Apostilla | Traducción propiamente dicha | No se indicaba | No publicada en fuentes oficiales | — | ⚠️ PENDIENTE |
| [177] Apostilla | Valorado para documentos no listados | — | No publicado | — | ⚠️ PENDIENTE |

Distinción aplicada en el HTML: sección «Costos 2026: valorado, apostilla y traducción» con tres subsecciones numeradas y tabla de 15 documentos. La tabla anterior quedó marcada como «versión anterior (reemplazada)».

## Ajuste [80] SOAT — precio particular — 2026-11-22

| Guía | Dato | Valor anterior | Valor corregido | Fuente | Estado |
|---|---|---|---|---|---|
| [80] SOAT | Automóvil particular | Bs 90 (valor único) | **Desde Bs 90** | https://www.univida.bo/soat/precios (200) | ⚠️ PENDIENTE matiz |

No se encontró tabla oficial con rangos por cilindraje o subcategoría dentro de «particular». El texto advierte que el monto exacto depende de la categoría del vehículo y debe confirmarse con la placa. Reintentar el 2026-12-22.

## Segunda pasada a PENDIENTES de [79] y [81] — 2026-11-22

| Guía | Dato | URLs intentadas | HTTP | Resultado | Reintentar el |
|---|---|---|---|---|---|
| [79] Cédula | Plazo de entrega | https://www.segip.gob.bo/cedula-de-identidad/ ; https://web.archive.org/cdx/search/cdx?url=segip.gob.bo/licencia-para-conducir*&from=2024&to=2026 ; https://www.gacetaoficialdebolivia.gob.bo/normas/busquedag1?q=SEGIP | 200 / 200 (vacío) / 200 | Sin plazo publicado; Wayback sin capturas de la página de licencias; Gaceta sin resolución de aranceles | 2026-12-22 |
| [79] Cédula | Vigencia «indefinida» | https://www.segip.gob.bo/cedula-de-identidad/ ; https://www.segip.gob.bo/tramites-cedula-de-identidad/ | 200 / 200 | Solo consta que la reposición conserva la fecha original | 2026-12-22 |
| [81] Licencia | Plazo de entrega | https://www.segip.gob.bo/licencia-para-conducir/ ; https://web.archive.org/cdx/search/cdx?url=www.segip.gob.bo/licencia-para-conducir/&from=2024&to=2026 ; https://www.gacetaoficialdebolivia.gob.bo/normas/busquedag1?q=SEGIP | 200 / 200 (vacío) / 200 | Sin plazo único publicado; sin FAQ específica de plazos en el portal | 2026-12-22 |
| [81] Licencia | Examen escrito/psicológico en primera vez | https://www.segip.gob.bo/licencia-para-conducir/ | 200 | El portal exige evaluación médica, habilidades de conducción y antecedentes de tránsito; no confirma examen escrito ni psicológico para primera vez | 2026-12-22 |
| [80] SOAT | Gastos funerarios Bs 4.000 | https://www.aps.gob.bo/faq/seguro-obligatorio-de-transito-soat/ | 200 | No aparece en la cobertura 2026 publicada | 2026-12-22 |
| [80] SOAT | Otras aseguradoras 2026 | https://sireci.aps.gob.bo/api/cartas_resoluciones/descarga/36426 | 200 | Solo se verificó UNIVIDA (RA 1168/2025) | 2026-12-22 |

Todos estos datos tienen su aviso visible `alerta-verificacion` en el HTML de la guía (además de esta tabla).

## Documentos archivados

- `assets/fuentes-oficiales/cedula-identidad/SEGIP_CEDULA_IDENTIDAD_2026-11-22.html`
- `assets/fuentes-oficiales/cedula-identidad/SEGIP_TRAMITES_CI_2026-11-22.html`
- `assets/fuentes-oficiales/cedula-identidad/SEGIP_CIE_2026-11-22.html`
- `assets/fuentes-oficiales/licencia-conducir/SEGIP_LICENCIA_CONDUCIR_2026-11-22.html`
- `assets/fuentes-oficiales/licencia-conducir/SEGIP_FORMAS_PAGO_2026-11-22.html`
- `assets/fuentes-oficiales/soat/APS_FAQ_SOAT_2026-11-22.html`
- `assets/fuentes-oficiales/soat/APS_RA_1148_2025_SOAT_2026.pdf`
- `assets/fuentes-oficiales/soat/APS_RA_1168_2025_UNIVIDA_SOAT_2026.pdf`
- `assets/fuentes-oficiales/soat/APS_RA_1432_2026_SOAT_2027.pdf`
- `assets/fuentes-oficiales/soat/UNIVIDA_PRECIOS_SOAT_2026-11-22.html`
- `assets/fuentes-oficiales/soat/UNIVIDA_TABLA_PRECIOS_SOAT_2026.png`
- `assets/fuentes-oficiales/apostilla/APOSTILLA_API_COSTO_2026-11-22.json`
- `assets/fuentes-oficiales/apostilla/GOB_APOSTILLA_FICHA_GENERAL_2026-11-22.html`
- `assets/fuentes-oficiales/apostilla/GOB_VALORADO_DIPLOMA_BACHILLER_2026-11-22.html`
- `assets/fuentes-oficiales/apostilla/GOB_VALORADO_CERT_NOTAS_2026-11-22.html`
- `assets/fuentes-oficiales/apostilla/GOB_VALORADO_PROGRAMAS_ANALITICOS_2026-11-22.html`
- `assets/fuentes-oficiales/apostilla/GOB_VALORADO_TITULO_PROVISION_NACIONAL_2026-11-22.html`

No se encontró PDF oficial específico para este trámite en el sitio del SEGIP; se archivó el HTML oficial íntegro como constancia.

## Datos no verificables que requieren revisión manual

1. Plazo de entrega de la cédula de identidad (SEGIP no lo publica en su portal).
2. Vigencia exacta de la cédula de identidad (el portal solo indica que la reposición conserva la fecha original).
3. Cualquier dato de SERECÍ, Gestora Pública y ADSIB mientras sus portales permanezcan inaccesibles.

## Nuevas guías de digitalización y simplificación (2026)

| ID | Tema | Fuentes consultadas (URL + HTTP) | Datos verificados | PENDIENTE | Estado |
|---|---|---|---|---|---|
| 1450 | Ciudadanía Digital: registro y usos | https://www.gob.bo/tramites/registro-en-ciudadania-digital (200, actualizada 18/11/2026) · https://ciudadaniadigital.bo/home (200) · https://www.gob.bo/tramites/declaracion-jurada-de-bienes-y-rentas (200) | Gratuidad en ambas modalidades; Ley N° 1080; 2 horas de atención presencial; pasos de pre-registro y finalización virtual/presencial; notificaciones judiciales y DJBR virtual | Integración específica con la Gestora Pública | ✅ PUBLICADA (con aviso PENDIENTE) |
| 1451 | Cédula digital y reposición física SEGIP | https://www.segip.gob.bo/segip_digital-2/ (200) · https://www.segip.gob.bo/cajero_segip/ (200) · https://www.segip.gob.bo/cedula-de-identidad/ (200) · nota de prensa 16/09/2026 (200) | Cédula digital Bs 20 y vigencia 2 años con activación presencial inicial; reposición ventanilla Bs 17 sin documentos; cajero Bs 50 con firma digitalizada; reposición por app con pago QR y recojo biométrico | Monto exacto de la reposición vía app (SEGIP no lo publica; Red Uno 09/11/2026 habría informado Bs 17, medio secundario) | ✅ PUBLICADA (con aviso PENDIENTE) |
| 1452 | Tranca Cero: sin fotocopias | https://www.gacetaoficialdebolivia.gob.bo/normas/verGratis_gob/281134 (200) · https://www.gacetaoficialdebolivia.gob.bo/normas/verGratis_gob/405053 (200) · https://trancacero.gob.bo/ (200) | DS 5595 de 30/03/2026: art. 15 sin fotocopia de cédula; art. 16 certificado de nacimiento salvo filiación, parentesco u origen registral; DT Primera (entrada en vigor tras reglamento RM 079/26 de 28/04/2026); DS 5779 de 19/11/2026 modifica art. 7; Dictamen vinculante del art. 27 del Reglamento | Plazo máximo de respuesta al reporte (no publicado) | ✅ PUBLICADA (con aviso PENDIENTE) |
| 1456 | Declaración Jurada de Bienes y Rentas en línea | https://djbr-t2.contraloria.gob.bo/ (200) · https://www.gob.bo/tramites/declaracion-jurada-de-bienes-y-rentas (200) · Cartilla 05/2025 (200) · Cartilla 001/2024 (200) | Cita literal de las cartillas: primer día hábil al iniciar; anual en mes de nacimiento (+ mes siguiente fuera de capitales); cada 10 años para docencia/salud/apoyo; 30 días al desvincularse; gratuita; vía virtual con Ciudadanía Digital | Sin PENDIENTES | ✅ PUBLICADA |
| 1455 | Certificaciones del SIN en línea | https://siat.impuestos.gob.bo/rnc/public (200) · ficha gob.bo y nota de prensa del SIN (según documentación oficial aportada por el autor) | Certificación de Registro en el RNC y de No Tenencia de NIT: gratuitas, 100 % en línea, con QR y envío por correo | URL exacta de la ficha gob.bo y de la nota de prensa; rótulos internos del portal | ✅ PUBLICADA (con aviso PENDIENTE) |
| 1454 | Reporta Tu Tranca: cómo denunciar trabas | https://trancacero.gob.bo/ (200) · https://www.gacetaoficialdebolivia.gob.bo/normas/verGratis_gob/281134 (200) | Canal oficial del Ministerio de la Presidencia; Arts. 3, 12 y 14 del DS 5595; Art. 27 del Reglamento (Dictamen vinculante) | Plazo de respuesta y condiciones del formulario (no publicadas) | ✅ PUBLICADA (con aviso PENDIENTE) |
| 1453 | Firma digital AGETIC (reemplaza tema AGETIC/PTC) | https://www.gob.bo/tramites/certificado-digital-para-firma-digital (200) · https://firmadigital.bo/servicios/precios (200) · https://tramites-certificacion.agetic.gob.bo/ (200) | DS 5519 cierra ADSIB y transfiere firma digital a AGETIC desde 15/01/2026; Persona Natural y Jurídica; certificado Bs 70/año; token Bs 175; 72 horas; requisitos y pasos | Texto íntegro del DS 5519 no localizado en el buscador de la Gaceta | ✅ PUBLICADA (con aviso PENDIENTE) |

Nota: la entrada es `ciudadaniadigital.bo` (no `yasta.bo`, que no resuelve DNS). Se verificó el pre-registro en línea y la opción de finalización presencial en la ficha oficial de AGETIC. Portada vectorial propia: `public/images/portadas/CIUDADANIA_DIGITAL_BOLIVIA_2026.WEBP`.

Nota metodológica [1522]: se corrigió el planteamiento inicial de «tres canales para el mismo servicio». La guía distingue **Servicio A** (cédula digital en app) y **Servicio B** (reposición/duplicado físico). La nota oficial de SEGIP está fechada **16/09/2026**, no 15/09/2026. Portada: `public/images/portadas/SEGIP_DIGITAL_CAJERO_VENTANILLA_2026.WEBP`.

Nota metodológica [1523]: el texto original del DS 5595 en la Gaceta **no dice «1 de junio»**; establece que entra en vigor tras la reglamentación (RM 079/26 de 28/04/2026) y da 30 días hábiles para ajustes. La fecha del 1 de junio de 2026 proviene del portal oficial del Ministerio de la Presidencia, que es la fuente citada en la guía. Documentos archivados en `assets/fuentes-oficiales/tranca-cero/`: DS 5595 (Gaceta y portal), DS 5779, reglamentación RM 079/26 y snapshot del portal. Portada: `public/images/portadas/TRANCA_CERO_BOLIVIA_2026.WEBP`.

Nota metodológica [1524]: se verificó que **PTC no es un portal de trámites para ciudadanos**: su portada indicó «No hay trámites disponibles» y está orientada a entidades certificadoras; exige Ciudadanía Digital para iniciar sesión. La ficha de gob.bo sí incluye «Persona Natural» y el trámite se ejecuta en `solicitud.firmadigital.bo`. Por tanto se reemplazó el tema original por una guía ciudadana sobre el nuevo régimen de firma digital AGETIC (DS 5519), explicando los tres roles: gob.bo consulta, PTC entidades certificadoras, firmadigital.bo ejecución. Archivos en `assets/fuentes-oficiales/firma-digital-agetic/`. Portada: `public/images/portadas/FIRMA_DIGITAL_AGETIC_BOLIVIA_2026.WEBP`.

## Auditoría técnica de `/guias` — 2026-11-22

| Hallazgo | Antes | Después | Archivo |
|---|---|---|---|
| HTML de `/guias` sin cuerpo | 0 `<h1>`, 0 `<p>`, 0 `<a>`, solo meta | `<h1>` + 11 secciones + 45 enlaces `<a href="/guias/slug">` | `scripts/generate-pages.js` |
| Tarjetas no enlazables | `<div role="button">` sin `href` | `<a href>` con `preventDefault()`; respeta Ctrl/Cmd/clic central | `src/components/BlogCard.tsx` |
| JSON-LD del índice | Herdaba Person/LocalBusiness/OfferCatalog/Service | `CollectionPage` + `ItemList` (45 ítems) + `BreadcrumbList` | `scripts/generate-pages.js` |
| Conteo de guías | «31» hardcodeado | Derivado del array real (45) en build y cliente | `scripts/generate-pages.js`, `src/lib/seo.ts` |
| Metadatos de sección | Keywords de portafolio, og:site_name de portafolio, og:image:alt de camarógrafo, etiquetas geo/ICBM/revisit/distribution/rating | Keywords de trámites, `Guías de Trámites Bolivia`, alt acorde, etiquetas sin efecto eliminadas | `scripts/generate-pages.js` |
| Imagen social | WebP | Se genera `OG_GUIAS.jpg` 1200×630 y se usa en og:image/twitter:image; el WebP sigue en el sitio | `public/images/OG/OG_GUIAS.jpg` |
| Duplicado de contenido | Bloque prerenderizado hermano de `#root` sin ocultar | `main.tsx` añade `.js` al `<html>`; CSS oculta `#prerender-guias` al montar | `src/main.tsx`, `src/index.css` |
| Prerender local | `setTimeout(2000)` fijo | Espera explícita a tarjetas (`[id^="blog-post-card-"]`) o `#main-content`; se documenta el salto en CI | `scripts/prerender.mjs` |

Decisión: se mantuvieron solo `hreflang="es"` y `x-default` porque el toggle de idioma no crea una URL `/en` propia.

## Documentales TIPNIS en el portafolio — 2026-11-23

| Guía | Acción | Fuente | Estado |
|---|---|---|---|
| — | Tres nuevas fichas `documental` con embed `youtube-nocookie.com` (IDs cXAhMb1f1W8, xXP-gGndbmo, cSn7tSMop9o) | YouTube (videos propios del usuario) + ficha `documental-tipnis` de `src/translations.ts` | ✅ INTEGRADAS |
| — | Portadas WebP 1280×720 y OG 1200×630 extraídas de los propios videos con FFmpeg | `F:\TIPNIS_documental` | ✅ GENERADAS |
| — | `iframe` con `loading="lazy"`, `referrerPolicy` y `title` accesible | `src/components/PortfolioGrid.tsx` | ✅ |

Nota: la ficha original de fotos se reorganizó como **`medicos-tipnis-galeria` / «Médicos en el Tipnis — Galería de campo»**, etiqueta `Serie · Fotografía`, sin video y con enlaces cruzados a los tres documentales; las tres fichas nuevas son los documentales individuales con etiqueta `Documental`. Así se evita que la galería compita con los videos. El autor aclaró que los documentales se realizaron en **2018**, año corregido en las cuatro fichas y en las descripciones de YouTube. El tercer capítulo se describe como el componente de políticas y organización del programa "Mi Salud", con declaraciones de médicos, OPS, OMS y autoridades de la época, según aclaración del autor.

## Servicio gratuito de IA local — 2026-11-25 (revisado)

Decisión del autor: el bloque de «privacidad demostrable» en el índice de servicios **no aportaba valor** al visitante que compara precios. Se retira de `/servicios` y de las 4 fichas donde estaba. Se convierte en un servicio real del catálogo.

| Elemento | Decisión | Ubicación | Estado |
|---|---|---|---|
| Servicio nuevo | `transcripcion-ia-local-gratis` — «Lectura y transcripción con IA local», `basePrice: 0`, moneda BOB, icono `FileText` | `src/data/servicesPricing.json` (fuente única) | ✅ |
| Registro obligatorio | El acceso se habilita solo tras enviar el correo; se usa `NewsletterSignup` con `source=servicio:<id>` y callback `onSuccess`. Sirve para avisar de nuevas publicaciones | `src/components/NewsletterSignup.tsx`, `ServiceDetailPage.tsx` | ✅ |
| Demo de OCR | `runonweb` (MIT, midudev), módulo `ocr` `tiny`, cargado desde `https://esm.sh/runonweb@0.1.0/ocr` **solo al pulsar**; archivo procesado en el dispositivo | `src/components/LocalAIDemo.tsx` | ✅ PROBADA: devolvió «FREDDYDEV NET OCR LOCAL 2026» |
| Precio cero | Etiqueta «Gratis»/«Free» en tarjeta, ficha, metadatos, FAQ y JSON-LD; sin formulario de cotización en esa ficha. `Offer.price` sigue siendo `"0"` para schema.org | `ServiceLanding.tsx`, `ServiceDetailPage.tsx`, `structuredData.ts`, `generate-pages.js` | ✅ |
| Rendimiento | Sin dependencia npm ni chunk de ~500 KB en el bundle inicial: la instalación local hacía que el helper de modulepreload de Vite se descargara en cada visita | `package.json` y `vite.config.ts` sin cambios | ✅ |
| Monetización | Sin anuncios, sin afiliados y sin checkout. CTA principal: WhatsApp / registro por correo | Regla `monetizacion-hibrida` | ✅ |
| Analítica | `newsletterSubscribe('servicio:…')`, `local_ai_demo_open`, `local_ai_demo_run` (solo `webgpu`/`wasm`) y `contact` con `label: ocr_local`. Nunca se envía contenido del archivo | `src/lib/analytics.ts` | ✅ |

Nota honesta: el CDN entrega **código**, no datos del visitante; el navegador necesita red para cargar el módulo y los modelos la primera vez. Si falla, el modal muestra error con reintento y enlace a WhatsApp. No se añade `SoftwareApplication` al JSON-LD para no duplicar el grafo `Service + Offer + FAQPage`.

## Guía [81] Licencia de Conducir — enriquecimiento 2026-11-25

| Dato | Antes | Valor oficial verificado | Estado |
|---|---|---|---|
| Examen escrito y psicológico para primera vez | Figuraban como requisitos obligatorios | La ficha vigente del SEGIP **no los enumera**: pide cédula, certificado médico, habilidades de conducción de autoescuela y antecedentes de tránsito | ❌ INCORRECTO → CORREGIDO |
| Categorías | A, B, C, D, E, F | P, M, A, T, B, C + provisionales JP/JM/DP/DA | ✅ CORREGIDO |
| Costos | Bs 150–600 | Bs 225 (P/A/B/C), Bs 80 (M/T), duplicado Bs 160/Bs 80, médico Bs 50, PIC Bs 212 | ✅ VERIFICADO |
| Edades | A 16, B 18, C 21, D 23, E 21 | P/M 18, A/T 21, provisional 16, ascenso gradual B 26 y C 31, ascenso directo A→B 24 con 3 años | ✅ CORREGIDO |
| Renovación tardía | No se indicaba | Si pasan 5 años y un día, certificado de habilidades de conducción | ✅ AÑADIDO |
| Registro de certificados médicos | No se indicaba | Los centros los registran al final del día; acudir al SEGIP recién al día siguiente | ✅ AÑADIDO |
| Plazo de entrega y portal de turnos | «10–30 días hábiles», turnos.segip.gob.bo | Sin plazo único publicado; el portal de turnos no respondió (HTTP fallido) | ⚠️ PENDIENTE con aviso visible |

Fuente: https://www.segip.gob.bo/licencia-para-conducir/ (HTTP 200) y https://www.segip.gob.bo/formas-de-pago/ (HTTP 200), verificadas el 25/11/2026. Se reescribieron cuerpo ES/EN y metadatos: el título bajó a 54 caracteres y las descripciones a 146/151, sin las categorías A–F obsoletas.

## Redirects 308 de URLs con impresiones — 2026-11-25

Informe de Search Console (últimos 3 meses, 2.979 impresiones): parte del tráfico de las guías más buscadas caía en URLs retiradas que redirigían al índice `/blog` en lugar de la guía. Se añaden 6 redirecciones 308 **antes** del wildcard `/noticias/:path* → /blog`, sin reintroducir la sección `/noticias`.

| URL de origen | Impresiones | Destino corregido |
|---|---:|---|
| `/noticias/guia-licencia-conducir-bolivia-2026` | 658 | `/guias/guia-licencia-conducir-bolivia-2026` |
| `/noticias/guia-cedula-identidad-segip-bolivia-2026` | 216 | `/guias/guia-cedula-identidad-segip-bolivia-2026` |
| `/noticias/guia-soat-bolivia-2026` | 54 | `/guias/guia-soat-bolivia-2026` |
| `/noticias/guia-nit-sin-bolivia-2026` | 13 | `/guias/guia-nit-sin-bolivia-2026` |
| `/blog/guia-cedula-identidad-segip-bolivia-2026` | 4 | `/guias/guia-cedula-identidad-segip-bolivia-2026` |
| `/blog/guia-antecedentes-penales-bolivia-2026` | 7 | `/guias/guia-antecedentes-penales-bolivia-2026` |

Los 5 slugs de destino existen en `src/data/blogPosts.ts`. `vercel.json` validado: 12 redirects, wildcard conservado al final. Estado: ✅ APLICADO (pendiente de verificación en producción tras el deploy).

## Profesionalización de /servicios — 2026-11-25

Decisión: no ampliar el catálogo (ya tiene 17 servicios). Mejorar la presentación de la oferta para aumentar las solicitudes que ya están llegando.

| Cambio | Contenido | Estado |
|---|---|---|
| Propuesta de valor en el hero | «Documentales, coberturas y videos para instituciones en La Paz. Precio cerrado, sin sorpresas.» / versión EN equivalente | ✅ |
| Casos reales antes de los precios | 3 tarjetas con imágenes propias ya existentes en `/images/portfolio/`. **Destacados fijos por decisión del autor (2026-11-25):** dos documentales de «Médicos en el Tipnis» (Abya Yala TV, 2018) y **World Atomic Week 2025 — Foro Internacional de la Industria Nuclear (Moscú)** (Bolivia TV), que es la versión con video publicado; la ficha de 2024 es solo fotografías y no se destaca. Cada una con cliente, año y resultado verificable, y enlace real a `/portafolio` | ✅ |
| Catálogo agrupado | Anclas por tipo: Vídeo, Edición, Fotografía, Redes sociales, Herramientas con IA y Planes institucionales. Misma fuente `servicesPricing.json`, sin duplicar precios | ✅ |
| Orden dentro de cada grupo | Ascendente por `basePrice` (decisión del autor). Verificado: Vídeo 650 → 850 → 1.100 → 1.200 → 2.200; IA Gratis → 500 → 1.500 | ✅ |
| Doble CTA al cierre | Tarjeta final con WhatsApp, email, teléfono y botón «Solicitar cotización por formulario» | ✅ |
| Rendimiento | `SizedImg` con dimensiones registradas para las 3 imágenes; `loading="lazy"`; sin scripts externos ni afiliados en ruta comercial | ✅ |

Verificado en navegador (bloque de casos, anclas y CTA final presentes), `tsc --noEmit` 0 errores y build CI correcto.

## Video institucional Hampaturi/Yungas — 2026-11-25

| Elemento | Dato | Estado |
|---|---|---|
| Video | `https://youtu.be/p9GJepfH128` — Estado original: **privado** (YouTube devolvía 403 en oEmbed y «Este video es privado»). El autor lo cambió a **no listado**; verificado oEmbed HTTP 200 | ✅ REPRODUCIBLE |
| Título y autor (oEmbed) | «Hampaturi y los Yungas: El Origen del Agua – La Paz, Bolivia» — Freddy Ticona Guzman | ✅ VERIFICADO |
| Año | `publishDate`/`uploadDate` del video: 2026-11-25 | ✅ VERIFICADO |
| Cliente | Gobierno Autónomo Municipal de La Paz (declarado por el autor) | ✅ |
| Portada | WebP 1280×720 extraída del thumbnail oficial `maxresdefault.jpg` (HTTP 200), guardada en `public/images/portfolio/hampaturi-yungas/` y registrada en `imageDimensions` | ✅ |
| Portafolio | Ficha nueva `hampaturi-yungas-origen-agua`, categoría `documental`, embed `youtube-nocookie.com` con `loading="lazy"`; descripción con los capítulos 0:00 / 0:40 / 1:25 y escenarios Cotapata, Zongo, Hampaturi y Camino del Choro, según el texto del autor | ✅ |
| /servicios | Decisión posterior del autor: los destacados quedan **fijos** como documentales «Médicos en el Tipnis» + cobertura en Rusia. Este video permanece solo en `/portafolio` | ✅ |

Verificado en navegador: el iframe del portafolio carga el título correcto y no muestra error de reproductor. `tsc --noEmit` 0 errores, build CI correcto.

## Video institucional de residuos sólidos — 2026-11-25

| Elemento | Dato | Estado |
|---|---|---|
| Video | `https://youtu.be/Q4Si1EQoHe4` — oEmbed HTTP 200, sin restricción de visibilidad | ✅ REPRODUCIBLE |
| Título y autor (oEmbed) | «Gestión de residuos sólidos y economía circular en La Paz \\| Video institucional» — Freddy Ticona Guzman | ✅ VERIFICADO |
| Año | `publishDate`/`uploadDate`: 2026-11-25 | ✅ VERIFICADO |
| Cliente y rol | Gobierno Autónomo Municipal de La Paz; el propio video firma «Realización y postproducción audiovisual: Freddy Ticona Guzman» | ✅ VERIFICADO |
| Cifras y capítulos | 550–650 t/día, relleno Sak'a Churu, lixiviados, Proyecto VIDA, Plataforma de Economía Circular, PTMB y capítulos 00:05 / 00:35 / 01:54 / 03:05 / 03:55 — tomados de la descripción oficial del video, no inventados | ✅ |
| Portada | WebP 1280×720 desde `maxresdefault.jpg` (HTTP 200), registrada en `imageDimensions` | ✅ |
| Ficha | `gestion-residuos-la-paz`, categoría `documental`, embed `youtube-nocookie.com` con `loading="lazy"` | ✅ |

Verificado en navegador: el iframe carga el título correcto y no muestra error. `tsc --noEmit` 0 errores, build CI correcto.

## Video institucional La Paz 2030 — 2026-11-25

| Elemento | Dato | Estado |
|---|---|---|
| Video | `https://youtu.be/uJsygS2ZwFg` — oEmbed HTTP 200 y miniaturas 200, sin restricción de visibilidad | ✅ REPRODUCIBLE |
| Título y autor (oEmbed) | «La Paz 2030: una ciudad que respira \\| Video institucional» — Freddy Ticona Guzman | ✅ VERIFICADO |
| Año | `publishDate`/`uploadDate`: 2026-11-25 | ✅ VERIFICADO |
| Contenido | Cinco pilares (gestión ambiental, áreas verdes, adaptación climática, energía sostenible, biodiversidad urbana); metas 2030: 1.000.000 de árboles, 1.000 parques/plazas y 200 edificios públicos y escuelas con energías limpias. Tomado de la descripción oficial del video y de la narración revisada en el archivo local | ✅ VERIFICADO |
| Portada | WebP 1280×720 desde `maxresdefault.jpg` (HTTP 200), registrada en `imageDimensions` | ✅ |
| Ficha | `la-paz-2030-ciudad-que-respira`, categoría `documental`, embed `youtube-nocookie.com` con `loading="lazy"` | ✅ |

Verificado en navegador: el iframe carga el título correcto sin error de reproductor. `tsc --noEmit` 0 errores, build CI correcto.

## Ajuste del caso de Rusia — 2026-11-25

El autor aclaró que el destacado debe ser el trabajo **con video**: `world-atomic-week-2025` (ID de YouTube `6CL4rVpVOYU`, oEmbed HTTP 200, título «REPORTAJE WORLD ATOMIC WEEK, MOSCÚ RUSIA»), no la ficha de 2024 que solo tiene fotos. Se creó portada WebP local desde su thumbnail oficial, se registró en `imageDimensions`, se cambió el embed a `youtube-nocookie.com` y se actualizó la tarjeta de `/servicios` con el título completo y el año 2025.

## Guía [171] Certificado de Matrimonio — enriquecimiento 2026-11-25

| Dato | Antes | Valor oficial verificado | Estado |
|---|---|---|---|
| Costo del duplicado | Bs 51 | **Bs 34** (concepto «VALORADA»), pago en efectivo en ventanilla | ❌ INCORRECTO → CORREGIDO |
| Certificado simple | Bs 34 afirmado como vigente | Sin publicación en la ficha consultada | ⚠️ PENDIENTE (retirado como dato) |
| Plazo | «mismo día a 72 horas» | La ficha indica **5 minutos** de duración del trámite; 72 horas no confirmadas | ❌ INCORRECTO → CORREGIDO |
| Modalidad | Trámite en línea | Solo **presencial** (`esVirtual: false`) | ❌ INCORRECTO → CORREGIDO |
| Requisitos y solicitantes | Generales sin fuente | Cédula / cédula de extranjero / pasaporte; titulares, hijos dentro del matrimonio o apoderado; extranjeros con certificado de nacimiento apostillado | ✅ AÑADIDO |
| Marco legal | No detallado | CP art. 24; Ley 018 art. 71.3; DS 24247 arts. 38–45; DS 27419 art. 2 | ✅ AÑADIDO |
| Oficina La Paz | No indicada | SERECÍ La Paz, zona Central, Av. 16 de Julio N° 23 | ✅ AÑADIDO |

Nota de seguridad (2026-11-25): la copia HTML del OEP contenía la clave de Google Maps **del propio sitio del OEP**, no de freddydev.net. GitHub Secret Scanning la detectó; se sustituyó por `REDACTED` en el commit `2f57185`. No hay coincidencias en el árbol de trabajo.

Fuentes: https://www.gob.bo/tramites/duplicado-de-certificado-de-matrimonio-src-dcm-13 (HTTP 200, JSON oficial con costos y requisitos) y https://web.oep.org.bo/registro-civico/servicios-registro-civil/ (HTTP 200), verificadas el 25/11/2026 y archivadas en `assets/fuentes-oficiales/matrimonio/`. Cuerpo ES/EN y metadatos reescritos; título 57 caracteres, descripciones 148/149; aviso PENDIENTE visible. `tsc --noEmit` 0 errores, build CI correcto.

## Guía [79] Cédula de Identidad — enriquecimiento 2026-11-25

| Dato | Antes | Valor oficial verificado | Estado |
|---|---|---|---|
| Costo | Bs 17 para cada trámite y «CIE Bs 100 aproximado» | **Bs 17 costo único** para la cédula física; certificados Bs 10; CIE regular Bs 600, estudiantes/discapacidad Bs 300, duplicado Bs 200, certificación Bs 20, licencia de cortesía Bs 50, refugiados sin costo | ✅ VERIFICADO / ❌ CORREGIDO |
| Renovación y reposición | Listas de documentos, fotos y certificado de domicilio | El SEGIP indica **acudir y pagar, sin presentar documentos**; solo se llevan originales si se actualiza estado civil o profesión | ❌ INCORRECTO → CORREGIDO |
| Reposición | «vigencia indefinida» | Conserva datos, fotografía y **fecha de vigencia original** | ✅ CORREGIDO |
| Primera vez | Partida de nacimiento «del SEGIP o Registro Civil», fotos y domicilio | Certificado de Nacimiento original del **SERECÍ**, Resolución Administrativa original o copia legalizada y, cuando corresponda, Certificación de Partida Única | ❌ INCORRECTO → CORREGIDO |
| CIE | Bs 100 aproximado y multa sin detalle | Bs 600 / Bs 300; **25 días hábiles** desde notificación de DIGEMIG y multa de **Bs 10 por día** | ❌ INCORRECTO → CORREGIDO |
| Plazo, vigencia «indefinida», cédula digital, horarios y turnos | Afirmados como vigentes | Sin publicación en las fichas consultadas | ⚠️ PENDIENTE con aviso visible |

Fuentes: https://www.segip.gob.bo/cedula-de-identidad/, https://www.segip.gob.bo/tramites-cedula-de-identidad/ y https://www.segip.gob.bo/cedulas-de-identidad-de-extranjeros/ (HTTP 200), verificadas el 25/11/2026 y archivadas en `assets/fuentes-oficiales/cedula-identidad/`. Cuerpo ES/EN reescrito; título 52 caracteres y descripciones 140/145. `tsc --noEmit` 0 errores, build CI correcto.

## Corrección de IDs duplicados — 2026-11-25

Las siete guías nuevas (1450–1456) usaban IDs que ya pertenecían a artículos de blog, por lo que la SPA resolvía el artículo equivocado al abrir la guía (por ejemplo, `/guias/reporta-tu-tranca-bolivia-2026` mostraba el blog de J-cut). Se reasignaron a IDs libres 1521–1527 y se movieron los cuerpos a su grupo `id % 39`. Los slugs y las URLs no cambian. Además se corrigió el enlace roto `/guias/nit-sin-bolivia-2026` → `/guias/guia-nit-sin-bolivia-2026` (4 apariciones).

Segunda causa encontrada: los metadatos de tres guías (1525–1527) tenían varios campos en una sola línea, y `scripts/extract-articles.js` solo lee un campo por línea, por lo que no se prerenderizaban y daban 404. Se expandieron a un campo por línea. Verificado: 141 artículos y **48 guías** extraídos, 0 IDs duplicados y **0 enlaces internos rotos** en los cuerpos. Las cuatro rutas revisadas muestran su título y cuerpo correctos, sin contenido de J-cut.

## SpotlightCard de React Bits — 2026-11-25

Se incorporó `SpotlightCard` de React Bits 2.0 (licencia MIT + Commons Clause, uso comercial permitido, código copiado al repo sin dependencias npm) en `src/components/SpotlightCard.tsx`. Adaptaciones propias: superficie y borde configurables, sin padding/radius fijos, desactivado en punteros gruesos (móvil) y respeta `prefers-reduced-motion`.

Aplicado en tarjetas de `/servicios` (intensidad 0.13, color `#D4AF37`) y `/portafolio` (0.22). Verificado en navegador: el degradado aparece al acercar el cursor y no desplaza contenido. No se usan componentes de texto animado ni backgrounds, para no afectar el prerender de `/guias` ni Core Web Vitals.

## Guía [182] Carnet de Vacunación COVID — enriquecimiento 2026-11-25

| Dato anterior | Resultado de la verificación | Estado |
|---|---|---|
| Descarga gratuita desde sus.minsalud.gob.bo | El sitio responde 200 pero es el Sistema Único de Salud (SUS); no publica carnet COVID ni descarga | ⚠️ PENDIENTE (retirado como dato) |
| App «Unidos Contra el Covid» y registro RNVe | Sin ficha oficial en gob.bo que lo confirme | ⚠️ PENDIENTE (retirado como dato) |
| Requisitos (cédula y fecha de nacimiento) | No verificados en fuente oficial | ⚠️ PENDIENTE (retirado como dato) |
| Plazo inmediato y vigencia indefinida | Sin publicación oficial | ⚠️ PENDIENTE (retirado como dato) |
| Costo | No se encontró arancel oficial en gob.bo | ⚠️ PENDIENTE (aviso visible) |

No existe ficha de trámite de «carnet de vacunación COVID-19» en gob.bo, por lo que la guía se reescribió en ES/EN dejando todas las cifras y pasos como PENDIENTE, con recomendaciones generales (guardar el PDF, acudir al centro de vacunación, verificar requisitos de viaje). Fuentes consultadas y archivadas en `assets/fuentes-oficiales/carnet-vacunacion/` (HTTP 200). Título 54 caracteres, descripciones 153/145. `tsc --noEmit` 0 errores, build CI correcto.

## Guía [181] Licencia de Funcionamiento — enriquecimiento 2026-11-25

| Dato anterior | Resultado de la verificación | Estado |
|---|---|---|
| Licencia gratuita en La Paz por iGob 24/7 | igob.lapaz.bo no responde; GAMLP no publica ficha de costo | ⚠️ PENDIENTE (retirado como dato) |
| Plazo de 24 a 48 horas | Sin publicación oficial en la ficha consultada | ⚠️ PENDIENTE (retirado como dato) |
| Patente anual desde Bs 100 | Sin fuente oficial verificada | ⚠️ PENDIENTE (retirado como dato) |
| Requisitos por actividad y oficinas de La Paz | No verificables | ⚠️ PENDIENTE (retirados como dato) |
| Trámite de El Alto | Ficha gob.bo con entidad, oficina (Av. Costanera N° 5022), horario 08:30–16:30, seis requisitos, procedimiento, sin arancel publicado y marco legal DRPT/006/2022 | ✅ AÑADIDO (HTTP 200) |
| Duplicado | Requisitos y procedimiento publicados; resultado Constancia | ✅ AÑADIDO (HTTP 200) |

La guía se reescribió en ES/EN con el único dato verificable (El Alto) y todo lo demás como PENDIENTE con aviso visible. Título 51 caracteres, descripciones 152/150. Fuentes archivadas en `assets/fuentes-oficiales/licencia-funcionamiento/`. `tsc --noEmit` 0 errores, build CI correcto. Con esta guía se cierra el bloque de enriquecimiento de Search Console (5 de 5).

## Auditoría de rendimiento y accesibilidad — 2026-11-27

Lighthouse sobre `https://freddydev.net/servicios` y `/portafolio`: SEO 1,00 y Best Practices 1,00 en ambas; accesibilidad 0,98 y 0,99. Traza de 8 s con 120 eventos de cursor: `longTasks` 1 (126 ms, causado por el bucle de prueba), `FireAnimationFrame` 0,69 ms en 11 frames. **SpotlightCard no produce coste apreciable por frame**; no hace falta un gestor compartido.

Fallos corregidos a raíz de la auditoría: saltos de jerarquía de encabezados (`h4` sin `h3` previo en pasos de servicios y en el modal del portafolio) y nombres accesibles que no coincidían con el texto visible (logo y selector de idioma).

## Servicios en el primer pantallazo — 2026-11-27

El hero de la home solo mostraba presentación personal. Se añadió una franja «Servicios» justo debajo de los logos de certificación con tres tarifas reales tomadas de `servicesPricing.json` (Reel Bs 300, Cobertura de Evento Bs 850, Reportaje Bs 2.200), cada una enlazada a su ficha. Verificado en navegador: la franja aparece en el primer viewport, sin tapar el título ni los CTA. No se añadieron imágenes ni scripts nuevos.

## Carrusel de fotos en el hero — 2026-11-27

El fondo del hero pasó de una sola foto a un carrusel. El autor eligió las cinco imágenes definitivas: `PSX_20191229_110351` (consola de audio), `DSC_0668` (banderas), `1428941046862` (tanques), `DSC07510` (campo industrial) y `DSC07353` (embarcación). Las cinco son horizontales. Se generaron WebP optimizados (78/100/55/448/217 KB) en `public/images/behind-scenes/`, se registraron en `imageDimensions` y se retiraron los tres archivos temporales anteriores. La primera imagen tiene `fetchPriority="high"` para no retrasar el LCP. Rotación cada 4,5 s con transición de 1 s; se detiene con `prefers-reduced-motion` y cuando la pestaña no está visible. Verificado en navegador: el fondo cambia entre las cinco escenas sin desplazar el contenido ni afectar los CTA.

## Fondo global con efecto — 2026-11-28

El fondo pasó de negro plano a una composición solo CSS en `html`: dos brillos dorados muy tenues, una rejilla de puntos de 46 px y un degradado vertical. Sin imágenes, sin JS y sin animación, coste cero y contraste intacto. Verificado en navegador en `/servicios`.

## Auditoría técnica SEO/Performance/Seguridad — 2026-11-28

Diagnóstico priorizado y plan de alto impacto aprobado. Cambios aplicados en este commit:

| Área | Cambio | Archivos | Estado |
|---|---|---|---|
| Rendimiento | Eliminado `public/videos/showreel.mp4` (57 MB, sin referencias) y optimizadas imágenes >300 KB con Sharp (resize a 1920 px y WebP/JPEG/PNG q82). `public` bajó de 216 MB a ~180 MB | `scripts/_optimize_images.mjs` (temporal), `scripts/image-dimensions.*`, `src/lib/imageDimensions.ts` | ✅ |
| SEO | H1 estático inyectado en la home para crawlers sin JS; `Sitemap:` añadido a `robots.txt`; OG de servicios estandarizado a `OG_SERVICIOS.webp` | `scripts/generate-pages.js`, `src/index.css`, `public/robots.txt` | ✅ |
| Seguridad | Content-Security-Policy añadida a `/(.*)` en `vercel.json`, con `frame-src` para YouTube, `connect-src` para GA4/Web3Forms y `worker-src` para el service worker | `vercel.json` | ✅ |

Verificación: `tsc --noEmit` 0 errores, `npm run build` OK en CI, auditoría de enlaces internos 0 rotos. Lighthouse (producción, antes del deploy): SEO 1.00, Best Practices 1.00, accesibilidad 0.97–0.99. Pendiente de verificar post-deploy: CSP sin bloqueos en consola y Lighthouse tras el deploy.

## Seguridad de upload-image — 2026-11-28

El endpoint `/api/upload-image` aceptaba subidas públicas (solo rate limit por IP) y dependía de `@vercel/blob` con una cadena vulnerable. Se añadió autenticación por token: el servidor exige `x-admin-token` igual a `ADMIN_UPLOAD_TOKEN` y el `AdminPanel` lo pide una vez por sesión (`sessionStorage`). Si el token es inválido, se limpia y se vuelve a pedir. El endpoint falla cerrado si la variable no está definida.

## hasCredential en JSON-LD — 2026-11-28

Se añadieron 10 credenciales reales al esquema `Person` de `index.html` y `src/lib/structuredData.ts`: las 5 titulaciones primarias (UDABOL, Ministerio de Educación, Escuela Andina Ukamau, UAGRM/Crece) y 5 certificaciones con URL de verificación pública (Replit, Alura/Oracle, Google Actívate, Coursera, Certiprof). Se corrigió una coma final inválida en JSON. Verificado: `hasCredential: 10` y JSON válido. `tsc --noEmit` 0 errores, build CI correcto.

## Accesibilidad Lighthouse — 2026-11-28

Lighthouse en producción (`/servicios`, `/portafolio`, `/`, `/guias/...`) dio 0,97–0,99 por dos fallos: jerarquía de encabezados y nombres accesibles que no coincidían con el texto visible. Se corrigieron todos los `h4` restantes en pasos de servicio y en el modal del portafolio (ahora `h3`), y los `aria-label` del logo y del selector de idioma ahora incluyen el texto visible. El `link-name` de un doc-card se revisó: el HTML estático y el renderizado tienen texto válido; el fallo puede ser un falso positivo del elemento vacío del bloque prerenderizado, pero no bloquea la publicación.

## Plan de ataque

1. **Prioridad 0** (señaladas por el usuario): licencia tipo P, duplicado de cédula, SOAT 2026, apostilla.
2. **Por fuente**: SEGIP (12 guías), SIN (4), SENAPI/SEPREC (3), Gestora (5), SERECÍ (5), Cancillería (3), salud/OEP/policía (9).
3. **Protocolo por guía**: extraer hechos numéricos → buscar en `.gob.bo` → clasificar ✅/⚠️/❌ → corregir → añadir bloque de fuentes y fecha → archivar documento → commit `fix: verificación oficial [guía]`.
4. **Cierre**: `AUDITORIA.md` consolidado, build y verificación de que ningún dato numérico quede sin fuente o sin marca de pendiente.
