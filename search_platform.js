
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

let index = content.indexOf('os.platform()');
if (index !== -1) {
    console.log(`Found 'os.platform()' at ${index}`);
    console.log(content.substring(index - 50, index + 100));
}

index = content.indexOf('process.platform');
if (index !== -1) {
    console.log(`Found 'process.platform' at ${index}`);
    console.log(content.substring(index - 50, index + 100));
}

// Search for where it might be imported
// var os = require('os');
// os.platform()
