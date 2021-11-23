const { Sale, User, SalesProduct, Product } = require('../database/models');
const { Op } = require("sequelize");

const createSale = async (body, user_id) => {
  const { seller_id, total_price, delivery_address, delivery_number, status } = body;
  const dateNow = new Date();
  
  const payloadSale = {
    user_id, seller_id, total_price, delivery_address, delivery_number, sale_date: dateNow, status 
  }
  const { dataValues } = await Sale.create(payloadSale);
  // sale_id, product_id, quantity
  // retorna data e id da venda
  const { id, sale_date } = dataValues;
  return { status: 201, data: { id, sale_date }};
};

const getSaleById = async (saleId, idUser) => {
  const data = await Sale.findOne({ 
    where: { 
      id: saleId, 
      [Op.or]: [
        {user_id: idUser},
        {seller_id: idUser},
      ]
    },
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

const generateSaleProduct = async (body) => {
  const data = await SalesProduct.create(body);
  return { status: 201, data };
}

const updateStatusSale = async (id, status) => {
  const [data] = await Sale.update({ status }, { where: { id } } );
  return data;
}

module.exports = {
  createSale,
  getSaleById,
  generateSaleProduct,
  updateStatusSale,
}
