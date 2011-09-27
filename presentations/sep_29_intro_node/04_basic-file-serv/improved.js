var http = require('http');
var fs = require('fs');
var port = process.argv[2] || 9001;

fs.readFile('../fixtures/stan.png',function(error,image) {
    if(error) {
	throw error;
    }

    http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'image/png'});
	res.end(image,'binary');
    }).listen(port,function() {
	console.log('Server started on port %d',port);
    });
});