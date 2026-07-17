import fs from 'fs';
import path from 'path';

const xml = fs.readFileSync('c:/Site-prime-products/leeg_docx_extracted/word/document.xml', 'utf8');
const relsXml = fs.readFileSync('c:/Site-prime-products/leeg_docx_extracted/word/_rels/document.xml.rels', 'utf8');

// Parse relations
const rels = {};
const relMatches = relsXml.matchAll(/Id="([^"]+)"\s+.*?Target="([^"]+)"/g);
for (const match of relMatches) {
  rels[match[1]] = match[2];
}

// Find rows
const rows = xml.split('<w:tr');
const imgOrder = [];

// Skip first part which is before any row
for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const cells = row.split('<w:tc');
  // First cell is index 1 because index 0 is before the first cell
  // Wait, Product is column 1 (index 1), Image is column 2 (index 2).
  // Let's check the user's screenshot:
  // Compact Pressure Transmitter: Product, Image, Description
  // Industrial Pressure Transmitter: Product, Image, Description, Certificate
  // Yes! The image is in the SECOND column.
  if (cells.length > 2) {
    const imgCell = cells[2];
    const imgMatches = imgCell.match(/r:embed="([^"]+)"/);
    if (imgMatches) {
      const rId = imgMatches[1];
      const target = rels[rId];
      if (target) {
        // target is like media/image3.jpeg
        const filename = target.split('/').pop();
        imgOrder.push(filename);
      }
    } else {
       imgOrder.push("NO_IMAGE");
    }
  }
}

console.log(JSON.stringify(imgOrder, null, 2));
