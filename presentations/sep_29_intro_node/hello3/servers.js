var http = require('http');
var fs = require('fs');
var port = process.argv[2] || 9001;

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(port);

console.log('Server started on port %d',port);