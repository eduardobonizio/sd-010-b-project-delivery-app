const { sale } = require('../../database/models');

const getSalesByIdSeller = async ({ id }) => {
  // eslint-disable-next-line camelcase
  const salesFounded = await sale.findMany({ where: { seller_id: id } });
  if (salesFounded === null) {
    return { message: 'Vendas não encontradas' };
  }
  return true;
};

module.exports = { getSalesByIdSeller };