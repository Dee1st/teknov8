
const os = require('os');

// Save original
const originalPlatform = os.platform;
const originalArch = os.arch;

// Patch
os.platform = () => 'linux';
os.arch = () => 'x64';

// Also patch process.platform just in case
Object.defineProperty(process, 'platform', {
    value: 'linux'
});

console.log('Patched os.platform() to return linux');

// Run Vercel
require('./node_modules/vercel/dist/index.js');
