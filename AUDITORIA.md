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

Nota metodológica [1451]: se corrigió el planteamiento inicial de «tres canales para el mismo servicio». La guía distingue **Servicio A** (cédula digital en app) y **Servicio B** (reposición/duplicado físico). La nota oficial de SEGIP está fechada **16/09/2026**, no 15/09/2026. Portada: `public/images/portadas/SEGIP_DIGITAL_CAJERO_VENTANILLA_2026.WEBP`.

Nota metodológica [1452]: el texto original del DS 5595 en la Gaceta **no dice «1 de junio»**; establece que entra en vigor tras la reglamentación (RM 079/26 de 28/04/2026) y da 30 días hábiles para ajustes. La fecha del 1 de junio de 2026 proviene del portal oficial del Ministerio de la Presidencia, que es la fuente citada en la guía. Documentos archivados en `assets/fuentes-oficiales/tranca-cero/`: DS 5595 (Gaceta y portal), DS 5779, reglamentación RM 079/26 y snapshot del portal. Portada: `public/images/portadas/TRANCA_CERO_BOLIVIA_2026.WEBP`.

Nota metodológica [1453]: se verificó que **PTC no es un portal de trámites para ciudadanos**: su portada indicó «No hay trámites disponibles» y está orientada a entidades certificadoras; exige Ciudadanía Digital para iniciar sesión. La ficha de gob.bo sí incluye «Persona Natural» y el trámite se ejecuta en `solicitud.firmadigital.bo`. Por tanto se reemplazó el tema original por una guía ciudadana sobre el nuevo régimen de firma digital AGETIC (DS 5519), explicando los tres roles: gob.bo consulta, PTC entidades certificadoras, firmadigital.bo ejecución. Archivos en `assets/fuentes-oficiales/firma-digital-agetic/`. Portada: `public/images/portadas/FIRMA_DIGITAL_AGETIC_BOLIVIA_2026.WEBP`.

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

## Plan de ataque

1. **Prioridad 0** (señaladas por el usuario): licencia tipo P, duplicado de cédula, SOAT 2026, apostilla.
2. **Por fuente**: SEGIP (12 guías), SIN (4), SENAPI/SEPREC (3), Gestora (5), SERECÍ (5), Cancillería (3), salud/OEP/policía (9).
3. **Protocolo por guía**: extraer hechos numéricos → buscar en `.gob.bo` → clasificar ✅/⚠️/❌ → corregir → añadir bloque de fuentes y fecha → archivar documento → commit `fix: verificación oficial [guía]`.
4. **Cierre**: `AUDITORIA.md` consolidado, build y verificación de que ningún dato numérico quede sin fuente o sin marca de pendiente.
