const salesServices = require('../services/saleService');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('preparando', async ({ id, status }) => {
      const newStatus = await salesServices.updateSaleStatus(id, status);
      io.emit('refreshStatus', newStatus.status);
    });
    socket.on('delivery', async ({ id, status }) => {
      const newStatus = await salesServices.updateSaleStatus(id, status);
      io.emit('refreshStatus', newStatus.status);
    });
    socket.on('entregue', async ({ id, status }) => {
      const newStatus = await salesServices.updateSaleStatus(id, status);
      io.emit('refreshStatus', newStatus.status);
    });
  });
};
