import io, re

TS_PATH = r'src/translations.ts'

with io.open(TS_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# For a few articles that I injected expert-quote into, check ES vs EN separately
for aid in ['1135', '1138', '1140', '1141', '1157', '1159']:
    pattern = re.compile(r"\{\s*\n    id: '%s',.*?\n  \}," % re.escape(aid), re.DOTALL)
    m = pattern.search(src)
    block = m.group(0)
    
    # Split into contentEs and contentEn
    es_start = block.find("contentEs: `")
    en_marker = "excerptEn:"  # contentEs ends before excerptEn... actually order is contentEs, excerptEn? no.
    # Let's find contentEn start
    en_start = block.find("contentEn: `")
    
    es_part = block[es_start:en_start] if en_start != -1 else block[es_start:]
    en_part = block[en_start:] if en_start != -1 else ''
    
    es_expert = "<div class='expert-quote'>" in es_part or '<div class="expert-quote">' in es_part
    en_expert = "<div class='expert-quote'>" in en_part or '<div class="expert-quote">' in en_part
    es_tweet = "<div class='tweet-card'>" in es_part or '<div class="tweet-card">' in es_part
    en_tweet = "<div class='tweet-card'>" in en_part or '<div class="tweet-card">' in en_part
    
    print(f"{aid}: expert_es={es_expert}, expert_en={en_expert}, tweet_es={es_tweet}, tweet_en={en_tweet}")