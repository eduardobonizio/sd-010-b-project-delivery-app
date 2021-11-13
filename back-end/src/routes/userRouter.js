const express = require('express');

const userController = require('../app/controllers/userController');

// jwt

const router = express.Router();

router.route('/')
.get(userController.findAll)
.post(userController.add);

router.route('/:id')
.get(userController.findById);

module.exports = router;