const { NOT_FOUND, OK, BAD_REQUEST } = require('http-status');
const saleService = require('../services/saleService');

const getSalesByIdSeller = async (req, res) => {
  const { id } = req.params;

  const sales = await saleService.getSalesByIdSeller({ id });

  if (sales.message) {
    return res.status(NOT_FOUND).json(sales);
  }

  return res.status(OK).json(sales);
};

const setStatusSale = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const saleUpdated = await saleService.setStatusSale({ id, status });

  if (saleUpdated.message) {
    return res.status(BAD_REQUEST).json(saleUpdated);
  }

  return res.status(OK).json(saleUpdated);
};

module.exports = { getSalesByIdSeller, setStatusSale };