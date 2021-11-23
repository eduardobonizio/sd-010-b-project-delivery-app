const md5 = require('md5');
const express = require('express');
const { User } = require('../models');
const { newJwtToken } = require('../helpers/jwt');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);

  try {
    const user = await User.create({ name, email, password: hashedPassword, role: 'customer' });

    if (user) {
      const token = await newJwtToken(email, user.id);
      return res.status(201).json({
        name,
        email,
        role: 'customer',
        token,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(409).send();
  }
});

router.post('/check', async (req, res) => {
  const { email } = req.body;
  const checkExistence = await User.findOne({ where: { email } });
  if (checkExistence.data) return res.status(409);
  return res.status(200);
});

module.exports = router;
