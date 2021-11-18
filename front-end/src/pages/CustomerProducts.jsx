import React, { useState, useEffect } from 'react';
import getProducts from '../api/getProducts';

import ProductCard from '../components/ProductCard';

const CustomerProducts = () => {
  const [isLoading, setIsloading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsloading(true);
    getProducts('customer').then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
    setIsloading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading
    ? <span>Carregando...</span> : (
      <div>
        {products.map(({ name, id, price, url_image: image }) => (<ProductCard
          key={ id }
          id={ id }
          price={ `${price.replace('.', ',')}` }
          image={ image }
          name={ name }
        />
        ))}

        <h1>Customer Products</h1>

      </div>);
};

export default CustomerProducts;
