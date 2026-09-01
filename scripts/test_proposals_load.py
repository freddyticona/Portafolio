import io, json, re

with io.open('scripts/chapter_proposals.json', 'r', encoding='utf-8') as f:
    proposals = json.load(f)

print(f"Loaded {len(proposals)} article proposals")
for p in proposals:
    print(f"ID {p['id']}: {len(p['capitulos'])} chapters")
