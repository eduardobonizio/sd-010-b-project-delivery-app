const express = require('express');
const admController = require('../controllers/admController');

const router = express.Router();

router.post('/', admController.authValidation, admController.create);

module.exports = router;
