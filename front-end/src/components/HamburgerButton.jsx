/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './css/hamburgerButton.css';

// https://github.com/codeSTACKr/hamburger-animation
function HamburgerButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={ `${menuOpen && 'open'} menu-btn` }
      onClick={ () => setMenuOpen(!menuOpen) }
    >
      <div className="menu-btn__burger" />
    </div>
  );
}

export default HamburgerButton;
