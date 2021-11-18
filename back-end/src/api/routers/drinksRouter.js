const { Router } = require('express');

const nameValidate = require('../middlewares/nameValidate');
const emailValidate = require('../middlewares/emailValidate');
const passwordValidate = require('../middlewares/passwordValidate');
const { getAllProductsController } = require('../controllers/productsController');
const { loginController } = require('../controllers/loginController');
const { registerController } = require('../controllers/registerController');

const JWT = require('../middlewares/generateToken');

const router = Router();

router.get('/all-products', JWT, getAllProductsController);
router.post('/login', emailValidate, passwordValidate, loginController);
router.post('/register', emailValidate, passwordValidate, nameValidate, registerController);

module.exports = router;
