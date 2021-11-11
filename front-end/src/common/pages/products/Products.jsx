import React from 'react';
import Header from '../../../components/Header';
import '../../../styles/Products.css';
import ProductsCards from '../../../components/ProductsCards';

const Products = () => {
  console.log('bah');
  return (
    <div className="main-div">
      <Header />
      <section className="main-section">
        <ProductsCards />
      </section>
    </div>
  );
};

export default Products;
