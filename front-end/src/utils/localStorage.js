const updateProducts = (product) => {
  const products = JSON.parse(localStorage.getItem('carrinho'));
  const productIndex = products.findIndex((prod) => prod.id === product.id);
  if (productIndex < 0) {
    const newProducts = [...products, product];
    localStorage.setItem('carrinho', JSON.stringify(newProducts));
  } else {
    products[productIndex] = product;
    localStorage.setItem('carrinho', JSON.stringify(products));
  }
};

const deleteProducts = (id) => {
  const products = JSON.parse(localStorage.getItem('carrinho'));
  const newProducts = products.filter((prod) => prod.id !== id);
  localStorage.setItem('carrinho', JSON.stringify(newProducts));
};

export {
  updateProducts,
  deleteProducts,
};
