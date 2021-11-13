import React from 'react';

import NavBar from '../../../components/Navbar';
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
        <Orders
          id="1"
          status="pendente"
          date="20/05/2021"
          price="29,60"
          address="Rua piripiri, 158"
        />
      </div>
    </div>
  );
}

export default Seller;
