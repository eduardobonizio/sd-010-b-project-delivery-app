const express = require('express');

const userController = require('../app/controllers/userController');

const router = express.Router();

router.route('/')
.get(userController.findAll)
.post(userController.add);
// .put
// .delete

router.route('/:id')
.get(userController.findById);

module.exports = router;