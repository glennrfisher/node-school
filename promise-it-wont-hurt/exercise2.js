'use strict';

const promise = new Promise(function (fulfill, reject) {
    setTimeout(_ => fulfill('FULFILLED!'), 300);
});

promise.then(x => console.log(x));