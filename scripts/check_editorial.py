import re
d = open('src/translations.ts', encoding='utf-8').read()

# Check articles 1131-1133 content quality
for aid in ['1131','1132','1133']:
    m = re.search(r"id: '%s'.*?(?=\n  \{|\n  \])" % aid, d, re.DOTALL)
    if not m:
        print(f"{aid}: NOT FOUND")
        continue
    block = m.group(0)
    # Check for editorial elements
    has_stat_grid = 'stat-grid' in block
    has_tweet_card = 'tweet-card' in block
    has_expert_quote = 'expert-quote' in block
    has_report_chapter = 'report-chapter' in block
    has_figure = 'report-figure' in block
    title = re.search(r"titleEs: \x60([^\x60]{0,70})", block)
    title_str = title.group(1) if title else 'MISSING'
    img = re.search(r"imageUrl: '([^']+)'", block)
    img_str = img.group(1) if img else 'MISSING'
    date = re.search(r"date: '([^']+)'", block)
    date_str = date.group(1) if date else 'MISSING'
    
    print(f"\n=== Article {aid} ({date_str}) ===")
    print(f"  Title: {title_str}")
    print(f"  Image: {img_str}")
    print(f"  stat-grid: {has_stat_grid}")
    print(f"  tweet-card: {has_tweet_card}")
    print(f"  expert-quote: {has_expert_quote}")
    print(f"  report-chapter: {has_report_chapter}")
    print(f"  report-figure: {has_figure}")
