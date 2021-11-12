const express = require('express');
const router = express.Router();
const { createUser, checkUserExists } = require('../service')

router.post('/', async (req, res) => {
const { name, email, password } = req.body;
const check =  await checkUserExists(name, email);
if (check) {
  return res.status(409).json({ message: 'User already exists'})
}
await createUser(name, email, password);
  return res.status(201).json({ message: 'Created'})
});

module.exports = router;
