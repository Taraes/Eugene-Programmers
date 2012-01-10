
var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('Hello World\n');
});

server.listen(8080); // Listen on port 80

console.log('Server started');