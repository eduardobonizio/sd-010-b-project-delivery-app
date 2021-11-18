const express = require('express');
const router = express.Router();
const md5 = require('md5');
const { checkUserLogin, jwtLogin } = require('../service');

router.post('/', async (req, res) => {
const { email, password } = req.body;
const crypto = md5(password);
const check =  await checkUserLogin(email, crypto);
if(check === null) {
  return res.status(404).json({ message: 'Not Found'})
}
const token = jwtLogin();
const { name, role } = check;
return res.status(200).json({ name, email, role, token });
});

module.exports = router;
