/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
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
    <nav className="flex justify-between items-center text-xl fixed bg-white mb-15 max-w-full min-w-full font-semibold">
      <div className="relative flex items-center justify-between mx-10 h-16">
        <img className="cursor-pointer w-52" src="/logo.svg" alt="Imagem da logo" />
      </div>
      { isCustomer
        && (
          <Link to="/customer/products">
            <div className="bg-yellow-color mx-10 px-10 py-1 rounded-md" data-testid="customer_products__element-navbar-link-products">
              Produtos
            </div>
          </Link>)}

      <Link to={ linkOrder }>
        <div className="bg-yellow-color ml-10 px-10 py-1 rounded-md" data-testid="customer_products__element-navbar-link-orders">
          {nameButtonOrder}
        </div>
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
        className="flex items-center mr-5 ml-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-2 text-yellow-color" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        {userData.name}
      </div>

      <Link to="/login" data-testid="customer_products__element-navbar-link-logout">
        <button
          type="button"
          onClick={ () => { localStorage.removeItem('user'); } }
          data-testid="customer_products__element-navbar-link-logout"
          className="rounded-md bg-dark-color text-yellow-color mx-10 px-5 py-1"
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
