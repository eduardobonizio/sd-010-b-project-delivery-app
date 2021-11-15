const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// LOGINs
router.post('/login', userController.loginUser);
// CADASTRO
router.post('/register', userController.createUser);
router.post('/ADMregister', userController.createUserByADM);

// USERs
router.get('/users', userController.getAllUsers);
router.delete('/users', userController.deleteUser);

module.exports = router;