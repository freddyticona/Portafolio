# 🌐 CONFIGURACIÓN DE DOMINIO - freddydev.net

## Pasos para configurar el dominio en Vercel

### 1. Agregar Dominio en Vercel

1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto: `freddy-ticona-portafolio`
3. Click en **Settings** → **Domains**
4. Click en **Add Domain**
5. Escribe: `freddydev.net`
6. Click en **Add**

### 2. Configurar DNS

Vercel te dará estos registros DNS que debes agregar en tu registrador de dominios:

#### Para freddydev.net (Raíz):

| Tipo | Nombre | Valor |
|------|--------|-------|
| **A** | @ | 76.76.21.21 |
| **A** | @ | 76.76.21.22 |

#### Opcional - www.subdominio:

| Tipo | Nombre | Valor |
|------|--------|-------|
| **CNAME** | www | cname.vercel-dns.com |

### 3. Esperar Propagación DNS

- Tiempo: 1-48 horas (usualmente 5-30 minutos)
- Verifica en: https://dnschecker.org/#A/freddydev.net

### 4. Configurar HTTPS (SSL)

Vercel lo hará automáticamente una vez que el DNS esté configurado.

### 5. Actualizar Environment Variables (si usas)

- `NEXT_PUBLIC_SITE_URL`: `https://freddydev.net`
- `SITE_URL`: `https://freddydev.net`

---

## Registros DNS Completos

Si tu proveedor de dominio requiere todos los registros:

```
Tipo: A     | Nombre: @    | Valor: 76.76.21.21
Tipo: A     | Nombre: @    | Valor: 76.76.21.22
Tipo: CNAME | Nombre: www  | Valor: cname.vercel-dns.com
```

---

## Verificación

Una vez configurado, verifica:

1. Visita: https://freddydev.net
2. Debería ver tu sitio
3. HTTPS debe estar activo (candado verde)

---

## Troubleshooting

**¿No funciona?**
- Verifica que los registros DNS estén correctos
- Espera la propagación DNS (puede tardar hasta 48 horas)
- Limpia el cache de tu navegador
- Usa modo incógnito para probar

**¿HTTPS no funciona?**
- Vercel configura SSL automáticamente
- Espera unos minutos después de que DNS esté propagado
- Revisa el estado en Vercel Dashboard

---

## Actualizado: 20 julio 2026
