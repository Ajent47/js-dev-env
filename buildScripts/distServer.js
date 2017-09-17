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

app.get('/users', function(req, res){
  res.json([
    {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id":2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id":3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"},
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});