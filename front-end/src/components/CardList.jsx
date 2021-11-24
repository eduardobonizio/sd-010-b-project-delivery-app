import React, { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';

function CardList() {
  const { products } = useContext(Context);

  return (
    <main>
      {products.map((item) => <Card key={ item.id } item={ item } />)}
    </main>
  );
}

export default CardList;
