const { Sale } = require('../database/models');
const decodeToken = require('../utils/decodeToken');

const createSale = async (body, token) => {
  // DÚVIDA userId e sellerID.

  // recebe o token total_price address number status(só quem pode mudar é o vendedor ou admin)
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = body;
  
  // decode do token para pegar o userId
  const { id: userId } = decodeToken(token);
  
  // criar a venda
  const payloadSale = { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status }
  const newSale = Sale.create(payloadSale);
  
  // retorna data e id da venda
  const { id, saleDate } = newSale;
  return { status: 201, data: { id, saleDate }}
};

module.exports = {
  createSale,
}
