const express = require('express');
const { checkoutSale, saleDatails } = require('../controllers/checkoutController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

router.post('/', validateJWT, checkoutSale);
router.get('/:id', validateJWT, saleDatails);

module.exports = router;
