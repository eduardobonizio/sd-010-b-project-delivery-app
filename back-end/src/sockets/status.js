const { getSaleById, updateStatusSale } = require("../services/checkoutService");

module.exports = async (io) => {
  // Será executada sempre que um novo client se conecta ao servidor
  io.on('connection', (socket) => {

    socket.on('preparando', async ({ idVenda, status }) => {
      const data = await updateStatusSale(idVenda, status);
      io.emit('preparandoPedido', [idVenda, status]);
    });

    socket.on('realizarPedido', () => {
      io.emit('pedidoRealizado', 'pedido realizado')
    })
});
}