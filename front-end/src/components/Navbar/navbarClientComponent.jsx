import React, { useState, useEffect } from 'react';

const NavbarClient = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    setUserData(data);
  }, []);

  const menuTitle = () => {
    if (userData.role === 'customer') return 'Meus Pedidos';
    if (userData.role === 'seller') return 'Pedidos';
    return 'Gerenciar usuários';
  };

  return (
    <nav className="client-navbar">
      <div>
        <ul>
          {userData.role === 'customer' && (
            <li>
              <a
                data-testid="customer_products__element-navbar-link-products"
                href="/about"
              >
                Produtos
              </a>
            </li>
          )}
          <li>
            <a
              data-testid="customer_products__element-navbar-link-orders"
              href="/contact"
            >
              { userData.name && menuTitle() }
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
