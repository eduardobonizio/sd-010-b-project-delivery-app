import React, { useContext } from 'react';
import { Context } from '../context/ContextGlobal';
import { Nav } from 'react-bootstrap';
import '../styles/NavBar.css';

function NavBar() {
  const { nameRegister } = useContext(Context);

  return (
    <div>
      <Nav defaultActiveKey="/products" as="ul" className="navBar__container">
        <div className="navBar-left">
          <Nav.Item as="li" data-testid="customer_products__element-navbar-link-products">
            <Nav.Link eventKey="link-0">PRODUTOS</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" data-testid="customer_products__element-navbar-link-orders">
            <Nav.Link eventKey="link-1">MEUS PEDIDOS</Nav.Link>
          </Nav.Item>
        </div>
        <div className="navBar-right">
          <Nav.Item as="li" data-testid="customer_products__element-navbar-user-full-name">
            <Nav.Link eventKey="link-2" disabled>CLIENTE: JOÃO DA SILVA</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" data-testid="customer_products__element-navbar-link-logout">
            <Nav.Link 
              href="/login"
              onClick={ () => localStorage.clear() }
            >
              SAIR
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default NavBar;
