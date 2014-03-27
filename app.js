var express = require('express');
var app = express();

//allow socket.io to be served to the client
/*app.use(express.static(__dirname + '/socket.io/'));*/


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

//socket io using express web server
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	//when the learnmore event is fired emit the message back to the client
	socket.on('learnmore', function () {
		socket.emit('message', { message : 'thanks for learning more!' });
		console.log('emmitteeded a message');
	});
});
