const { sale } = require('../../database/models');

const createSale = async (body) => {
  const { user_id, seller_id, total_price, delivery_address, delivery_number } = body;
  return sale.create(
    // eslint desabilitado temporariamente para testes
    {
      user_id,    // eslint-disable-line
      seller_id,    // eslint-disable-line
      total_price,    // eslint-disable-line
      delivery_address,    // eslint-disable-line
      delivery_number,   // eslint-disable-line
      sale_date: Date.now(), // eslint-disable-line
      status: 'Pendente',
    },
  );
};

module.exports = {
  createSale,
};
