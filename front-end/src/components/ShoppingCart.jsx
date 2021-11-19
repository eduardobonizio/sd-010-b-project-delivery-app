import React from 'react';
import ID from '../utils/dataTestIdDict';
import '../styles/ShoppingCart.css';

function shoppingCart({ totalSales, navigate }) {
  const formatedNumber = totalSales.toString().replace('.', ',');
  const buttomStatus = () => {
    if (formatedNumber !== '0') {
      return false;
    }
    return true;
  };
  console.log(ID.dataTestId21);
  return (
    <button
      type="button"
      className="shopping-cart"
      disabled={ buttomStatus() }
      onClick={ () => navigate('/customer/checkout') }
      data-testid="customer_products__button-cart"
    >
      <p data-testid={ `${ID.dataTestId21}` }>{`Carrinho R$ ${formatedNumber}`}</p>
    </button>
  );
}
export default shoppingCart;
