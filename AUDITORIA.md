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

## Documentos archivados

- `assets/fuentes-oficiales/cedula-identidad/SEGIP_CEDULA_IDENTIDAD_2026-11-22.html`
- `assets/fuentes-oficiales/cedula-identidad/SEGIP_TRAMITES_CI_2026-11-22.html`
- `assets/fuentes-oficiales/cedula-identidad/SEGIP_CIE_2026-11-22.html`

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
