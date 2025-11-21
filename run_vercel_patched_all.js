
const http = require('http');
const https = require('https');

// Patch http/https
const patchRequest = (originalRequest) => {
    return function (...args) {
        let options = args[0];
        if (typeof args[0] === 'string' || args[0] instanceof URL) {
            options = args[1] || {};
        }

        if (options && options.headers) {
            try {
                const headers = options.headers;
                const keys = Object.keys(headers);
                for (const key of keys) {
                    if (key.toLowerCase() === 'user-agent') {
                        const val = headers[key];
                        if (typeof val === 'string') {
                            headers[key] = val.replace(/[\(\)]/g, '-');
                        }
                    }
                }
            } catch (e) { }
        }
        return originalRequest.apply(this, args);
    };
};

http.request = patchRequest(http.request);
https.request = patchRequest(https.request);

// Patch global fetch
const originalFetch = globalThis.fetch;
globalThis.fetch = function (url, options) {
    if (options && options.headers) {
        try {
            // Headers can be object or Headers instance
            if (options.headers instanceof Headers) {
                const val = options.headers.get('user-agent');
                if (val) {
                    options.headers.set('user-agent', val.replace(/[\(\)]/g, '-'));
                }
            } else {
                // Plain object
                const keys = Object.keys(options.headers);
                for (const key of keys) {
                    if (key.toLowerCase() === 'user-agent') {
                        const val = options.headers[key];
                        if (typeof val === 'string') {
                            options.headers[key] = val.replace(/[\(\)]/g, '-');
                        }
                    }
                }
            }
        } catch (e) { }
    }
    return originalFetch(url, options);
};

console.log("Patched http/https/fetch for User-Agent");

require('./node_modules/vercel/dist/index.js');
