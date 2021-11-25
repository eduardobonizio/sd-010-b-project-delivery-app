const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../service')

router.get('/', async (req, res) => {
const users =  await getUsers();
  return res.status(200).json(users)
});

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const userId = await getUserById(id);

  return userId;
})

module.exports = router;
