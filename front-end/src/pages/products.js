import React from 'react';
import getProducts from '../services/products';

const Products = async () => {
  const products = await getProducts();
  console.log(products.data);
  return (
    <main>
      <h1>Products</h1>
    </main>
  );
};

export default Products;
