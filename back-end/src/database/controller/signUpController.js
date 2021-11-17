const express = require('express');
const router = express.Router();
const md5 = require('md5');
const { createUser, checkUserExists } = require('../service')

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
  const check =  await checkUserExists(name, email);
  if (check) {
    return res.status(409).json({ message: 'User already exists'})
  }
  const crypto = md5(password);
  const role = 'customer';
  await createUser(name, email, crypto, role);
    return res.status(201).json({ message: 'Created' })
}
  catch (err) {
  console.log(err);
  }
});

module.exports = router;
