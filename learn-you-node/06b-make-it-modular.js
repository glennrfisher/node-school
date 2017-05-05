const listFiles = require('./06a-make-it-modular.js');

listFiles(process.argv[2], process.argv[3], (err, files) => {
    if (err) { return console.log(err); }
    files.forEach(file => { console.log(file); });
});
