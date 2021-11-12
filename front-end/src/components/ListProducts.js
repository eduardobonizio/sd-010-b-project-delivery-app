import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function ListProducts() {
  const [products, setProducts] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!getStorage('user')) { history.push('/login'); }
    getProducts().then(({ data }) => setProducts(data))
      .catch((err) => { console.log(err); });
  }, [history]);

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
