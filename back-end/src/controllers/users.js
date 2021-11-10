const router = require('express').Router();
const { getAll } = require('../services/users');

router.get('/', async (_req, res) => {
  const users = await getAll();

  return res.status(200).json(users);
});

module.exports = router;
