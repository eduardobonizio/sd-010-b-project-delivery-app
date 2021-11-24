import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import '../styles/navBar.css';

function NavBar(props) {
  const { order, pedidos } = props;
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('user'));

  function renderPedidos() {
    return (
      <section
        className="navbar__container__orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </section>
    );
  }

  function clearAndLogout() {
    localStorage.removeItem('user');
    history.push('/');
  }

  return (
    <main className="navbar__container">
      <section className="navbar__left__container">
        <section
          className="navbar__container__products clicked__menu"
          data-testid="customer_products__element-navbar-link-products"
        >
          { order }
        </section>
        {pedidos ? renderPedidos() : null}
      </section>
      <section className="navbar__right__container">
        <section
          className="navbar__container__user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name ? user.name : 'Cicrano da Silva'}
        </section>
        <section
          className="navbar__container__logout"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => { clearAndLogout(); } }
          aria-hidden="true"
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
