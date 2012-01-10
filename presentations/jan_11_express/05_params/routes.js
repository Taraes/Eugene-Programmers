
module.exports = function(app) {
  app.get('/', function(req, res){
    res.send('/');
  });

  app.get('/foo', function(req, res){
    res.send('/foo');
  });

  app.get('/foo/:foo', function(req, res){
    var foo = req.param('foo', 'default');
    res.send(foo);
  });

  app.get('/bar/:bar?', function(req, res) {
    var bar = req.param('bar', 'default');
    res.send(bar);
  });
};
