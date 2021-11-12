import React from 'react';
import Header from '../../../components/Header';
import '../../../styles/Products.css';
import ProductsCards from '../../../components/ProductsCards';
import CheckoutButtonProducts from '../../../components/CheckoutButtonProducts';

const Products = () => {
  console.log('bah');
  return (
    <div className="main-div">
      <Header />
      <section className="main-section">
        <ProductsCards />
        <CheckoutButtonProducts />
      </section>
    </div>
  );
};

export default Products;
