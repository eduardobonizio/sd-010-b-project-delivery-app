const moment = require('moment');
const { Sale, SalesProducts } = require('../../database/models');

const finishSaleService = async (newSale) => {
  const { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId, cart } = newSale;

  const saleDate = moment().utc().format();

  const dataSale = await Sale.create({
    totalPrice, deliveryAddress, deliveryNumber, saleDate, userId, sellerId, status: 'Pendente',
  });

  cart.forEach((product) => {
    const saleId = dataSale.id;
    const { id: productId, quantity } = product;
    SalesProducts.create({ saleId, productId, quantity });
  });

  return dataSale.id;
};

module.exports = { finishSaleService };
