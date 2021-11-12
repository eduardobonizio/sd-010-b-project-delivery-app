const express = require('express');

const loginController = require('../app/controllers/loginController');

// jwt

const router = express.Router();

router.get('/', loginController.login);

module.exports = router;