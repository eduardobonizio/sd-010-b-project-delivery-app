const express = require('express');

const router = express.Router();
const { addPurchase, getAllPurchases, 
  getPurchaseById } = require('../api/controller/sales');

router.post('/', addPurchase);
router.get('/:id', getPurchaseById);
router.get('/', getAllPurchases);

module.exports = router;