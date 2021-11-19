const { product } = require('../../database/models');

const fomatedProducts = (productsArray) => {
  const newProducts = productsArray.map((elem) => {
    const obj = {
      id: elem.id,
      name: elem.name,
      price: elem.price,
      urlImage: elem.url_image,
    };
    return obj;
  });
  return newProducts;
};

const getAllProducts = async () => {
  const products = await product.findAll();
  const productFormated = fomatedProducts(products);
  return productFormated;
};

module.exports = {
  getAllProducts,
};