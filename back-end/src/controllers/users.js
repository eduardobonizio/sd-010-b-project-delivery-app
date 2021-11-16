const express = require('express');
const rescue = require('express-rescue');
const { getUserByEmail,
  getUserByName,
  createUser,
  } = require('../services/users');

const userRouter = express.Router();

userRouter.post('/', rescue(async (req, res) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);

  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(200).json(user);
}));

userRouter.post('/register', rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  const findUserName = await getUserByName(name);
  const findUserEmail = await getUserByEmail(email);
  if (findUserName || findUserEmail) return res.status(409).json({ message: 'Usuário já existe' });

  const create = await createUser(name, email, password, role);
  return res.status(201).json(create);
}))

module.exports = { userRouter };
