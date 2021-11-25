const express = require('express');
const router = express.Router();
const { jwtValid, createSale } = require('../service')

router.post('/', async (req, res) => {
  const token = req.headers.authorization;
  const {totalPrice, address, numberAddress, now, sellerId, userId} = req.body
  const validToken = await jwtValid(token);
  if (!validToken) {
    return res.status(404).json({ message: 'something wrong' })
  }
  console.log('controller', totalPrice);
  // totalPrice=Math.round((totalPrice * 100) / 100).toFixed(2);
  const create =  await createSale(totalPrice, address, numberAddress, now, userId, sellerId);
    return res.status(201).json(create);
  });

module.exports = router;