import io, re

# Let's inspect the exact HTML templates for tweet-card and expert-quote from existing articles (e.g. 1134 or 1133)
with io.open('src/translations.ts', 'r', encoding='utf-8') as f:
    src = f.read()

pattern = re.compile(r"\{\s*\n    id: '1134',.*?\n  \},", re.DOTALL)
m = pattern.search(src)
if m:
    block = m.group(0)
    # find expert quote
    eq = re.search(r'<div class=[\'"]expert-quote[\'"].*?</div>\s*</div>', block, re.DOTALL)
    if eq:
        print("Expert quote sample:")
        print(eq.group(0))
    # find tweet card
    tc = re.search(r'<div class=[\'"]tweet-card[\'"].*?</div>\s*</div>', block, re.DOTALL)
    if tc:
        print("\nTweet card sample:")
        print(tc.group(0))
