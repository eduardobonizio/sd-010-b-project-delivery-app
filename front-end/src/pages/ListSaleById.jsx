import React from 'react';

import TopBar from '../components/TopBar';

import './css/Products.css';

function Products() {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <TopBar name={ name } />
      <div>
        UNDER CONSTRUCTION
      </div>
    </>
  );
}

export default Products;
