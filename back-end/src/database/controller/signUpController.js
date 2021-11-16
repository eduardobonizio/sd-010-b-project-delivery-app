const express = require('express');
const router = express.Router();
const md5 = require('md5');
const { createUser, checkUserExists } = require('../service')

router.post('/', async (req, res) => {
const { name, email, password } = req.body;
const check =  await checkUserExists(name, email);
if (check) {
  return res.status(409).json({ message: 'User already exists'})
}
const crypto = md5(password);
await createUser(name, email, crypto);
  return res.status(201).json({ message: 'Created'})
});

module.exports = router;
