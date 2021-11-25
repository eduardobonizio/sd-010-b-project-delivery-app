const saleService = require('../services/saleService');
const validateToken = require('../utils/validateToken');

const getUserOrders = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const payload = validateToken(authorization);
    const { id, role } = payload;
    const result = await saleService.getUserOrders(id, role);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleInfo = await saleService.getSale(id);
    return res.status(200).json(saleInfo);
  } catch (e) {
    next(e);
  }
};

const createSale = async (req, res, next) => {
  try {
    const { totalPrice, deliveryAddress, deliveryNumber, sellerId, cart } = req.body;
    const { authorization } = req.headers;
    const payload = validateToken(authorization);
    const { id } = payload;

    const saleId = await saleService.createSale({
      userId: id,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      sellerId,
      cart,
    });
    return res.status(201).json(saleId);
  } catch (e) {
    next(e);
  }
};

const getSaleInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productsInfo = await saleService.getSaleInfo(id);
    return res.status(200).json(productsInfo);
  } catch (e) {
    next(e);
  }
};

const updateSaleStatus = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const sale = await saleService.updateSaleStatus(id, status);
    return res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUserOrders,
  getSale,
  createSale,
  getSaleInfo,
  updateSaleStatus,
};
