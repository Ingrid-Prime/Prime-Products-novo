const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Site-prime-products/src';
const publicImagesDir = 'c:/Site-prime-products/public/images';
const arquivoDir = 'c:/Site-prime-products/public/images/arquivo';

// Ensure arquivo dir exists
if (!fs.existsSync(arquivoDir)) {
  fs.mkdirSync(arquivoDir, { recursive: true });
}

// 1. Scan all referenced images in src/
const referencedImages = new Set();

function scanSourceFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory()) {
      scanSourceFiles(fullPath);
    } else if (f.name.match(/\.tsx?$/)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/\/images\/[^'"`\s]+\.(png|jpe?g|webp|svg|gif)/ig);
      if (matches) {
        matches.forEach(m => {
          // Decode URL just in case (e.g. %20 -> space)
          const decoded = decodeURI(m);
          referencedImages.add(decoded.toLowerCase());
          
          // Also add non-decoded just in case
          referencedImages.add(m.toLowerCase());
        });
      }
      
      // Also look for strings that might have spaces and aren't caught by \s
      const stringMatches = content.match(/['"`]\/images\/([^'"`]+)['"`]/ig);
      if (stringMatches) {
        stringMatches.forEach(m => {
          let str = m.replace(/['"`]/g, '');
          referencedImages.add(str.toLowerCase());
          referencedImages.add(decodeURI(str).toLowerCase());
        });
      }
    }
  }
}
scanSourceFiles(srcDir);
console.log(`Found ${referencedImages.size} unique image references in src/`);

// 2. Scan all physical files in public/images/
const unreferencedFiles = [];

function scanPublicImages(dir) {
  // Skip the arquivo directory itself
  if (dir.toLowerCase() === arquivoDir.toLowerCase()) return;
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory()) {
      scanPublicImages(fullPath);
    } else if (f.isFile() && f.name.match(/\.(png|jpe?g|webp|svg|gif)$/i)) {
      // Calculate the URL path, e.g. /images/aplicacoes/automotivo.jpg
      const relativeToPublic = path.relative('c:/Site-prime-products/public', fullPath).replace(/\\/g, '/');
      const urlPath = '/' + relativeToPublic;
      
      if (!referencedImages.has(urlPath.toLowerCase())) {
        unreferencedFiles.push(fullPath);
      }
    }
  }
}
scanPublicImages(publicImagesDir);

// 3. Move unreferenced files to arquivo/
let movedCount = 0;
for (const file of unreferencedFiles) {
  const relativeToImages = path.relative(publicImagesDir, file);
  const destPath = path.join(arquivoDir, relativeToImages);
  
  // Create dest folder structure if needed
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  try {
    fs.renameSync(file, destPath);
    movedCount++;
    console.log(`Moved: ${relativeToImages}`);
  } catch (e) {
    console.error(`Error moving ${file}:`, e.message);
  }
}

console.log(`\nOperation complete. Moved ${movedCount} unused images to public/images/arquivo.`);
