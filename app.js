var express = require('express');
var app = express();
require('./routes')(app);

//serve static files
/*app.use(express.static(__dirname + './public'));*/

app.use(app.router);

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
	});
});
