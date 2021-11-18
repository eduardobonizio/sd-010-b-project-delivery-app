import React, { useContext } from 'react';
import { Context } from '../../../provider/Provider';
import fixPrice from '../../../helper/functions/fixPrice';
import '../../../styles/ProductsCards.css';
import ProductsCardsHandleButtons from './ProductsCardsHandleButtons';

const ProductsCards = () => {
  const { products } = useContext(Context);

  return (
    <div className="div-mainDiv">
      {products && products.map((el) => (
        <section key={ el.id } className="cards-sections">
          <div className="div-price">
            <p data-testid={ `customer_products__element-card-price-${el.id}` }>
              R$
              {' '}
              {fixPrice(el.price)}
            </p>
          </div>
          <img
            src={ el.url }
            alt={ el.name }
            data-testid={ `customer_products__img-card-bg-image-${el.id}` }
            className="imgs-element-cards"
          />
          <ProductsCardsHandleButtons el={ el } />
        </section>
      )) }
    </div>
  );
};

export default ProductsCards;
