const express = require('express');

const router = express.Router();
const productsService = require('../service/productsServices');

router.get('/', async (req, res) => {
  const products = await productsService.getAllProductsService();
  return res.status(200).json({ data: products });
});

module.exports = router;