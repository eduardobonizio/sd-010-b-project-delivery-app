const router = require('express').Router();
const salesController = require('../controllers/sales');
const { validateJWT } = require('../middlewares/validateToken');

router.get('/', validateJWT, salesController.sales);

module.exports = router;