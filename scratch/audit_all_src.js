import fs from 'fs';
import path from 'path';

function checkFiles(dir) {
  const files = fs.readdirSync(dir);
  let missing = 0;
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      missing += checkFiles(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      const regex = /["'](\/(assets|favicon)[^"']+)["']/g;
      let m;
      while ((m = regex.exec(code)) !== null) {
        const assetPath = m[1].split(' ')[0]; // in case of srcset
        const local = 'public' + assetPath;
        if (!fs.existsSync(local)) {
          console.log(`MISSING in ${f}: ${assetPath}`);
          missing++;
        }
      }
    }
  }
  return missing;
}

const totalMissing = checkFiles('src');
if (totalMissing === 0) {
  console.log('SUCCESS: All asset references across all source files (.tsx/.ts) exist on disk!');
} else {
  console.log(`Found ${totalMissing} missing references.`);
}
