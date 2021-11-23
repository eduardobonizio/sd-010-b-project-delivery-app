const saleService = require('../services/saleService');

const getOrderByPk = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.body.user;
  
  const { code, message, order } = await saleService.getOrderByPk({ userId, id });

  if (!order) {
    return res.status(code).json({ message });  
  }

  return res.status(code).json(order);
};

module.exports = {
  getOrderByPk,
};