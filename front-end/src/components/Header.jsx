import React from 'react';
import '../styles/header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const checkHeaderPath = () => {
    if (location.pathname.includes('customer')) {
      return (
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
      );
    }

    if (location.pathname.includes('admin')) {
      return (
        <section>
          {/* <Link to="/customer/orders"> */}
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            className="btn-navbar btn-2"
          >
            GERENCIAR USUÁRIOS

          </button>
          {/* </Link> */}
        </section>
      );
    }
    return (
      <section>
        {/* <Link to="/customer/orders"> */}
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          className="btn-navbar btn-2"
        >
          PEDIDOS

        </button>
        {/* </Link> */}
      </section>
    );
  };
  const renderHeader = () => (
    <header className="header">
      <nav className="header-nav-bar1">
        { checkHeaderPath()}
      </nav>
      <nav className="header-nav-bar2">
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className="btn-navbar btn-3"

        >
          { JSON.parse(localStorage.getItem('user')).name }
        </button>
        <Link to="/login">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            className="btn-navbar btn-4"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
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
