import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDelivery } from '../hooks/useDelivery';

function RedirectButton() {
  const { total } = useDelivery();
  const history = useHistory();

  function redirectCheckout() {
    history.push('/customer/checkout');
  }
  return (
    <div
      className="d-grid gap-2 d-md-flex justify-content-md-end"
    >
      <button
        data-testid="customer_products__checkout-bottom-value"
        className="btn btn-primary"
        type="button"
        onClick={ redirectCheckout }
      >
        Ver carrinho: R$
        { total }
      </button>
    </div>
  );
}
export default RedirectButton;
