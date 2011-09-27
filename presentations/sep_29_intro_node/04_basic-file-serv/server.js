var http = require('http');
var fs = require('fs');
var port = process.argv[2] || 9001;

http.createServer(function(req,res) {
    fs.readFile('../fixtures/stan.png',function(error,image) {
	if(error) {
	    res.writeHead(500);
	    return res.end();
	}

	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(image,'binary');
    });
}).listen(port);

console.log('Server started on port %d',port);