import React, { useContext } from 'react';
import Context from '../context/Context';
import ButtonTotal from './ButtonTotal';
import Card from './Card';

function CardList() {
  const { products, setTotal } = useContext(Context);
  const CARRINHO_DE_COMPRAS = 'Carrinho de Compras';
  const loadStorage = localStorage.getItem(CARRINHO_DE_COMPRAS);
  const storeJson = JSON.parse(loadStorage);
  const total = Object.values(storeJson)
    .map((item) => Number(item.totalPrice))
    .reduce((acc, value) => acc + value, 0);
  setTotal(total);
  console.log('Total', total);
  return (
    <main>
      <section className="card">
        {products.map((item) => (
          <Card key={ item.id } item={ item } />
        ))}
      </section>
      <ButtonTotal />
    </main>
  );
}

export default CardList;
