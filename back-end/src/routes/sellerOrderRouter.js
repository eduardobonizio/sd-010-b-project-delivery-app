const express = require('express');

const router = express.Router();

const { getPurchaseBySellerId, getPurchaseById, 
  updatePurchaseStatus } = require('../api/controller/sales');

router.get('/:id', getPurchaseBySellerId);

router.get('/purchase/:id', getPurchaseById);
router.patch('/purchase/:id', updatePurchaseStatus);

module.exports = router;