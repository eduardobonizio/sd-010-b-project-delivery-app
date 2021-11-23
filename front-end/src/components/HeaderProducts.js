import React from 'react';
import PropTypes from 'prop-types';

function HeaderProducts(props) {
  const { pageName } = props;
  return (
    <>
      <span
        data-testid="customer_products__element-navbar-link-products"
        className="pageName"
      >
        {pageName}
      </span>
      <span
        data-testid="customer_products__element-navbar-link-orders"
        className="yourOrder"
      >
        MEUS PEDIDOS
      </span>
    </>
  );
}

HeaderProducts.propTypes = PropTypes.string.isRequired;

export default HeaderProducts;
