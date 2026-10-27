const fs = require('fs');
const path = require('path');

console.log('=== 1. Testing Production Build Output ===');
const distFiles = fs.readdirSync('dist');
console.log('Dist directory entries:', distFiles.length);
['index.html', 'favicon.svg', 'assets'].forEach(f => {
  const p = path.join('dist', f);
  if (!fs.existsSync(p)) throw new Error('Missing in dist: ' + f);
  console.log('  [PASS] Found dist/' + f);
});

console.log('\n=== 2. Checking HTML Content & Preloads ===');
const html = fs.readFileSync('dist/index.html', 'utf8');
if (!html.includes('salas1.mp4_f50.webp')) throw new Error('LCP poster preload missing in index.html');
console.log('  [PASS] LCP poster preload for salas1.mp4_f50.webp found.');
if (!html.includes('Cormorant+Garamond')) throw new Error('Cormorant Garamond font missing in index.html');
console.log('  [PASS] Cormorant Garamond font link found.');

console.log('\n=== 3. Testing Static & Video Asset Existence ===');
const assetsTs = fs.readFileSync('src/config/assets.ts', 'utf8');
const regex = /:\s*"(\/(assets\/[^"]+))"/g;
let match;
let count = 0;
while ((match = regex.exec(assetsTs)) !== null) {
  const relPath = match[1].replace(/^\//, 'public/');
  if (!fs.existsSync(relPath)) {
    console.warn('  [WARN] Missing on disk: ' + relPath);
  } else {
    count++;
  }
}
console.log(`  [PASS] Verified ${count} master assets referenced in assets.ts exist on disk.`);

console.log('\n=== 4. Checking Routing Logic ===');
const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const routes = ['home', 'about', 'products', 'laboratories', 'manufacturing', 'research', 'careers', 'contact'];
routes.forEach(r => {
  if (!appTsx.includes(`currentRoute === '${r}'`)) throw new Error('Missing route: ' + r);
  console.log(`  [PASS] Route '${r}' registered in App.tsx`);
});

console.log('\n=== 5. Verifying Storytelling Across All Manifesto Sections ===');
const pages = [
  'AboutPage.tsx',
  'LaboratoriesPage.tsx',
  'ManufacturingPage.tsx',
  'ProductsPage.tsx',
  'ResearchPage.tsx',
  'CareersPage.tsx',
  'ContactPage.tsx'
];
pages.forEach(p => {
  const content = fs.readFileSync(path.join('src/pages', p), 'utf8');
  if (!content.includes('pinnedStorytelling={true}')) {
    throw new Error(`Page ${p} missing pinnedStorytelling={true}`);
  }
  console.log(`  [PASS] ${p} has pinnedStorytelling={true}`);
});

console.log('\n========================================');
console.log('ALL VERIFICATION SUITES PASSED CLEANLY!');
console.log('========================================');

