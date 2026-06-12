const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if(file.endsWith('.tsx')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src/pages');
files.push('./src/components/EditableElement.tsx');

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    content = content.replace(/className="([^"]*object-cover[^"]*)"/g, (match, p1) => {
        if(!p1.includes('prime-image-standard')) {
            return `className="prime-image-standard ${p1}"`;
        }
        return match;
    });

    content = content.replace(/className=\{`([^`]*)object-cover([^`]*)`\}/g, (match, p1, p2) => {
        if(!p1.includes('prime-image-standard') && !p2.includes('prime-image-standard')) {
            return `className={\`prime-image-standard ${p1}object-cover${p2}\`}`;
        }
        return match;
    });

    content = content.replace(/className="([^"]*bg-secondary overflow-hidden[^"]*)"/g, (match, p1) => {
        if(!p1.includes('prime-bg-standard')) {
            return `className="prime-bg-standard ${p1}"`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});
console.log('Modified ' + count + ' files.');
