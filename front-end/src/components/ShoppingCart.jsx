import React from 'react';
import ID from '../utils/dataTestIdDict';
import '../styles/ShoppingCart.css';

function shoppingCart({ totalSales, navigate }) {
  const formatedNumber = totalSales.toFixed(2).replace('.', ',');
  const buttomStatus = () => {
    if (formatedNumber !== '0,00') {
      return false;
    }
    return true;
  };

  return (
    <button
      type="button"
      className="shopping-cart"
      disabled={ buttomStatus() }
      onClick={ () => navigate('/customer/checkout') }
      data-testid="customer_products__button-cart"
    >
      <p data-testid={ `${ID.dataTestId21}` }>{`${formatedNumber}`}</p>
    </button>
  );
}
export default shoppingCart;
