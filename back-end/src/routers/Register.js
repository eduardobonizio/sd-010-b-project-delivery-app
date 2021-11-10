const express = require('express');
const { registerController } = require('../controllers/userController');

const router = express.Router();

router.post('/').post(registerController);

module.exports = router;
