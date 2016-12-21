//for starting with express

var express = require('express'),
	app = express(),
 	port = 8000,
    router = express.Router();

router.get('/', function(req, res) {
    res.sendfile('./index.html');
});

router.get('/dist/bundle.js', function(req, res) {
    res.sendfile('./dist/bundle.js');
});
//set up the router
app.use('/', router);
app.listen(port);
console.log('server started on ' + port);
