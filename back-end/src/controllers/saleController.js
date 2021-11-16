const saleService = require('../services/saleService');
const { STATUS_CREATED } = require('../utils/constants');
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

module.exports = {
  createSale,
};