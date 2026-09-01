import re

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find("export const blogPosts: BlogPost[] = [")
if start == -1:
    print("No blogPosts found")
    exit()
end = text.find("];", start)
if end == -1:
    print("No closing bracket found")
    exit()

header = text[:start]
body = text[start:end+1]  # includes ];
footer = text[end+2:]

# Parse post objects by finding matching braces
posts_objects = []
pos = 0
while pos < len(body):
    idx = body.find('{', pos)
    if idx == -1:
        break
    depth = 0
    start_idx = idx
    for i in range(idx, len(body)):
        if body[i] == '{':
            depth += 1
        elif body[i] == '}':
            depth -= 1
            if depth == 0:
                post_text = body[start_idx:i+1]
                # Extract date from this post
                date_match = re.search(r"date:\s*'([^']+)'", post_text)
                if date_match:
                    post_date = date_match.group(1)
                    # Keep only if date < 2026-08-27
                    if post_date < '2026-08-27':
                        posts_objects.append(post_text)
                else:
                    # Keep posts without date (just in case)
                    posts_objects.append(post_text)
                pos = i + 1
                break
    else:
        break

print(f"Posts kept (before 2026-08-27): {len(posts_objects)}")

# Rebuild body
# Find prefix text before first post
first_post_start = text.find('{', start)
prefix = text[start:first_post_start]

new_body_content = prefix + ",\n".join(posts_objects)
new_body = new_body_content + "\n];"
new_text = header + new_body + footer

with open('src/translations.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)
print(f"Successfully removed 3 articles dated 2026-08-27 or later.")
print(f"Remaining articles: {len(posts_objects)}")