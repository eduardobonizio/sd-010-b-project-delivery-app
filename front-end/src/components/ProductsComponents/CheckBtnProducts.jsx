import React, { useContext } from 'react';
import '../../styles/CheckoutButtonProducts.css';
import { Link } from 'react-router-dom';
import { Context } from '../../provider/Provider';

import addZeroes from '../../helper/functions/addZeroes';

const CheckoutButtonProducts = () => {
  const { totalOrder } = useContext(Context);
  return (
    <div className="checkout-div">
      <Link to="/customer/checkout">
        <button
          type="button"
          className="checkout-btn"
          data-testid="customer_products__button-cart"
        >
          Ver Carrinho: R$
          {' '}
          <p
            data-testid="customer_products__checkout-bottom-value"

          >
            {`${addZeroes(totalOrder)}`}
            {' '}
          </p>
        </button>
      </Link>
    </div>
  );
};

export default CheckoutButtonProducts;
