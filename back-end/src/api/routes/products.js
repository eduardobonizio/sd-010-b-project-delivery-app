const express = require('express');

const router = express.Router();

const productsController = require('../Controllers/productsController');

router.get('/', productsController.getAllProducts);

module.exports = router;