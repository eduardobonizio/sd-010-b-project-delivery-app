import React from 'react';
// import MainDiv from '../styles/header.styles';
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
          >
            PRODUTOS

          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS

          </button>
        </section>
      </nav>
      <nav className="header-nav-bar2">
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          NOME DA PESSOA
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
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
