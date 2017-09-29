const through = require('through2');
var toUpperCase = through( function(buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});
process.stdin.pipe(toUpperCase).pipe(process.stdout);
