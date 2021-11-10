const express = require('express');

const router = express.Router();

const { loginFields } = require('../middlewares/validateFields');
const { login } = require('../controllers/login');

router.route('/')
  .post(loginFields, login);

module.exports = router;