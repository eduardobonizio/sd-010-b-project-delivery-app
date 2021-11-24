import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function HeaderProducts(props) {
  const history = useHistory();
  const { pageName } = props;
  return (
    <>
      <span
        data-testid="customer_products__element-navbar-link-products"
        className="pageName"
      >
        {pageName}
      </span>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        className="yourOrder"
        to = "/customer/orders"
      >
        MEUS PEDIDOS
      </Link>
    </>
  );
}

HeaderProducts.propTypes = PropTypes.string.isRequired;

export default HeaderProducts;
