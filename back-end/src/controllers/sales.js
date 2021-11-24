const router = require('express').Router();
const { getAll, getById, create, getByUserId, getBySellerId } = require('../services/sales');

router.get('/', async (_req, res) => {
  const sales = await getAll();

  return res.status(200).json(sales);
});

router.get('/user/:id', async (req, res) => {
  const sale = await getByUserId(req.params);

  return res.status(200).json(sale);
});

router.get('/seller/:id', async (req, res) => {
  const sale = await getBySellerId(req.params);

  return res.status(200).json(sale);
});

router.get('/:id', async (req, res) => {
  const sale = await getById(req.params);

  return res.status(200).json(sale);
});

router.post('/', async (req, res) => {
  const result = await create(req.body);
  return res.status(200).json({ message: 'Ok', sale: result });
});

module.exports = router;