const { Sale, User, Product } = require('../database/models');

const createSale = async (body, user_id) => {
  console.log(body);
  const { seller_id, total_price, delivery_address, delivery_number, status } = body;
  const dateNow = new Date();
  
  // criar a venda
  const payloadSale = { 
    user_id, seller_id, total_price, delivery_address, delivery_number, sale_date: dateNow, status 
  }
  const { dataValues } = await Sale.create(payloadSale);

  // retorna data e id da venda
  const { id, sale_date } = dataValues;
  return { status: 201, data: { id, sale_date }};
};

const getSaleById = async (id) => {
  const data = await Sale.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes:{ exclude: ['email', 'password'] } },
      { model: User, as: 'seller', attributes:{ exclude: ['email', 'password'] } },
      { model: Product, as: 'productsSold', through: { attributes: ['quantity'] } }
    ],
    attributes:{ exclude: ['user_id', 'seller_id'] }
  });
  
  if(!data) return { status: 404, data: { message: 'Venda não encontrada'}}

  return { status: 200, data };
};

module.exports = {
  createSale,
  getSaleById,
}
