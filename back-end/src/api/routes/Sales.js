const router = require('express').Router();
const rescue = require('express-rescue');

const { salesController } = require('../../controllers');
const validationToken = require('../../utils/validations/validationsToken');

router.post('/', rescue(validationToken), rescue(salesController.createSale));
router.get('/', rescue(validationToken), rescue(salesController.getAll));
router.get('/:id', rescue(validationToken), rescue(salesController.getById));
router.put('/:id', rescue(validationToken), rescue(salesController.updateStatus));

module.exports = router;
