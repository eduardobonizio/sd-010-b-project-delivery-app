import { React, useEffect, useState } from 'react';

import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function NavBar() {
  const { Header } = Layout;
  const [local, setLocal] = useState([]);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    const getStorage = localStorage.getItem('user');
    const userName = JSON.parse(getStorage);
    setLocal(userName);
  }, []);

  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');

    setLogout(true);
  };

  if (logout) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <Header style={ { position: 'fixed', zIndex: 1, width: '100%' } }>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] }>
        <Menu.Item
          key="produtos"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS

        </Menu.Item>
        <Menu.Item
          key="pedidos"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <Link to="/customer/orders">
            MEUS PEDIDOS
          </Link>

        </Menu.Item>
        <Menu.Item
          key="usuario"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {
            local.name
          }

        </Menu.Item>
        <Menu.Item
          key="logout"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logOut() }
        >
          SAIR

        </Menu.Item>
      </Menu>
    </Header>
  );
}
export default NavBar;
