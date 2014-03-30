var express = require('express');
var app = express();
var path = require('path');


//serve static files
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);
app.use(app.router);

//express web server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

//socket io using express web server
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {	
	require('./weathermodel').data(socket);
});
