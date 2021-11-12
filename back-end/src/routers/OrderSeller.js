const express = require("express");
const { getAllOrdersBySellerId } = require("../controllers/orderController");

const router = express.Router();

router.get("/:id", getAllOrdersBySellerId);

module.exports = router;
