const rescue = require('express-rescue');
const loginService = require('../services/login');

const login = rescue((req, res) => res.redirect('/login'));
const login2 = rescue(async (req, res) => {
  const result = await loginService.login(req.body);
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  return res.status(200).json(result);
});

module.exports = {
  login,
  login2,
};