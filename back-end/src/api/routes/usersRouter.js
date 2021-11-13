const router = require('express').Router();
const rescue = require('express-rescue');

const { usersController } = require('../../controllers');

router.get('./seller/:id', rescue(usersController.getSellerById));

module.exports = router;
