import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../apis/products';

function OrderDetailsCard({ dataId, index, quantity }) {
  const dataTestId = 'customer_order_details__element-order-';
  const [product, setProduct] = useState(false);

  useEffect(() => {
    console.log(dataId);
    const getProduct = async () => {
      const request = await getProductById(dataId);
      console.log(request);
      setProduct(request);
    };
    getProduct();
  }, [dataId]);

  return (
    <main key={ index } className="customer-order-details__container">
      <section
        data-testid={ `${dataTestId}table-item-number-${index}` }
        className="customer-order-details__item"
      >
        { index }
      </section>
      <section
        data-testid={ `${dataTestId}table-name-${index}` }
        className="customer-order-details__description"
      >
        { product && product.name }
      </section>
      <section
        data-testid={ `${dataTestId}table-quantity-${index}` }
        className="customer-order-details__quantity"
      >
        { quantity }
      </section>
      <section
        data-testid={ `${dataTestId}total-price` }
        className="customer-order-details__price"
      >
        { product && `R$ ${(+product.price).toFixed(2)}` }
      </section>
      <section
        data-testid={ `${dataTestId}table-sub-total-${index}` }
        className="customer-order-details__subtotal"
      >
        { product && `R$ ${(quantity * (+product.price)).toFixed(2)}` }
      </section>
    </main>
  );
}

OrderDetailsCard.propTypes = {
  dataId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default OrderDetailsCard;
