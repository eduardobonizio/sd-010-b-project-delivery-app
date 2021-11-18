import React from 'react';
// import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

function NavBar() {
  const { Header } = Layout;
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
          MEUS PEDIDOS

        </Menu.Item>
        <Menu.Item
          key="usuario"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          USERNAME

        </Menu.Item>
        <Menu.Item
          key="logout"
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR

        </Menu.Item>
      </Menu>
    </Header>
  );
}
export default NavBar;
