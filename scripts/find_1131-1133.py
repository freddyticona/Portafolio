import re

# Read the file with utf-8 encoding
with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Search specifically for articles 1131, 1132, 1133
for aid in ['1131', '1132', '1133']:
    # Find the article block
    # Try pattern with simple string formatting
    pattern = "{.*?id: '+" + aid + r"',.*?\n  },"
    m = re.search(pattern, content, re.DOTALL)
    if not m:
        # Try alt with different pattern
        pattern = "(?s)\\{.*?id: '%s',.*?\\n  }," % aid
        m = re.search(pattern, content)
    
    if m:
        block = m.group(0)
        # Extract h2.report-chapter
        h2_matches = re.findall(r'<h2 class="report-chapter"[^>]*>(.*?)</h2>', block, re.DOTALL)
        print(f"\nArticulo {aid}: {len(h2_matches)} h2.report-chapter")
        for i, h2 in enumerate(h2_matches):
            clean = re.sub(r'<[^>]+>', '', h2).strip()
            print(f"  H2 {i+1}: '{clean}'")
        
        # Also extract title
        title_m = re.search(r"titleEs: .\x60([^\x60]+)\x60", block)
        title = title_m.group(1) if title_m else 'N/A'
        print(f"  Titulo: {title[:80]}...")
    else:
        print(f"\nArticulo {aid}: NOT FOUND")