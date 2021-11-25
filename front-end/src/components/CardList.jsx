import React, { useContext } from 'react';
import Context from '../context/Context';
import Card from './Card';

function CardList() {
  const { products } = useContext(Context);
  const CARRINHO_DE_COMPRAS = 'Carrinho de Compras';
  const loadStorage = localStorage.getItem(CARRINHO_DE_COMPRAS);
  const storeJson = JSON.parse(loadStorage);
  const total = Object.entries(storeJson).map((item) => Object.entries(item)
    .map((chave) => console.log('Chave', chave)))
    .reduce((acc, value) => acc + value, 0);

  console.log('Total', total);
  return (
    <main>
      <section className="card">
        {products.map((item) => (
          <Card key={ item.id } item={ item } />
        ))}
      </section>
      <section className="card">
        <button
          type="button"
        >
          <h3>Ver Carrinho:</h3>
          {' '}
          <h1 data-testid="customer_products__checkout-bottom-value">
            R$
            {total}
          </h1>
        </button>
      </section>
    </main>
  );
}

export default CardList;
