
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

// Search for platform + arch construction
// Look for " (" or " ("
// It might be minified, so spaces might be gone or different.

// Try to find the definition of the userAgent variable found at 2066992
// We'll look backwards from there.
const targetIndex = 2066992;
console.log("Context around user-agent usage:");
console.log(content.substring(targetIndex - 500, targetIndex + 100));

// Search for "vercel " string which is likely part of the UA
let index = content.indexOf('vercel ');
while (index !== -1) {
    // Check if it looks like a UA string construction
    const snippet = content.substring(index, index + 50);
    if (snippet.includes('node-')) {
        console.log(`Found 'vercel ... node-' at ${index}`);
        console.log(content.substring(index - 50, index + 150));
    }
    index = content.indexOf('vercel ', index + 1);
}
