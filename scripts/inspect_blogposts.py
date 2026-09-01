import re

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const blogPosts: BlogPost[] = [')
end = content.find('];', start)
array_text = content[start:end+2]

# Let's find all slugs or titles
slugs = re.findall(r"slug:\s*'([^']+)'", array_text)
print(f"Total blogPosts found: {len(slugs)}")
for i, s in enumerate(slugs[-35:]):
    print(f"{i+len(slugs)-35}: {s}")
