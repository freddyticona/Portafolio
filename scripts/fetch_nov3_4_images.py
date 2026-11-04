import json, os, re, sys, time, urllib.parse, urllib.request, html
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

API = "https://commons.wikimedia.org/w/api.php"
BASE = r"C:\Users\Asus\Downloads\portafolio cv studio\public\images\news"

HDR = {
    "User-Agent": "FreddyTiconaNewsBot/1.0 (editorial illustration; contact: freddydev.net)",
    "Accept": "application/json",
}

TARGETS = [
    ("2026-11-04", "eeuu-democratas-camara-senado-midterms-2026", "United States Capitol dome night"),
    ("2026-11-03", "trump-eeuu-fin-aid-israel-4000-millones-2027", "Donald Trump official portrait 2025"),
    ("2026-11-04", "israel-herzog-certifica-elecciones-eisenkot-oposicion", "Knesset building Jerusalem"),
    ("2026-11-04", "eeuu-ataque-qeshm-ormuz-petroleros-2026", "Strait of Hormuz satellite ESA"),
    ("2026-11-04", "rusia-bombardeo-komyshuvakha-37-muertos", "Ukrainian rescuers destroyed building"),
    ("2026-11-03", "ciclón-murasu-andhra-pradesh-2026", "Bay of Bengal cyclone satellite"),
    ("2026-11-04", "chogm-2026-antigua-reparaciones-esclavitud", "St John's Antigua harbour"),
    ("2026-11-04", "indonesia-20000-militares-yakarta-generales", "Jakarta skyline Monas"),
    ("2026-11-04", "espana-ministro-transporte-dimite-accidente-ferroviario", "Renfe AVE train Madrid"),
    ("2026-11-04", "ciberataque-neveras-supermercados-europa", "supermarket frozen food aisle freezers"),
]


def clean(value):
    value = re.sub(r"<[^>]+>", "", value or "")
    return html.unescape(value).strip()


def search(query):
    qs = urllib.parse.urlencode({
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f"filetype:bitmap {query}", "gsrnamespace": "6",
        "gsrlimit": "10", "prop": "imageinfo",
        "iiprop": "url|size|extmetadata", "iiurlwidth": "1400",
    })
    req = urllib.request.Request(f"{API}?{qs}", headers=HDR)
    with urllib.request.urlopen(req, timeout=40) as r:
        data = json.load(r)
    pages = data.get("query", {}).get("pages", {})
    out = []
    for p in pages.values():
        ii = p.get("imageinfo", [{}])[0]
        if not ii.get("thumburl"):
            continue
        width, height = ii.get("width", 0), ii.get("height", 0)
        if width < 900:
            continue
        meta = ii.get("extmetadata", {})
        out.append({
            "title": p.get("title"),
            "url": ii["thumburl"],
            "width": width,
            "height": height,
            "landscape": width >= height,
            "artist": clean(meta.get("Artist", {}).get("value")),
            "license": clean(meta.get("LicenseShortName", {}).get("value")),
            "credit": clean(meta.get("Credit", {}).get("value")),
            "page": ii.get("descriptionurl"),
        })
    out.sort(key=lambda c: (not c["landscape"], -c["width"]))
    return out


def download(url, dest):
    req = urllib.request.Request(url, headers={**HDR, "Accept": "image/jpeg,image/*"})
    tmp = dest + ".download"
    with urllib.request.urlopen(req, timeout=90) as r:
        with open(tmp, "wb") as f:
            f.write(r.read())
    try:
        with Image.open(tmp) as im:
            im = im.convert("RGB")
            if im.width > 1800:
                im = im.resize((1800, round(im.height * 1800 / im.width)), Image.LANCZOS)
            im.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
    finally:
        if os.path.exists(tmp):
            os.remove(tmp)
    return os.path.getsize(dest)


results = {}
for day, slug, query in TARGETS:
    folder = os.path.join(BASE, day)
    os.makedirs(folder, exist_ok=True)
    dest = os.path.join(folder, slug + ".jpg")
    try:
        candidates = search(query)
    except Exception as e:
        print(f"SEARCH_ERR {slug}: {e}")
        continue
    if not candidates:
        print(f"NOIMG {slug}")
        continue
    chosen = candidates[0]
    try:
        size = download(chosen["url"], dest)
    except Exception as e:
        print(f"DL_ERR {slug}: {e}")
        continue
    results[slug] = {**chosen, "bytes": size, "path": dest}
    print(f"OK {slug}: {chosen['title']} | {chosen['artist']} | {chosen['license']} | {size // 1024} KB")
    time.sleep(1.5)

print("\nJSON_START")
print(json.dumps(results, ensure_ascii=False, indent=2))
print("JSON_END")
