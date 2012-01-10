

var express = require('express');

var app = express.createServer();

// Bind routes
require('./routes')(app);

app.listen(8080);

console.log('Server started');