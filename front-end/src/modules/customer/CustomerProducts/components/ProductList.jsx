import React, { useState, useEffect } from 'react';
import Cards from '../../../../components/Cards';
import api from '../../../../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <Cards key={ product.id } product={ product } />
      ))}
    </div>
  );
}

export default ProductList;
