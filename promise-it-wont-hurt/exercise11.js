'use strict';

function all (promise1, promise2) {
    return new Promise((fulfill, reject) => {
        var counter = 0;
        var out = [];

        promise1.then(val => {
            out[0] = val;
            counter++;
            if (counter >= 2) {
                fulfill(out);
            }
        });

        promise2.then(val => {
            out[1] = val;
            counter++;
            if (counter >= 2) {
                fulfill(out);
            }
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);