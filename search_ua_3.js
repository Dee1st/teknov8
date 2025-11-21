
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

let index = content.indexOf(' node-');
while (index !== -1) {
    // Check context
    const snippet = content.substring(index - 50, index + 100);
    // We want to see if it looks like the UA string
    // It should have `vercel` before it maybe?
    if (snippet.includes('vercel')) {
        console.log(`Found 'vercel ... node-' at ${index}`);
        console.log(snippet);
    }
    index = content.indexOf(' node-', index + 1);
}
