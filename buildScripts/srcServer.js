var express = require('express'); // webserver (web framework)
var path = require('path');  // provides utilities for working with file and directory paths
var open = require('open');  // Open a file or url in the user's preferred application

var port = 3000;
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
