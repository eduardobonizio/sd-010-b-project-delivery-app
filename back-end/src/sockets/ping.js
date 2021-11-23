const { getSaleById } = require("../services/checkoutService");

module.exports = async (io) => {
  // Será executada sempre que um novo client se conecta ao servidor
  io.on('connection', (socket) => {

    socket.on('venda', ({ status }) => {
      // const getSale = getSaleById(saleId);
      io.emit('confirmacaoVenda', status)
    });
});
}