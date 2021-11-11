const checkoutService = require('../services/checkoutService');
const rescue = require('express-rescue');

const checkoutSale = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { body } = req;
  
  const sale = await checkoutService.createSale(body, token);
  return res.status(201).json(sale.data);
});

module.exports = { 
  checkoutSale,
};

