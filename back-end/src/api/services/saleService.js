const moment = require('moment');
const { Sale } = require('../../database/models');

const finishSaleService = async (newSale) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId } = newSale;

  const saleDate = moment().utc().format();

  return Sale.create({
    totalPrice, deliveryAddress, deliveryNumber, saleDate, userId, sellerId, status: 'pendente',
  });

  // cart.map((product) => {
    // const { id, quantity } = product;
  // });
};

module.exports = { finishSaleService };
