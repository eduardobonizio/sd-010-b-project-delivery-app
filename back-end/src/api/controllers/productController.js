const status = require('http-status');
const productService = require('../services/productService');

const INTERNAL_SERVER_ERROR_MSG = 'Alguma coisa deu errado :(';

const getAllProducts = async (req, res) => {
  try {
    const result = await productService.getAllProducts();

    res.status(status.OK).json(result);
  } catch (err) {
    console.log(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
};

module.exports = { 
  getAllProducts,
};
