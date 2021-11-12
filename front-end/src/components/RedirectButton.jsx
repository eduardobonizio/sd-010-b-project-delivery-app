import React from 'react';
import { useHistory } from 'react-router-dom';

function RedirectButton() {
  const history = useHistory();

  function redirectCheckout() {
    history.push('/customer/checkout');
  }
  return (
    <div
      className="d-grid gap-2 d-md-flex justify-content-md-end"
    >
      <button
        className="btn btn-primary"
        type="button"
        onClick={ redirectCheckout }
      >
        Button
      </button>
    </div>
  );
}
export default RedirectButton;
