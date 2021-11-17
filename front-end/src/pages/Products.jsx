import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import cardFields from '../services/cardFields';

function Products() {
  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      <div className="card__container">
        {cardFields.map((el) => (
          <ProductCard key={ el.id } product={ el } />
        ))}
      </div>
    </div>
  );
}

export default Products;
