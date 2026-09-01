import re

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('export const blogPosts: BlogPost[] = [')
end = content.find('];', start)
array_text = content[start:end+2]
slugs = re.findall(r"slug:\s*'([^']+)'", array_text)
print(f"Total: {len(slugs)}")
print("Last 25 slugs to be removed:")
for s in slugs[-25:]:
    print(s)
