const express = require('express');
const auth = require('../middlewares/auth');

const sellerController = require('../controllers/sellerController');

const sellerRouter = express.Router();
// sales
sellerRouter.get('/order/:id', () => console.log('entrei'), auth, sellerController.findOrderByPk);

sellerRouter.post('/order/:id', auth, sellerController.updateOrderStatus);

sellerRouter.get('/order', auth, sellerController.findAllSales);

sellerRouter.get('/all', sellerController.findAllSellers);

module.exports = {
  sellerRouter,
};
