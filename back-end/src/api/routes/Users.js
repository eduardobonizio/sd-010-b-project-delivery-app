const router = require('express').Router();
const rescue = require('express-rescue');

const { usersController } = require('../../controllers');
const validationToken = require('../../utils/validations/validationsToken');

router.get('/sellers', rescue(validationToken), rescue(usersController.getAllSellers));
router.get('/all', rescue(validationToken), rescue(usersController.getAllUsers));
router.delete('/:id', rescue(validationToken), rescue(usersController.deleteUser));

module.exports = router;
