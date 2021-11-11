const router = require('express').Router();
const rescue = require('express-rescue');

const { productsController } = require('../../controllers');

router.get('/', rescue(productsController.getAll));

module.exports = router;
