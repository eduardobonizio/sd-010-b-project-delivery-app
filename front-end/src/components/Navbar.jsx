import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();
  const [user] = useState(() => localStorage.getItem('user'));
  let currUser = '';
  if (user) currUser = JSON.parse(user);

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="navbar">
      <div className="prods-buys">
        <h3 data-testid="customer_products__element-navbar-link-products">PRODUTOS</h3>
        <Link
          to="orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="name-logout">
        <h3 data-testid="customer_products__element-navbar-user-full-name">
          {currUser.name}
        </h3>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ handleLogout }
        >
          Logout
        </button>

      </div>
    </div>
  );
}
