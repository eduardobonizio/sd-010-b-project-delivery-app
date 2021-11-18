const { sale } = require('../database/models');
const { salesProducts } = require('../database/models');
const userService = require('./userService');

const getAll = async () => {
  const sales = await sale.findAll();
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
  productArray.forEach(async (product) => {
    await salesProducts.create(product);
  });
  return 'Populei';
};

module.exports = {
  getAll,
  postSale,
  postProductSale,
};
