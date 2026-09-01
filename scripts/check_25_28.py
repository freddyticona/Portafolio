import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

def check_article(aid):
    pos = content.find(f"id: '{aid}'")
    if pos == -1:
        return None
    nxt = content.find("id: '", pos + 10)
    blk = content[pos:nxt]
    lb = blk.rfind("},")
    if lb != -1:
        blk = blk[:lb+2]
    
    st = blk.find("contentEs: `")
    if st == -1:
        return None
    end = blk.find("`,\n    excerptEn:", st)
    if end == -1:
        end = blk.find("`,\n    contentEn:", st)
    if end == -1:
        end = blk.find("`,\n    imageUrl:", st)
    if end == -1:
        return None
    fc = blk[st+len("contentEs: `"):end]
    
    h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', fc)
    cap = [h for h in h2s if 'Capítulo' in h or 'Chapter' in h or 'Cap&iacute;tulo' in h]
    
    return {
        'aid': aid,
        'len': len(fc),
        'capitulos': len(cap),
        'cap_list': [h.strip() for h in cap[:5]],
        'stat': 'stat-grid' in fc,
        'tweet': 'tweet-card' in fc,
        'expert': 'expert-quote' in fc,
        'fig': 'report-figure' in fc,
        'reu': '[REU]' in fc
    }

# Check Aug 25 and Aug 28 samples
for aid in ['1107', '1108', '1109', '1135', '1136', '1137', '1138', '1139']:
    r = check_article(aid)
    if r:
        print(f"{r['aid']}: len={r['len']}, caps={r['capitulos']}, stat={r['stat']}, tweet={r['tweet']}, expert={r['expert']}, fig={r['fig']}, reu={r['reu']}")
        for h in r['cap_list']:
            print(f"  {h}")
    else:
        print(f"{aid}: NOT FOUND or NO CONTENT")