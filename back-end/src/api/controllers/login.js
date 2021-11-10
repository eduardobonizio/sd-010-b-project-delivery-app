const rescue = require('express-rescue');
// const loginService = require('../services/login');

const login = rescue((req, res) => res.redirect('/login'));
const login2 = rescue((req, res) => res.status(200).json({ message: 'hello my friends' }));

module.exports = {
  login,
  login2,
};