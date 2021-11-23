module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado: ${socket.io}`);

    socket.on('disconnect', () => {
      console.log('Usuário desconectou');
    });
  });
};