import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Articles where I injected components
check_ids = ['1135', '1136', '1137', '1138', '1139', '1140', '1141', '1142', '1143',
             '1144', '1145', '1146', '1147', '1148', '1149', '1150', '1151', '1152',
             '1153', '1154', '1155', '1156', '1157', '1158', '1159', '1160', '1161',
             '1162', '1163']

for aid in check_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        continue
    block = m.group(0)
    
    # Find field boundaries
    es_pos = block.find("contentEs: `")
    en_pos = block.find("contentEn: `")
    img_pos = block.find("imageUrl:")
    
    # Find component positions
    eq_positions = [mm.start() for mm in re.finditer(r"expert-quote", block)]
    tc_positions = [mm.start() for mm in re.finditer(r"tweet-card", block)]
    
    # Determine which region each expert-quote "main div" is in by checking
    # Count full divs (class='expert-quote' or class="expert-quote")
    eq_divs = len(re.findall(r"<(?:div) class=[\'\"](?:expert-quote)[\'\"]", block))
    tc_divs = len(re.findall(r"<(?:div) class=[\'\"](?:tweet-card)[\'\"]", block))
    
    # Count in ES region and EN region
    es_region = block[es_pos:en_pos] if es_pos != -1 and en_pos != -1 else ''
    en_region = block[en_pos:] if en_pos != -1 else ''
    
    eq_es = len(re.findall(r"class=[\'\"](?:expert-quote)[\'\"]", es_region))
    eq_en = len(re.findall(r"class=[\'\"](?:expert-quote)[\'\"]", en_region))
    tc_es = len(re.findall(r"class=[\'\"](?:tweet-card)[\'\"]", es_region))
    tc_en = len(re.findall(r"class=[\'\"](?:tweet-card)[\'\"]", en_region))
    
    print(f"{aid}: expert_es={eq_es}, expert_en={eq_en}, tweet_es={tc_es}, tweet_en={tc_en}")