import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function Navbar({ item1, item2, user }) {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <div className="row bg-primary d-flex">
      <div className="col p-4">
        <Link
          to="/login"
          className="d-flex justify-content-center"
          data-testid="customer_products__element-navbar-link-products"
        >
          {item1}
        </Link>
        <Link
          to="/login"
          className="d-flex justify-content-center"
          data-testid="customer_products__element-navbar-link-orders"
        >
          {item2}
        </Link>
      </div>
      <div className="col p-4" />
      <div className="col p-4" />
      <div className="col p-4 bg-info">
        <span
          className="d-flex justify-content-center"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user}
        </span>
      </div>
      <div className="col-1 bg-secondary p-4">
        <Link
          to="/login"
          onClick={ handleLogout }
          className="btn btn-primary d-flex justify-content-center"
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
