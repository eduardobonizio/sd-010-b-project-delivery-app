const checkoutService = require('../services/checkoutService');
const rescue = require('express-rescue');

const checkoutSale = rescue(async (req, res) => {
  const { id: user_id } = req.user;
  const { body } = req;
  
  const sale = await checkoutService.createSale(body, user_id);
  
  return res.status(sale.status).json(sale.data);
});

const saleDatails = rescue(async (req, res) => {
  const { id: saleId } = req.params;
  const {id: idUser} = req.user

  const sales = await checkoutService.getSaleById(saleId, idUser);
  
  return res.status(sales.status).json(sales.data);
});

module.exports = { 
  checkoutSale,
  saleDatails,
};

