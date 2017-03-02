var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 8080);