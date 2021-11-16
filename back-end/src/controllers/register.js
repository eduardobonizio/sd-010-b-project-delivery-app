const md5 = require('md5');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);

  try {
    const newUser = await User.findOne({ where: { email } });
    if (!newUser) {
      const token = jwt.sign({ data: email }, secret, jwtConfig);
      User.create({ name, email, password: hashedPassword, role: 'customer' });
      return res.status(201).json({
        name,
        email,
        role: 'customer',
        token,
      });
    }
    return res.status(409);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;