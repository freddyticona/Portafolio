import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

def extract_article(aid):
    start_marker = f"id: '{aid}'"
    pos = content.find(start_marker)
    if pos == -1:
        return None
    
    # Find next "id: '" after this
    next_id_pos = content.find("id: '", pos + 10)
    if next_id_pos == -1:
        next_id_pos = len(content)
    
    block = content[pos:next_id_pos]
    # Find the }, that closes this article
    last_brace = block.rfind("},")
    if last_brace != -1:
        block = block[:last_brace + 2]
    return block

# Check key articles with correct backtick patterns
for aid in ['1132', '1133', '1155', '1156', '1157', '1158', '1159', '1160', '1161', '1162', '1163']:
    block = extract_article(aid)
    if block:
        # Extract titleEs (backticks)
        title_m = re.search(r"titleEs: .`([^`]+)`", block)
        title = title_m.group(1) if title_m else 'N/A'
        
        # Extract excerptEs
        excerpt_m = re.search(r"excerptEs: .`([^`]+)`", block)
        excerpt = excerpt_m.group(1) if excerpt_m else 'N/A'
        
        # Extract contentEs - first 500 chars
        content_m = re.search(r"contentEs: .`([^`]{0,500})`", block)
        content_preview = content_m.group(1) if content_m else 'N/A'
        
        # Check for h2.report-chapter
        h2s = re.findall(r'<h2 class="report-chapter"[^>]*>([^<]+)</h2>', content_preview)
        has_chapters = len(h2s) > 0
        
        # Check for editorial components
        has_stat = 'stat-grid' in content_preview
        has_tweet = 'tweet-card' in content_preview
        has_expert = 'expert-quote' in content_preview
        has_figure = 'report-figure' in content_preview
        has_conclusion = 'Conclusi' in content_preview or 'conclusi' in content_preview.lower()
        
        # Check for [REU] placeholders
        has_reu = '[REU]' in block
        
        # Check for filler language
        has_fill = any(p in content_preview.lower() for p in ['condiciones climáticas adversas', 'comunidad internacional'])
        
        print(f"\n=== ARTICULO {aid} ===")
        print(f"Titulo: {title[:80]}")
        print(f"Excerpt: {excerpt[:100]}")
        print(f"Contiene 'Capítulo' en h2: {has_chapters}")
        if has_chapters:
            print(f"  h2s: {h2s[:3]}")
        print(f"Stat-grid: {has_stat}, Tweet: {has_tweet}, Expert: {has_expert}, Figure: {has_figure}, Conclusion: {has_conclusion}")
        print(f"[REU] placeholder: {has_reu}")
        print(f"Lenguaje fill: {has_fill}")
        print(f"Preview: {content_preview[:200]}...")
    else:
        print(f"\n=== ARTICULO {aid}: NOT FOUND ===")