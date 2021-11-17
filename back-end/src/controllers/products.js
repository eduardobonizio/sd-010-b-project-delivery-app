const express = require('express');
const { Product } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;