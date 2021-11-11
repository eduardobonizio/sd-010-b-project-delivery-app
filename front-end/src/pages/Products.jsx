import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import '../styles/Card.css';

function Products() {
  return (
    <div className="div-main">
      <Header />
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default Products;
