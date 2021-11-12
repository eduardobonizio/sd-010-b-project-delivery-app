import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { name, products, orders } = props;

  const clearStorage = () => {
    localStorage.removeItem('user');
  };

  return (
    <nav>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          { products }
        </button>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          { orders }
        </button>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">{ name }</p>
      </div>
      <div data-testid="customer_products__element-navbar-link-logout">
        <Link to="/login" onClick={ clearStorage }>Sair</Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  products: PropTypes.string.isRequired,
  orders: PropTypes.string.isRequired,
};

export default Navbar;
