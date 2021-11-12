import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../provider/Context';

function NavBar() {
  const {
    User,
    // setUser
  } = useContext(Context);
  console.log(User, 'navbar');

  return (
    <nav className="navbar">
      <Link to="/customer/products">
        <button
          type="button"
          className="exitButton"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTO
        </button>
      </Link>
      <Link to="/customer/meusPedidos">
        <button
          type="button"
          className="exitButton"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </button>
      </Link>
      <Link to="/page404">
        <button
          type="button"
          className="exitButton"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {User.name}
        </button>
      </Link>
      <Link to="/customer/checkout">
        <button
          type="button"
          className="exitButton"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </button>
      </Link>
      <Link to="/login">
        <button
          type="button"
          className="exitButton"
        >
          atalho p login
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
