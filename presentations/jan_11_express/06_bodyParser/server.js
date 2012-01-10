
var express = require('express');

var app = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
  //app.use(app.router);
});

app.get('/', function(req, res) {
  res.send('/');
});

app.post('/', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json({'the value of foo': req.body.foo});
});

app.listen(8080);

console.log('Server started');