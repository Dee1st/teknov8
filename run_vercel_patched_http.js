
const http = require('http');
const https = require('https');

const patchRequest = (originalRequest) => {
    return function (...args) {
        let options = args[0];
        if (typeof args[0] === 'string' || args[0] instanceof URL) {
            options = args[1] || {};
        }

        if (options && options.headers) {
            // Headers might be an object or null
            // We need to be careful not to break things
            try {
                const headers = options.headers;
                const keys = Object.keys(headers);
                for (const key of keys) {
                    if (key.toLowerCase() === 'user-agent') {
                        const val = headers[key];
                        if (typeof val === 'string' && (val.includes('(') || val.includes(')'))) {
                            // Replace invalid characters with empty string or safe chars
                            headers[key] = val.replace(/\(/g, '-').replace(/\)/g, '-');
                            // console.log(`Patched User-Agent: ${headers[key]}`);
                        }
                    }
                }
            } catch (e) {
                // ignore
            }
        }

        return originalRequest.apply(this, args);
    };
};

http.request = patchRequest(http.request);
https.request = patchRequest(https.request);

console.log("Patched http/https request for User-Agent");

require('./node_modules/vercel/dist/index.js');
