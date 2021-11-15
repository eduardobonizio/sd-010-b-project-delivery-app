const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// LOGINs
router.post('/login', userController.loginUser);
router.post('/register', userController.createUser);
router.get('/sellers', userController.getAllSellers);

module.exports = router;
