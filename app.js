var express = require('express');
var app = express();

//GET: / - load the main dashboad page
app.get('/', function(req, res){
  res.sendfile('./nodetest.htm');
});


//render 404 page
app.get('*', function(req, res){
	res.send(404, 'OOPS a 404!?!?!');
});

//express web server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

//sockets io using express web server
var io = require('socket.io').listen(server);


