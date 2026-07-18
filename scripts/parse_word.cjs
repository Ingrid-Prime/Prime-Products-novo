const fs = require('fs');
const xml = fs.readFileSync('c:/Site-prime-products/ARQUIVO/gastron_docx/word/document.xml', 'utf8');

// Basic regex to strip XML tags and keep text
let text = xml.replace(/<\/w:p>/g, '\n') // Paragraphs to newlines
              .replace(/<[^>]+>/g, '')  // Remove other tags
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&')
              .replace(/^\s*[\r\n]/gm, ''); // Remove empty lines

fs.writeFileSync('c:/Site-prime-products/ARQUIVO/gastron_text.txt', text);
console.log('Extracted text to gastron_text.txt. Length:', text.length);
