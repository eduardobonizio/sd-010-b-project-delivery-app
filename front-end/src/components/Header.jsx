import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [nameStorage, setNameStorage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const nameLocalStorage = JSON.parse(localStorage.getItem('user'));
    setNameStorage(nameLocalStorage.name);
  }, []);

  const leaveThePage = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link
          to="/login"
          className="nav1"
        >
          <div data-testid="customer_products__element-navbar-link-products">
            PRODUTOS
          </div>
        </Link>
        <Link
          to="/customer/orders"
          className="nav2"
        >
          <div data-testid="customer_products__element-navbar-link-orders">
            MEUS PRODUTOS
          </div>
        </Link>
        <Link
          to="/login"
          className="nav3"
        >
          <div data-testid="customer_products__element-navbar-user-full-name">
            { nameStorage }
          </div>
        </Link>
        <Link
          to="/login"
          className="nav4"
          onClick={ leaveThePage }
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
