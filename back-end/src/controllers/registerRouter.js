const express = require('express');
const rescue = require('express-rescue');
const md5 = require('md5');
const { createCustomerUser } = require('../services/users');

const registerRouter = express.Router();

registerRouter.post('/', rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);

  await createCustomerUser({ name, email, password: hashedPassword, role: 'customer' });

  return res.status(201).end();
}));

module.exports = { registerRouter };
