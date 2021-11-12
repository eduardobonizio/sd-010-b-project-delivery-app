import React, { useState, useEffect } from 'react';

import { getAll } from '../apis/products';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const [products, setProducts] = useState([]);

  const requestProducts = async () => {
    setProducts(await getAll());
  };

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div>
      { products && <ProductsList products={ products } /> }
    </div>
  );
};

export default Products;
