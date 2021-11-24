const { StatusCodes } = require('http-status-codes');
const { getAllSellersService } = require('../services/userService');

const getAllSellersController = async (_req, res) => {
  const allSellers = await getAllSellersService();

  res.status(StatusCodes.OK).json({ allSellers });
};

module.exports = { getAllSellersController };
