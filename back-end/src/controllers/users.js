const express = require('express');
const rescue = require('express-rescue');
const { loginUser } = require('../services/users')

const userRouter = express.Router();

userRouter.post('/', rescue(async (req, res) => {
  const login = await loginUser(req.body);
  if (login.err) return res.status(404).json(login.err);
  return res.status(200).json(login);
}));

module.exports = { userRouter };
