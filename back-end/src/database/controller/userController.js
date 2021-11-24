const express = require('express');
const router = express.Router();
const { getUsers } = require('../service')

router.get('/', async (req, res) => {
const users =  await getUsers();
  return res.status(200).json(users)
});

module.exports = router;
