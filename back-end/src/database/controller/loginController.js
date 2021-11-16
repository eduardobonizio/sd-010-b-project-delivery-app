const express = require('express');
const router = express.Router();
const md5 = require('md5');
const { checkUserLogin } = require('../service');

router.post('/', async (req, res) => {
const { email, password } = req.body;
const crypto = md5(password);
const check =  await checkUserLogin(email, crypto);
if(check === null) {
  return res.status(404).json({ message: 'Not Found'})
}

return res.status(200).json(check);
});

module.exports = router;
