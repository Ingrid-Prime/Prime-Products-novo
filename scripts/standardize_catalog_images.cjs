const fs = require('fs');
const path = require('path');

const catalogsDir = 'c:/Site-prime-products/src/data/catalogs/products';
const items = fs.readdirSync(catalogsDir);

for (const item of items) {
  if (item.endsWith('.ts')) {
    const filePath = path.join(catalogsDir, item);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We want to remove: bg-white, rounded-sm, border, border-gray-100
    // and ensure it has: mix-blend-multiply transition-transform duration-300 hover:scale-125 (or hover:!scale-125)
    
    content = content.replace(/class="([^"]+)"/g, (match, classes) => {
        if (!classes.includes('object-contain')) return match; // skip non-images
        
        let newClasses = classes.split(' ').filter(c => 
            !['bg-white', 'rounded-sm', 'border', 'border-gray-100', 'mix-blend-multiply', 'transition-transform', 'duration-300', 'flex-shrink-0', 'hover:!scale-125', 'hover:scale-125'].includes(c)
        );
        
        newClasses.push('mix-blend-multiply', 'transition-transform', 'duration-300', 'flex-shrink-0', 'hover:!scale-125');
        
        return `class="${newClasses.join(' ')}"`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Catalogs standardized.');
