//for starting with express

var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8000,
    router = express.Router();

app.use(express.static(path.resolve(__dirname, 'dist')));

router.get('/', function(req, res) {
    res.sendfile('./index.html');
});


//set up the router

app.listen(port);
console.log('server started on ' + port);
