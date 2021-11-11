const express = require('express');
const { checkoutSale } = require('../controllers/checkoutController');
const validateJWT = require('../middleware/validateJWT');

const router = express.Router();

// validateJWT middleware que valida a existencia do token e do usuário no bd
router.post('/', validateJWT, checkoutSale);

// endpoint para o vendedor editar o status
// router.put('/:{id}', updateStatus);

module.exports = router;
