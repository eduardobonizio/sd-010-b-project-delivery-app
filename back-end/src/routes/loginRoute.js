const express = require('express');

const router = express.Router();

const { loginFields } = require('../middlewares/validateFields');

router.route('/', loginFields)
  .post();

module.exports = router;