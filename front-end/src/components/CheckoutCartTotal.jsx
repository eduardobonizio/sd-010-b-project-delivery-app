import React from 'react';
// import './css/CartTotal.css';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';

function CheckoutCartTotal({ cartTotal }) {
  const history = useHistory();
  const redirectToCart = () => history.push('/customer/checkout');
  return (
    <div
      className="floating-total"
      data-testid="customer_products__checkout-bottom-value"
      disabled={ cartTotal <= 0 }
      style={ { marginLeft: '5px' } }
    >
      Total: R$
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
        disabled={ cartTotal <= 0 }
        onClick={ redirectToCart }
      >
        { ` ${cartTotal.toFixed(2).toString().split('.').join(',')}` }
      </button>
    </div>
  );
}

CheckoutCartTotal.propTypes = {
  cartTotal: Proptypes.number.isRequired,
};

export default CheckoutCartTotal;
