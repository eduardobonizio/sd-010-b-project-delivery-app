const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const { checkUserExists } = require('../service')

router.post('/', async (req, res) => {
const { email, password } = req.body;
const check =  await checkUserExists(email, password);
if(check === null) {
  return res.status(404).json({ message: 'Not found '})
}
});

module.exports = router;
