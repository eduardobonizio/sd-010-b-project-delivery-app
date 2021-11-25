const { Router } = require('express');

const nameValidate = require('../middlewares/nameValidate');
const emailValidate = require('../middlewares/emailValidate');
const passwordValidate = require('../middlewares/passwordValidate');
const { getAllProductsController } = require('../controllers/productsController');
const { loginController } = require('../controllers/loginController');
const { getAllSellersController } = require('../controllers/usersController');
const { registerController } = require('../controllers/registerController');
const { finishSaleController,
  allSalesByUserController,
  saleByUserController } = require('../controllers/saleController');
const JWTGenerate = require('../middlewares/generateToken');
const JWTValidate = require('../middlewares/validateToken');

const router = Router();

router.get('/all-products', JWTValidate, getAllProductsController);
router.get('/all-sellers', JWTValidate, getAllSellersController);
router.post('/login', emailValidate, passwordValidate, loginController, JWTGenerate);
router.post('/register',
  nameValidate, emailValidate, passwordValidate, registerController, JWTGenerate);
router.post('/finish-sale', JWTValidate, finishSaleController);
router.post('/all-sales-by-user', JWTValidate, allSalesByUserController);
router.post('/sale-by-user', JWTValidate, saleByUserController);

// (`0000${sale.id}`).slice(-4)

module.exports = router;
