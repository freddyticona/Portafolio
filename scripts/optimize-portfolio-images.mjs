import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  'che-la-higuera', 'aniversario-potosi', 'trinidad-bolivia', 'plantas-energia',
  'gran-poder', 'brasil-la-poderosa', 'world-atomic-week', 'la-estrella', 'documental-tipnis'
];

(async () => {
  let totalOrig = 0, totalNew = 0;
  for (const d of dirs) {
    const folder = `public/images/portfolio/${d}`;
    if (!fs.existsSync(folder)) continue;
    for (const f of fs.readdirSync(folder)) {
      if (!f.match(/\.(webp|jpg|jpeg)$/i)) continue;
      const src = path.join(folder, f);
      const buf = fs.readFileSync(src);
      const meta = await sharp(buf).metadata();
      if (meta.width > 1280) {
        const newBuf = await sharp(buf)
          .resize({ width: 1280, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75 })
          .toBuffer();
        fs.writeFileSync(src, newBuf);
        const orig = buf.length, neu = newBuf.length;
        totalOrig += orig; totalNew += neu;
        console.log(`${d}/${f}: ${Math.round(orig/1024)}KB -> ${Math.round(neu/1024)}KB`);
      }
    }
  }
  console.log(`\nTOTAL: ${Math.round(totalOrig/1024)}KB -> ${Math.round(totalNew/1024)}KB (-${Math.round((1 - totalNew/totalOrig)*100)}%)`);
})();
