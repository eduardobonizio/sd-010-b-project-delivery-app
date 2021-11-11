import React, { useContext } from 'react';
import data from '../mockDatas/productsMockData';
import { Context } from '../provider/Provider';

import '../styles/ProductsCards.css';

const fixPrice = (price) => {
  const number = price.toFixed(2).toString().replace('.', ',');

  return number;
};
const ProductsCards = () => {
  const { products } = useContext(Context);
  console.log('bah', products);

  return (
    <div>
      {data.map(({ id, name, price, url }) => (
        <section key={ id } className="cards-sections">
          <p data-testid={ `customer_products__element-card-price-${id}` }>
            R$
            {' '}
            { fixPrice(price) }
          </p>
          <img
            src={ url }
            alt={ name }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <div>
            <h3
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              {name}
            </h3>
            <div>
              <button
                type="button"
                data-testid={ `customer_products__button-card-rm-item-${id}` }
              >
                -
              </button>
              <p data-testid={ `customer_products__input-card-quantity-${id}` }>0</p>
              <button
                type="button"
                data-testid={ `customer_products__button-card-add-item-${id}` }
              >
                +
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsCards;
