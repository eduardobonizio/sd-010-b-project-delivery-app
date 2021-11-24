const productsService = require('../Services/productsService');

const internalServerErrorMessage = 'Erro interno';

const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProducts();
    return res.status(201).json(products);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(internalServerErrorMessage);
  }
};

module.exports = {
  getAllProducts,
};