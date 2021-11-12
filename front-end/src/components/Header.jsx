import React from 'react';
import '../styles/header.css';

const Header = () => {
  console.log('pato');

  const renderHeader = () => (
    <header className="header">
      <nav className="header-nav-bar1">
        <section>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            className="btn-navbar"
          >
            PRODUTOS

          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            className="btn-navbar"

          >
            MEUS PEDIDOS

          </button>
        </section>
      </nav>
      <nav className="header-nav-bar2">
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className="btn-navbar"

        >
          NOME DA PESSOA
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          className="btn-navbar"

        >
          SAIR
        </button>
      </nav>
    </header>
  );
  return (
    <div>
      { renderHeader()}
    </div>
  );
};

export default Header;
