var app = require('express')();
var port = process.env.PORT || 7777;
var data = require('./src/data.json');

app.get('/data', function (req, res) {
    res.send(data);
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});