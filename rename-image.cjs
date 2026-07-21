const fs = require('fs');
const path = require('path');

const oldName = 'Abrigo para manual conteudo tecnico.jpg';
const newName = 'abrigo-manual-conteudo-tecnico.jpg';

const oldPath = path.join('./public/images/conteudos', oldName);
const newPath = path.join('./public/images/conteudos', newName);

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('Renamed image');
}

// Update JSON
const jsonFile = './public/cms-content.json';
if (fs.existsSync(jsonFile)) {
  let content = fs.readFileSync(jsonFile, 'utf8');
  content = content.replace(/Abrigo para manual conteudo tecnico\.jpg/g, newName);
  fs.writeFileSync(jsonFile, content);
  console.log('Updated JSON');
}

// Update TS
const tsFile = './src/data/defaultArticles.ts';
if (fs.existsSync(tsFile)) {
  let content = fs.readFileSync(tsFile, 'utf8');
  content = content.replace(/Abrigo para manual conteudo tecnico\.jpg/g, newName);
  fs.writeFileSync(tsFile, content);
  console.log('Updated TS');
}
