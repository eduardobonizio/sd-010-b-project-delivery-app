/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Proptypes from 'prop-types';
import './css/hamburgerButton.css';

// https://github.com/codeSTACKr/hamburger-animation
function HamburgerButton({ openMenu, setOpenMenu }) {
  return (
    <div
      className={ `${openMenu && 'open'} menu-btn` }
      onClick={ () => setOpenMenu(!openMenu) }
    >
      <div className="menu-btn__burger" />
    </div>
  );
}

HamburgerButton.propTypes = {
  setOpenMenu: Proptypes.func.isRequired,
  openMenu: Proptypes.bool.isRequired,
};

export default HamburgerButton;
