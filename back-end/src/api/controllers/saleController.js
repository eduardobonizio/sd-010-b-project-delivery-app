const saleService = require('../services/saleService');
const validateToken = require('../utils/validateToken');

const getUserOrders = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const payload = validateToken(authorization);
    const { id } = payload;
    const result = await saleService.getUserOrders(id);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getSaleInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleInfo = await saleService.getSaleInfo(id);
    return res.status(200).json(saleInfo);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const { totalPrice, deliveryAddress, deliveryNumber, sellerId, cart } = req.body;
    const { authorization } = req.headers;
    const user = validateToken(authorization);
    const { id } = user;

    const saleId = await saleService.create({
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

module.exports = {
  getUserOrders,
  getSaleInfo,
  create,
};
