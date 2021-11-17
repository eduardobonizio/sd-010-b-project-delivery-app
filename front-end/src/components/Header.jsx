import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const renderHeader = () => (
    <header className="header">
      <nav className="header-nav-bar1">
        <section>
          <Link to="/customer/products">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-products"
              className="btn-navbar btn-1"
            >
              PRODUTOS

            </button>
          </Link>
          <Link to="/customer/orders">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
              className="btn-navbar btn-2"

            >
              MEUS PEDIDOS

            </button>
          </Link>
        </section>
      </nav>
      <nav className="header-nav-bar2">
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className="btn-navbar btn-3"

        >
          Ciclano da Silva
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          className="btn-navbar btn-4"

        >
          Sair
        </button>
      </nav>
    </header>
  );
  return (
    <div className="div-main-header">
      { renderHeader()}
    </div>
  );
};

export default Header;
