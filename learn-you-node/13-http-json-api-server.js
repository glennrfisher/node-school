const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);
const server = http.createServer();
server.on('request', onRequest);
server.listen(port);

// handle requests to: /
function onRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/api/parsetime') {
        parseTime(req, res);
    } else if (pathname === '/api/unixtime') {
        unixTime(req, res);
    }
}

// handle requests to: /api/parsetime
function parseTime(req, res) {
    const iso = url.parse(req.url, true).query.iso;
    const date = new Date(iso);
    const json = {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(json));
    res.end();
}

// handle requests to: /api/unixtime
function unixTime(req, res) {
    const iso = url.parse(req.url, true).query.iso;
    const date = new Date(iso);
    const json = { 'unixtime': date.getTime() }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(json));
    res.end();
}
