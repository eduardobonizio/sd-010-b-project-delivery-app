const { Product } = require('../database/models');

const getAllProducts = async () => {
  try {
  const products = await Product.findAll({});
  return products;
} catch (e) {
  console.log(e);
}
};
module.exports = {
  getAllProducts,
};