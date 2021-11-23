const rescue = require('express-rescue');
// const jwt = require('jsonwebtoken');
const loginService = require('../services/login');
const createToken = require('../middlewares/createToken');

const login = rescue((req, res) => res.redirect('/login'));

const login2 = rescue(async (req, res) => {
  const result = await loginService.login(req.body);

  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  const token = await createToken(req.body);
  
  return res.status(200).json({ data: result, token });
});

module.exports = {
  login,
  login2,
};