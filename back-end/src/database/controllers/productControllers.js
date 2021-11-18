const { validateGetProducts } = require('../services/productServices');

const getAllProducts = async (_req, res) => {
  try {
    const findALL = await validateGetProducts();
    return res.status(200).json(findALL);
  } catch (error) {
    res.status(404).json({error, message: 'Products not found!'});
  }
}

module.exports = {
  getAllProducts,
};