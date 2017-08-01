'use strict';

const promise1 = Promise.resolve('FULFILLED');
const promise2 = Promise.reject('REJECTED');

promise1.then(console.log);
promise2.catch(console.log);