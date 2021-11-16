import React from 'react';
import TopBar from '../components/TopBar';
import './css/Products.css';

function Products() {
  const name = localStorage.getItem('name');
  return (
    <TopBar name={ name } />
  );
}

export default Products;
