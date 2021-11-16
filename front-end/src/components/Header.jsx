import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
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
            CICRANO DA SILVA
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

export default Header;
