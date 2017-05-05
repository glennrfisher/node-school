// load file system library
var fs = require('fs');

// read file to character array
var filename = process.argv[2];
var file = fs.readFileSync(filename, 'utf8');
var chars = file.split("");

// count newline characters
var newlines = 0;
chars.forEach(c => {
    if (c === '\n') {
        newlines++;
    }
});

// print the number of newlines
console.log(newlines);
