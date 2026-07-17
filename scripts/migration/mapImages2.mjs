import fs from 'fs';

const xml = fs.readFileSync('c:/Site-prime-products/leeg_docx_extracted/word/document.xml', 'utf8');
const relsXml = fs.readFileSync('c:/Site-prime-products/leeg_docx_extracted/word/_rels/document.xml.rels', 'utf8');

const rels = {};
const relMatches = relsXml.matchAll(/Id="([^"]+)"\s+.*?Target="([^"]+)"/g);
for (const match of relMatches) {
  rels[match[1]] = match[2];
}

// Find all text and images in order
const parts = xml.split(/(<w:t>.*?<\/w:t>|<v:imagedata[^>]+r:id="[^"]+"|<a:blip[^>]+r:embed="[^"]+")/);
let currentText = "";
const output = [];

for (const part of parts) {
  if (part.startsWith('<w:t>')) {
    const text = part.replace('<w:t>', '').replace('</w:t>', '').trim();
    if (text) {
      currentText += text + " ";
    }
  } else if (part.includes('r:embed="') || part.includes('r:id="')) {
    const match = part.match(/r:(?:embed|id)="([^"]+)"/);
    if (match) {
      const rId = match[1];
      const target = rels[rId];
      if (target) {
        output.push({
          image: target.split('/').pop(),
          contextText: currentText.trim().substring(currentText.trim().length - 50) // last 50 chars before image
        });
        currentText = ""; // reset
      }
    }
  }
}

console.log(JSON.stringify(output, null, 2));
