const express = require('express');
const { findAllUsers, findUserByPk } = require('../controllers/userController');
const { jwtValidation } = require('../middlewares/jwtValidation');

const adminRouter = express.Router();

adminRouter.get('/manage', jwtValidation, findAllUsers);

adminRouter.post('manage/:id', jwtValidation, findUserByPk);

module.exports = {
  adminRouter,
};