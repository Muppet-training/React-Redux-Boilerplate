var express = require('express');
var app = express();
var path = require('path');
// DEFINES A FOLDER FOR THE STATIC FILES
app.use(express.static('src'));
// DEFINES THE MAIN ENTRY POINT
app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});
app.listen(3000, function() {
    console.log('App web-server listening on port 3000');
});
