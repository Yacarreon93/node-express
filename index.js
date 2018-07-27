var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

app.get(/big.*/, function(req, res, next) {
    console.log('BIG USER ACCESS');
    next();
});

app.get(/.*dog.*/, function(req, res, next) {
    console.log('DOGS GO WOOF');
    next();
});

app.get('/:username', function (req, res) {
    var username = req.params.username;
    res.send(username);
});

var server = app.listen(3000, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});
