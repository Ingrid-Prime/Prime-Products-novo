const fs = require('fs');
const path = require('path');

const wordDir = 'c:/Site-prime-products/public/ARQUIVO/tkf_temp/word';
const xml = fs.readFileSync(path.join(wordDir, 'document.xml'), 'utf8');
const relsXml = fs.readFileSync(path.join(wordDir, '_rels/document.xml.rels'), 'utf8');
const mediaDir = path.join(wordDir, 'media');
const outputDir = 'c:/Site-prime-products/public/images/produtos/conexao-para-instrumentacao';

// Parse relations
const rels = {};
const relRegex = /Id="(rId\d+)".*?Target="(.*?)"/g;
let match;
while ((match = relRegex.exec(relsXml)) !== null) {
  rels[match[1]] = match[2];
}

// In Word, tables are <w:tbl>, rows are <w:tr>, cells are <w:tc>
// We can split by <w:tc> (table cell) or <w:p> (paragraph)
// Let's just find the filenames in the text, and the nearest image!
// Actually, it's safer to extract all <w:t> contents and all <a:blip r:embed="rIdX"> from the XML.

const extractedFiles = [];
// Find all filenames with .png, .jpg, .jpeg
const textRegex = /<w:t>([a-zA-Z0-9_.-]+\.(?:png|jpg|jpeg))<\/w:t>/g;
const imgRegex = /<a:blip r:embed="(rId\d+)"/g;

// Instead of global search which loses order, let's tokenize the XML
const tokens = [];
const tokenRegex = /<w:t>([a-zA-Z0-9_.-]+\.(?:png|jpg|jpeg))<\/w:t>|<a:blip r:embed="(rId\d+)"/g;
while ((match = tokenRegex.exec(xml)) !== null) {
    if (match[1]) {
        tokens.push({ type: 'text', val: match[1] });
    } else if (match[2]) {
        tokens.push({ type: 'img', val: match[2] });
    }
}

// Now we match them up. Usually a filename is right before or right after the image in the same cell.
// Let's look for adjacent text/img pairs.
const map = {};
for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'text') {
        // Look for the closest image
        let closestImg = null;
        let dist = Infinity;
        // check ahead
        for (let j = i + 1; j < tokens.length && j < i + 3; j++) {
            if (tokens[j].type === 'img') {
                closestImg = tokens[j].val;
                break;
            }
        }
        // check behind
        for (let j = i - 1; j >= 0 && j > i - 3; j--) {
            if (tokens[j].type === 'img') {
                closestImg = tokens[j].val;
                break;
            }
        }
        
        if (closestImg && rels[closestImg]) {
            map[tokens[i].val] = rels[closestImg];
        }
    }
}

let count = 0;
for (const [filename, relPath] of Object.entries(map)) {
    const srcPath = path.join(wordDir, relPath.replace('/', '\\'));
    const destPath = path.join(outputDir, filename);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        count++;
        extractedFiles.push(filename);
    }
}

console.log(JSON.stringify({
  count: count,
  files: extractedFiles,
  tokensLength: tokens.length
}, null, 2));
