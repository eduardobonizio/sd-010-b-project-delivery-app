const status = require('http-status');
const saleProductService = require('../services/saleProductService');

const getSalesByIdSale = async (req, res) => {
  const { id } = req.params;

  const sales = await saleProductService.getSalesByIdSale({ id });

  if (sales.message) {
    return res.status(status.NOT_FOUND).json(sales);
  }

  return res.status(status.OK).json(sales);
};

module.exports = { getSalesByIdSale };