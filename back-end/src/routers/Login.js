const express = require('express');
const { loginController } = require('../controllers/userController');

const router = express.Router();
router.post('/').post(loginController);

module.exports = router;
