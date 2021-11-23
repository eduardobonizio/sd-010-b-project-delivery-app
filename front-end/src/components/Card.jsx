import React, { useContext } from 'react';
import Context from '../context/Context';

function Card() {
  const { products } = useContext(Context);

  return (
    <main>
      <section>
        <h1
          data-testid="customer_products__element-card-price-"
        >
          {products.price}
        </h1>
        <img
          src="https://cdn.dooca.store/1656/features/grupo-1054.svg?v=1614960770"
          alt="Imagem"
          data-testid="customer_products__img-card-bg-image-"
        />
        <h3
          data-testid="customer_products__element-card-title-"
        >
          {products.title}
        </h3>
      </section>
      <section>
        <button
          data-testid="customer_products__button-card-rm-item-"
          type="button"
          title="-"
        >
          -
        </button>
        <input
          data-testid="customer_products__input-card-quantity-"
          type="number"
          title="quantidade de ítens"
          min="1"
          max="15"
          step="1"
        />
        <button
          data-testid="customer_products__button-card-add-item-"
          type="button"
          title="+"
        >
          +
        </button>
      </section>
    </main>
  );
}

export default Card;
