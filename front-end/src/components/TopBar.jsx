/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';

function TopBar(props) {
  const { name } = props;
  const history = useHistory();
  const onSellerPage = history.location.pathname.includes('/seller');

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          <Image
            src="/images/logo.svg"
            width="50"
            height="40"
            alt="Disk Birita logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link
              href={ onSellerPage ? '/seller/orders' : '/customer/products' }
              data-testid={ `customer_products__element-navbar-link-${
                onSellerPage ? 'orders' : 'products'
              }` }
            >
              { onSellerPage ? 'ORDERS' : 'PRODUTOS' }
            </Nav.Link>
            {!onSellerPage
              && (
                <Nav.Link
                  href="/customer/orders"
                  data-testid="customer_products__element-navbar-link-orders"
                >
                  PEDIDOS
                </Nav.Link>
              )}
          </Nav>
          <Navbar.Text
            data-testid="customer_products__element-navbar-user-full-name"
            href="/customer/orders"
          >
            { name }
          </Navbar.Text>
          <Button
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
          >
            Sair
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

TopBar.propTypes = {
  name: Proptypes.string.isRequired,
};

export default TopBar;
