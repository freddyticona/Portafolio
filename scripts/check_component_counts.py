import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Check tweet-card and expert-quote counts per article for potential duplication
article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

for aid in article_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if not m:
        continue
    block = m.group(0)
    tweet_es = block.count("<div class='tweet-card'>") + block.count('<div class="tweet-card">')
    expert_es = block.count("<div class='expert-quote'>") + block.count('<div class="expert-quote">')
    stat_es = block.count("<div class='stat-grid'>") + block.count('<div class="stat-grid">')
    
    # Flag potential issues: >1 expert-quote or >1 stat-grid is normal for reportages,
    # but let's report counts for transparency
    print(f"{aid}: tweet={tweet_es}, expert={expert_es}, stat={stat_es}")