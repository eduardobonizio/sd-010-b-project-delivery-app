const httpStatus = require('http-status');

const { Sale, SalesProduct } = require('../database/models');
const validations = require('../utils/validations/validationsIndex');

const createSale = async (payloadUser, { sale, cart } ) => {
  validations.createSale(sale, cart);
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;

  const response =  await Sale.create({
    userId: payloadUser.id, sellerId, totalPrice, deliveryAddress, deliveryNumber
  });

  const promises = cart.map(async ({ productId, quantity }) => {
    return await SalesProduct.create({ saleId: response.id, productId, quantity })
    }
  );
  
  await Promise.all(promises);

  return ({ status: httpStatus.CREATED, data: [{ saleId: response.id }]});
};

module.exports = { createSale };
