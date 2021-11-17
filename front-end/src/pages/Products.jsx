import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import './css/Products.css';

function Products() {
  const name = localStorage.getItem('name');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    };
    getProducts();
  }, []);
  console.log(products);

  return (
    <TopBar name={ name } />
  );
}

export default Products;
