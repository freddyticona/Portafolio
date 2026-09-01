import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

article_ids = [
    '1121', '1131', '1132', '1133', '1134', '1135', '1136', '1137', '1138', '1139',
    '1140', '1141', '1142', '1143', '1144', '1145', '1146', '1147', '1148', '1149',
    '1150', '1151', '1152', '1153', '1154', '1155', '1156', '1157', '1158', '1159',
    '1160', '1161', '1162', '1163'
]

found = {}
not_found = []

for aid in article_ids:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    if m:
        found[aid] = m.group(0)
    else:
        not_found.append(aid)

print(f"Found {len(found)} articles, not found: {not_found}")
