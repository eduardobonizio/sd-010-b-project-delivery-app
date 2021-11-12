import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

import '../styles/productList.css';

const ProductsList = ({ products }) => (
  <main className="product-list__container">
    {/* { console.log(products) } */}
    { products.map((product, index) => (
      <section key={ index } className="product-list__container__card">
        <ProductCard product={ product } />
      </section>
    )) }
  </main>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductsList;
