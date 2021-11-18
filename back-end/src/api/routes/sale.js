const express = require('express');

const router = express.Router();

const saleController = require('../Controllers/saleController');

router.post('/', saleController.create);

module.exports = router;