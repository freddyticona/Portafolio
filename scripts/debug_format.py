import re

with open('src/translations.ts', encoding='utf-8') as f:
    content = f.read()

# Let's look at a small section around article 1132 to understand the format
pos = content.find("id: '1132'")
if pos == -1:
    pos = content.find('id: "1132"')
if pos == -1:
    # Try with backticks
    pos = content.find("id: `1132`")

print(f"Position of 1132: {pos}")

if pos != -1:
    # Show context
    print(content[pos:pos+500])
    print("---")
    # Also check for titleEs pattern
    title_pos = content.find("titleEs:", pos)
    if title_pos != -1 and title_pos < pos + 500:
        print(content[title_pos:title_pos+200])