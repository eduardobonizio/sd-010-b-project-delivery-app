import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const nome = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <ul>
        <div>
          <Link to="/customer/products">
            <li data-testid="customer_products__element-navbar-link-products">
              PRODUTOS
            </li>
          </Link>
          <Link to="/customer/orders">
            <li data-testid="customer_products__element-navbar-link-orders">
              MEUS PEDIDOS
            </li>
          </Link>
        </div>
        <div>
          <Link to="/customer/products">
            <li data-testid="customer_products__element-navbar-user-full-name">
              { nome }
            </li>
          </Link>
          <Link to="/login">
            <button
              type="button"
              onClick={ () => localStorage.clear() }
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
