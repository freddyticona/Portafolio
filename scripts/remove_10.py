import re

with open('src/translations.ts', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('export const blogPosts: BlogPost[] = [')
if start == -1:
    print("No blogPosts found")
    exit()
end = text.find('];', start)
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
                posts_objects.append(post_text)
                pos = i + 1
                break
    else:
        break

print(f"Total post objects found: {len(posts_objects)}")

# Remove last 10
if len(posts_objects) > 10:
    keep = posts_objects[:-10]
    # Find prefix text before first post
    first_post_start = text.find('{', start)
    prefix = text[start:first_post_start]
    
    new_body_content = prefix + ",\n".join(keep)
    new_body = new_body_content + "\n];"
    new_text = header + new_body + footer
    
    with open('src/translations.ts', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print(f"Successfully removed 10 posts. Remaining: {len(keep)}")
else:
    print("Fewer than 10 posts found, nothing removed.")