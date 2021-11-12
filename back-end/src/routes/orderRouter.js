const express = require('express');

const router = express.Router();
const usersController = require('../api/controller/usersController');

router.get('/', async (req, res) => {
  const sales = await usersController.getSales();
  res.status(200).json(sales);
});

module.exports = router;