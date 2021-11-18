import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          PRODUTOS
        </Link>
      </li>
      <li>
        <Link
          data-testid="customer_products__element-navbar-link-order"
          to="customer/orders"
        >
          MEUS PEDIDOS
        </Link>
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        USERNAME
      </li>
      <li>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
        >
          SAIR
        </Link>
      </li>
    </ul>
  </nav>

);

export default NavBar;
