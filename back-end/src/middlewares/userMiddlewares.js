const rescue = require('express-rescue');
const md5 = require('md5');
const User = require('../database/models/user');

// Comments: Lista de erros
const errors = {
  passwordWrong: '"password" is wrong',
};

const validatePassword = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  
  if (md5(password) !== user.password) {
    return res.status(400).json({ message: errors.passwordWrong });
  }

  next();
});

module.exports = { validatePassword };