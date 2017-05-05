const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

const server = net.createServer(socket => {
    const time = strftime('%F %R');
    socket.write(time);
    socket.write('\n');
    socket.end();
});

server.listen(port);
