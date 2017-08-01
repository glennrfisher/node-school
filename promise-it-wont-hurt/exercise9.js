'use strict';

function parsePromised() {
    try {
        const json = JSON.parse(process.argv[2]);
        return Promise.fulfill(json);
    } catch (e) {
        return Promise.reject(e);
    }
};

parsePromised().then(console.log).catch(console.log);