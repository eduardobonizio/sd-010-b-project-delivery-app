const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.login);
router.post('/login', userController.create);

module.exports = router;
