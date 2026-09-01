import pathlib, re
d = pathlib.Path('src/translations.ts').read_bytes()
# find Potosí article id 1140
i = d.find(b"id: '1140'")
seg = d[i:i+4000]
# find each \xff\xfd (U+FFFD)
positions = []
for j in range(len(seg)):
    if seg[j:j+3] == b'\xef\xbf\xbd':
        positions.append((j, i+j, seg[max(0,j-12):j+8]))
print('total replacement chars in potosi region:', len(positions))
for off, abspos, ctx in positions[:15]:
    print(off, abspos, ctx)
