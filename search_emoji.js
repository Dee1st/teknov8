
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

// Search for smirking face emoji
let index = content.indexOf('😏');
if (index !== -1) {
    console.log(`Found emoji at ${index}`);
}

// Search for unicode escape
// \uD83D\uDE0F
index = content.indexOf('\\uD83D\\uDE0F');
if (index !== -1) {
    console.log(`Found unicode escape at ${index}`);
}

// Search for hex bytes? (UTF-8: F0 9F 98 8F)
// Hard to do with string search.

// Search for "TypeError: " string in the file to see if it's a custom error
index = content.indexOf('TypeError: ');
if (index !== -1) {
    console.log(`Found 'TypeError: ' at ${index}`);
    console.log(content.substring(index, index + 100));
}
