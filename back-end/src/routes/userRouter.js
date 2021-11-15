const express = require('express');

const userController = require('../app/controllers/userController');
// const { validToken } = require('../middlewares/auth/validJWT');

// jwt

const router = express.Router();

router.route('/')
.get(userController.findAll)
.post(userController.add);

router.route('/:id')
.get(userController.findById);

// by role

// deleteUser

module.exports = router;