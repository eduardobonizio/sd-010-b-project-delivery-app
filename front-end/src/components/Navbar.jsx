import React from 'react';

function Navbar() {
  return (
    <div className="row bg-primary d-flex">
      <div className="col p-4">
        <span className="d-flex justify-content-center">Item 1</span>
      </div>
      <div className="col p-4">
        <span className="d-flex justify-content-center">Item 2</span>
      </div>
      <div className="col p-4">
        <span className="d-flex justify-content-center">Item 3</span>
      </div>
      <div className="col p-4" />
      <div className="col p-4 bg-info">
        <span className="d-flex justify-content-center">USUÁRIO</span>
      </div>
      <div className="col-1 bg-secondary p-4">
        <span className="d-flex justify-content-center">Sair</span>
      </div>
    </div>
  );
}

export default Navbar;
