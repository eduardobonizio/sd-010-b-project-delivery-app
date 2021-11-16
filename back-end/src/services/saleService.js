const { Sale } = require('../database/models');
const { saleDataValidation } = require('../validations/saleValidation');

const createSale = async (saleData) => {
  const dataValidateError = saleDataValidation(saleData);
  if (dataValidateError.error) return dataValidateError;

  const { id } = await Sale.create(saleData);
  const newSale = await Sale.findByPk(id);
  return newSale;
};

module.exports = {
  createSale,
};