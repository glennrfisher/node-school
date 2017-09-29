const fs = require('fs');
const websocket_stream = require('websocket-stream');
const stream = websocket_stream('ws://localhost:8099');
const hello = 'hello\n';
hello.pipe(stream);
