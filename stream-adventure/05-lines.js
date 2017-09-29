const through = require('through2');
const split = require('split');

var lines = 1;
const changeCase = through(function(buffer, encoding, next) {
    if (isEven(lines++)) {
        this.push(buffer.toString().toUpperCase() + '\n');
    } else {
        this.push(buffer.toString().toLowerCase() + '\n');
    }
    next();
});

function isEven(x) {
    return x % 2 == 0;
}

process.stdin
    .pipe(split())
    .pipe(changeCase)
    .pipe(process.stdout);
