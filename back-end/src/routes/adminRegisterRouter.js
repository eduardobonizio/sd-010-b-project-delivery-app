const router = require('express').Router();

const registerService = require('../service/register');

const {
  verifyPassword,
  verifyName,
  verifyEmail,
} = require('../middlewares/register');

const { validateToken } = require('../auth/jwt');

router.post('/',
  validateToken,
  verifyPassword,
  verifyName,
  verifyEmail,
  async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await registerService.userExists(email, name);
    if (userExists) {
      console.log('deu ruim aqui no router');
      return res.status(409).json({ message: 'Email or name already registered' });
    }

    const id = await registerService.createUser(name, email, password, role);
    console.log(id);
    return res.status(201).json({ id });
});

module.exports = router;
