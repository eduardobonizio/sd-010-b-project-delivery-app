const router = require('express').Router();
const { getAll, getById } = require('../services/products');

router.get('/', async (_req, res) => {
  const products = await getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await getById(req.params);

  return res.status(200).json(product);
});

module.exports = router;
