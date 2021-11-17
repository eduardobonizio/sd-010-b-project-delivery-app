const router = require('express').Router();

const LoginService = require('../service/login');

router.get('/', (req, res) => res.status(200).send({ message: 'everything ok!!!' }));
router.post('/', async (req, res) => {
  const { login, password } = req.body;

  const user = await LoginService.logged(login, password);

  if (!user) return res.status(404).json({ message: 'login error' });
  return res.status(200).send();
});

module.exports = router;
