const checkoutService = require('../services/checkoutService');
const rescue = require('express-rescue');

const checkoutSale = rescue(async (req, res) => {
  const { id: userId } = req.user;
  const { body } = req;
  
  const sale = await checkoutService.createSale(body, userId);
  
  return res.status(201).json(sale.data);
});

module.exports = { 
  checkoutSale,
};

