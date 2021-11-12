const router = require('express').Router();

const registerService = require('../service/register');

const {
  verifyPassword,
  verifyName,
  verifyEmail,
} = require('../middlewares/register');

router.post('/',
  verifyPassword,
  verifyName,
  verifyEmail,
  async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await registerService.userExists(email, name);
    if (userExists) {
      return res.status(409).json({ message: 'Email or name already registered' });
    }

    const id = await registerService.createUser(name, email, password)
    return res.status(201).json({ id });
  }
);

module.exports = router;
