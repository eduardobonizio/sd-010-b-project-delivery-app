const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { User } = require('../models');

const caminho = path.join(__dirname, '../../jwt.evaluation.key');
console.log(caminho);
const secret = fs.readFileSync(caminho).toString();
console.log(secret); 

const jwtConfig = { expiresIn: '2h', algorithm: 'HS256' };

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = md5(password);
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  try {
    const exists = await User.findOne({ where: { email } });
    if (exists && exists.dataValues.email === email
      && exists.dataValues.password === hashedPassword) {
      return res.status(200).json({
        name: exists.dataValues.name,
        email: exists.dataValues.email,
        role: exists.dataValues.role,
        token,
      });
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (e) {
    return res.status(404).json({ message: 'User not found' });
    // console.log(e);
  }
});

module.exports = router;