const express = require('express');
const { getUserByEmail } = require('../database/controllers/userController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .get('/login', (_req, res) => res.status(200).json({ message: 'LOGIN' }))
  .post('/login', getUserByEmail);

router.use(errorMiddleware);

module.exports = router;