import React, { useState, useEffect } from 'react';

const NavbarClient = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUserData(data);
  }, []);
  return (
    <nav className="client-navbar">
      <div>
        <ul>
          <li>
            <a
              data-testid="customer_products__element-navbar-link-products"
              href="/about"
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              data-testid="customer_products__element-navbar-link-orders"
              href="/contact"
            >
              Meus Pedidos
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              data-testid="customer_products__element-navbar-user-full-name"
              href="/about"
            >
              { userData.name }
            </a>
          </li>
          <li>
            <a
              onClick={ () => localStorage.clear() }
              data-testid="customer_products__element-navbar-link-logout"
              href="/login"
            >
              Sair
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarClient;
