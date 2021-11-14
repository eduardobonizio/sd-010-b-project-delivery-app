const { sale } = require('../../database/models');

const getSalesByIdSeller = async ({ id }) => {
  // eslint-disable-next-line camelcase
  const salesFounded = await sale.findAll({ where: { seller_id: id } });
  if (salesFounded.length === 0) {
    return { message: 'Vendas não encontradas para esta pessoa vendedora' };
  }
  return salesFounded;
};

const setStatusSale = async ({ id, status }) => {
  const saleUpdated = await sale.update({ status }, { where: { id } });
 
  if (saleUpdated[0] === 0) {
    return { message: 'Dados inválidos' };
  }
  return saleUpdated;
};

module.exports = { getSalesByIdSeller, setStatusSale };