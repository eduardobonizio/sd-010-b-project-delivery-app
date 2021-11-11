import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [userData, setUserData] = useState([]);

  const updateUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);
  };

  useEffect(() => {
    updateUserData();
  }, []);

  console.log(userData);
  return (
    <nav>
      <Link to="/customer/products">
        <div data-testid="customer_products__element-navbar-link-products">
          Produtos
        </div>
      </Link>
      <Link to="/customer/orders">
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </div>
      </Link>
      <Link to="/customer/products">
        <div data-testid="customer_products__element-navbar-user-full-name">
          {userData.name}
        </div>
      </Link>
      <Link to="/login" data-testid="customer_products__element-navbar-link-logout">
        <button
          type="button"
          onClick={ () => { localStorage.removeItem('user'); } }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </Link>
    </nav>
  );
}
