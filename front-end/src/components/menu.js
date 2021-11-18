/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import fetchProducts from '../services/productsAPI';
import DrinkCard from './drinkCard';
import ShoppingCartStatus from './shoppingCartStatus';

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">

      <section className="flex flex-col items-center justify-center w-4/5 self-center mt-20">
        <div className="text-color-yellow">
          <h1 className="text-4xl ix-blend-lighten mx-20 my-20 absolute z-10">Produtos</h1>
          <img className="w-80 relative z-0 -my-2" src="/brush.svg" alt="Imagem da login" />
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap">
          {products.map((el) => (
            <DrinkCard product={ el } key={ el.name } />
          ))}
        </div>
        <ShoppingCartStatus />
      </section>
    </div>

  );
}
