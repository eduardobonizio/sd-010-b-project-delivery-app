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

router.route('/admin')
.post(userController.adminAddUser);

module.exports = router;