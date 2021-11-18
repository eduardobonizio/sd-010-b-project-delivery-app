const rescue = require('express-rescue');
// const jwt = require('jsonwebtoken');
const loginService = require('../services/login');
// require('dotenv').config();

// const secret = process.env.SECRET;

const login = rescue((req, res) => res.redirect('/login'));

const login2 = rescue(async (req, res) => {
  const result = await loginService.login(req.body);
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }

  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };

  // const token = jwt.sign({ data: result }, secret, jwtConfig);  
  
  return res.status(200).json({ data: result });
});

module.exports = {
  login,
  login2,
};