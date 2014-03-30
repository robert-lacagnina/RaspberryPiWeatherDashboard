//emit the time every second to upate client
exports.data = function (socket) {
	setInterval(function () {
		var date = new Date();
		socket.emit('message', { message : Math.random()*1000 });
	}, 1000);
}	