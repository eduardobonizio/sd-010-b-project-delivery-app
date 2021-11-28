/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Proptypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './css/sideNav.css';

// https://github.com/codeSTACKr/hamburger-animation
function SideNav({ openMenu, setOpenMenu, logout, name }) {
  const openMenuWithWidth = openMenu ? '250px' : '0px';

  return (
    <div id="mySidenav" className="sidenav" style={ { width: openMenuWithWidth } }>
      <button
        type="button"
        className="closebtn clear-button-style"
        onClick={ () => setOpenMenu(!openMenu) }
      >
        &times;
      </button>
      <span>{name}</span>

      <Button
        className="clear-button-style"
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </Button>

    </div>
  );
}

SideNav.propTypes = {
  setOpenMenu: Proptypes.func.isRequired,
  logout: Proptypes.func.isRequired,
  openMenu: Proptypes.bool.isRequired,
  name: Proptypes.string.isRequired,
};

export default SideNav;
