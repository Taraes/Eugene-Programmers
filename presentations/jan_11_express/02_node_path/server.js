
var http = require('http');

var server = http.createServer(function (req, res) {
  if(req.url === '/') {
    res.end('root');
  } else if(req.url === '/foo') {
    res.end('We got some foo');
    // Stuff and db connections
  } else {
    res.end('You\'re trying to go to ' + req.url);
  }
});

server.listen(8080); // Listen on port 80

console.log('Server started');