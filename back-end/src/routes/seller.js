const express = require('express');

const sellerService = require('../service/sellerService');

const router = express.Router();

router.get('/', async (req, res) => {
  const sellers = await sellerService.getAllSellers();
  return res.status(200).json(sellers);
});

module.exports = router;
