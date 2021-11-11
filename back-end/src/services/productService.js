const { Product } = require("../database/models");

const getAllProducts = async () => await Product.findAll();

const getProductById = async (id) => await Product.findOne({ where: { id } });

module.exports = { getAllProducts, getProductById };
