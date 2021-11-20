import React from 'react';
import './css/CartTotal.css';
import Proptypes from 'prop-types';

function CheckoutCart({ cartTotal }) {
  return (
    <div
      className="floating-total"
    >
      Ver Carrinho: R$
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { ` ${cartTotal.toFixed(2).toString().split('.').join(',')}` }
      </span>
    </div>
  );
}

CheckoutCart.propTypes = {
  cartTotal: Proptypes.number.isRequired,
};

export default CheckoutCart;
