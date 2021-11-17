import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProdCartButton({ totalPrice }) {
  const navigate = useNavigate();

  const productPrice = (price) => {
    const min = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === min) return `${newPrice}0`;
    return newPrice;
  };
  console.log(totalPrice);

  return (
    <div>
      <button
        type="button"
        disabled={ parseInt(totalPrice, 10) === 0 }
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__button-cart"

      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {
            `Ver Carrinho:  R$ ${productPrice(totalPrice)}`
          }
        </span>
      </button>
    </div>
  );
}

ProdCartButton.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default ProdCartButton;
