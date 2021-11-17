const express = require('express');
const rescue = require('express-rescue');
const md5 = require('md5');
const { createUser } = require('../services/users');

const registerRouter = express.Router();

registerRouter.post('/', rescue(async (req, res) => {
  const { name, email, password } = req.body;
  
  await createUser({ name, email, password: md5(password), role: 'customer' });

  return res.status(201).end();
}));

module.exports = { registerRouter };
