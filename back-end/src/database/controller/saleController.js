const express = require('express');
const router = express.Router();
const { jwtValid } = require('../service')

router.post('/', async (req, res) => {
  console.log('controller');
  const token = req.headers.authorization;
  const validToken = await jwtValid(token);
  if (!validToken) {
    return res.status(404).json({ message: 'something wrong' })
  }
  // const createSale =  await createSale();
    return res.status(201).json({ message: 'Created' })
  });

module.exports = router;
