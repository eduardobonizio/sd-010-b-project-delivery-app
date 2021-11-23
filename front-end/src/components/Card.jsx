import React from 'react';

function Card() {
  return (
    <main>
      <section>
        <h1
          data-testid="customer_products__element-card-price-"
        >
          R$ 0,00
        </h1>
        <image
          data-testid="customer_products__img-card-bg-image-"
        >
          Imagem
        </image>
        <h3
          data-testid="customer_products__element-card-title-"
        >
          Nome/Título do Produto
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
