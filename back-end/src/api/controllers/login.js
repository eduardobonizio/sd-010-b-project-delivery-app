const loginService = require('../services/login');
const rescue = require('express-rescue');

const login = rescue( (req, res) => {
  // const result = await loginService.login(req.body);
  return res.redirect('/login')
  // status(200).json({message:"hello my friends"})
});
const login2 = rescue( (req, res) => {
  // const result = await loginService.login(req.body);
  return res.status(200).json({message:"hello my friends"})
});

module.exports = {
  login,
  login2
}