const concat = require('concat-stream');

process.stdin.pipe(concat(buffer => {
    var str = buffer.toString();
    str = str.split('').reverse().join('');
    console.log(str)
}));

