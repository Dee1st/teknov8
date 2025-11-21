
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

let index = content.indexOf(' (');
while (index !== -1) {
    const snippet = content.substring(index - 50, index + 50);
    // Look for something that looks like platform/arch
    if (snippet.includes('win32') || snippet.includes('process.platform') || snippet.includes('arch')) {
        console.log(`Found ' (' at ${index}`);
        console.log(snippet);
    }
    index = content.indexOf(' (', index + 1);
}
