const express = require('express');
const { findAllUsers, findUserByPk } = require('../controllers/userController');
const auth = require('../middlewares/auth');

const adminRouter = express.Router();

adminRouter.get('/manage', auth, findAllUsers);

adminRouter.post('manage/:id', auth, findUserByPk);

module.exports = {
  adminRouter,
};