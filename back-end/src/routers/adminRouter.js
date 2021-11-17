const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/manage');

adminRouter.post('manage/:id');

module.exports = {
  adminRouter,
};