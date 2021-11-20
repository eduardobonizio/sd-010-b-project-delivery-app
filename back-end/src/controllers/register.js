const md5 = require('md5');
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require('../models');

const caminho = path.join(__dirname, '../../jwt.evaluation.key');
console.log(caminho);
const secret = fs.readFileSync(caminho).toString();

const jwtConfig = { expiresIn: '2h', algorithm: 'HS256' };

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);

  try {
    const user = await User.create({ name, email, password: hashedPassword, role: 'customer' });
    console.log('user', user);
    if (user) {
      const token = jwt.sign({ data: email }, secret, jwtConfig);
      return res.status(201).json({
        name,
        email,
        role: 'customer',
        token,
      });
    }
  } catch (e) {
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
