import React, { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';

function CardList() {
  const { products } = useContext(Context);

  return (
    <main>
      {products.map((item, index) => <Card key={ item.id } item={ item } i={ index } />)}
    </main>
  );
}

export default CardList;
