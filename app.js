var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.options('*', cors());

var response = {
  "id": 41876,
  "first_name": "PradeepJaiswar",
  "last_name": null,
  "full_name": "PradeepJaiswar",
  "username": "PradeepJaiswar",
  "email": "mado023@gmail.com",
  "github_gravatar": "https://avatars.githubusercontent.com/u/4545996",
  "github_uid": 4545996,
  "learn_verified_user": false,
  "can_start_working": true,
};

app.get('/api/v1/users/me', function (req, res) {
  res.send(response);
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
