const express = require('express');

const router = express.Router();

const { addUser } = require('../controllers/userRegister');
const { registerFilds } = require('../middlewares/validateFields');

router.route('/').post(registerFilds, addUser);

module.exports = router;