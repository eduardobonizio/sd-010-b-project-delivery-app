const express = require('express');
const router = express.Router();
const { checkUserLogin } = require('../service')

router.post('/', async (req, res) => {
const { email, password } = req.body;
const check =  await checkUserLogin(email, password);
if(check === null) {
  return res.status(404).json({ message: 'Not found '})
}
});

module.exports = router;
