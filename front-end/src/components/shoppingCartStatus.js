import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ShoppingCartStatus({ totalValue }) {
  return (
    <Link to="/customer/checkout" data-testid="customer_products__button-cart">
      <button type="button">{`Ver Carrinho: R$ ${totalValue}`}</button>
    </Link>
  );
}

ShoppingCartStatus.propTypes = {
  totalValue: PropTypes.arrayOf.isRequired,
};

export default ShoppingCartStatus;
