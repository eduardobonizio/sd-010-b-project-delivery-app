import React from 'react';

const NavbarClient = () => (
  <nav className="client-navbar">
    <div>
      <ul>
        <li>
          <a
            data-testid="customer_products__element-navbar-link-products"
            href="/about"
          >
            Produtos
          </a>
        </li>
        <li>
          <a
            data-testid="customer_products__element-navbar-link-orders"
            href="/contact"
          >
            Meus Pedidos
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <a
            data-testid="customer_products__element-navbar-user-full-name"
            href="/about"
          >
            João Herculano
          </a>
        </li>
        <li>
          <a
            data-testid="customer_products__element-navbar-link-logout"
            href="/contact"
          >
            Sair
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarClient;
