const express = require('express');
const { checkoutSale } = require('../controllers/checkoutController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWT, checkoutSale);

module.exports = router;
