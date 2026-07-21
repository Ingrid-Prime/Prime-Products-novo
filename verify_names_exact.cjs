const fs = require('fs');
const path = require('path');

const contentDetail = fs.readFileSync('c:/Site-prime-products/src/pages/products/ProductDetail.tsx', 'utf-8');
const linesDetail = contentDetail.split('\n');
const canonical = {};
linesDetail.forEach(line => {
  const idMatch = line.match(/^\s*'([^']+)':\s*\{\s*name:\s*'([^']+)'/);
  if (idMatch) {
    canonical['/produto/' + idMatch[1]] = idMatch[2];
  }
});

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const mismatches = [];

walkDir('c:/Site-prime-products/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const content = fs.readFileSync(filePath, 'utf-8');
    for (const [prodPath, expectedName] of Object.entries(canonical)) {
      if (content.includes(prodPath)) {
        const lines = content.split('\n');
        lines.forEach((line, i) => {
          // Check for { name: '...' } pattern or { label: '...' } in navItems
          let match = line.match(/name:\s*['"]([^'"]+)['"]/);
          if (!match) match = line.match(/label:\s*['"]([^'"]+)['"]/);
          
          if (line.includes(prodPath) && match) {
            const actualName = match[1];
            if (actualName !== expectedName) {
              mismatches.push(`${filePath}:${i+1} - Expected: "${expectedName}", Actual: "${actualName}"`);
            }
          }
        });
      }
    }
  }
});

fs.writeFileSync('c:/Site-prime-products/mismatches.txt', mismatches.join('\n'));
console.log('Mismatches found:', mismatches.length);
