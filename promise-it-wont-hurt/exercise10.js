'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(x) {
    console.log(x);
    return Promise.resolve(x+1);
}

iterate(1)               // print 1
    .then(iterate)       // print 2
    .then(iterate)       // print 3
    .then(iterate)       // print 4
    .then(iterate)       // print 5
    .then(alwaysThrows)  // throw
    .then(iterate)       // print 6
    .then(iterate)       // print 7
    .then(iterate)       // print 8
    .then(iterate)       // print 9
    .then(iterate)       // print 10
    .catch(console.log); // handle errors