import fs from 'fs';

const content = fs.readFileSync('src/config/assets.ts', 'utf8');
const regex = /"(\/(assets|favicon)[^"]+)"/g;
let match;
const paths = new Set();
while ((match = regex.exec(content)) !== null) {
  paths.add(match[1]);
}
console.log('Testing', paths.size, 'paths in assets.ts...');
let missing = 0;
for (const p of paths) {
  const local = 'public' + p;
  if (!fs.existsSync(local)) {
    console.log('MISSING:', p, '-> local path:', local);
    missing++;
  }
}
if (missing === 0) {
  console.log('SUCCESS: All', paths.size, 'assets configured in assets.ts exist on disk in public/!');
}
