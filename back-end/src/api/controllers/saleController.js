const { StatusCodes } = require('http-status-codes');
const { finishSaleService } = require('../services/saleService');

const finishSaleController = async (req, res) => {
  const newSale = req.body;
  const saleId = await finishSaleService(newSale);
  res.status(StatusCodes.CREATED).json({ saleId });
};

module.exports = { finishSaleController };
