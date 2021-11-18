const saleService = require('../services/saleService');
const validateToken = require('../utils/validateToken');

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
  create,
};
