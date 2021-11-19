const checkoutService = require('../services/checkoutService');
const rescue = require('express-rescue');

const checkoutSale = rescue(async (req, res) => {
  const { id: user_id } = req.user;
  const { body } = req;
  
  const sale = await checkoutService.createSale(body, user_id);
  
  return res.status(sale.status).json(sale.data);
});

const saleDatails = rescue(async (req, res) => {
  const { id: sale_id } = req.params;

  const sales = await checkoutService.getSaleById(sale_id);
  
  return res.status(sales.status).json(sales.data);
});

const createSaleProduct = rescue(async(req, res) => {
  const { body } = req;

  const saleProduct = await checkoutService.generateSaleProduct(body);

  return res.status(saleProduct.status).json(saleProduct.data);
});

module.exports = { 
  checkoutSale,
  saleDatails,
  createSaleProduct,
};

