const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filename = process.argv[3];

const server = http.createServer();
server.listen(port);
server.on('request', (request, response) => {
    const file = fs.createReadStream(filename);
    file.pipe(response);
});
