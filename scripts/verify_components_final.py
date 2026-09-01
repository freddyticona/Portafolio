import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Verify components integrity across ALL 34 articles after all fixes
article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

all_ok = True
for aid in article_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        print(f"{aid}: NOT FOUND!")
        all_ok = False
        continue
    block = m.group(0)
    stat = "<div class='stat-grid'>" in block or '<div class="stat-grid">' in block
    tweet = "<div class='tweet-card'>" in block or '<div class="tweet-card">' in block
    expert = "<div class='expert-quote'>" in block or '<div class="expert-quote">' in block
    figure = "<figure class='report-figure'>" in block or '<figure class="report-figure">' in block
    
    # Content integrity: check contentEs and contentEn both present and non-trivial
    has_contentEs = 'contentEs:' in block and 'contentEn:' in block
    
    flags = []
    if not stat: flags.append('NO-stat')
    if not tweet: flags.append('NO-tweet')
    if not expert: flags.append('NO-expert')
    if not figure: flags.append('NO-figure')
    if not has_contentEs: flags.append('NO-content')
    
    status = 'OK' if not flags else ', '.join(flags)
    print(f"{aid}: {status}")

print(f"\nDone. all_ok={all_ok}")