const express = require("express");
const validateJWT = require('../middleware/validateJWT');
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");
const { checkoutSale, saleDatails } = require('../controllers/checkoutController');
const { getAllOrdersByUserId } = require("../controllers/orderController");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);


router.get("/orders", validateJWT, getAllOrdersByUserId);
router.post('/orders', validateJWT, checkoutSale);
router.get('/orders/details/:id', validateJWT, saleDatails);



module.exports = router;