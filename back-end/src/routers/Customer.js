const express = require("express");
const validateJWT = require('../middleware/validateJWT');
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");
const { checkoutSale, saleDatails, createSaleProduct } = require('../controllers/checkoutController');
const { getAllOrdersByUserId } = require("../controllers/orderController");

const router = express.Router();

router.get("/products", validateJWT, getAllProducts);
router.get("/products/:id", validateJWT, getProductById);


router.get("/orders", validateJWT, getAllOrdersByUserId);
router.post('/orders', validateJWT, checkoutSale);
router.get('/orders/details/:id', validateJWT, saleDatails);

router.post('/checkout', validateJWT, createSaleProduct);



module.exports = router;
