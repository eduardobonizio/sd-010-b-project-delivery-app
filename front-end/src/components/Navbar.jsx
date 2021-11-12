import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ item1, item2, item3, user }) {
  return (
    <div className="row bg-primary d-flex">
      <div className="col p-4">
        <span className="d-flex justify-content-center">{item1}</span>
      </div>
      <div className="col p-4">
        <span className="d-flex justify-content-center">{item2}</span>
      </div>
      <div className="col p-4">
        <span className="d-flex justify-content-center">{item3}</span>
      </div>
      <div className="col p-4" />
      <div className="col p-4 bg-info">
        <span className="d-flex justify-content-center">{user}</span>
      </div>
      <div className="col-1 bg-secondary p-4">
        <span className="d-flex justify-content-center">Sair</span>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
