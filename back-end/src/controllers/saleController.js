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

const getOrderBySellerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await saleService.getOrderBySellerId(id);
    return res.status(200).json(result);
  } catch (error) {
    next(500);
  }
};

const getOrderAll = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await saleService.getOrderAll(id);
    return res.status(200).json(result);
  } catch (error) {
    next(500);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { role } = req.user;
    if (role !== 'custumer')next(403, 'Unauthorized user');
    const result = await saleService.updateOrderStatus(status);
    return res.status(200).json(result);
  } catch (error) {
    next(500);
  }
};

const getSallesAll = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await saleService.getSallesAll(id);
    return res.status(200).json(result);
  } catch (error) {
    next(500);
  }
};
const updateSalesStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { role } = req.user;
    if (role !== 'seller')next(403, 'Unauthorized user');
    const result = await saleService.updateSalesStatus(status);
    return res.status(200).json(result);
  } catch (error) {
    next(500);
  }
};

module.exports = {
  createSale,
  getOrderBySellerId,
  getOrderAll,
  getSallesAll,
  updateOrderStatus,
  updateSalesStatus,
};