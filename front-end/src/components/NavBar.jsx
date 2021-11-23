import React from 'react';

function NavBar() {
  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Cicrano da Silva
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}

export default NavBar;
