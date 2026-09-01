import re, pathlib

TS = pathlib.Path('src/translations.ts')
src = TS.read_text(encoding='utf-8')

# We'll rewrite content for articles 1106-1110 (Aug 25) and 1131-1133 (Aug 26) and 1154-1163 (Aug 27)
# First, let's find and understand the current content structure

# Check article 1106
pattern = r"id: '.1106.'" 
m = re.search(pattern, src)
if m:
    print(f"Article 1106 found at position {m.start()}")
    # Print a section to see the structure
    section = m.group(0)
    # Find where it ends
    end_pattern = r"\n  \},"
    end_m = re.search(end_pattern, section)
    if end_m:
        print(f"Article block length: {end_m.end()}")
        print(section[:200])
else:
    print("Article 1106 not found with simple pattern")
    # Try alternative
    m2 = re.search(r"\{.*?id: '.1106.',.*?\n  \}", re.DOTALL)
    if m2:
        print(f"Found with alt pattern, length: {len(m2.group(0))}")
        print(m2.group(0)[:300])