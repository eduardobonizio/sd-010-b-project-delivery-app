import React, { useState, useEffect } from 'react';
import { getAllProductsApi } from '../../../../api/customer';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const respProducts = await getAllProductsApi();
    setProducts(respProducts);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap row mx-5">
      {products.map((product) => (
        <Product key={ product.id } product={ product } />
      ))}
    </div>
  );
}

export default ProductList;
