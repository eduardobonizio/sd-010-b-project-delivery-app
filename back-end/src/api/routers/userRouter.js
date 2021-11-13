const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// LOGINs
router.post('/login', userController.loginUser);
// CADASTRO
router.post('/register', userController.createUser);
// USERs
router.get('/users', userController.getAllUsers);

module.exports = router;