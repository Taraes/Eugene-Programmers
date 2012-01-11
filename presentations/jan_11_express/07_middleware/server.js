
var express = require('express');

var app = express.createServer();

app.configure(function(){
  app.use(function(req, res, next) {
    req.foo = 'bar';
    next();
  });
  //app.use(app.router);
});

app.get('/', function(req, res) {
  res.send(req.foo);
});

app.listen(8080);

console.log('Server started');