var express = require('express');
var app = express()
var port = 8000;
var server = app.listen(port);
var io = require('socket.io')(server, {
  path: '/lobby'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("connection")
  var addedUser = false;

  socket.on('add user', (username) => {
    if (addedUser) return;

    console.log(`add user - ${username && username}`)

    socket.username = username;
    addedUser = true;

    socket.emit('new user', {
    });

    socket.broadcast.emit(`user joined`, {
      username: socket.username,
    });
  });

  socket.on('new message', (message) => {
    console.log(`new message - ${socket.username}: ${message}`)

    socket.broadcast.emit('new message', {
      username: socket.username,
      message
    });
  });

  socket.on('disconnect', () => {
    if (!addedUser) return;

    console.log(`disconnect - ${socket.username}`)

    socket.broadcast.emit('user left', {
      username: socket.username,
    });
  });
});
