
var http = require('http');

var options = {
  'host': 'localhost',
  'port': 8080,
  'path': '/',
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/json'
  }
};

var post = {
  'foo': 'bar'
}

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  var body = '';

  res.on('data', function(chunk) {
    body += chunk;
  });

  res.on('end', function() {
    console.log(JSON.parse(body));
  });
});

req.on('error', function(error) {
  console.error(error);
});

req.write(JSON.stringify(post));
req.end();

