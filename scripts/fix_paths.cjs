const fs = require('fs');
const path = require('path');

const publicImgDir = 'c:/Site-prime-products/public/images';
const srcDir = 'c:/Site-prime-products/src';
const cmsFile = 'c:/Site-prime-products/public/cms-content.json';

const actualImages = {};
function scanImages(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      scanImages(path.join(dir, item.name));
    } else {
      actualImages[item.name] = path.join(dir, item.name).replace(/\\/g, '/').split('/public')[1];
    }
  }
}
scanImages(publicImgDir);

const publicRoot = 'c:/Site-prime-products/public';
fs.readdirSync(publicRoot, { withFileTypes: true }).forEach(item => {
  if (!item.isDirectory() && (item.name.endsWith('.png') || item.name.endsWith('.jpg') || item.name.endsWith('.webp') || item.name.endsWith('.jpeg'))) {
    actualImages[item.name] = '/' + item.name;
  }
});

const updates = [];

function fixReferencesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  const regex = /\/images\/[a-zA-Z0-9_.\-\/ áéíóúÁÉÍÓÚãõÃÕçÇ]+(?:\.(?:png|jpg|jpeg|webp|gif))/g;
  let match;
  let matches = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push(match[0]);
  }
  
  const rootRegex = /\"\/[a-zA-Z0-9_.-]+\.(png|jpg|jpeg|webp|gif)\"/g;
  while ((match = rootRegex.exec(content)) !== null) {
    matches.push(match[0].replace(/"/g, ''));
  }
  
  matches = [...new Set(matches)];
  
  for (const oldPath of matches) {
    const filename = oldPath.split('/').pop();
    if (actualImages[filename] && actualImages[filename] !== oldPath) {
       const fullOldPhysical = path.join('c:/Site-prime-products/public', oldPath);
       if (!fs.existsSync(fullOldPhysical)) {
          content = content.split(oldPath).join(actualImages[filename]);
          updates.push({ file: filePath, old: oldPath, new: actualImages[filename] });
       }
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function scanAndFixCode(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      scanAndFixCode(path.join(dir, item.name));
    } else if (item.name.endsWith('.ts') || item.name.endsWith('.tsx') || item.name.endsWith('.json') || item.name.endsWith('.css')) {
      fixReferencesInFile(path.join(dir, item.name));
    }
  }
}

scanAndFixCode(srcDir);
fixReferencesInFile(cmsFile);

console.log(JSON.stringify(updates, null, 2));
