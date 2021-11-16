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

  try {
    const newUser = await User.findOne({ where: { email } });
    if (!newUser) {
      const token = jwt.sign({ data: email }, secret, jwtConfig);
      const response = await User.create({ name, email, password, role: 'user' });
      return res.status(200).json({
        name: response.dataValues.name,
        email: response.dataValues.email,
        role: response.dataValues.role,
        token,
      });
    }
    return res.status(409);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;