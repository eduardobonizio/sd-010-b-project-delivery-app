const router = require('express').Router();
const md5 = require('md5');
const { getAll, login } = require('../services/users');

router.get('/', async (_req, res) => {
  const users = await getAll();

  return res.status(200).json(users);
});

router.post('/login', async (req, res) => {
  try {
  const { email, password } = req.body;
  const encryptedPass = md5(password);
  await login(email, encryptedPass);
  return res.status(200).json({ message: 'sucess', toLogin: true });
} catch (error) {
  return res.status(404).json({ message: error.message, toLogin: false });
}
});

module.exports = router;
