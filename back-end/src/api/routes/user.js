const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');

router.get('/sellers', userController.getAllSellers);

module.exports = router;