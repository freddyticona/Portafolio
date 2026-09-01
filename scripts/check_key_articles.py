import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Check specific article blocks - use a simpler approach
# Find the exact content for specific IDs by looking for their complete block
# Strategy: find "id: '1132'" and extract until the next "id: '1133'" or end of section

def extract_article(aid):
    # Find the position of id: 'aid'
    start_marker = f"id: '{aid}'"
    pos = content.find(start_marker)
    if pos == -1:
        return None
    
    # Find the end of this article block - look for next "id: '" or closing "},"
    # We need to find the matching }, at the same nesting level
    # Simple approach: find next "id: '" after this one
    next_id_pos = content.find("id: '", pos + 10)
    if next_id_pos == -1:
        next_id_pos = len(content)
    
    # But we need to find the }, that closes this article
    # Look for "}," pattern
    end_marker = "},"
    # Find the }, that comes after this id but before next id
    block = content[pos:next_id_pos]
    # Find last }, in this block
    last_brace = block.rfind("},")
    if last_brace != -1:
        block = block[:last_brace + 2]
    return block

# Check key articles
for aid in ['1132', '1133', '1155', '1156', '1157', '1158', '1159', '1160', '1161', '1162', '1163']:
    block = extract_article(aid)
    if block:
        # Extract titleEs
        title_m = re.search(r"titleEs: .\x60([^\x60]+)\x60", block)
        title = title_m.group(1) if title_m else 'N/A'
        
        # Extract excerptEs
        excerpt_m = re.search(r"excerptEs: .\x60([^\x60]+)\x60", block)
        excerpt = excerpt_m.group(1) if excerpt_m else 'N/A'
        
        # Extract contentEs - first 200 chars
        content_m = re.search(r"contentEs: .\x60([^\x60]{0,300})\x60", block)
        content_preview = content_m.group(1) if content_m else 'N/A'
        
        # Check for h2.report-chapter
        h2s = re.findall(r'<h2 class="report-chapter"[^>]*>([^<]+)</h2>', content_preview)
        has_chapters = len(h2s) > 0
        
        # Check for stat-grid
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
        print(f"  h2s: {h2s[:3]}")
        print(f"Stat-grid: {has_stat}, Tweet: {has_tweet}, Expert: {has_expert}, Figure: {has_figure}, Conclusion: {has_conclusion}")
        print(f"[REU] placeholder: {has_reu}")
        print(f"Lenguaje fill: {has_fill}")
        print(f"Preview: {content_preview[:150]}...")
    else:
        print(f"\n=== ARTICULO {aid}: NOT FOUND ===")