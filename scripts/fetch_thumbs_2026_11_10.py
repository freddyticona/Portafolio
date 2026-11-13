import io, json, os, re, sys, urllib.parse, urllib.request
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = r"C:\Users\Asus\Downloads\portafolio cv studio"
HDR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/png,image/jpeg,*/*",
}

NEWS = [
    ("2026-11-10/intervencion-policial-pedro-domingo-murillo.jpg",
     "https://larazon.bo/wp-content/uploads/2026/11/ARRESTADOS.webp"),
    ("2026-11-10/potosi-lidera-exportaciones-4011-millones.jpg",
     "https://www.urgente.bo/sites/default/files/styles/thumb_600x465/public/potosi_16.jpg"),
    ("2026-11-10/caso-mariaca-caja-fuerte-375000-aparicio.jpg",
     "https://www.urgente.bo/sites/default/files/styles/thumb_600x465/public/aparicio_2.jpg"),
    ("2026-11-10/waskiri-sat-nanosatelite-ucb-abe.jpg",
     "https://www.urgente.bo/sites/default/files/styles/thumb_600x465/public/satelite.ucb_.jpeg"),
    ("2026-11-10/usd-mint-moneda-digital-propuesta-ley.jpg",
     "https://larazon.bo/wp-content/uploads/2026/11/moneda.webp"),
    ("2026-11-10/nvidia-investigacion-junta-huang.jpg",
     "https://ichef.bbci.co.uk/news/1024/branded_news/31a9/live/7a3a3f70-dc53-11f1-a869-656dc96bd12d.jpg"),
    ("2026-11-10/hegseth-camara-bloquea-juicio-politico.jpg",
     "https://media.cnn.com/api/v1/images/stellar/prod/2026-11-10t135742z-653058822-rc21loavy4ms-rtrmadp-3-usa-hegseth.jpg?c=16x9&q=w_800,c_fill"),
    ("2026-11-10/rusia-ucrania-abu-dabi-conversaciones.jpg",
     "https://www.aljazeera.com/wp-content/uploads/2026/11/afp_6af349e95bbe-1794329065.jpg?resize=1920%2C1440"),
    ("2026-11-10/novaya-gazeta-cierra.jpg",
     None),
    ("2026-11-10/oms-together-for-science-and-health.jpg",
     "https://cdn.who.int/media/images/default-source/headquarters/initiatives/together-for-science-and-health/tsh_banner_1920x609px.tmb-1200v.png?sfvrsn=f70901d9_6"),
]

NOVA_PAGE = "https://www.npr.org/2026/11/10/nx-s1-6034460/russias-most-famous-independent-newspaper-has-shut-down-after-more-than-30-years"
NOVA_FALLBACK = "https://www.aljazeera.com/news/2026/11/9/russian-investigative-newspaper-novaya-gazeta-closes-citing-govt-clampdown"

COMMONS = [
    ("2026-11/mcp-video-edicion-timeline.jpg", ["video editing timeline", "video editing suite"]),
    ("2026-11/mcp-subtitulos-srt.jpg", ["closed captioning television", "subtitles screen"]),
    ("2026-11/mcp-nas-archivos.jpg", ["network attached storage", "NAS server disks"]),
    ("2026-11/mcp-seguridad-candado.jpg", ["padlock computer security", "security padlock chain"]),
    ("2026-11/mcp-servidor-placa.jpg", ["raspberry pi computer", "single board computer"]),
]


def fetch(url):
    req = urllib.request.Request(url, headers=HDR)
    return urllib.request.urlopen(req, timeout=60).read()


def save(raw, rel, kind):
    dest = os.path.join(ROOT, "public", "images", kind, rel)
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
        img = img.resize((1800, int(img.height * 1800 / img.width)), Image.LANCZOS)
    img.save(dest, "JPEG", quality=84, optimize=True)
    print("OK", rel, img.size)


def og_image(page):
    html = fetch(page).decode("utf-8", "replace")
    for pat in (r'property=["\']og:image["\'][^>]+content=["\']([^"\']+)',
                r'content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']'):
        m = re.search(pat, html)
        if m:
            return m.group(1).replace("&amp;", "&")
    return None


for rel, url in NEWS:
    if not url and "novaya" in rel:
        url = og_image(NOVA_PAGE) or og_image(NOVA_FALLBACK)
        print("NOVA og:", url)
    if not url:
        print("FAIL sin url", rel)
        continue
    try:
        save(fetch(url), rel, "news")
    except Exception as e:
        print("FAIL", rel, repr(e))


def commons_search(query):
    api = ("https://commons.wikimedia.org/w/api.php?action=query&format=json"
           "&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch="
           + urllib.parse.quote(f"filetype:bitmap {query}")
           + "&prop=imageinfo&iiprop=url|extmetadata|mime|size&iiurlwidth=1600")
    data = json.loads(fetch(api).decode("utf-8"))
    pages = list((data.get("query") or {}).get("pages", {}).values())
    pages.sort(key=lambda p: p.get("index", 99))
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        if ii.get("mime") not in ("image/jpeg", "image/png") or not ii.get("thumburl"):
            continue
        if (ii.get("width") or 0) < 900:
            continue
        meta = ii.get("extmetadata") or {}
        artist = re.sub(r"<[^>]+>", "", (meta.get("Artist") or {}).get("value", "")).strip()
        lic = (meta.get("LicenseShortName") or {}).get("value", "")
        return ii["thumburl"], artist, lic, p.get("title", "")
    return None


for rel, queries in COMMONS:
    done = False
    for q in queries:
        if done:
            break
        for _ in range(3):
            try:
                hit = commons_search(q)
                if hit:
                    url, artist, lic, title = hit
                    print("PICK", q, "->", title, "| Foto:", artist or "Wikimedia Commons", f"({lic})")
                    save(fetch(url), rel, "blog")
                    done = True
                    break
                print("no hit", q)
                break
            except Exception as e:
                print("retry", q, repr(e))
print("done")
