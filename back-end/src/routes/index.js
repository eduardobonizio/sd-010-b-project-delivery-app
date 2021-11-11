const router = require('express').Router();
const users = require('../controllers/users');
const products = require('../controllers/products');

router.use('/users', users);
router.use('/products', products);

module.exports = router;
