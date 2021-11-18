import React, { useState } from 'react';
import { useHistory } from 'react-router';

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
        <h3 data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</h3>
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
