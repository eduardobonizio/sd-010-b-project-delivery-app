import React, { useState, useEffect } from 'react';
import Product from './Product';
import api from '../../../../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const response = await api.get('/products');
    setProducts(response.data);
  }
  useEffect(() => {
    getAllProducts();
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
