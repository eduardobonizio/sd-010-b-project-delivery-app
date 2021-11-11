const express = require('express');
const userController = require('../app/controllers/userController');

const userValid = require('../middlewares/userValidations');

// jwt

const router = express.Router();

router.post('/', userValid, userController.add);

router.get('/', userController.findAll);

module.exports = router;