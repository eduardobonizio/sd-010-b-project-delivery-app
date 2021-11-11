const { Sale } = require('../database/models');

const createSale = async (body, user_id) => {
  // DÚVIDA userId e sellerID.

  // recebe o token total_price address number status( 'pendente', só quem pode mudar é o vendedor ou admin)
  const { seller_id= '1', total_price, delivery_address, delivery_number, status } = body;
  const dateNow = new Date();
  
  // criar a venda
  const payloadSale = { 
    user_id, seller_id, total_price, delivery_address, delivery_number, sale_date: dateNow, status 
  }
  const { dataValues } = await Sale.create(payloadSale);

  // retorna data e id da venda
  const { id, sale_date } = dataValues;
  return { status: 201, data: { id, sale_date }}
};

module.exports = {
  createSale,
}
