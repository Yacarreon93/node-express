var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

var server = app.listen(3000, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});
