const { salesService } = require('../services');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('status', ({ id, status }) => {
    // requisição para atualizar o status do pedido
    salesService.updateStatus({ id }, { status });
    socket.emit('status', { id, status });
  });
});