import React from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/NavBar.css';

function NavBar3() {
  return (
    <div>
      <Nav defaultActiveKey="/products" as="ul" className="navBar__container">
        <div className="navBar-left">
          <Nav.Item as="li">
            <Nav.Link eventKey="link-0">GERENCIAR USUÁRIOS</Nav.Link>
          </Nav.Item>
        </div>
        <div className="navBar-right">
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" disabled>Trybeer Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
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

export default NavBar3;
