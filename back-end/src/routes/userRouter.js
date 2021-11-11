const express = require('express');
const userController = require('../app/controllers/userController');
// jwt

const router = express.Router();

router.post('/', userController.add);

router.get('/', userController.findAll);

module.exports = router;