import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Proptypes from 'prop-types';
import CartTotal from './CartTotal';

function TopBar({ cartTotal }) {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const onSellerPage = history.location.pathname.includes('/seller');

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0 flex-row align-items-center"
          navbarScroll
        >
          <Navbar.Brand>
            <Image
              src="/images/logo.svg"
              width="50"
              height="40"
              alt="Disk Birita logo"
            />
          </Navbar.Brand>

          <Nav.Link
            href={ onSellerPage ? '/seller/orders' : '/customer/products' }
            data-testid={ `customer_products__element-navbar-link-${
              onSellerPage ? 'orders' : 'products'
            }` }
            style={ { marginRight: '10px' } }
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container
            className="d-flex justify-content-end align-items-center"
          >
            <Navbar.Text
              data-testid="customer_products__element-navbar-user-full-name"
              href="/customer/orders"
              style={ { marginRight: '10px' } }
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
            <CartTotal cartTotal={ cartTotal } />
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

TopBar.propTypes = {
  cartTotal: Proptypes.number.isRequired,
};

export default TopBar;
