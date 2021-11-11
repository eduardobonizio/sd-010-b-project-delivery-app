import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

export default function ListProducts() {
  const [products, setProducts] = useState('');

  useEffect(() => {
    getProducts().then(({ data }) => setProducts(data));
  }, []);

  return (
    <>
      <h3>Products</h3>

      { products && products.map(({ name, price, urlImage }, index) => (
        <section key={ index }>
          <img src={ urlImage } alt={ name } />
          <li>{ name }</li>
          <li>{ price }</li>
        </section>
      )) }
    </>
  );
}
