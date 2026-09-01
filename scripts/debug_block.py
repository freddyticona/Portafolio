import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Check article 1132 - show raw block
pos = content.find("id: '1132'")
if pos != -1:
    next_id = content.find("id: '", pos + 10)
    block = content[pos:next_id]
    # Find the }, that closes it
    last_brace = block.rfind("},")
    if last_brace != -1:
        block = block[:last_brace + 2]
    
    print(f"Block length: {len(block)}")
    print(f"First 1000 chars:")
    print(block[:1000])
    print("---")
    print(f"Last 500 chars:")
    print(block[-500:])