const http = require('http');

const url = process.argv[2];
http.get(url, response => {
    var allData = '';
    response.setEncoding('utf8');
    response.on('data', data => allData += data);
    response.on('end', () => {
        console.log(allData.length);
        console.log(allData);
    });
});
