
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

let index = content.indexOf('User-Agent');
if (index !== -1) {
    console.log(`Found 'User-Agent' at ${index}`);
    console.log(content.substring(index - 100, index + 200));
} else {
    console.log("Not found 'User-Agent'");
}

index = content.indexOf('user-agent');
if (index !== -1) {
    console.log(`Found 'user-agent' at ${index}`);
    console.log(content.substring(index - 100, index + 200));
}

// Search for the specific error string part
index = content.indexOf('win32 (x64)');
if (index !== -1) {
    console.log(`Found 'win32 (x64)' at ${index}`);
    console.log(content.substring(index - 100, index + 200));
}
