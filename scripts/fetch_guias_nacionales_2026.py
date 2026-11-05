import io
import os
import sys
import urllib.parse
import urllib.request

from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = os.path.join(ROOT, "public", "images", "guia")
TMP = os.path.join(ROOT, "public", "images", "blog", "tutoriales-ia-2026")
os.makedirs(BASE, exist_ok=True)

HDR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/png,image/jpeg,*/*",
    "Referer": "https://www.google.com/",
}

TARGETS = [
    ("re-iva-2026.jpg", "https://www.impuestos.gob.bo/wp-content/uploads/2026/01/reiva.jpeg"),
    ("certificado-aportes-gestora-2026.jpg", "https://abi.bo/wp-content/uploads/2026/11/2024082616581439526.jpg"),
    ("carnet-discapacidad-2026.jpg", "https://www.minsalud.gob.bo/images/noticias25/VIGENCIA%20DEL%20CARNET%20DE%20DISCAPACIDAD%20720.jpg"),
    ("bono-juana-azurduy-2026.jpg", "https://www.minsalud.gob.bo/images/noticias26/bono%20juana%20azurduy%20aniversario%20nota.jpeg"),
    ("bono-juancito-pinto-2026.jpg", "https://abi.bo/wp-content/uploads/2026/10/Imagen-referencial-del-Bono-Juancito-Pinto.jpg"),
    ("subsidio-prenatal-2026.jpg", "https://www.minsalud.gob.bo/images/noticias26/subsidio%20prenatal%20nota.jpeg"),
    ("firma-digital-adsib-2026.jpg", "https://desarrollo.adsib.gob.bo/paginas-web/firma-digital/assets/images/pancartas/portada-01-agetic-2026.jpg"),
    ("facturacion-electronica-siat-2026.jpg", "https://www.impuestos.gob.bo/wp-content/uploads/2026/03/celular.jpeg"),
]

LOCAL_TARGETS = [
    ("correccion-acta-nacimiento-2026.jpg", os.path.join(ROOT, "public", "images", "blog", "badabun", "el-acta-de-nacimiento-no-caduca-asi-puedes-defenderte-cuando-te-pidan.jpg")),
]


def load_remote(url):
    parts = urllib.parse.urlsplit(url)
    safe_url = urllib.parse.urlunsplit(
        (parts.scheme, parts.netloc, urllib.parse.quote(parts.path, safe="/%"), parts.query, parts.fragment)
    )
    req = urllib.request.Request(safe_url, headers=HDR)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def save_jpeg(raw, dest, max_width=1600):
    im = Image.open(io.BytesIO(raw))
    im.load()
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    if im.width > max_width:
        h = round(im.height * max_width / im.width)
        im = im.resize((max_width, h), Image.LANCZOS)
    im.save(dest, "JPEG", quality=84, optimize=True, progressive=True)
    return im.size, os.path.getsize(dest)


ok = 0
for name, url in TARGETS:
    dest = os.path.join(BASE, name)
    try:
        size, nbytes = save_jpeg(load_remote(url), dest)
        ok += 1
        print(f"OK {name} {size[0]}x{size[1]} {nbytes//1024} KB")
    except Exception as e:  # noqa: BLE001
        print(f"FAIL {name}: {e}")

for name, src in LOCAL_TARGETS:
    dest = os.path.join(BASE, name)
    try:
        with open(src, "rb") as fh:
            size, nbytes = save_jpeg(fh.read(), dest)
        ok += 1
        print(f"OK {name} {size[0]}x{size[1]} {nbytes//1024} KB (local)")
    except Exception as e:  # noqa: BLE001
        print(f"FAIL {name}: {e}")

print(f"TOTAL {ok}/10")
