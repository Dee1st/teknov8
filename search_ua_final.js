
const fs = require('fs');
const path = 'node_modules/vercel/dist/index.js';
const content = fs.readFileSync(path, 'utf8');

let index = content.indexOf(' @ vercel');
if (index !== -1) {
    console.log(`Found ' @ vercel' at ${index}`);
    console.log(content.substring(index - 50, index + 100));
} else {
    console.log("Not found ' @ vercel'");
}
