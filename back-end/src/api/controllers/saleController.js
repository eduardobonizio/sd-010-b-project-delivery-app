const status = require('http-status');
const saleService = require('../services/saleService');

const INTERNAL_SERVER_ERROR_MSG = 'Alguma coisa deu errado :(';

const createSale = async (req, res) => {
  try {
    const result = await saleService.createSale(req.body);

    res.status(status.CREATED).json(result);
  } catch (err) {
    console.log(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
};

module.exports = { 
  createSale,
};
