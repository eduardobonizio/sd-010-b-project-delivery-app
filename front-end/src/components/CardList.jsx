import React, { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';

function CardList() {
  const { products } = useContext(Context);

  return (
    <main className="card">
      {products.map((item) => <Card key={ item.id } item={ item } />)}
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
      >
        Ver Carrinho: R$
        {' '}
        <h4>0,00</h4>
      </button>
    </main>
  );
}

export default CardList;
