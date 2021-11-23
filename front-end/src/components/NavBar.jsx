import React from 'react';
import PropTypes from 'prop-types';

import '../styles/navBar.css';

function NavBar(props) {
  const { products, order } = props;

  function sectionProduct() {
    return (
      <section
        className="navbar__container__products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </section>);
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <main className="navbar__container">
      <section className="navbar__left__container">

        { products
          ? sectionProduct() : null }
        <section
          className="navbar__container__orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          { order }
        </section>
      </section>
      <section className="navbar__right__container">
        <section
          className="navbar__container__user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
        </section>
        <section
          className="navbar__container__logout"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </section>
      </section>
    </main>
  );
}

NavBar.propTypes = {
  products: PropTypes.bool,
  order: PropTypes.string,
}.isRequired;

export default NavBar;
