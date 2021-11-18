const { sale } = require('../../database/models');

const create = async (salePayload) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, 
  } = salePayload;

  return sale.create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status });
};

module.exports = {
  create,
};
