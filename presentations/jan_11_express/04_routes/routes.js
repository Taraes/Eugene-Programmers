
module.exports = function(app) {
  app.get('/', function(req, res){
    res.send('Root');
  });

  app.get('/foo', function(req, res){
    res.send('Foo');
  });

  app.post('/foo', function(req, res) {
    res.send('POST foo');
  });
};
