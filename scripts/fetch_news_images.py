import json, os, time, urllib.request, urllib.parse, sys

API = "https://commons.wikimedia.org/w/api.php"
IMG_DIR = r"C:\Users\Asus\Downloads\portafolio cv studio\public\images\blog"

# slug -> Wikimedia Commons search query
TARGETS = {
    "israel-iran-guerra-2026": "Tehran Iran skyline",
    "sudan-guerra-civil-hambruna-2026": "Displaced camp Sudan Darfur",
    "haiti-masacre-kenscoff-2026": "Port-au-Prince Haiti",
    "milano-cortina-2026-juegos-invierno": "Milano Cortina 2026",
    "otan-escudo-oriental-polonia-2026": "Polish soldier military",
    "aranceles-eeuu-canada-50-2026": "Peace Arch Canada US border",
    "ucrania-guerra-paz-estancada-2026": "Kyiv Ukraine independence",
    "taiwan-china-tensiones-2026": "Taipei Taiwan skyline",
    "corea-norte-misiles-2026": "North Korea missile",
    "bolivia-cerimedo-detencion-asesor-paz": "La Paz Bolivia",
    "otan-rusia-guerra-supuesta-polonia-eeuu": "Poland Belarus border",
    "otan-rusia-guerra-supuesta-polonia-eeuu-2": "NATO troops exercise Europe",
    "rodrigo-paz-caso-cerimedo-declaraciones": "La Paz Bolivia Plaza",
    "rodrigo-paz-caso-cerimedo-declaraciones-2": "Santa Cruz Bolivia",
}

HDR = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36", "Accept": "image/avif,image/webp,image/png,image/*,*/*;q=0.8", "Referer": "https://commons.wikimedia.org/"}

def find_image(query):
    for attempt in range(5):
        try:
            qs = urllib.parse.urlencode({
                "action": "query", "format": "json", "generator": "search",
                "gsrsearch": f"filetype:bitmap {query}", "gsrnamespace": "6",
                "gsrlimit": "8", "prop": "imageinfo",
                "iiprop": "url|extmetadata", "iiurlwidth": "1280",
            })
            req = urllib.request.Request(f"{API}?{qs}", headers=HDR)
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.load(r)
            pages = data.get("query", {}).get("pages", {})
            cands = []
            for p in pages.values():
                ii = p.get("imageinfo", [{}])[0]
                meta = ii.get("extmetadata", {})
                if meta.get("MediaType", {}).get("value") != "AUDIO":
                    cands.append(ii.get("thumburl"))
            if cands:
                return cands[0]
            return None
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(15 * (attempt + 1))
            else:
                time.sleep(4 * (attempt + 1))
        except Exception:
            time.sleep(4 * (attempt + 1))
    return None

def download(url, dest):
    try:
        req = urllib.request.Request(url, headers=HDR)
        with urllib.request.urlopen(req, timeout=60) as r:
            with open(dest, "wb") as f:
                f.write(r.read())
        return os.path.getsize(dest)
    except Exception as e:
        return f"ERR:{e}"

os.makedirs(IMG_DIR, exist_ok=True)
for slug, query in TARGETS.items():
    url = find_image(query)
    if not url:
        print(f"NOIMG {slug}")
        time.sleep(3)
        continue
    dest = os.path.join(IMG_DIR, f"{slug}.jpg")
    res = download(url, dest)
    print(f"{slug}: {res}")
    time.sleep(4)
