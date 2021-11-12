const express = require('express');

const userController = require('../app/controllers/userController');

// jwt

const router = express.Router();

router.route('/')
.get(userController.findAll)
.post(userController.add);

module.exports = router;