const router = require('express').Router();

const { makeCrypt } = require('../auth/jwt');

const LoginService = require('../service/login');

router.get('/', (req, res) => res.status(200).send({ message: 'everything ok!!!' }));
router.post('/', async (req, res) => {
  const { login, password } = req.body;

  const user = await LoginService.logged(login, password);
  
  if (!user) return res.status(404).json({ message: 'login error' });
  
  const { role, email, name } = user;
  
  const data = makeCrypt({ user });
  
  return res.status(200).json({ userRole: role, userEmail: email, userName: name, key: data });
});

module.exports = router;
