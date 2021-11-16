const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const exists = await User.findOne({ where: { email } });
    if (exists && exists.dataValues.email === email && exists.dataValues.password === password) {
      const token = jwt.sign({ data: email }, secret, jwtConfig);
      return res.status(200).json({
        name: exists.dataValues.name,
        email: exists.dataValues.email,
        role: exists.dataValues.role,
        token,
      });
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;