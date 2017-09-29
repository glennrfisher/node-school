const http = require('http');
const through = require('through2');
const port = process.argv[2];

server = http.createServer();
server.on('request', (req, res) => {
    if (req.method != 'POST') {
        return res.end();
    }
    req.pipe(toUpperCase).pipe(res);
});
server.listen(port);

var toUpperCase = through(function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});
