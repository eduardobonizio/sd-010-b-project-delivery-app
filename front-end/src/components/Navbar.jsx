import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user')) || '';

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="navbar">
      <div className="prods-buys">
        <h3 data-testid="customer_products__element-navbar-link-products">PRODUTOS</h3>
        <Link
          to={ user.role === 'customer' ? '/customer/orders' : '/seller/orders' }
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="name-logout">
        <h3 data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
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
