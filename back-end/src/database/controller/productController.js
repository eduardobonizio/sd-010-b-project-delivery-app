const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../service')

router.get('/', async (req, res) => {
const getProducts =  await getAllProducts();
  return res.status(200).json(getProducts)
});

module.exports = router;
