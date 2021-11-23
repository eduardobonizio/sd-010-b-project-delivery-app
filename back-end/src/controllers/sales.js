const router = require('express').Router();
const { getAll, getById } = require('../services/sales');

router.get('/', async (_req, res) => {
  const sales = await getAll();

  return res.status(200).json(sales);
});

router.get('/:id', async (req, res) => {
  const sale = await getById(req.params);

  return res.status(200).json(sale);
});

module.exports = router;