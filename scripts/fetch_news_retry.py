import json, os, time, urllib.request, urllib.parse

API = "https://commons.wikimedia.org/w/api.php"
IMG_DIR = r"C:\Users\Asus\Downloads\portafolio cv studio\public\images\blog"
HDR = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36", "Accept": "image/avif,image/webp,image/png,image/*,*/*;q=0.8", "Referer": "https://commons.wikimedia.org/"}

TARGETS = {
    "otan-rusia-guerra-supuesta-polonia-eeuu": "Poland Belarus border fence",
    "otan-rusia-guerra-supuesta-polonia-eeuu-2": "NATO military exercise soldiers",
    "rodrigo-paz-caso-cerimedo-declaraciones": "La Paz Bolivia government palace",
    "rodrigo-paz-caso-cerimedo-declaraciones-2": "Santa Cruz de la Sierra Bolivia",
}

def find_image(query):
    for attempt in range(6):
        try:
            qs = urllib.parse.urlencode({"action":"query","format":"json","generator":"search","gsrsearch":f"filetype:bitmap {query}","gsrnamespace":"6","gsrlimit":"8","prop":"imageinfo","iiprop":"url","iiurlwidth":"1280"})
            req = urllib.request.Request(f"{API}?{qs}", headers=HDR)
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.load(r)
            for p in data.get("query",{}).get("pages",{}).values():
                ii = p.get("imageinfo",[{}])[0]
                if ii.get("extmetadata",{}).get("MediaType",{}).get("value") != "AUDIO":
                    return ii.get("thumburl")
            return None
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(30*(attempt+1))
            else:
                time.sleep(8)
        except Exception:
            time.sleep(8)
    return None

def download(url, dest):
    try:
        req = urllib.request.Request(url, headers=HDR)
        with urllib.request.urlopen(req, timeout=60) as r:
            with open(dest,"wb") as f:
                f.write(r.read())
        return os.path.getsize(dest)
    except Exception as e:
        return f"ERR:{e}"

for slug, query in TARGETS.items():
    time.sleep(25)
    url = find_image(query)
    if not url:
        print(f"NOIMG {slug}"); continue
    dest = os.path.join(IMG_DIR, f"{slug}.jpg")
    res = download(url, dest)
    print(f"{slug}: {res}")
