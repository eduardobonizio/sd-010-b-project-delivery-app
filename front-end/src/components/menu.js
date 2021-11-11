import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/productsAPI';
import DrinkCard from './drinkCard';

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  console.log(products);
  return (
    <section>
      {products.map((el) => (
        <DrinkCard product={ el } key={ el.name } />
      ))}
    </section>

  );
}
