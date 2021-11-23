 // model para fazer o login
 const fs = require('fs');
 const md5 = require('md5');
 const jwt = require('jsonwebtoken');
 const path = require('path');
 const { User } = require('../database/models');

 const folderName = path.join(__dirname, '..', '..', 'jwt.evaluation.key');
 const secret = fs.readFileSync(folderName, 'utf8', (_err, data) => data).trim();
//  const secret = "secreto"

 const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const loginController = async (req, res) => {
  const { user, password } = req.body;
  const pEncripted = md5(password);
  if (pEncripted !== user.password) {
    res.status(401).json({ message: '"email" or "password" is incorrect' });
  }
  delete user.password;
  delete user.id;
  const token = jwt.sign({ ...user }, secret, jwtConfig);
  res.status(200).json({ ...user, token });
};

const register = async (req, res) => {
  const { name, email, role } = req.body;
  const password = md5(req.body.password);
  if (!role) {
    await User.create({ name, email, password, role: 'customer' });
    return res.status(201).json({ message: 'Created' });
  }
  await User.create({ name, email, password, role });
  return res.status(201).json({ message: 'Created' });
};

module.exports = { loginController, register };
