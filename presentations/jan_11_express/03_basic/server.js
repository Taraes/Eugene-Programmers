
var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
  res.send('Root');
});

app.get('/foo', function(req, res){
  res.send('Foo');
});

app.post('/foo', function(req, res) {
  res.send('POST foo');
});

app.listen(8080);

console.log('Server started');