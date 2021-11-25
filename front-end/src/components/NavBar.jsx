import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const { name } = user;
  const { location } = history;

  const logout = () => {
    history.push({ pathname: '/' });
    localStorage.clear();
  };

  const renderMeusPedidos = (path) => {
    if (location.pathname.includes(path)) {
      return (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </button>
      );
    }
  };

  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      { renderMeusPedidos('/customer') }
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        Sair
      </button>
    </header>
  );
}

export default NavBar;
