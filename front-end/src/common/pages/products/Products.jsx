import React from 'react';
import Header from '../../../components/ProductsComponents/Header';
import '../../../styles/Products.css';
import ProductsCards from '../../../components/ProductsComponents/ProductsCards';
import CheckBtnProducts from '../../../components/ProductsComponents/CheckBtnProducts';

const Products = () => (
  <div className="main-div">
    <Header />
    <section className="main-section">
      <ProductsCards />
      <CheckBtnProducts />
    </section>
  </div>
);

export default Products;
