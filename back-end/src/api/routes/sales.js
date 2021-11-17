const router = require('express').Router();
const salesController = require('../controllers/sales');
/* const validateJWT = require('../middlewares/validateJWT'); */

router.get('/', /*  validateJWT,  */salesController.sales);

module.exports = router;