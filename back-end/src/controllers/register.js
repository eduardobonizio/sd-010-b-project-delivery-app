const md5 = require('md5');
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require('../models');

const caminho = path.join(__dirname, '../../jwt.evaluation.key');
console.log(caminho);
const secret = fs.readFileSync(caminho).toString();

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
    return res.status(409).send();
  } catch (e) {
    console.log(e);
  }
});

router.post('/check', async (req, res) => {
  const { email } = req.body;
  const checkExistence = await User.findOne({ where: { email } });
  if (checkExistence.data) return res.status(409);
  return res.status(200);
});

module.exports = router;