const { setStatusSale } = require('../services/saleService');

 module.exports = (io) => io.on('connection', (socket) => {
  socket.on('changeStatus', async (statusObject) => {
    const { id, status } = statusObject;
    await setStatusSale({ id, status });
    io.emit('changeStatus', { id, status });
  });
});