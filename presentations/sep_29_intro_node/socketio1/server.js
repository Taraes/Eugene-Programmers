var express = require('express')
  , app = express.createServer()
  , io = require('socket.io').listen(app);

// Server browser js and cursor image
app.use(express.static(__dirname + '/public'));

app.listen(9001);

// Serve the client
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Collection of connected clients
var clients = {};

io.sockets.on('connection', function(socket) { 
  var clientId = socket.id;
  clients[clientId] = socket; // Add connection to list

  socket.on('move', function(data) {
    sendToPeers(clientId,'peer move',{ id: clientId, x: data.x, y: data.y });
  });

  socket.on('disconnect', function(socket) {
    delete clients[clientId]; // Remove conection from list
    sendToPeers(clientId,'peer disconnect',{ id: clientId });
  });
});

// Helper function to handle relaying data to peers
function sendToPeers(ownId,event,payload) {
  for(id in clients) {
    if(id === ownId) continue;

    clients[id].emit(event,payload);
  }
}