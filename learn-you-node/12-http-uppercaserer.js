const http = require('http');
const stream_map = require('through2-map');

const port = process.argv[2];
const server = http.createServer();

var toUppercase = stream_map(chunk => chunk.toString().toUpperCase());

server.on('request', (req, res) => {
    if (req.method != 'POST') {
        res.writeHead(400);
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.setEncoding('utf8');
    req.pipe(toUppercase).pipe(res);
});

server.listen(port);
