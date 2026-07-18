const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Site-prime-products/src';
const publicDir = 'c:/Site-prime-products/public';
const imagesDir = path.join(publicDir, 'images');

const analysisPath = 'c:/Site-prime-products/scripts/image_analysis.json';
const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

// Find files to update
function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            if (filePath.match(/\.(tsx?|jsx?|css|html|json)$/i)) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

const allFilesToSearch = getAllFiles(srcDir);
allFilesToSearch.push(path.join(publicDir, 'cms-content.json'));

let movedCount = 0;
let updatedFilesCount = 0;

// Read all file contents into memory
const fileContents = {};
allFilesToSearch.forEach(f => {
    fileContents[f] = fs.readFileSync(f, 'utf8');
});

Object.keys(analysis).forEach(img => {
    const data = analysis[img];
    
    // Only move if status is used (A or B) and targetFolder is set
    if ((data.status === 'A' || data.status === 'B') && data.targetFolder) {
        const sourcePath = path.join(imagesDir, img);
        const targetDir = path.join(imagesDir, data.targetFolder);
        const targetPath = path.join(targetDir, img);
        
        // 1. Move file
        if (fs.existsSync(sourcePath)) {
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.renameSync(sourcePath, targetPath);
            movedCount++;
        }
        
        // 2. Replace references in code
        // We replace '/images/img' with '/images/targetFolder/img'
        // Also look for just 'img' in cms-content.json maybe?
        // Actually, cms-content.json uses '/images/img'.
        
        const oldRef = `/images/${img}`;
        const newRef = `/images/${data.targetFolder}/${img}`;
        
        Object.keys(fileContents).forEach(f => {
            if (fileContents[f].includes(oldRef)) {
                fileContents[f] = fileContents[f].split(oldRef).join(newRef);
            }
            
            // For cms-content.json, sometimes it just says "image": "img" ? No, it has "/images/" usually. 
            // Just to be safe, if we find exact string match "img" we could replace it, but only in JSON? 
            // No, the grep showed it's consistently using `/images/`. Let's stick to oldRef.
        });
    }
});

// Remove ghost references in ProductDetail.tsx
const pdPath = path.join(srcDir, 'pages/products/ProductDetail.tsx');
if (fileContents[pdPath]) {
    fileContents[pdPath] = fileContents[pdPath].replace(/, '\/images\/valvulas-industriais\/image2\.jpg'/g, '');
    fileContents[pdPath] = fileContents[pdPath].replace(/, '\/images\/valvulas-industriais\/image3\.jpg'/g, '');
}

// Write back updated files
Object.keys(fileContents).forEach(f => {
    const original = fs.readFileSync(f, 'utf8');
    if (original !== fileContents[f]) {
        fs.writeFileSync(f, fileContents[f], 'utf8');
        updatedFilesCount++;
    }
});

console.log(`Moved ${movedCount} images.`);
console.log(`Updated ${updatedFilesCount} files.`);
