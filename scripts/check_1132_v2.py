import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Extract article 1132 block
pos = content.find("id: '1132'")
next_id = content.find("id: '", pos + 10)
block = content[pos:next_id]
last_brace = block.rfind("},")
if last_brace != -1:
    block = block[:last_brace + 2]

# Find contentEs by looking for the pattern and then extracting until next field
# Pattern: contentEs: `<...>,\n    excerptEn: or similar
# The fields are in order: contentEs, excerptEn, contentEn, imageUrl, etc.

# Find start of contentEs
start = block.find("contentEs: `")
if start == -1:
    print("contentEs not found")
else:
    # Find the next field after contentEs - it should be excerptEn:
    # But contentEs can contain ` characters inside, so we need to find the closing ` that's followed by comma and newline and next field
    # Let's look for the pattern: `,\n    excerptEn:
    end_marker = "`,\n    excerptEn:"
    end = block.find(end_marker, start)
    if end == -1:
        # Try other patterns
        end_marker2 = "`,\n    contentEn:"
        end = block.find(end_marker2, start)
        if end == -1:
            end_marker3 = "`,\n    imageUrl:"
            end = block.find(end_marker3, start)
    
    if end != -1:
        full_content = block[start + len("contentEs: `"):end]
        print(f"Content length: {len(full_content)}")
        
        # Check for h2.report-chapter
        h2s = re.findall(r'<h2 class="report-chapter"[^>]*>([^<]+)</h2>', full_content)
        print(f"h2.report-chapter count: {len(h2s)}")
        for i, h2 in enumerate(h2s[:10]):
            print(f"  {i+1}. {h2.strip()}")
        
        # Check for other components
        print(f"\nstat-grid: {'stat-grid' in full_content}")
        print(f"tweet-card: {'tweet-card' in full_content}")
        print(f"expert-quote: {'expert-quote' in full_content}")
        print(f"report-figure: {'report-figure' in full_content}")
        print(f"[REU]: {'[REU]' in full_content}")
        
        # Check first few paragraphs
        paragraphs = re.findall(r'<p>([^<]+)</p>', full_content[:1000])
        print(f"\nPrimeros párrafos:")
        for i, p in enumerate(paragraphs[:5]):
            print(f"  {i+1}. {p[:150]}")
        
        # Check for "Capítulo" in any h2
        all_h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', full_content)
        capitulo_h2s = [h for h in all_h2s if 'Capítulo' in h or 'Chapter' in h]
        print(f"\nTodos los h2 con 'Capítulo': {len(capitulo_h2s)}")
        for h in capitulo_h2s[:10]:
            print(f"  {h.strip()}")
    else:
        print("Could not find end of contentEs")
        # Show context around start
        print(block[start:start+200])