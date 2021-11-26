const express = require('express');

const router = express.Router();

const { getPurchaseBySellerId, getPurchaseById, 
  updatePurchaseStatus } = require('../api/controller/sales');

router.get('/:id', getPurchaseById);
router.get('/purchase/:id', getPurchaseBySellerId);
router.patch('/purchase/:id', updatePurchaseStatus);

module.exports = router;