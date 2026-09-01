import urllib.request, re
url = "https://freddydev.net/noticias/potosi-nevadas-suspenden-buses-la-paz-oruro-2026"
with urllib.request.urlopen(url) as r:
    data = r.read()
    text = data.decode('utf-8', errors='replace')
    # find Introducción snippet
    m = re.search(r'Introducci.{0,80}', text)
    print(repr(m.group(0)) if m else 'not found in html')
    print("charset in html:", "charset" in text.lower())
    # also check JS bundle reference
    # find script src
    scripts = re.findall(r'src="(/assets/[^"]+)"', text)
    print(scripts[:2])
    if scripts:
        js_url = "https://freddydev.net" + scripts[-1]
        print("fetch js", js_url)
        with urllib.request.urlopen(js_url) as r2:
            js = r2.read().decode('utf-8', errors='replace')
            m2 = re.search(r'Introducci.{0,80}', js)
            print(repr(m2.group(0)) if m2 else 'not in js')
            # check if js contains Ã
            print("Ã in js", js.count("Ã"))
            print("ó in js", js.count("ó"))
