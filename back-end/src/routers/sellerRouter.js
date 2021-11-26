const express = require('express');
const auth = require('../middlewares/auth');

const sellerController = require('../controllers/sellerController');

const sellerRouter = express.Router();
// sales
sellerRouter.get('/orders/:id', auth, sellerController.findOrderByPk);

sellerRouter.post('/orders/:id', auth, sellerController.updateOrderStatus);

sellerRouter.get('/orders', auth, sellerController.findAllSales);

sellerRouter.get('/all/sellers', () => { console.log('entrei'); }, sellerController.findAllSellers);

module.exports = {
  sellerRouter,
};
