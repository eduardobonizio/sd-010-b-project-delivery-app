const express = require('express');
const { validToken } = require('../middlewares/auth/validJWT');
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
.post(validToken, userController.adminAddUser);

module.exports = router;