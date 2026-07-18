const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Site-prime-products/src';
const publicDir = 'c:/Site-prime-products/public';
const imagesDir = path.join(publicDir, 'images');

// 1. Get loose images
const looseImages = fs.readdirSync(imagesDir, {withFileTypes: true})
    .filter(dirent => dirent.isFile() && dirent.name.match(/\.(png|jpe?g|svg|webp|gif)$/i))
    .map(dirent => dirent.name);

console.log(`Found ${looseImages.length} loose images.`);

// 2. Read all text files in src and cms-content.json to find references
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

const fileContents = allFilesToSearch.map(file => ({
    file,
    content: fs.readFileSync(file, 'utf8')
}));

const imageMap = {};

looseImages.forEach(img => {
    imageMap[img] = {
        usedIn: [],
        status: 'E', // Sem uso confirmado
        targetFolder: null
    };
    
    fileContents.forEach(({file, content}) => {
        if (content.includes(img)) {
            // Found reference
            // convert Windows path to posix for easier matching
            const posixFile = file.replace(/\\/g, '/');
            imageMap[img].usedIn.push(posixFile);
            imageMap[img].status = 'A';
        }
    });
    
    if (imageMap[img].usedIn.length > 1) {
        imageMap[img].status = 'B';
    }
});

// Determine target folders based on where it's used or filename
Object.keys(imageMap).forEach(img => {
    const data = imageMap[img];
    if (data.status === 'E') return;
    
    // Logic for folder
    const usedInStr = data.usedIn.join(' ');
    let target = 'G'; // Pendente/Geral
    
    if (usedInStr.includes('/pages/solutions/') || img.startsWith('sol-')) {
        target = 'solucoes-integradas';
        if (img.includes('medicao') || usedInStr.includes('Medicao')) target += '/instrumentacao-medicao';
        else if (img.includes('analitica') || usedInStr.includes('Analitica')) target += '/instrumentacao-analitica';
        else if (img.includes('automacao') || usedInStr.includes('Automacao')) target += '/seguranca-automacao';
        else if (img.includes('redes') || img.includes('instalacao')) target += '/instalacao-redes-gases';
        else if (img.includes('skids')) target += '/skids-paineis';
        else if (img.includes('3d') || img.includes('engenharia')) target += '/engenharia-3d';
        else if (img.includes('testes') || img.includes('comissionamento')) target += '/testes-comissionamento';
    } else if (usedInStr.includes('/pages/applications/') || img.startsWith('app-')) {
        target = 'aplicacoes';
        if (img.includes('pesquisa') || img.includes('lab')) target += '/laboratorios-pesquisa';
        else if (img.includes('farma')) target += '/farmaceutica';
        else if (img.includes('alimento') || img.includes('alimenticia')) target += '/alimenticia';
        else if (img.includes('quimic') || img.includes('petroquimic')) target += '/quimica-petroquimica';
        else if (img.includes('hospital')) target += '/hospitalar';
        else if (img.includes('energia') || img.includes('hidrogenio')) target += '/energia-hidrogenio';
        else if (img.includes('auto')) target += '/automotiva';
        else if (img.includes('miner')) target += '/mineracao';
        else if (img.includes('criogenia')) target += '/criogenia';
        else if (img.includes('oleo') || img.includes('gas')) target += '/oleo-gas';
        else if (img.includes('metal')) target += '/metal-mecanica';
    } else if (usedInStr.includes('/pages/products/') || usedInStr.includes('catalog') || img.startsWith('prod-')) {
        target = 'produtos';
        if (img.includes('conex')) target += '/conexoes-instrumentacao';
        else if (img.includes('valvula')) target += '/valvulas-industriais';
        else if (img.includes('transmissor')) target += '/transmissores-pressao';
        else if (img.includes('calibracao')) target += '/reguladores-calibracao';
        else if (img.includes('especial')) target += '/reguladores-especiais';
        else if (img.includes('corte') || img.includes('solda')) target += '/corte-solda';
        else if (img.includes('cilindro')) {
            if (img.includes('aluminio')) target += '/cilindros-aluminio';
            else if (img.includes('tipo4') || img.includes('tipo-4')) target += '/cilindros-tipo-4';
            else target += '/cilindros';
        }
    } else if (usedInStr.includes('/pages/About.tsx') || img.includes('about') || img.includes('quem-somos')) {
        target = 'quem-somos';
    } else if (usedInStr.includes('/components/') || usedInStr.includes('Home') || img.includes('hero') || img.includes('banner')) {
        target = 'home';
    }
    
    data.targetFolder = target;
});

fs.writeFileSync('c:/Site-prime-products/scripts/image_analysis.json', JSON.stringify(imageMap, null, 2));
console.log('Analysis saved to image_analysis.json');
