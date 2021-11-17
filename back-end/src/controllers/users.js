const express = require('express');
const rescue = require('express-rescue');
const { getUserByEmail } = require('../services/users');

const userRouter = express.Router();

userRouter.post('/', rescue(async (req, res) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);

  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  return res.status(200).json(user);
}));

module.exports = { userRouter };
