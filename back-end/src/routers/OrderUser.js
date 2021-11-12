const express = require("express");
const { getAllOrdersByUserId } = require("../controllers/orderController");

const router = express.Router();

router.get("/:id", getAllOrdersByUserId);

module.exports = router;
