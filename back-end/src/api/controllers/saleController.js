const { NOT_FOUND, OK, BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = require('http-status');
const saleService = require('../services/saleService');

const INTERNAL_SERVER_ERROR_MSG = 'Alguma coisa deu errado :(';

const getSalesByIdSeller = async (req, res) => {
  const { id } = req.params;

  const sales = await saleService.getSalesByIdSeller({ id });

  if (sales.message) {
    return res.status(NOT_FOUND).json(sales);
  }

  return res.status(OK).json(sales);
};

const getSalesByIdUser = async (req, res) => {
  const { id } = req.params;

  const sales = await saleService.getSalesByIdUser({ id });

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

const createSale = async (req, res) => {
  try {
    const result = await saleService.createSale(req.body);

    res.status(CREATED).json(result);
  } catch (err) {
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
};

module.exports = { 
  getSalesByIdSeller, 
  setStatusSale,
  createSale,
  getSalesByIdUser,
};
