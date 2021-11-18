import React from 'react';
import Header from '../../components/Header/Header';
import '../../../styles/Products.css';
import ProductsCards from '../../components/ProductsComponents/ProductsCards';
// import CheckoutButtonProducts from
//   '../../components/ProductsComponents/ProductsCardsHandleButtons';

const Products = () => (
  <div className="main-div">
    <Header />
    <section className="main-section">
      <ProductsCards />
      {/* <CheckoutButtonProducts /> */}

    </section>
  </div>
);

export default Products;
