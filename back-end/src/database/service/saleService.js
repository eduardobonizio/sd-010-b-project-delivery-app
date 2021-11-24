const { sale } = require('../models');

const createSale = async (total_price, delivery_address, delivery_number, sale_date, user_id, seller_id) => {
  const create = await sale.create({ total_price, delivery_address, delivery_number, sale_date, status: 'Pendente', user_id, seller_id });
  return create;
};

module.exports = { createSale };
