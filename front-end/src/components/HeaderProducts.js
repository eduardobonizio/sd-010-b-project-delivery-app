import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';


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
      <span
        data-testid="customer_products__element-navbar-link-orders"
        className="yourOrder"
        onClick={() => {history.push('/customer/orders')}}
      >
        MEUS PEDIDOS
      </span>
    </>
  );
}

HeaderProducts.propTypes = PropTypes.string.isRequired;

export default HeaderProducts;
