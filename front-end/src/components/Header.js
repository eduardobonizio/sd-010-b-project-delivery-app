import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { pageName, yourOrder, userName } = props;

  function logoutUser() {
    localStorage.clear();
  }

  function structure(status) {
    if (status === 'MEUS PEDIDOS') {
      return (
        <>
          <span
            data-testid="customer_products__element-navbar-link-products"
          >
            {pageName}
          </span>
          <span
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </span>
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}
          </span>
          <button
            type="button"
          >
            <Link
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => logoutUser() }
            >
              Sair
            </Link>
          </button>
        </>
      );
    }
  }
  return (
    <header>
      <nav>

        {structure(yourOrder)}

      </nav>

    </header>
  );
}

Header.propTypes = PropTypes.string.isRequired;
