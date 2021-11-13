const express = require('express');

const router = express.Router();

const loginController = require('../app/controllers/loginController');

router.route('/')
  .post(loginController.login);

module.exports = router;
