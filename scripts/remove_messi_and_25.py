import os
import re

# 1. Remove Messi Special Page file if exists
messi_page_path = 'src/pages/MessiEspecialPage.tsx'
if os.path.exists(messi_page_path):
    os.remove(messi_page_path)
    print("Deleted MessiEspecialPage.tsx")

# 2. Update src/types.ts
types_path = 'src/types.ts'
with open(types_path, 'r', encoding='utf-8') as f:
    types_content = f.read()

types_content = types_content.replace(" | 'messi-adios-seleccion'", "")
with open(types_path, 'w', encoding='utf-8') as f:
    f.write(types_content)
print("Updated src/types.ts")

# 3. Update src/lib/seo.ts
seo_path = 'src/lib/seo.ts'
with open(seo_path, 'r', encoding='utf-8') as f:
    seo_content = f.read()

# Remove 'messi-adios-seleccion': { ... },
# Let's use regex to remove that block
seo_content = re.sub(r"\s*'messi-adios-seleccion':\s*\{[^}]+\},\s*", "", seo_content, flags=re.DOTALL)
with open(seo_path, 'w', encoding='utf-8') as f:
    f.write(seo_content)
print("Updated src/lib/seo.ts")

# 4. Update src/App.tsx
app_path = 'src/App.tsx'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

app_content = app_content.replace("const MessiEspecialPage = lazy(() => import('./pages/MessiEspecialPage'));\n", "")
app_content = app_content.replace("        'eclipse-2026', 'messi-adios-seleccion',\n", "        'eclipse-2026',\n")
app_content = app_content.replace("        'eclipse-2026', 'messi-adios-seleccion'\n", "        'eclipse-2026'\n")

# Remove case 'messi-adios-seleccion': ... break; or return
app_content = re.sub(r"\s*case 'messi-adios-seleccion':\s*return\s*\(\s*<MessiEspecialPage[^>]+/>\s*\);\s*", "", app_content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
print("Updated src/App.tsx")

# 5. Remove last 25 blog posts from src/translations.ts
trans_path = 'src/translations.ts'
with open(trans_path, 'r', encoding='utf-8') as f:
    trans_content = f.read()

start = trans_content.find('export const blogPosts: BlogPost[] = [')
end = trans_content.find('];', start)
array_header = trans_content[:start]
array_body = trans_content[start:end]
array_footer = trans_content[end:]

# Each post starts with '{' and ends with '}' (or similar)
# Let's split by post objects or parse them
# Since each post in blogPosts is an object `{ ... },`, let's find all object boundaries
# Or even simpler: find all occurrences of '{' at the top level of array_body
posts = []
brace_depth = 0
current_post = []
in_post = False

# Let's parse posts by matching object braces
# Better yet, since each post is separated by commas, let's find each post block
# Let's find all indices where a post starts (lines starting with '  {')
lines = array_body.split('\n')
post_blocks = []
current_block = []

for line in lines:
    if line.strip() == '{' or line.strip() == '{' and not current_block:
        if current_block:
            post_blocks.append('\n'.join(current_block))
            current_block = []
        current_block.append(line)
    elif line.strip() == '},' or line.strip() == '}':
        current_block.append(line)
        post_blocks.append('\n'.join(current_block))
        current_block = []
    else:
        current_block.append(line)

print(f"Total post blocks parsed: {len(post_blocks)}")
# Remove last 25
if len(post_blocks) > 25:
    remaining_posts = post_blocks[:-25]
else:
    remaining_posts = []

new_array_body = 'export const blogPosts: BlogPost[] = [\n' + '\n'.join(remaining_posts) + '\n'
new_trans_content = array_header + new_array_body + array_footer

with open(trans_path, 'w', encoding='utf-8') as f:
    f.write(new_trans_content)
print(f"Removed last 25 articles. Remaining: {len(remaining_posts)}")
