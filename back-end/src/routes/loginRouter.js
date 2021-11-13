const express = require('express');

const router = express.Router();

const loginController = require('../app/controllers/loginController');

router.route('/')
  .get(loginController.login);

router.route('/login')
  .get(loginController.login);

module.exports = router;
