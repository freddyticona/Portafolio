import io, os, sys, urllib.request
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE = r"C:\Users\Asus\Downloads\portafolio cv studio\public\images\blog\tutoriales-ia-2026"
os.makedirs(BASE, exist_ok=True)

HDR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/png,image/jpeg,*/*",
    "Referer": "https://getartcraft.com/",
}

TARGETS = [
    ("artcraft-estudio-ia-guia-completa.jpg",
     "https://getartcraft.com/images/3d-interface-preview.jpg"),
    ("instalar-artcraft-launcher-apps-clon-adobe-windows.jpg",
     "https://getartcraft.com/images/video-thumbnails/artcraft-commercial.png"),
    ("photocraft-vs-photoshop-editar-imagenes-ia.jpg",
     "https://getartcraft.com/images/apps/photocraft/hero.webp"),
    ("filmcraft-editor-video-clon-premiere-gratis.jpg",
     "https://getartcraft.com/images/apps/filmcraft/hero.webp"),
    ("effectcraft-motion-graphics-vfx-clon-after-effects.jpg",
     "https://getartcraft.com/images/apps/effectcraft/hero.webp"),
    ("vectorcraft-designcraft-storyboards-graficos-ia.jpg",
     "https://getartcraft.com/images/apps/vectorcraft/hero.webp"),
    ("artcraft-canvas-2d-editor-3d-componer-escenas.jpg",
     "https://getartcraft.com/images/video-thumbnails/artcraft-sci-fi.png"),
    ("higgsfield-soul-cinema-soul-id-personajes-consistentes.jpg",
     "https://static.higgsfield.ai/soul-cinema/hero/hf_20260304_130125_bd30ffb0-0be1-4aa8-a499-f1f0690d1df8.png"),
    ("higgsfield-cinema-studio-dop-camara-lente-movimiento.jpg",
     "https://static.higgsfield.ai/cinematic-intro/cinema-studio-og.webp"),
    ("higgsfield-seedance-kling-veo-generacion-video.jpg",
     "https://cdn.sanity.io/images/s479xw3z/production/93c1dfa5aa07bc124466d98be9bcb64a9c0debe4-2720x1536.png"),
]

for name, url in TARGETS:
    out = os.path.join(BASE, name)
    if os.path.exists(out) and os.path.getsize(out) > 20000:
        print("SKIP", name, os.path.getsize(out))
        continue
    try:
        req = urllib.request.Request(url, headers=HDR)
        with urllib.request.urlopen(req, timeout=90) as r:
            raw = r.read()
        im = Image.open(io.BytesIO(raw))
        im = im.convert("RGB")
        w, h = im.size
        if w > 1800:
            im = im.resize((1800, round(h * 1800 / w)), Image.LANCZOS)
        im.save(out, "JPEG", quality=86, optimize=True, progressive=True)
        print("OK", name, f"{w}x{h}", "->", im.size, os.path.getsize(out))
    except Exception as e:
        print("ERR", name, repr(e))
