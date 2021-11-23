module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('ping', () => {
      io.emit('pong', 'uma mens. aqui');
    });
  });
}