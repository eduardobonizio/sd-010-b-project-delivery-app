const router = require('express').Router();
const { getAll } = require('../services/products');

router.get('/', async (_req, res) => {
  const products = await getAll();

  return res.status(200).json(products);
});

module.exports = router;
