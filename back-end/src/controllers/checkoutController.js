const checkoutService = require('../services/checkoutService');
const rescue = require('express-rescue');

const checkoutSale = rescue(async (req, res) => {
  const { id: userId } = req.user;
  const { body } = req;
  
  const sale = await checkoutService.createSale(body, userId);
  
  return res.status(sale.status).json(sale.data);
});

const saleDatails = rescue(async (req, res) => {
  const { id: saleId } = req.params;

  const sales = await checkoutService.getSaleById(saleId);
  
  return res.status(sales.status).json(sales.data);
});

module.exports = { 
  checkoutSale,
  saleDatails,
};

