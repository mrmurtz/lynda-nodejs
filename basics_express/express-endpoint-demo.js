var express = require('express');
var app = express();
var fs = require('fs');

app.use('/message', function(req,res) {
  console.log('request made');
  res.send('hello');
});

app.use('/users', function(req,res) {
  fs.readFile('./list.json', 'utf-8', function(err, data){
    data = JSON.parse(data);
    res.send(data);
  });
});

app.listen(3000);
