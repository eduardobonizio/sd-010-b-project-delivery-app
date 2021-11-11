const router = require('express').Router();
const { getAll, login } = require('../services/users');

router.get('/', async (_req, res) => {
  const users = await getAll();

  return res.status(200).json(users);
});

router.post('/login', async (req, res) => {
  try {
  const { email, password } = req.body;
  await login(email, password);
  return res.status(200).json({ message: 'sucess', toLogin: true });
} catch (error) {
  return res.status(404).json({ message: error.message, toLogin: false });
}
});

module.exports = router;
