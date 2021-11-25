const { StatusCodes } = require('http-status-codes');
const { finishSaleService, allSalesByUserService } = require('../services/saleService');

const finishSaleController = async (req, res) => {
  const newSale = req.body;
  const saleId = await finishSaleService(newSale);
  res.status(StatusCodes.CREATED).json({ saleId });
};

const allSalesByUserController = async (req, res) => {
  const { userId } = req.body;
  const sales = await allSalesByUserService(userId);
  res.status(StatusCodes.OK).json({ sales });
};

const saleByUserController = async (req, res) => {
  const { userId } = req.body;
  const sale = await allSalesByUserService(userId);
  res.status(StatusCodes.OK).json({ sale });
};

module.exports = { finishSaleController, allSalesByUserController, saleByUserController };
