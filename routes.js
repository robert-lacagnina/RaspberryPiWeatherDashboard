module.exports = function (app) {
	//GET: / - load the main dashboad page
	app.get('/', function(req, res){
	  res.sendfile('./index.htm');
	});

	//render 404 page
	app.get('*', function(req, res){
		res.send(404, 'OOPS a 404!?!?!');
	});
}