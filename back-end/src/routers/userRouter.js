const express = require('express');
const { getUserByEmail } = require('../controllers/userController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .get('/', (_req, res) => res.status(200).json({ message: 'LOGIN' }))
  .post('/', getUserByEmail);

router.use(errorMiddleware);

module.exports = router;