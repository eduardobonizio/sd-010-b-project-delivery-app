const sellerService = require('../services/sellerService');

const findAllSales = async (req, res) => {
  const { id: sellerId } = req.body.user;
  const { code, sales } = await sellerService.findAllSales(sellerId);

  return res.status(code).json({ sales });
};

const findOrderByPk = async (req, res) => {
  const { id } = req.params;
  const { id: sellerId } = req.body.user;
  const { code, message, order } = await sellerService.findOrderByPk({ sellerId, id });

  if (!order) {
    return res.status(code).json({ message }); 
  }

  return res.status(code).json({ order });
};

module.exports = {
  findAllSales,
  findOrderByPk,
};