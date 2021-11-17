import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/"
          className="nav1"
        >
          PRODUTOS
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/"
          className="nav2"
        >
          MEUS PEDIDOS
        </Link>
        <Link
          data-testid="customer_products__element-navbar-user-full-name"
          to="/customer/orders/:id"
          className="nav3"
        >
          CICRANO DA SILVA
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/"
          className="nav4"
        >
          Sair
        </Link>
      </nav>
    </header>
  );
}

export default Header;
