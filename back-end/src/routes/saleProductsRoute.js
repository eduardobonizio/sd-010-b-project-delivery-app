const express = require('express');
const { getSaleProduct } = require('../controllers/salesProducts');

const router = express.Router();

router.route('/:id')
.get(getSaleProduct);

module.exports = router;