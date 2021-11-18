import React from 'react';
import PropTypes from 'prop-types';

function NavbarVendedor({ name }) {
  console.log('name :', name);
  const { nome } = name;
  console.log('nome :', nome);

  return (
    <nav>
      <span data-testid="customer_products__element-navbar-link-orders">
        PEDIDOS
      </span>
      <span data-testid="customer_products__element-navbar-user-full-name">
        { nome }
      </span>
      <span data-testid="customer_products__element-navbar-link-logout">Sair</span>
    </nav>
  );
}

NavbarVendedor.propTypes = {
  name: PropTypes.shape({
    nome: PropTypes.string,
  }).isRequired,
};

export default NavbarVendedor;
