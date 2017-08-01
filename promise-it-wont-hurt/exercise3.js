'use strict';

const promise = new Promise(function (fulfill, reject) {
    const error = new Error('REJECTED!');
    setTimeout(_ => reject(error), 300);
});

function onReject (error) {
    console.log(error.message);
}

promise.then(undefined, onReject);