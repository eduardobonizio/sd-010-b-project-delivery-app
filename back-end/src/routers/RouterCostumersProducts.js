const express = require('express');
const rescue = require('express-rescue');

const costumerProductsRouter = express.Router();

const costumerProductsController = require('../controllers/ControllerCostumerProduct');

costumerProductsRouter.get('/', rescue(costumerProductsController.getCategories));

module.exports = {
  costumerProductsRouter,
};