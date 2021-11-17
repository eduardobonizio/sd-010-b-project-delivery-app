const { Product } = require("../database/models");

const getAllProducts = async () => Product.findAll();

const getProductById = async (id) => Product.findOne({ where: { id } });

module.exports = { getAllProducts, getProductById };
