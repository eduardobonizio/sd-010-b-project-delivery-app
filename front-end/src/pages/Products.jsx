import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import cardFields from '../services/cardFields';

function Products() {
  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      {cardFields.map((el) => (
        <ProductCard key={ el.id } />
      ))}
    </div>
  );
}

export default Products;
