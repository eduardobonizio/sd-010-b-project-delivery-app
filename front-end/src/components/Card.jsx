import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function CardsProducts() {
  const { products } = useContext(AppContext);
  console.log('Card', products);
  return (
    <main>
      <header>
        <h1>Card Component</h1>
      </header>
      <div>
        { products.map((product, index) => (
          <div
            key={ index }
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            <image src={ product.url_image } />
            <h3>{ product.name }</h3>
            <p>{ product.price }</p>
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            >
              -

            </button>
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            >
              +

            </button>
          </div>)) }
      </div>
    </main>
  );
}

export default CardsProducts;
