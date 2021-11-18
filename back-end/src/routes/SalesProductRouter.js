const express = require('express');

const salesProductController = require('../app/controllers/salesProductController');

const router = express.Router();

router.route('/:id')
.get(salesProductController.findById);

module.exports = router;