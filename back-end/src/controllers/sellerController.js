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

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { orderStatus } = req.body;
  const result = await sellerService.updateSaleStatus(id, orderStatus);

  if (!result) {
    return res.status(409).json({ message: 'Error in sellerController updateOrderStatus' }); 
  }

  return res.status(201).json(result);
};

module.exports = {
  findAllSales,
  findOrderByPk,
  updateOrderStatus,
};
