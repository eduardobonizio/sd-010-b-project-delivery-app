const rescue = require('express-rescue');
const { getUserByEmail, getUserByName } = require('../services/users');

// Comments: Lista de erros
const errors = {
  nameAlreadyExistis: 'Nome já existe',
  emailAlreadyExistis: 'Email já existe',
};

const existsUser = rescue(async (req, res, next) => {
  const { name, email } = req.body;

  const findUserName = await getUserByName(name);
  if (findUserName) return res.status(409).json({ message: errors.nameAlreadyExistis });

  const findUserEmail = await getUserByEmail(email);
  console.log(findUserEmail);
  if (findUserEmail) return res.status(409).json({ message: errors.emailAlreadyExistis });
  return next();
});

module.exports = {
  existsUser,
};