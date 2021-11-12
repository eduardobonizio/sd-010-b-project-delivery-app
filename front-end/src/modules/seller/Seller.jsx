import React from 'react';
import NavBar from '../../components/Navbar';
import Orders from './components/Orders';

function Seller() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <NavBar
        item1="Pedidos"
        user={ user.name }
      />
      <div>
        <Orders />
        <Orders />
        <Orders />
      </div>
    </div>
  );
}

export default Seller;
