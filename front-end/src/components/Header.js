import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderProducts from './HeaderProducts';
import HeaderADM from './HeaderADM';

export default function Header(props) {
  const { pageName, yourOrder, userName } = props;

  function logoutUser() {
    localStorage.clear();
  }

  return (
    <header>
      <nav>
        { yourOrder
          ? <HeaderProducts pageName={ pageName } />
          : <HeaderADM pageName={ pageName } />}
        <span
          data-testid="customer_products__element-navbar-user-full-name"
          className="UserName"
        >
          {userName}
        </span>
        <button
          type="button"
        >
          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            className="logoutPage"
            onClick={ () => logoutUser() }
          >
            Sair
          </Link>
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = PropTypes.string.isRequired;
