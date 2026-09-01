import io, re

s = io.open('src/translations.ts', encoding='utf-8').read()
ids = re.findall(r"id: '(\d+)'", s)
print("total ids:", len(ids))
print("contentEs count:", s.count('contentEs:'))
print("contentEn count:", s.count('contentEn:'))
print("expert-quote count:", s.count("class='expert-quote'") + s.count('class="expert-quote"'))
print("tweet-card count:", s.count("class='tweet-card'") + s.count('class="tweet-card"'))
print("stat-grid count:", s.count("class='stat-grid'") + s.count('class="stat-grid"'))