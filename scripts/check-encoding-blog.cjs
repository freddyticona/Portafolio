const fs = require('fs');
const files = ['src/data/blogPosts.ts'];
for (let i = 15; i <= 24; i++) files.push(`src/data/blogContent/group-${String(i).padStart(2, '0')}.ts`);
let bad = 0;
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const n = (s.match(/\uFFFD/g) || []).length;
  if (n) { bad++; console.log('REPLACEMENT CHARS', f, n); }
}
const s = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const i = s.indexOf('id: "1380"');
console.log(s.slice(i, i + 600));
console.log('--- group-15 ---');
const g = fs.readFileSync('src/data/blogContent/group-15.ts', 'utf8');
const j = g.indexOf('"1380"');
console.log(g.slice(j, j + 700));
console.log(bad === 0 ? 'ALL CLEAN' : 'PROBLEMS: ' + bad);
