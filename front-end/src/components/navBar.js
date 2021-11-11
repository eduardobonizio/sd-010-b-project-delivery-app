import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/customer/products">
        <div data-testid="customer_products__element-navbar-link-products">
          Produtos
        </div>
      </Link>
      <Link to="/customer/orders">
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </div>
      </Link>
      <Link to="/customer/products">
        <div data-testid="customer_products__element-navbar-user-full-name">
          name_from_local_storage
        </div>
      </Link>
      <Link to="/login">
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </Link>
    </nav>
  );
}
