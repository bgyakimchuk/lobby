var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var numUsers = 0;

io.on('connection', (socket) => {
  var addedUser = false;

  socket.on('add user', (username) => {
    if (addedUser) return;

    console.log(`add user - ${username && username}`)

    socket.username = username;
    numUsers += 1;
    addedUser = true;

    socket.emit('new user', {
      numUsers: numUsers
    });

    socket.broadcast.emit(`user joined`, {
      username: socket.username,
      numUsers: numUsers
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

    numUsers -= 1;

    socket.broadcast.emit('user left', {
      username: socket.username,
      numUsers: numUsers
    });
  });
});

http.listen(3000, () => {
  io.emit('chat message', 'A user has disconnected.');
});