import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [nameStorage, setNameStorage] = useState('');

  useEffect(() => {
    const nameLocalStorage = JSON.parse(localStorage.getItem('user'));
    setNameStorage(nameLocalStorage.name);
  }, []);

  return (
    <header>
      <nav>
        <Link
          to="/"
          className="nav1"
        >
          <div data-testid="customer_products__element-navbar-link-products">
            PRODUTOS
          </div>
        </Link>
        <Link
          to="/"
          className="nav2"
        >
          <div data-testid="customer_products__element-navbar-link-orders">
            MEUS PRODUTOS
          </div>
        </Link>
        <Link
          to="/"
          className="nav3"
        >
          <div data-testid="customer_products__element-navbar-user-full-name">
            { nameStorage }
          </div>
        </Link>
        <Link
          to="/"
          className="nav4"
        >
          <div data-testid="customer_products__element-navbar-link-logout">
            Sair
          </div>
        </Link>
      </nav>
    </header>
  );
}

Header.protoType = PropTypes.objectOf({
  name: PropTypes.string,
}).isRequired;

export default Header;
