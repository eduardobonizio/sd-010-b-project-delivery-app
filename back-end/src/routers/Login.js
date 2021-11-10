const express = require('express');
const { loginController } = require('../controllers/userController');

const router = express.Router();
router.route('/').post(loginController);

module.exports = router;
