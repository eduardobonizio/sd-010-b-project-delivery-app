import React from 'react';

function Navbar() {
  return (
    <nav>
      <span data-testid="customer_products__element-navbar-link-products">
        Produtos
      </span>
      <span data-testid="customer_products__element-navbar-link-orders">
        Meus Pedidos
      </span>
      <span data-testid="customer_products__element-navbar-user-full-name">
        Nome do usuário
      </span>
      <span data-testid="customer_products__element-navbar-link-logout">Sair</span>
    </nav>
  );
}

export default Navbar;
