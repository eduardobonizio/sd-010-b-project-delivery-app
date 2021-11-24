import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const { name } = props;
  const { role } = userInfo;

  const clearStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
  };

  const renderCustomer = () => (
    <div className="nav-button-div">
      <div>
        <button
          className="nav-button"
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </button>
      </div>
      <div>
        <Link to="/customer/orders">
          <button
            className="nav-button"
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </button>
        </Link>
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div>
      <div>
        <button
          className="nav-button"
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Gerenciar Usuários
        </button>
      </div>
    </div>
  );

  const renderSeller = () => (
    <div>
      <div>
        <button
          className="nav-button"
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Pedidos
        </button>
      </div>
    </div>
  );

  const verifyUserRole = () => {
    if (role === 'customer') return renderCustomer();
    if (role === 'administrator') return renderAdmin();
    if (role === 'seller') return renderSeller();
  };

  return (
    <nav className="main-navbar-div">
      { verifyUserRole() }
      <div className="name-exit-div">
        <div className="right-div">
          <p
            data-testid="customer_products__element-navbar-user-full-name"
            className="nav-client"
          >
            { `🧑 ${name}` }
          </p>
        </div>
        <div className="right-div">
          <Link
            className="nav-exit"
            data-testid="customer_products__element-navbar-link-logout"
            to="/login"
            onClick={ clearStorage }
          >
            Sair

          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
