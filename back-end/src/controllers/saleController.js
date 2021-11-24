const saleService = require('../services/saleService');
const { STATUS_CREATED, STATUS_OK } = require('../utils/constants');
// TODO: Create user verification middleware to obtain user_id
const createSale = async (req, res, next) => {
  try {
    const createdSale = await saleService.createSale(req.body);
    if (createdSale.error) return next(createdSale);

    return res.status(STATUS_CREATED).json(createdSale);
  } catch (error) {
    console.log(error);
    next(500);
  }
};

const getAllSalesByCustomerId = async (req, res, next) => {
  try {
    const foundAll = await saleService.getAllSalesByCustomerId(req.params.id);
    res.status(STATUS_OK).json(foundAll);
  } catch (error) {
    console.log(error);
    next(500);
  }
};

module.exports = {
  createSale,
  getAllSalesByCustomerId,
};