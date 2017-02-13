var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.options('*', cors());
var userData = require('./user.json');

app.get('/', function (req, res) {
  res.send(userData);
  res.end();
});

app.get('/api/v1/users/me', function (req, res) {
  res.send(userData);
  res.end();
});

app.get('/signin', function (req, res) {
  res.sendFile(__dirname + '/sign_in.html');
});

app.get('/signin_success', function (req, res) {
  res.sendFile(__dirname + '/signin_success.html');
});

app.listen(7000, function(){
  console.log('listening on *:7000');
});
