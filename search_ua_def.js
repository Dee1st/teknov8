
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

const definitions = [
    'var userAgent =',
    'const userAgent =',
    'let userAgent =',
    'userAgent ='
];

for (const def of definitions) {
    let index = content.indexOf(def);
    if (index !== -1) {
        console.log(`Found '${def}' at ${index}`);
        console.log(content.substring(index, index + 200));
    }
}
