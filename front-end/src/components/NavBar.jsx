import React from 'react';

import '../styles/navBar.css';

export default function NavBar() {
  return (
    <main className="navbar__container">
      <section className="navbar__container__products">Produtos</section>
      <section className="navbar__container__orders">Meus Pedidos</section>
      <section className="navbar__container__user">Cicrano da Silva</section>
      <section className="navbar__container__logout">Sair</section>
    </main>
  );
}
