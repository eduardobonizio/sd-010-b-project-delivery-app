const express = require("express");
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", getAllProducts);
router.post("/:id", getProductById);

module.exports = router;
