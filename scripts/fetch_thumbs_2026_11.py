import io, json, os, re, sys, urllib.parse, urllib.request
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = r"C:\Users\Asus\Downloads\portafolio cv studio"
HDR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/png,image/jpeg,*/*",
}

NEWS = [
    ("2026-11-05/inflacion-bolivia-603-octubre-2026.jpg",
     "https://larazon.bo/wp-content/uploads/2024/11/alimentos-inflacion-2.jpeg"),
    ("2026-11-06/gobernadores-rechazan-1-por-ciento-coparticipacion.jpg",
     "https://eju.tv/wp-content/uploads/2026/11/Dinero-inflacion-e1793959427627.webp"),
    ("2026-11-05/manaco-cierre-irrevocable-550-trabajadores.jpg",
     "https://larazon.bo/wp-content/uploads/2026/11/vargas_manaco.webp"),
    ("2026-11-06/magisterio-urbano-marcha-nacional-6-noviembre.jpg",
     "https://vision360-s3.cdn.net.ar/s3i233/2026/07/vision360/images/02/68/17/2681746_560a88b8396f4dbd134b731cee1a50e1a97568215a9e709367e0d95b47b8507f/lg.webp?_v=v3-74"),
    ("2026-11-05/rodrigo-paz-cumbre-iberoamericana.jpg",
     "https://cdn.bolivia.com/sdi/2026/11/05/rodrigo-paz-ante-lideres-iberoamericanos-no-necesitamos-pensar-igual-1365242.jpg"),
    ("2026-11-05/santiago-pena-renuncia-paraguay.jpg",
     "https://cdn.bolivia.com/sdi/2026/11/05/pena-renuncia-a-la-presidencia-de-paraguay-y-aprueban-juicio-politico-en-su-contra-1365258.jpg"),
    ("2026-11-05/caso-maletas-laura-rojas.jpg",
     "https://cdn.bolivia.com/sdi/2026/11/05/laura-rojas-involucra-a-romer-saucedo-en-el-caso-maletas-1365279.jpg"),
    ("2026-11-06/papa-leon-xiv-viaje-latinoamerica.jpg",
     "https://eju.tv/wp-content/uploads/2026/11/Papa-Leon-XIV-e1793966195699.jpg"),
    ("2026-11-05/nasdaq-correccion-acciones-ia.jpg",
     None),
    ("2026-11-06/policia-oruro-patrullaje-aereo.jpg",
     "https://eju.tv/wp-content/uploads/2026/11/Los-drones-para-el-patrullaje-aereo-en-Oruro.-Foto-Policia-e1793961272296.jpg"),
]

CNBC_PAGE = "https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html"

COMMONS = [
    ("2026-11/iluminacion-entrevista-una-luz.jpg", "softbox studio portrait lighting"),
    ("2026-11/audio-celular-microfonos.jpg", "lavalier microphone"),
    ("2026-11/youtube-shorts-vertical.jpg", "smartphone gimbal video"),
    ("2026-11/cinemateca-boliviana.jpg", "Cinemateca Boliviana"),
    ("2026-11/backup-discos-rodaje.jpg", "hard disk drives"),
]

report = {"news": [], "blog": []}


def fetch(url):
    req = urllib.request.Request(url, headers=HDR)
    return urllib.request.urlopen(req, timeout=60).read()


def save(raw, rel, credit, kind):
    dest = os.path.join(ROOT, "public", "images", "news" if kind == "news" else "blog", rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    img = Image.open(io.BytesIO(raw))
    if img.mode in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[-1])
        img = bg
    else:
        img = img.convert("RGB")
    if img.width > 1800:
        h = int(img.height * 1800 / img.width)
        img = img.resize((1800, h), Image.LANCZOS)
    img.save(dest, "JPEG", quality=84, optimize=True)
    print("OK", rel, img.size)
    report[kind].append({"path": "/images/" + ("news/" if kind == "news" else "blog/") + rel.replace("\\", "/"), "credit": credit})


def og_image(page):
    html = fetch(page).decode("utf-8", "replace")
    for pat in (r'property=["\']og:image["\'][^>]+content=["\']([^"\']+)',
                r'content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']'):
        m = re.search(pat, html)
        if m:
            return m.group(1)
    return None


for rel, url in NEWS:
    if not url and "nasdaq" in rel:
        url = og_image(CNBC_PAGE)
        print("CNBC og:image:", url)
    if not url:
        print("FAIL no url", rel)
        continue
    try:
        save(fetch(url), rel, "Imagen: medio citado", "news")
    except Exception as e:
        print("FAIL", rel, repr(e))


def commons_search(query):
    api = ("https://commons.wikimedia.org/w/api.php?action=query&format=json"
           "&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch="
           + urllib.parse.quote(f"filetype:bitmap {query}")
           + "&prop=imageinfo&iiprop=url|extmetadata|mime|size&iiurlwidth=1800")
    data = json.loads(fetch(api).decode("utf-8"))
    pages = list((data.get("query") or {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 99))
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        if not ii.get("thumburl"):
            continue
        if ii.get("mime") not in ("image/jpeg", "image/png"):
            continue
        if (ii.get("width") or 0) < 1000:
            continue
        meta = ii.get("extmetadata") or {}
        artist = re.sub(r"<[^>]+>", "", (meta.get("Artist") or {}).get("value", "")).strip()
        lic = (meta.get("LicenseShortName") or {}).get("value", "")
        return ii["thumburl"], artist, lic, p.get("title", "")
    return None


for rel, query in COMMONS:
    try:
        hit = commons_search(query)
        if not hit:
            print("NO COMMONS HIT", query)
            continue
        url, artist, lic, title = hit
        credit = f"Foto: {artist or 'Wikimedia Commons'} / Wikimedia Commons ({lic})"
        print("PICK", query, "->", title, "|", credit)
        save(fetch(url), rel, credit, "blog")
    except Exception as e:
        print("FAIL", rel, repr(e))

with open(os.path.join(ROOT, "scripts", "_thumbs-report.json"), "w", encoding="utf-8") as f:
    json.dump(report, f, ensure_ascii=False, indent=2)
print("done")
