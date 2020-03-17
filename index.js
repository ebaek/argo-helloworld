const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Add style sheet
app.use(express.static(__dirname + '/public'));

app.listen(3005, function () {
  console.log('App listening on port 3005!');
});