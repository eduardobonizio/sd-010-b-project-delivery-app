const router = require('express').Router();
const rescue = require('express-rescue');

const { registerController } = require('../../controllers');
const validationToken = require('../../utils/validations/validationsToken');

router.post('/customer', rescue(registerController.createUserCustomer));
router.post('/admin', rescue(validationToken), rescue(registerController.createUserAdmin));

module.exports = router;
