//emit the time every second to upate client
exports.data = function (socket) {
	setinterval (function (socket) {
		var date = new Date();
		socket.emit(date.getHours());
	}, 1000);
}