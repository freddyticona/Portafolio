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

No se encontró PDF oficial específico para este trámite en el sitio del SEGIP; se archivó el HTML oficial íntegro como constancia.

## Datos no verificables que requieren revisión manual

1. Plazo de entrega de la cédula de identidad (SEGIP no lo publica en su portal).
2. Vigencia exacta de la cédula de identidad (el portal solo indica que la reposición conserva la fecha original).
3. Cualquier dato de SERECÍ, Gestora Pública y ADSIB mientras sus portales permanezcan inaccesibles.

## Plan de ataque

1. **Prioridad 0** (señaladas por el usuario): licencia tipo P, duplicado de cédula, SOAT 2026, apostilla.
2. **Por fuente**: SEGIP (12 guías), SIN (4), SENAPI/SEPREC (3), Gestora (5), SERECÍ (5), Cancillería (3), salud/OEP/policía (9).
3. **Protocolo por guía**: extraer hechos numéricos → buscar en `.gob.bo` → clasificar ✅/⚠️/❌ → corregir → añadir bloque de fuentes y fecha → archivar documento → commit `fix: verificación oficial [guía]`.
4. **Cierre**: `AUDITORIA.md` consolidado, build y verificación de que ningún dato numérico quede sin fuente o sin marca de pendiente.
