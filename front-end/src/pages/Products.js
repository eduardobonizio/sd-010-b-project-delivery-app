import React, { useState, useEffect } from 'react';

import { getAll } from '../apis/products';
import ProductsList from '../components/ProductsList';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getAll());
  }, []);

  return <ProductsList products={ products } />;
};

export default Products;

