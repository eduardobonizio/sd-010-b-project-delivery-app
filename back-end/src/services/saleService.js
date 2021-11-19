const { sale, product, user } = require('../database/models');
const { salesProducts } = require('../database/models');
const userService = require('./userService');

const getAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

const getSale = async ({ id }) => {
  const sales = await sale.findOne({ where: { id } }, { 
    include: [ 
      { model: product, as: 'products' },
      { model: user, as: 'sellerId' },
    ],
  });
  return sales;
};

const postSale = async ({ 
  email, sellerId, totalPrice, deliveryAddress, deliveryNumber, status }) => {
  const userId = await userService.findUserByEmail(email);
  const saleDate = new Date();
  const { id } = await sale.create({ 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  return id;
};

const postProductSale = async (productArray) => {
  productArray.forEach(async (prod) => {
    await salesProducts.create(prod);
  });
  return 'Populei';
};

module.exports = {
  getAll,
  getSale,
  postSale,
  postProductSale,
};
