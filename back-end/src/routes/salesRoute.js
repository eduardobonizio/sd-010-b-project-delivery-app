const express = require('express');

const salesController = require('../controllers/sales');
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.route('/')
    .get(salesController.getSales)
    .post(validateJWT, salesController.addSale);

module.exports = router;
