const express = require('express');
const auth = require('../middlewares/auth');

const sellerController = require('../controllers/sellerController');

const sellerRouter = express.Router();
// sales
sellerRouter.get('/orders', auth, sellerController.findAllSales);

sellerRouter.post('/order/:id', auth, sellerController.findOrderByPk);

module.exports = {
  sellerRouter,
};
