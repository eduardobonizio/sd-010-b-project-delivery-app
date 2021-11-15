const router = require('express').Router();
const rescue = require('express-rescue');

const { productsController } = require('../../controllers');
const validationToken = require('../../utils/validations/validationsToken');

router.get('/', rescue(validationToken), rescue(productsController.getAll));

module.exports = router;
