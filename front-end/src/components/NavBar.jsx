import React from 'react';

import '../styles/navBar.css';

export default function NavBar() {
  return (
    <main className="navbar__container">
      <section
        className="navbar__container__products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </section>
      <section
        className="navbar__container__orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </section>
      <section
        className="navbar__container__user"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Cicrano da Silva
      </section>
      <section
        className="navbar__container__logout"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </section>
    </main>
  );
}
