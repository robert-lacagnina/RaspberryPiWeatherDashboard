//emit random number as placeholder data every second to upate client
exports.data = function (socket) {
	setInterval(function () {
		socket.emit('message', { message : Math.random()*1000 });
	}, 1000);
}	