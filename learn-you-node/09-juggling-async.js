const http = require('http');

const url0 = process.argv[2];
const url1 = process.argv[3];
const url2 = process.argv[4];
const urls = [url0, url1, url2];

var tasks = urls.length;
var results = [];

for (let i = 0; i < urls.length; i++) {
    http.get(urls[i], function (response) {
        var allData = '';
        response.setEncoding('utf8');
        response.on('data', data => allData += data);
        response.on('end', _ => {
            results[i] = allData;
            if (--tasks <= 0) {
                printResults();
            }
        });
    });
}

function printResults() {
    results.forEach(result => {
        console.log(result);
    });
}
