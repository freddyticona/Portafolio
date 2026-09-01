import os
import re

# 1. Delete Messi special page
messi_page = 'src/pages/MessiEspecialPage.tsx'
if os.path.exists(messi_page):
    os.remove(messi_page)
    print("Deleted MessiEspecialPage.tsx")

# 2. Update src/types.ts
with open('src/types.ts', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(" | 'messi-adios-seleccion'", "")
with open('src/types.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated src/types.ts")

# 3. Update src/lib/seo.ts
with open('src/lib/seo.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the block for 'messi-adios-seleccion'
# It starts around 'messi-adios-seleccion': { and ends at the next top-level object or similar
pattern = r"\s*'messi-adios-seleccion':\s*\{[^}]+\},\s*"
content = re.sub(pattern, "\n", content, flags=re.DOTALL)
# If there are multiline objects inside seoConfigs for messi:
pattern_multi = r"\s*'messi-adios-seleccion':\s*\{.*?\},\s*\n"
content = re.sub(pattern_multi, "\n", content, flags=re.DOTALL)

with open('src/lib/seo.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated src/lib/seo.ts")

# 4. Update src/App.tsx
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("const MessiEspecialPage = lazy(() => import('./pages/MessiEspecialPage'));\n", "")
content = content.replace("        'eclipse-2026', 'messi-adios-seleccion',\n", "        'eclipse-2026',\n")
content = content.replace("        'eclipse-2026', 'messi-adios-seleccion'\n", "        'eclipse-2026'\n")

# Remove case 'messi-adios-seleccion': ...
content = re.sub(r"case 'messi-adios-seleccion':[\s\S]*?break;\s*", "", content)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated src/App.tsx")

# 5. Remove last 25 articles from src/translations.ts
with open('src/translations.ts', 'r', encoding='utf-8') as f:
    trans = f.read()

start_idx = trans.find('export const blogPosts: BlogPost[] = [')
end_idx = trans.find('];', start_idx)

header = trans[:start_idx]
body = trans[start_idx:end_idx+1] # includes closing ];
footer = trans[end_idx+2:]

# Extract individual blog post objects
# Each post object starts with '{' after the array opening and ends with '}' before the array closing
# Let's find all objects using regex matching start of post `{` to end of post `}`
# Since posts are objects, we can find all matches of pattern: r"\{\s*\n\s*id:[\s\S]*?\n  \}"
post_pattern = re.compile(r"\{\s*\n\s*id:.*?\n  \}", re.DOTALL)
matches = list(post_pattern.finditer(body))

print(f"Found {len(matches)} posts via regex")

if len(matches) > 25:
    # Keep all except last 25
    keep_matches = matches[:-25]
    # Rebuild body
    # Get text between start of array and first match
    first_match_start = matches[0].start()
    array_prefix = body[:first_match_start]
    
    new_posts_text = []
    for m in keep_matches:
        new_posts_text.append(m.group(0))
        
    new_body = array_prefix + ',\n'.join(new_posts_text) + '\n];'
    new_trans = header + new_body + footer
    
    with open('src/translations.ts', 'w', encoding='utf-8') as f:
        f.write(new_trans)
    print(f"Successfully removed last 25 posts. Remaining: {len(keep_matches)}")
else:
    print("Error: fewer than 25 posts found!")
