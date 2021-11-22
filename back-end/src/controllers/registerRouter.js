const express = require('express');
const rescue = require('express-rescue');
const md5 = require('md5');
const { createUser } = require('../services/users');
const { existsUser } = require('../middlewares/userMiddlewares');

const registerRouter = express.Router();

registerRouter.post('/', existsUser, rescue(async (req, res) => {
  const { name, email, password } = req.body;
  
  const newUser = await createUser({ name, email, password: md5(password), role: 'customer' });

  return res.status(201).json(newUser);
}));

module.exports = { registerRouter };
