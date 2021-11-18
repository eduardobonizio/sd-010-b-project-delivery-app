const router = require('express').Router();
const salesController = require('../controllers/sales.js');
const validateJWT = require('../middlewares/validateJWT');

router.get('/', validateJWT, salesController.sales);

module.exports = router;