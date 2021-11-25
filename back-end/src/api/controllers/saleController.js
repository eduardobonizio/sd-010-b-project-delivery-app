const { StatusCodes } = require('http-status-codes');
const { finishSaleService } = require('../services/saleService');

const finishSaleController = async (req, res) => {
  const newSale = req.body;
  const dataSale = await finishSaleService(newSale);
  res.status(StatusCodes.CREATED).json({ dataSale });
};

module.exports = { finishSaleController };
