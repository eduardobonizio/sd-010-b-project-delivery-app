/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Proptypes from 'prop-types';
import CartTotal from './CartTotal';
import HamburgerButton from './HamburgerButton';
import SideNav from './SideNav';
import useWindowSize from '../../helpers/getWindowSize';

function TopBar({ cartTotal }) {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const onSellerPage = history.location.pathname.includes('/seller');
  const [openMenu, setOpenMenu] = useState(false);
  const { width } = useWindowSize();

  const showMobileMenuWidth = 800;

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Navbar sticky="top" bg="light" expand="md" style={ { flexWrap: 'nowrap' } }>
      <SideNav
        setOpenMenu={ setOpenMenu }
        openMenu={ openMenu }
        logout={ logout }
        name={ name }
      />
      <Container
        className="d-flex"
        style={ { padding: 0 } }
      >
        <Container className="d-flex" style={ { padding: 0 } }>
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
          {width >= showMobileMenuWidth
          && (
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
            </Container>)}
          {!onSellerPage && <CartTotal cartTotal={ cartTotal } />}
          {width < showMobileMenuWidth
        && <HamburgerButton setOpenMenu={ setOpenMenu } openMenu={ openMenu } />}
        </Container>
      </Container>
    </Navbar>
  );
}

TopBar.propTypes = {
  cartTotal: Proptypes.number,
};

TopBar.defaultProps = {
  cartTotal: 0,
};

export default TopBar;
