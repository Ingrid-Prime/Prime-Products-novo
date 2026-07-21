const fs = require('fs');
const path = require('path');

const target = "Reguladores Hidráulicos Alta Pressão";
const replacement = "Reguladores Hidráulicos";

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let count = 0;
walkDir('c:/Site-prime-products/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes(target)) {
      content = content.split(target).join(replacement);
      fs.writeFileSync(filePath, content);
      console.log(`Reverted in ${filePath}`);
      count++;
    }
  }
});
console.log(`Total files updated: ${count}`);
