import express from 'express'; // webserver (web framework)
import path from 'path';  // provides utilities for working with file and directory paths
import open from 'open';  // Open a file or url in the user's preferred application
import compression from 'compression';

/* eslint-disable no-console*/
const port = 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
