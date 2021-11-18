const express = require('express');
const md5 = require('md5');
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
  const hashedPassword = md5(password);
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  try {
    const exists = await User.findOne({ where: { email } });
    if (exists.dataValues.email === email && exists.dataValues.password === hashedPassword) {
      return res.status(200).json({
        name: exists.dataValues.name,
        email: exists.dataValues.email,
        role: exists.dataValues.role,
        token,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;