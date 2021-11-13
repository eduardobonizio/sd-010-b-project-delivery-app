const status = require('http-status');
const saleService = require('../services/saleService');

const getSalesByIdSeller = async (req, res) => {
  const { id } = req.params;

  const sales = await saleService.getSalesByIdSeller({ id });

  if (sales.message) {
    return res.status(status.NOT_FOUND).json(sales);
  }

  return res.status(status.OK).json(sales);
};

module.exports = { getSalesByIdSeller };