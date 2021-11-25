const express = require('express');
const { getAllSellers } = require('../controllers/userController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .get('/', getAllSellers);

router.use(errorMiddleware);

module.exports = router;