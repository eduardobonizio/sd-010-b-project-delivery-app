import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './NavBar.scss';

function Navbar({ item1, item2, user }) {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <div className="row d-flex customer-navbar">
      <div className="col inner-customer-navbar">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          {item1}
        </Link>
      </div>
      <div className="col inner-customer-navbar">
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          {item2}
        </Link>
      </div>
      <div className="col inner-customer-navbar" />
      <div className="col inner-customer-navbar">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user}
        </span>
      </div>
      <div className="col-1 inner-customer-navbar">
        <Link
          to="/login"
          onClick={ handleLogout }
          className="d-flex justify-content-center"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
