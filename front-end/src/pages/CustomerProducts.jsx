import React, { useState, useEffect } from 'react';
import getProducts from '../api/getProducts';

import ProductCard from '../components/ProductCard';

const CustomerProducts = () => {
  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => res.json())
      .then((data) => setProducts(data));
    setIsloading(false);
  }, []);

  return !isLoading
    ? (
      <div>
        {products.map(({ id, price, image, description }) => (
          <ProductCard key={ id }>
            id=
            {id}
            price=
            {`${price.replace('.', ',')}`}
            image=
            {image}
            description=
            {description}
          </ProductCard>
        ))}

        <h1>Customer Products</h1>

      </div>) : <span>Carregando...</span>;
};

export default CustomerProducts;
