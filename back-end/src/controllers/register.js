const express = require('express');
const { newJwtToken } = require('../helpers/jwt');
const { createUser, findUserByEmail } = require('../services/userService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await createUser(name, email, password);

    if (user) {
      const token = await newJwtToken(email, user.id);
      return res.status(201).json({
        name,
        email,
        role: 'customer',
        token,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(409).send();
  }
});

router.post('/check', async (req, res) => {
  const { email } = req.body;
  const checkExistence = await findUserByEmail(email);
  if (checkExistence.data) return res.status(409);
  return res.status(200);
});

module.exports = router;
