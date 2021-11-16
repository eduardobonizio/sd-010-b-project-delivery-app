import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import Proptypes from 'prop-types';

function TopBar(props) {
  const { name } = props;

  return (
    <Navbar variant="dark" fixed="top" className="navbar">
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Brand className="logo">
          <Image
            src="/images/logo.svg"
            width="50"
            height="40"
            alt="Disk Birita logo"
          />
        </Navbar.Brand>
        <Navbar.Text
          variant="light"
          className="products align-items-center"
          data-testid="customer_products__element-navbar-link-products"
          href="/customer/products"
        >
          PRODUTOS
        </Navbar.Text>
        <Navbar.Text
          className="orders align-items-center"
          data-testid="customer_products__element-navbar-link-orders"
          href="/customer/orders"
        >
          MEUS PEDIDOS
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            className="name align-items-center"
            data-testid="customer_products__element-navbar-user-full-name"
            href="/customer/orders"
          >
            { name }
          </Navbar.Text>
          <Navbar.Text
            className="exit align-items-center"
            data-testid="customer_products__element-navbar-user-full-name"
            href="/customer/orders"
          >
            Sair
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

TopBar.propTypes = {
  name: Proptypes.string.isRequired,
};

export default TopBar;
