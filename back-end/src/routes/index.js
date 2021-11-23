const router = require('express').Router();
const users = require('../controllers/users');
const products = require('../controllers/products');
const sales = require('../controllers/sales');

router.use('/users', users);
router.use('/products', products);
router.use('/sales', sales);

module.exports = router;
