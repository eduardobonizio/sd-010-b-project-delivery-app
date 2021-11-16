import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ isCustomer, nameButtonOrder, linkOrder }) {
  const [userData, setUserData] = useState([]);

  const updateUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);
  };

  useEffect(() => {
    updateUserData();
  }, []);

  return (
    <nav>
      { isCustomer
        && (
          <Link to="/customer/products">
            <div data-testid="customer_products__element-navbar-link-products">
              Produtos
            </div>
          </Link>)}

      <Link to={ linkOrder }>
        <div data-testid="customer_products__element-navbar-link-orders">
          {nameButtonOrder}
        </div>
      </Link>

      <div data-testid="customer_products__element-navbar-user-full-name">
        {userData.name}
      </div>

      <Link to="/login" data-testid="customer_products__element-navbar-link-logout">
        <button
          type="button"
          onClick={ () => { localStorage.removeItem('user'); } }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </Link>
    </nav>
  );
}

NavBar.propTypes = {
  isCustomer: PropTypes.bool,
  linkOrder: PropTypes.string,
  nameButtonOrder: PropTypes.string,
}.isRequired;
